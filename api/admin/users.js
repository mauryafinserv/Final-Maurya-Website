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
      .select('id, arn, full_name, firm_name, email, mobile, euin, status, plan, posts_used, images_used, posts_limit, images_limit, created_at, last_login, cycle_start')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ users: data });
  }

  if (req.method === 'POST') {
    const { arn, status, plan, posts_limit, images_limit, reset_cycle } = req.body;
    if (!arn) return res.status(400).json({ error: 'ARN is required' });

    const updates = {};

    // ── Reset cycle ──────────────────────────────────────────────────
    if (reset_cycle) {
      updates.posts_used = 0;
      updates.images_used = 0;
      updates.cycle_start = new Date().toISOString();

      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('arn', arn)
        .select('arn, full_name, posts_used, images_used, cycle_start')
        .single();

      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ message: `Cycle reset for ${arn}`, user: data });
    }

    // ── Status update ────────────────────────────────────────────────
    if (status) {
      if (!['active', 'pending', 'blocked'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }
      updates.status = status;

      // Set cycle_start when approving, only if not already set
      if (status === 'active') {
        const { data: existing } = await supabase
          .from('users')
          .select('cycle_start')
          .eq('arn', arn)
          .single();
        if (!existing?.cycle_start) {
          updates.cycle_start = new Date().toISOString();
        }
      }
    }

    // ── Plan update ──────────────────────────────────────────────────
    if (plan) {
      if (!['trial', 'pro'].includes(plan)) {
        return res.status(400).json({ error: 'Invalid plan' });
      }
      updates.plan = plan;
      if (plan === 'pro') {
        updates.posts_limit = 20;
        updates.images_limit = 20;
      } else if (plan === 'trial') {
        updates.posts_limit = 3;
        updates.images_limit = 2;
      }
    }

    // ── Custom limits ────────────────────────────────────────────────
    if (posts_limit !== undefined) updates.posts_limit = posts_limit;
    if (images_limit !== undefined) updates.images_limit = images_limit;

    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('arn', arn)
      .select('arn, full_name, status, plan, posts_limit, images_limit, cycle_start')
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: `User ${arn} updated`, user: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}