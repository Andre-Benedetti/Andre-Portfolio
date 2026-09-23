#!/usr/bin/env python3
"""Generate Andre Benedetti CV PDF (max 2 pages)."""

from pathlib import Path

from fpdf import FPDF

OUT = Path(__file__).resolve().parents[1] / "assets" / "pdf" / "cv.pdf"
FONT_REG = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
FONT_ITALIC = "/usr/share/fonts/truetype/liberation/LiberationSans-Italic.ttf"
FONT_BI = "/usr/share/fonts/truetype/liberation/LiberationSans-BoldItalic.ttf"


class CV(FPDF):
    def __init__(self):
        super().__init__(format="Letter")
        self.set_auto_page_break(auto=True, margin=12)
        self.add_font("Body", "", FONT_REG)
        self.add_font("Body", "B", FONT_BOLD)
        self.add_font("Body", "I", FONT_ITALIC)
        self.add_font("Body", "BI", FONT_BI)
        self.set_margins(16, 14, 16)

    def section(self, title: str):
        self.ln(2.5)
        self.set_font("Body", "BI", 11)
        self.set_text_color(0, 0, 0)
        self.cell(0, 6, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(0, 0, 0)
        self.set_line_width(0.3)
        y = self.get_y()
        self.line(self.l_margin, y, self.w - self.r_margin, y)
        self.ln(2.5)

    def body(self, text: str, size=9.5, style=""):
        self.set_font("Body", style, size)
        self.set_x(self.l_margin)
        self.multi_cell(self.epw, 4.2, text)

    def job_header(self, company: str, dates: str, title: str):
        self.set_x(self.l_margin)
        self.set_font("Body", "BI", 9.5)
        self.write(4.4, company)
        self.set_font("Body", "I", 9.5)
        self.write(4.4, f" ({dates}) ")
        self.set_font("Body", "B", 9.5)
        self.write(4.4, title)
        self.ln(5.0)

    def bullet(self, text: str, style="I"):
        self.set_x(self.l_margin)
        bullet_w = 4
        self.set_font("Body", "", 9.5)
        self.cell(bullet_w, 4.2, chr(8226))
        self.set_font("Body", style, 9.5)
        self.multi_cell(self.epw - bullet_w, 4.2, text)

    def one_liner(self, text: str):
        self.set_x(self.l_margin)
        self.set_font("Body", "I", 9.3)
        self.multi_cell(self.epw, 4.1, text)
        self.ln(0.4)


def build():
    pdf = CV()
    pdf.add_page()

    # Header
    pdf.set_font("Body", "BI", 14)
    pdf.cell(0, 7, "Andre Luiz Santos Benedetti", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Body", "I", 10)
    pdf.cell(0, 4.5, "Mobile Phone: +64 22 523 3453", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 4.5, "E-mail: andbene@gmail.com", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 4.5, "Auckland CBD", new_x="LMARGIN", new_y="NEXT")

    pdf.section("EXECUTIVE SUMMARY")
    pdf.body(
        "Developer Intern and Electrical Engineer with an MBA in Project Management, "
        "pursuing a Master of Software Engineering at Yoobee College of Creative Innovation "
        "(Auckland, NZ). Recently delivered Park Tower Booking for Crockers Property Group—an "
        "internal full-stack Flask application on Azure. Combines commercial leadership "
        "experience in tech and telecom with hands-on software delivery to bridge strategy "
        "and technical execution.",
        style="I",
    )

    pdf.section("KEY SKILLS & COMPETENCIES")
    # Two-column-ish via compact bullets
    skills_left = [
        "Technologies: Python, Flask, JavaScript, SQL Server / Azure SQL, REST APIs, Azure App Service, GitHub Actions, Cursor",
        "Project Lifecycle Management",
        "Stakeholder Alignment",
        "Software Development & Systems Thinking",
        "Electrical Engineering",
    ]
    skills_right_extra = [
        "Commercial Negotiation & Client Relations",
        "Revenue Forecasting",
        "Salesforce / CRM",
        "Confident communication (Fluent English & Portuguese; capable Spanish)",
    ]
    for s in skills_left + skills_right_extra:
        pdf.bullet(s, style="")

    pdf.section("PROFESSIONAL EXPERIENCE")

    pdf.job_header(
        "Crockers Property Group",
        "July 2026 – November 2026",
        "Developer Intern",
    )
    for b in [
        "Designed and built Park Tower Booking, an internal web app for short-stay operations: unit availability, booking pipeline, cleaning/check-out tracking, and conflict detection.",
        "Integrated a property-management REST API with Azure SQL; delivered JSON APIs, admin tooling, Excel exports, and CI/CD to Azure App Service with Easy Auth.",
        "Used Cursor as the primary AI-assisted development environment across UI, backend, data layer, and deployment workflows.",
    ]:
        pdf.bullet(b)

    pdf.ln(1.2)
    pdf.job_header(
        "agilon Health – Mphrx",
        "June 2021 – March 2025",
        "Sales Operations and Operational Manager",
    )
    for b in [
        "Operational Oversight: Managed Brazil office operations with regulatory compliance and day-to-day execution.",
        "Resource Management: Managed vendors and operational budgets while maintaining service quality.",
        "Compliance & Risk: Enforced policies to mitigate operational risk and meet local regulations.",
        "Client Implementation Project Management: Led solution implementations from scope and planning through delivery and handover.",
    ]:
        pdf.bullet(b)

    pdf.ln(1.2)
    pdf.job_header(
        "China Telecom",
        "November 2020 – May 2021",
        "Senior Account Manager",
    )
    for b in [
        "Used market data and customer feedback to identify process gaps and digital service improvements (Discovery & Market Analysis).",
        "Monitored digital service usage and performance metrics to inform CX and quality enhancements.",
        "Acted as primary business stakeholder for Salesforce CRM updates to improve pipeline accuracy and management reporting (Digital BA).",
    ]:
        pdf.bullet(b)

    pdf.ln(1.2)
    pdf.job_header(
        "CenturyLink",
        "January 2019 – September 2020",
        "Senior Account Manager",
    )
    for b in [
        "Drove top-of-funnel acquisition with data-led prospecting for high-value commercial contracts.",
        "Guided leads through objection handling to signature and implementation; maintained Salesforce pipeline integrity and forecasting.",
        "Managed contract complexity and documentation to maximize conversion rates.",
    ]:
        pdf.bullet(b)

    # NTT without bullets to save space (per user request)
    pdf.ln(1.0)
    pdf.one_liner(
        "NTT (April 2016 – April 2017) — Large Accounts Executive"
    )
    pdf.one_liner(
        "Teltac (June 2015 – September 2015) — Country and Account Manager"
    )
    pdf.one_liner(
        "GVT — Senior Business Manager (June 2013 – June 2015)"
    )
    pdf.one_liner(
        "Matrix Internet S/A — Country and Account Manager (August 2009 – June 2013)"
    )
    pdf.one_liner(
        "Engeforma Engenharia Industria e Comercio LTDA — Electrical Engineer and Contract Management (May 2011 – September 2011)"
    )
    pdf.one_liner(
        "LSX Engenharia LTDA — Electrical Engineer and Contract Management (September 2009 – March 2011)"
    )
    pdf.one_liner(
        "Directo – Computer-Tel Inc. — Country and Account Manager (January 2007 – June 2009)"
    )
    pdf.one_liner(
        "Telenova Comunicações LTDA. — Commercial Manager and Routing Supervisor (April 2005 – December 2006); "
        "Routing Analyst (January 2005 – May 2005); Trainee (March 2004 – December 2004)"
    )

    pdf.section("EDUCATION")
    edu = [
        "2026 — Master of Software Engineering — Yoobee College of Creative Innovation, Auckland, New Zealand",
        "2015 — SPIN Selling — Huthwaite, Sao Paulo, Brazil",
        "2013 — MBA in Project Management — INPG, Blumenau, SC, Brazil",
        "2005 — B.S. in Electrical Engineering (Industrial Engineering qualification) — Federal University of Santa Catarina, Florianopolis, SC, Brazil",
    ]
    for e in edu:
        pdf.set_x(pdf.l_margin)
        pdf.set_font("Body", "I", 9.3)
        pdf.multi_cell(pdf.epw, 4.2, e)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT} pages={pdf.page_no()}")
    if pdf.page_no() > 2:
        raise SystemExit(f"ERROR: CV has {pdf.page_no()} pages; must be <= 2")


if __name__ == "__main__":
    build()
