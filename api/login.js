import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { arn, password } = req.body;

  if (!arn || !password) {
    return res.status(400).json({ error: 'ARN and password are required' });
  }

  try {
    // Find user by ARN
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('arn', arn)
      .single();

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid ARN or password' });
    }

    // Check if account is active
    if (!user.is_active) {
      return res.status(401).json({ error: 'Account is disabled. Contact support.' });
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid ARN or password' });
    }

    // Update last login
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('arn', arn);

    // Generate JWT
    const token = jwt.sign(
      { arn: user.arn, id: user.id, firm_name: user.firm_name, full_name: user.full_name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      token,
      user: {
        arn: user.arn,
        full_name: user.full_name,
        firm_name: user.firm_name,
        email: user.email,
        posts_used: user.posts_used,
        images_used: user.images_used,
        logo_url: user.logo_url,
      }
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
