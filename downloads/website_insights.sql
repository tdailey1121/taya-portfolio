
-- 1. Conversion Rate by Campaign
SELECT campaign,
       COUNT(*) AS total_visits,
       SUM(converted) AS conversions,
       ROUND(100.0 * SUM(converted) / COUNT(*), 2) AS conversion_rate
FROM website_visits
GROUP BY campaign
ORDER BY conversion_rate DESC;

-- 2. Average Time on Site by Device
SELECT device,
       ROUND(AVG(time_on_site), 2) AS avg_time_on_site
FROM website_visits
GROUP BY device
ORDER BY avg_time_on_site DESC;

-- 3. Pages Viewed vs Conversion
SELECT 
  CASE 
    WHEN pages_viewed < 5 THEN 'Low (1-4)'
    WHEN pages_viewed BETWEEN 5 AND 9 THEN 'Medium (5-9)'
    ELSE 'High (10+)' 
  END AS view_category,
  COUNT(*) AS total_visits,
  SUM(converted) AS conversions,
  ROUND(100.0 * SUM(converted) / COUNT(*), 2) AS conversion_rate
FROM website_visits
GROUP BY view_category
ORDER BY conversion_rate DESC;
