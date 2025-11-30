Detroit Shock Fan Segmentation & Revenue Analytics

📌 Project Overview
This project analyzes fan behavior for the Detroit Shock using SQL-transformed data and Power BI visualizations. 
The goal was to segment fans and evaluate ticketing, revenue, merchandising, and digital engagement patterns to support data-driven 
marketing and CRM strategy decisions.

📊 Data Sources
The project uses mock but enterprise-structured CSV datasets representing:
- Fan demographics
- Engagement behavior (email, app usage, channels)
- Ticket purchases
- Merchandise purchases
- These datasets were ingested into SQL for modeling and segmentation prior to visualization in Power BI.

🛠 Tools & Technologies
1. SQL – Data joins, transformations, and segmentation logic
2. Power BI – Data modeling, DAX measures, dashboard design
3. DAX – Fan-level de-duplication, averages, KPIs
4. Power Query – Data cleaning and semantic adjustments

🧠 Data Modeling & Segmentation
- Fans were segmented using behavioral and demographic logic, including:
- Ticket attendance and spend
- Merchandise purchasing behavior
- Digital engagement (email, app usage)
- Age-based grouping
- Lapsed activity indicators

*Because fans may belong to multiple segments, all metrics were calculated at the fan level using de-duplication logic to ensure accurate aggregation.*

📈 Dashboard Pages
The Power BI report includes four pages:

1. Fan Segmentation Overview
- High-level breakdown of fan segments and demographic distribution.

2. Ticket & Merch Behavior
- Comparison of average ticket spend, games attended, and merchandise spend by segment.

3. Ticketing & Revenue Analysis
- Analysis of total ticket revenue, pricing behavior, and attendance distribution.

4. Engagement & Digital Behavior
- Email performance, app usage, and preferred communication channels by segment.

📌 Notes & Assumptions
- Data is synthetic and designed to mirror real-world enterprise datasets
- Metrics are calculated at the fan level to avoid double counting
- Dashboard structure separates executive overview from operational analysis

👤 Author
Taya Dailey
Business Intelligence & Analytics Portfolio Project