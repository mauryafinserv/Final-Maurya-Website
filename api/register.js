import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { arn, full_name, firm_name, email, mobile, password, euin } = req.body;

  if (!arn || !full_name || !firm_name || !email || !mobile || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!arn.startsWith('ARN-')) {
    return res.status(400).json({ error: 'ARN must start with ARN- (e.g. ARN-112272)' });
  }

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }

  try {
    const password_hash = await bcrypt.hash(password, 12);

    const { data, error } = await supabase
      .from('users')
      .insert([{ arn, full_name, firm_name, email, mobile, password_hash, euin }])
      .select('id, arn, full_name, firm_name, email')
      .single();

    if (error) {
      if (error.code === '23505') {
        return res.status(400).json({ error: 'ARN, email or mobile already registered' });
      }
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ message: 'Account created successfully', user: data });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
