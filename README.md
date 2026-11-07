# Taya Dailey – BI & Analytics Portfolio

**Live site:** https://tdailey1121.github.io/taya-portfolio/

I turn messy data into dashboards and process fixes people actually use. The site is built around that idea: it opens on a messy table that cleans itself step by step, Power Query style, then walks through my work as a series of applied steps.

Hand-built in HTML, CSS and JavaScript, with AI assistance, and hosted on GitHub Pages. No frameworks or build tools are needed to run it.

## Projects

| Project | Domain | Tools |
|---|---|---|
| [Track Record](work/track-record.html) | My own Apple Music history, 2018–2026 | Python, iTunes API, star schema, A/B comparison (AI-assisted) |
| [U.S. Healthcare Performance & Cost](work/healthcare.html) | Healthcare | Power BI, Power Query, DAX |
| [Detroit Shock Fan Lifecycle & CRM](work/shock-crm.html) | Sports CRM | Power BI, DAX, Power Query |
| [Detroit Shock Fan Segmentation & Revenue](work/shock-segmentation.html) | Sports analytics | SQL, Power Query, DAX, Power BI |
| [Credit Card Retention & Churn](work/credit-card-churn.html) | Consumer finance | Power BI, Power Query, DAX |
| [Hillman College Student Success & Early Alert](work/hillman-early-alert.html) | Higher education | Python, SQL (SQLite), Power BI |
| [Used Car Sales Performance](work/used-car-sales.html) | Auto sales | Power BI, Power Query, DAX |
| [Customer Experience KPIs](work/cx-kpi.html) | Customer service (my first Power BI dashboard) | Power BI, Power Query, DAX |
| [Weekly Data Quality Report](work/data-quality-report.html) | Automation | Power Automate Desktop |

All project data is synthetic or public. Nothing here comes from an employer.

## Structure

```
404.html              Sends old page addresses to their new pages
index.html            Home: the cleanup intro, profile, case study, projects, refresh history, contact
recruiter.html        One-page summary for recruiters (no animation)
work/                 One case study page per project
assets/
  case.css, case.js   Shared styles and script for the case study pages
  shots/              Dashboard screenshots, named <project>-<page>.png
  other/              Images for other builds
downloads/
  Taya-Dailey-Resume.pdf
  pbix/               Power BI files, named after each project
  readme/             Project notes
  notebooks/          Python notebooks
```

Pages from the old site (for example `US Healthcare Analysis.html`) were removed. `404.html`, which GitHub Pages shows for any missing address, sends those old links to their new pages, so links shared before the redesign still work. `downloads/T .Dailey Resume.pdf` is the same résumé under its old name for the same reason.

## Contact

- Email: dailey.t@outlook.com
- LinkedIn: https://www.linkedin.com/in/tayadailey/
- GitHub: https://github.com/tdailey1121
