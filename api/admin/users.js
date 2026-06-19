import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const ADMIN_SECRET = process.env.ADMIN_SECRET;

export default async function handler(req, res) {
  const adminKey = req.headers['x-admin-key'];
  if (!adminKey || adminKey !== ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('users')
      .select('id, arn, full_name, firm_name, email, mobile, euin, status, posts_used, images_used, created_at, last_login')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ users: data });
  }

  if (req.method === 'POST') {
    const { arn, status } = req.body;

    if (!arn || !status) {
      return res.status(400).json({ error: 'ARN and status are required' });
    }

    if (!['active', 'pending', 'blocked'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const { data, error } = await supabase
      .from('users')
      .update({ status })
      .eq('arn', arn)
      .select('arn, full_name, status')
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: `User ${arn} updated to ${status}`, user: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
