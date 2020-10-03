
ALTER TABLE `contestants` ADD INDEX idx_cteam_id (`team_id`);
ALTER TABLE `teams` ADD INDEX idx_withdrawn (`withdrawn`, `created_at` DESC);
ALTER TABLE `benchmark_jobs` ADD INDEX idx_score_raw_deduction(`score_raw`, `score_deduction`);
ALTER TABLE `benchmark_jobs` ADD INDEX idx_bteam_id (`team_id`);
ALTER TABLE `notifications` ADD INDEX idx_notifications (`contestant_id`, `read`);
