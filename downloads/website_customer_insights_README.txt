Website Customer Insights – SQL Project
=======================================

Project Overview
----------------
This project demonstrates the use of SQL to analyze customer behavior from website visit data. 
A synthetic SQLite database of 500 user records was created to simulate real-world visitor traffic 
and interactions. The focus is on extracting business insights such as conversion trends, user engagement, 
and marketing channel effectiveness.

Tools Used
----------
- SQLite (database creation & querying)
- SQL (data aggregation & analysis)
- DB Browser for SQLite or SQLite CLI for running queries

Dataset Structure
-----------------
Each record includes:
- user_id: Unique visitor ID
- visit_date: Date of the visit
- device: Device used (Desktop, Mobile, Tablet)
- campaign: Marketing source (e.g., Email, Social Media)
- pages_viewed: Number of pages visited
- time_on_site: Total minutes on the site
- converted: Binary (1 = converted, 0 = not)

Included Files
--------------
- website_analytics.db   → SQLite database with all records
- website_insights.sql   → SQL queries to extract insights
- website_customer_insights_README.txt   → This file

Key SQL Insights
----------------
1. Conversion Rate by Campaign
   > Shows which marketing channels are performing best

2. Average Time on Site by Device
   > Compares engagement by device type

3. Pages Viewed vs. Conversion Rate
   > Categorizes visitor behavior into Low, Medium, and High engagement groups

How to Use
----------
1. Open website_analytics.db using DB Browser for SQLite
2. Load and run the queries from website_insights.sql
3. Review and interpret results for business insights

License
-------
This project is intended for educational and portfolio purposes. Feel free to modify or expand it.
