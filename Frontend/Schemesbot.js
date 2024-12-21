import React, {useState} from 'react';
import styles from "../Styling/Schemesbot.module.css";
import { Link } from 'react-router-dom';

import schemeBotIcon from "../images/schemebot.jpg";

const Schemesbot = () => {

  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [readyToChat, setReadyToCHat] = useState(true);
  const [isCircleClicked, setIsCircleClicked] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);


  const boxes = [
    { schemeName: "Scheme 1", schemeInfo: "Bharatiya Mahila Bank (BMB)", schemeContent: `<h2>Bharatiya Mahila Bank Business Loan: A Comprehensive Overview</h2>
The Bharatiya Mahila Bank (BMB) business loan was introduced as a specialized financial product designed to empower women entrepreneurs in India. Established in 2013, Bharatiya Mahila Bank was a public sector bank that primarily focused on the financial inclusion and economic upliftment of women. Though the bank itself was merged with the State Bank of India (SBI) in 2017, the essence of its initiatives, including business loans, continues to resonate in the financial products offered by various institutions.

Purpose of the BMB Business Loan
The primary objective of the Bharatiya Mahila Bank business loan was to address the lack of financial support for women entrepreneurs and encourage them to venture into various industries. Recognizing the challenges women face in accessing capital due to social and systemic barriers, BMB crafted loans with attractive terms, simplified processes, and minimal collateral requirements. These loans aimed to foster self-reliance, boost economic participation, and promote gender equality in business domains traditionally dominated by men.

<b>Types of Loans Offered</b>
BMB provided a variety of loans tailored to the unique needs of women, enabling them to pursue diverse entrepreneurial activities. Key types included:

<i>Business Loans:</i> For starting or expanding small to medium enterprises in manufacturing, services, and trading sectors.
<i>Microfinance Loans:</i> Focused on women from rural and underprivileged backgrounds, these loans aimed to support micro-businesses like tailoring, handicrafts, or agriculture-related ventures.
<i>Retail Loans:</i> These included loans for purchasing equipment, tools, or machinery required for business operations.
<i>Educational Loans for Entrepreneurs:</i> Designed for women seeking to upskill themselves for business management and growth.
<i>Housing and Infrastructure Loans:</i> These loans targeted women looking to invest in property for their business setup or expansion.

<b>Eligibility Criteria</b>
<i>Bharatiya Mahila Bank business loans were available to</i>: 
Women entrepreneurs over the age of 18.
Women-led businesses where at least 51% ownership rested with women.
Startups, small-scale industries, or service businesses operated by women.
Women self-help groups (SHGs) and joint liability groups (JLGs).
Some schemes also required the submission of a viable business plan, proof of income, and identification documents.

<b>Why Was the Scheme Introduced?</b>
The Bharatiya Mahila Bank business loan scheme was launched as a response to the economic disparities women face in India. According to various studies, access to formal credit for women entrepreneurs was significantly limited due to patriarchal societal norms, lack of collateral, and minimal financial literacy. By offering financial products specifically for women, the government aimed to:

Enhance women's participation in the workforce.
Bridge the credit gap for women entrepreneurs.
Boost the economy through diversified and inclusive growth.
Encourage women to contribute to industries like manufacturing, technology, and agriculture.
The scheme not only focused on providing financial support but also offered business advisory services, training programs, and workshops to equip women with the skills needed to succeed in competitive markets.

<b>Key Features</b>
<i>Loan Amount:</i> Loan amounts ranged from ₹50,000 to ₹20 lakhs, depending on the type of business and financial requirements.
<i>Interest Rates:</i> BMB offered competitive interest rates, often lower than standard commercial rates, with additional concessions for businesses in rural areas.
<i>Collateral-Free Loans:</i> Loans up to ₹1 crore were offered without any collateral under the CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) scheme.
<i>Repayment Tenure:</i> Repayment terms were flexible, ranging from 3 to 7 years, with moratorium periods for businesses to stabilize before starting repayments.
<i>Priority Sectors:</i> Emphasis was placed on funding businesses in sectors like education, healthcare, agriculture, and technology, with special incentives for innovative ventures.
Benefits for Women Entrepreneurs

<b>The Bharatiya Mahila Bank business loan provided numerous benefits, including:</b>
<i>Financial Independence:</i> Women could secure loans without relying on male family members or guarantors.
<i>Skill Development:</i> Many loan packages included training programs to enhance business acumen.
<i>Support for Diverse Sectors:</i> Women in both traditional and non-traditional industries could benefit.
<i>Minimal Barriers:</i> Simplified documentation processes and collateral-free loans made the scheme accessible to women across different socioeconomic backgrounds.
Impact and Legacy
Although the Bharatiya Mahila Bank merged with the State Bank of India in 2017, its business loan schemes left a lasting impact on India’s financial landscape. Post-merger, SBI absorbed BMB's ethos and continued to support women entrepreneurs through similar loan schemes, such as the Stree Shakti Package and other women-centric financial products.

<b>Challenges</b>
Despite its noble objectives, the Bharatiya Mahila Bank business loan scheme faced challenges, including:

<i>Limited Outreach:</i> Many women, especially in rural areas, were unaware of the scheme due to inadequate marketing and promotion.
<i>Low Financial Literacy:</i> A significant portion of the target audience lacked the financial knowledge required to navigate loan applications and repayment terms.
<i>Social Barriers:</i> Societal norms often discouraged women from taking financial risks, limiting the scheme's adoption.
Current Alternatives
Following the merger, several schemes inspired by BMB's principles are now available, including:

Stree Shakti Package by SBI.
Mudra Yojana for Women under the Pradhan Mantri Mudra Yojana (PMMY).
Cent Kalyani Scheme by the Central Bank of India.
Udyogini Scheme for rural women entrepreneurs.
Mahila Udyam Nidhi Scheme by SIDBI for small industries.
Conclusion
The Bharatiya Mahila Bank business loan was a pioneering initiative that played a critical role in fostering entrepreneurship among women in India. It addressed the pressing need for financial inclusion, provided opportunities for economic independence, and challenged traditional gender norms in the business sector. While the bank itself no longer exists, its legacy continues through various women-centric loan schemes and initiatives by other banks and financial institutions. These efforts remain vital for creating a more inclusive and equitable economic environment in India.`,
// videoUrl: "https://www.youtube.com/embed/uQEAMlKEXMA?si=5_jOY1_mU63RP96s" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },



    { schemeName: "Scheme 2", schemeInfo: "Annapurna Scheme", schemeContent: `<h2>Annapurna Scheme: Comprehensive Overview</h2>
The Annapurna Scheme is a government-backed financial initiative aimed at empowering women entrepreneurs, particularly those aspiring to establish or expand food-related businesses. Introduced as part of India's broader efforts to promote women's entrepreneurship and financial independence, this scheme is specifically tailored for women engaged in small-scale ventures within the food and catering sector. Managed primarily by public and private sector banks, the scheme aligns with the country's vision of economic inclusion by providing easy access to credit for women who face challenges in securing loans due to a lack of collateral or financial backing.

Purpose and Objectives
The Annapurna Scheme was introduced to address several key issues faced by women entrepreneurs in the food sector:

Economic Empowerment of Women: The scheme aims to enable women to start or scale up their catering businesses, thereby fostering self-reliance and reducing dependency on traditional sources of income.
Encouraging Small Enterprises: It supports micro and small enterprises, which form the backbone of India's economy, by providing much-needed financial assistance.
Boosting the Food Sector: By targeting food and catering businesses, the scheme helps enhance India's culinary industry, including local cuisines, small food outlets, and home-based catering services.
Financial Inclusion: The scheme strives to bring women entrepreneurs into the formal financial system, providing them with access to credit facilities.
The Annapurna Scheme has played a significant role in creating opportunities for women to actively participate in economic activities, thus contributing to the country’s GDP growth and fostering regional development.

<b>Type of Loan and Features</b>
The Annapurna Scheme is categorized as a term loan specifically designed for working capital requirements and fixed capital investment in the food business. Below are the key features of the loan:

<i>Loan Amount:</i> The scheme provides financial assistance of up to ₹50,000 to women entrepreneurs. This amount can be used to purchase kitchen equipment, utensils, raw materials, gas cylinders, and other essentials required to run a food business.
<i>Collateral-Free Loan:</i> One of the standout features of the Annapurna Scheme is its collateral-free nature. Women can access the loan without pledging assets, making it highly accessible.
<i>Interest Rate:</i> The interest rate for the loan varies based on the lending institution but is generally kept competitive to encourage participation.
<i>Repayment Tenure:</i> The repayment period extends up to 36 months, including a grace period for the borrower to stabilize her business operations before starting repayments.
<i>Subsidy and Support:</i> While the loan itself is not subsidized, borrowers benefit from supportive policies like reduced processing fees and simplified documentation requirements.
Eligibility Criteria
The Annapurna Scheme is tailored for a specific target audience to ensure it meets its objectives effectively:

<i>Target Group:</i> Women entrepreneurs aged between 18 and 50 years who wish to start or expand their food-related businesses.
<i>Skills and Experience:</i> Applicants should have relevant skills or prior experience in food preparation, catering, or related industries. In some cases, proof of skill training or certification may be required.
<i>Business Plan:</i> A viable and detailed business plan outlining the proposed use of funds and revenue projections is mandatory.
<i>Guarantor Requirement:</i> To mitigate risks, banks often require a guarantor who can vouch for the borrower’s credibility.
Why Was the Annapurna Scheme Introduced?
The Annapurna Scheme was launched to address a critical gap in the financial ecosystem for women entrepreneurs, especially those in the food industry. Despite their significant contributions to the economy, women entrepreneurs often face challenges in accessing formal credit due to:

Lack of collateral or financial backing.
Gender biases in traditional lending systems.
Limited knowledge about financial products and services.
By offering a dedicated financial product, the Annapurna Scheme not only bridged these gaps but also encouraged more women to enter the entrepreneurial ecosystem. The scheme recognizes the potential of the food industry as a viable and sustainable business avenue for women, given its relatively low entry barriers and consistent demand.

<b>When Was the Scheme Published?</b>
The Annapurna Scheme was introduced in the early 2000s as part of India’s broader strategy to enhance women’s participation in entrepreneurial activities. While the exact launch date varies depending on the implementing banks, the scheme became widely recognized after being adopted by leading financial institutions such as the State Bank of India (SBI) and Bharatiya Mahila Bank. Over time, its implementation has been streamlined to ensure better outreach and effectiveness.

For Whom Is the Scheme Intended?
The Annapurna Scheme is specifically designed for:

Women Entrepreneurs in Food Business: This includes caterers, home-based cooks, and small food outlet owners who need financial support to purchase equipment or raw materials.
Women in Rural and Urban Areas: The scheme targets both rural and urban women, ensuring that geographical location does not become a barrier to accessing financial support.
First-Time Entrepreneurs: Special emphasis is given to women venturing into business for the first time, providing them with an opportunity to build their entrepreneurial skills and confidence.

<b>How Does the Scheme Work?</b>
The Annapurna Scheme operates through participating banks, which assess and approve loan applications based on the borrower’s eligibility and business plan. Here’s a step-by-step process:

<i>Application Submission:</i> Women entrepreneurs submit their loan application along with required documents, including identity proof, address proof, business plan, and guarantor details.
<i>Loan Processing:</i> The bank evaluates the application, verifying the business plan and applicant’s credentials.
<i>Loan Disbursement:</i> Once approved, the loan amount is disbursed directly to the borrower’s bank account, enabling her to invest in her business immediately.
<i>Repayment Schedule:</i> Borrowers start repaying the loan after the grace period, adhering to the agreed-upon installment schedule.
Challenges and Impact
While the Annapurna Scheme has been instrumental in empowering women entrepreneurs, it has faced certain challenges:

<i>Limited Awareness:</> Many eligible women, especially in rural areas, remain unaware of the scheme and its benefits.
<i>Guarantor Requirement:</i> The need for a guarantor can sometimes deter potential applicants who may not have reliable guarantors in their network.
<i>Bank Procedures:</i> Variations in implementation across banks and delays in processing applications can discourage women from availing the loan.
<i>Despite these challenges, the Annapurna Scheme has had a significant impact on women’s entrepreneurship in India:

<i>Economic Growth:</i> The scheme has contributed to the growth of the food and catering industry by enabling women to establish successful businesses.
<i>Financial Inclusion:</i> It has brought many women into the formal financial system, providing them with access to banking services and credit.
<i>Social Empowerment:</i> By promoting self-reliance, the scheme has helped challenge traditional gender roles and improve the social status of women entrepreneurs.
Legacy and Current Status
While the Annapurna Scheme remains an important financial product for women, its popularity has paved the way for other similar initiatives. Banks and financial institutions now offer a range of women-centric loans, inspired by the Annapurna Scheme’s success. Programs like the Mudra Yojana and Stree Shakti Package have expanded the scope of financial support for women entrepreneurs, ensuring that the vision of the Annapurna Scheme continues to thrive.

Conclusion
The Annapurna Scheme stands as a testament to the transformative power of targeted financial products. By addressing the unique needs of women in the food business, it has empowered countless entrepreneurs to achieve financial independence and contribute meaningfully to the economy. Its legacy continues to inspire similar initiatives, ensuring that women entrepreneurs remain at the forefront of India’s economic growth.`,
videoUrl: "https://www.youtube.com/embed/OK5Wap_8wVU?si=8laYtFfYhXD_i48S" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },

// scheme 3
    { schemeName: "Scheme 3", schemeInfo: "Stree Shakti Package", schemeContent: `<h2>Stree Shakti Package: A Comprehensive Overview</h2>
The Stree Shakti Package is a flagship loan scheme launched by the State Bank of India (SBI) to empower women entrepreneurs by providing financial assistance with favorable terms. This initiative aims to promote the active participation of women in business and entrepreneurship, addressing the financial barriers they often face. Introduced in the early 2000s, the scheme was part of India’s broader effort to foster women-led enterprises and bridge gender disparities in the business world. It remains one of the most recognized financial products tailored specifically for women entrepreneurs.

Purpose of the Stree Shakti Package
The Stree Shakti Package was designed to:

Encourage women to actively engage in entrepreneurial activities by providing them with easier access to credit.
Boost women-led enterprises across various sectors such as manufacturing, services, retail, and trading.
Support the financial inclusion of women in rural, semi-urban, and urban areas by offering loans with attractive terms and concessions.
Foster self-reliance and economic independence among women, especially those from underprivileged or marginalized backgrounds.
Eligibility Criteria
The scheme is exclusively for women entrepreneurs and applies to businesses where:

Women own at least 50% or more of the shareholding or partnership.
The business is engaged in sectors such as manufacturing, trading, services, agriculture, or allied activities.
The women entrepreneurs have undergone the Entrepreneurship Development Program (EDP) conducted by state agencies or recognized institutions. The scheme is open to women in both individual capacities and as part of self-help groups (SHGs), joint liability groups (JLGs), or partnerships.
Key Features of the Stree Shakti Package
The Stree Shakti Package offers a range of features specifically designed to make it easier for women to access and manage loans for their businesses:

<b>Type of Loan</b>
The loan primarily caters to women entrepreneurs who require financial assistance for:

Starting a new business.
Expanding or modernizing an existing business.
Meeting working capital requirements.
Purchasing equipment, tools, machinery, or raw materials.
Investing in infrastructure such as office spaces or manufacturing units.
Loan Amount
The scheme offers loans of varying amounts, depending on the nature and scale of the business:

Loans up to ₹50,000 for micro-enterprises.
Loans above ₹50,000 for small and medium enterprises (SMEs), with no upper limit specified in certain cases.
Interest Rate Concession
One of the most attractive features of the Stree Shakti Package is its interest rate concession:

A 0.5% reduction in the interest rate is provided for loans exceeding ₹2 lakhs.
This concession is especially beneficial for businesses requiring significant capital investment.
Collateral-Free Loans
Under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme, women entrepreneurs can avail of loans up to ₹1 crore without the need for collateral. This provision significantly reduces financial risk and encourages women to pursue entrepreneurial opportunities.

Flexible Repayment Tenure
The scheme offers flexible repayment terms based on the nature of the business and the amount of the loan. The tenure typically ranges from 3 to 7 years, with a moratorium period available in some cases to allow businesses to stabilize before repayments begin.

Simplified Documentation
To make the loan accessible to women with minimal financial literacy, the scheme ensures that the application process is straightforward and requires only essential documents, such as:

Proof of identity and address.
Business registration certificates.
A viable business plan.
Financial statements (if applicable).
Sectors Covered
The Stree Shakti Package is available to businesses across a wide range of sectors, including:

Manufacturing: Small-scale industries such as textiles, handicrafts, or food processing.
Trading: Retail businesses, wholesale trading, or e-commerce platforms.
Services: Beauty salons, healthcare facilities, educational institutions, or travel agencies.
Agriculture and Allied Activities: Farming, animal husbandry, fisheries, or agro-processing units.
Why Was the Scheme Introduced?
The Stree Shakti Package was introduced as part of India’s broader commitment to women's empowerment and financial inclusion. Several challenges faced by women entrepreneurs were identified during its inception:

Limited Access to Credit: Women entrepreneurs often struggled to secure loans due to a lack of collateral and systemic biases in the banking system.
Gender Disparities in Business Ownership: Despite their potential, women-owned businesses constituted only a small fraction of the entrepreneurial ecosystem in India.
Economic Inequality: Women in rural and semi-urban areas were particularly marginalized, with limited access to formal financial services.
Need for Encouragement: Many women hesitated to start businesses due to societal pressures and a lack of institutional support.
By addressing these issues, the Stree Shakti Package sought to create an enabling environment for women to thrive as entrepreneurs and contribute to the country’s economic growth.

Benefits of the Stree Shakti Package
The scheme offers numerous benefits, making it one of the most impactful loan products for women:

Financial Empowerment: By providing easy access to credit, the scheme helps women achieve financial independence.
Encouragement for New Ventures: The collateral-free feature and interest rate concession reduce the financial burden, encouraging women to start businesses.
Support for Diverse Sectors: Women from various industries, ranging from agriculture to technology, can benefit from the scheme.
Economic Growth: By fostering women-led enterprises, the scheme contributes to employment generation and economic development, particularly in rural and semi-urban areas.
Simplified Processes: The user-friendly application process ensures that even first-time entrepreneurs can avail of the benefits without hassle.
Impact of the Stree Shakti Package
Since its launch, the Stree Shakti Package has significantly impacted the entrepreneurial landscape in India:

It has provided financial assistance to thousands of women entrepreneurs across the country.
The scheme has played a crucial role in reducing the gender gap in business ownership and workforce participation.
Women-led businesses have contributed to employment generation and the economic development of underserved regions.
Challenges and Limitations
Despite its success, the Stree Shakti Package faces certain challenges:

Limited Awareness: Many eligible women, particularly in rural areas, remain unaware of the scheme due to inadequate outreach and promotion.
Low Financial Literacy: A significant portion of the target audience lacks the financial knowledge required to understand and leverage the benefits of the scheme.
Societal Barriers: Deep-rooted societal norms often discourage women from taking financial risks or pursuing entrepreneurial ventures.
Future Scope
To further enhance the scheme’s impact, financial institutions and policymakers can focus on:

Increasing Awareness: Conducting awareness campaigns to educate women about the scheme’s benefits.
Offering Additional Training: Providing financial literacy and business management training to women entrepreneurs.
Expanding the Scope: Including more sectors and providing higher loan amounts to support large-scale businesses.
Conclusion
The Stree Shakti Package is a landmark initiative that addresses the financial needs of women entrepreneurs, enabling them to achieve economic independence and self-reliance. By offering concessional loans, collateral-free financing, and simplified processes, the scheme has transformed the entrepreneurial ecosystem in India. While challenges remain, its legacy continues to inspire similar initiatives aimed at empowering women and fostering inclusive economic growth.
`,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 4", schemeInfo: "Dena Shakti Scheme", schemeContent: `Dena Shakti Scheme: Comprehensive Information
The Dena Shakti Scheme is a flagship initiative by Dena Bank (now merged with the Bank of Baroda in 2019) that aimed to empower women entrepreneurs by providing financial assistance tailored to their business needs. Launched as part of the government's larger mission to promote financial inclusion and gender equality, the scheme focused on supporting women in sectors like agriculture, retail trade, micro-enterprises, education, and housing. Recognizing the significant challenges faced by women in accessing formal credit due to systemic barriers and limited financial literacy, the Dena Shakti Scheme sought to address these issues by offering concessional interest rates, simplified processes, and sector-specific financial support.

Purpose of the Dena Shakti Scheme
The Dena Shakti Scheme was introduced to promote economic empowerment among women by encouraging them to start or expand businesses across various sectors. The scheme's primary objective was to provide women with the financial backing required to contribute meaningfully to the economy while achieving self-reliance. By targeting key sectors that directly impact economic development, the scheme also aimed to improve the socio-economic standing of women, particularly in rural and semi-urban areas, where opportunities for financial inclusion were historically limited.

Types of Loans Offered
The scheme catered to women across diverse industries, with loans tailored to specific business requirements. The key types of loans under the Dena Shakti Scheme included:

Agriculture Loans: Designed for women involved in agricultural activities such as farming, livestock rearing, and purchasing agricultural equipment or seeds.
Retail Trade Loans: Provided financial support for women operating small-scale retail shops or trading businesses.
Microenterprise Loans: Focused on funding micro and small enterprises (MSMEs) owned or operated by women, including handicrafts, tailoring units, or food processing businesses.
Education Loans: Offered assistance to women for pursuing higher education or vocational training, enabling them to enhance their skillsets for professional or entrepreneurial purposes.
Housing Loans: Facilitated loans for constructing or purchasing homes, with a focus on women-led housing projects.
Microcredit Loans: Targeted at self-help groups (SHGs) or joint liability groups (JLGs) for collective entrepreneurial ventures.
Why Was the Scheme Introduced?
The Dena Shakti Scheme was introduced to address the gender disparity in access to formal financial resources. Women entrepreneurs often faced challenges such as lack of collateral, limited access to credit, and societal barriers that discouraged them from seeking financial assistance. The scheme was conceptualized to provide:

Easy Credit Access: Simplified processes and minimal collateral requirements to ensure women could access loans without excessive bureaucratic hurdles.
Encouragement for Women Entrepreneurs: Financial and advisory support to motivate women to take up entrepreneurial activities, especially in rural and semi-urban areas.
Focus on Priority Sectors: Promoting women’s participation in sectors like agriculture and MSMEs, which have a direct impact on employment generation and economic growth.
Eligibility Criteria
The Dena Shakti Scheme was open to:

Women entrepreneurs aged 18 years and above.
Businesses with at least 51% ownership by women.
Women-led startups and micro, small, or medium enterprises (MSMEs).
Women self-help groups (SHGs) or joint liability groups (JLGs).
Women pursuing education loans or housing projects.
Applicants were required to submit basic documentation, including identification proofs, business plans, income statements, and guarantor details (if applicable).

Key Features of the Scheme
Loan Amounts:
The scheme offered varying loan amounts depending on the sector. For instance, loans of up to ₹20 lakhs were available for education and housing, while microcredit loans were capped at ₹50,000.
Loans for retail and micro-enterprises were provided based on the specific financial needs of the business.
Interest Rate Concessions:
Women availing loans under this scheme received a 0.25% concession on interest rates, making it more affordable compared to standard loans.
Repayment Period:
The repayment tenure ranged from 3 to 7 years, depending on the type of loan, with flexibility for longer repayment terms in specific cases.
Collateral-Free Loans:
Loans up to ₹10 lakhs were provided without any collateral under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme, ensuring easier access for women.
Support for SHGs and JLGs:
Special provisions were made for group-based entrepreneurial ventures, encouraging collaboration and collective growth.
Impact of the Dena Shakti Scheme
The Dena Shakti Scheme played a transformative role in promoting financial inclusion and entrepreneurship among women. It empowered women from diverse backgrounds, including those in rural areas, by providing them with the means to start or expand businesses, invest in education, or secure housing. Key impacts included:

Increased Women’s Participation: By focusing on priority sectors, the scheme helped increase women's contribution to the workforce, particularly in agriculture and retail trade.
Economic Growth: Loans for MSMEs and microenterprises directly contributed to employment generation and local economic development.
Enhanced Financial Independence: Women entrepreneurs were able to achieve greater financial independence, contributing to improved living standards for their families and communities.
Challenges and Limitations
While the Dena Shakti Scheme had a positive impact, it faced challenges such as:

Limited Awareness: Many potential beneficiaries, especially in rural areas, were unaware of the scheme due to inadequate marketing and outreach efforts.
Financial Literacy Gaps: A significant portion of the target audience lacked the financial knowledge needed to effectively utilize the loans.
Social Barriers: Cultural norms and gender biases continued to discourage women from seeking formal credit or engaging in entrepreneurial activities.
Post-Merger Continuity
After Dena Bank merged with the Bank of Baroda in 2019, the Dena Shakti Scheme was integrated into the broader suite of women-focused financial products offered by the Bank of Baroda. The essence of the scheme continues in initiatives like:

Baroda Mahila Shakti Scheme: A similar product offering concessional loans for women entrepreneurs.
Other Government Schemes: Collaboration with schemes like Pradhan Mantri Mudra Yojana (PMMY) and Stand-Up India for women-led businesses.
Conclusion
The Dena Shakti Scheme was a landmark initiative in empowering women through financial support, skill development, and economic inclusion. By addressing key barriers faced by women in accessing formal credit, the scheme played a vital role in promoting entrepreneurship and reducing gender disparities in the financial sector. Its legacy continues to inspire similar schemes and programs aimed at fostering gender equality and inclusive growth in India.`,
videoUrl: "https://www.youtube.com/embed/ZONamL_6UuY?si=ruK3VM5lMvLH0_tf" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 5", schemeInfo: "Orient Mahila Vikas Yojana", schemeContent: `Orient Mahila Vikas Yojana: Comprehensive Overview
The Orient Mahila Vikas Yojana (OMVY) is a specialized loan scheme introduced by the Oriental Bank of Commerce (OBC), now merged with the Punjab National Bank (PNB), aimed at empowering women entrepreneurs by providing them with accessible and affordable financial assistance. The scheme was launched to encourage women to participate in entrepreneurial activities, fostering self-reliance and contributing to the overall economic development of the country. It catered specifically to women-led businesses by offering loans with favorable terms, minimal requirements for collateral, and a streamlined application process.

Purpose of the Orient Mahila Vikas Yojana
The primary objective of the Orient Mahila Vikas Yojana was to bridge the financial gap that women entrepreneurs face due to systemic barriers, such as lack of access to formal credit and societal biases. The scheme aimed to empower women to establish or expand their businesses, thus enhancing their economic independence and ability to contribute meaningfully to society. It sought to support women across diverse sectors, including small-scale manufacturing, service industries, and trading activities.

Launch and Background
Oriental Bank of Commerce launched the Orient Mahila Vikas Yojana in the early 2000s as part of its commitment to gender-inclusive banking and financial inclusion. The initiative aligned with the government's broader agenda of promoting women’s entrepreneurship as a tool for socioeconomic empowerment. By offering specialized financial products for women, the scheme sought to dismantle traditional barriers to entry in the entrepreneurial space.

Types of Loans Offered
The Orient Mahila Vikas Yojana encompassed various loan products tailored to meet the unique needs of women entrepreneurs. The types of loans under this scheme include:

Business Loans: Designed to help women start or expand their enterprises in sectors like manufacturing, trading, and services.
Term Loans: For purchasing equipment, machinery, or other long-term assets needed for business operations.
Working Capital Loans: To meet the day-to-day operational expenses of businesses, such as purchasing raw materials, paying salaries, or managing inventory.
Micro Loans: Targeted at small-scale ventures or self-help groups (SHGs) for activities like tailoring, handicrafts, or agricultural businesses.
Eligibility Criteria
The Orient Mahila Vikas Yojana was accessible to:

Women entrepreneurs aged 18 years and above.
Businesses where women hold at least 51% ownership.
Entrepreneurs engaged in small-scale industries, service sectors, or trading activities.
Startups and established businesses looking for expansion.
Women-led self-help groups (SHGs) and joint liability groups (JLGs).
Key Features of the Scheme
Loan Amount: Women entrepreneurs could avail loans of up to ₹10 lakhs without collateral. For higher loan amounts, collateral or third-party guarantees were required.
Interest Rate Concession: The scheme offered interest rate concessions of up to 2% to encourage women to borrow and reduce the financial burden of repayment.
Collateral-Free Loans: Loans up to ₹10 lakhs were provided without any security under the Credit Guarantee Fund Scheme for Micro and Small Enterprises (CGTMSE).
Repayment Tenure: Flexible repayment terms were provided, ranging from 3 to 7 years, depending on the nature and size of the loan.
Moratorium Period: A moratorium period was included in the repayment schedule, allowing businesses time to stabilize before loan repayment began.
No Processing Fees: For loans below ₹10 lakhs, no processing fees were charged, making it easier for women to access credit without additional costs.
Priority Sectors: Loans were primarily targeted at women working in priority sectors like agriculture, small-scale manufacturing, retail, and education.
Why Was the Scheme Introduced?
The Orient Mahila Vikas Yojana was introduced to address the gender gap in entrepreneurial financing. Historically, women entrepreneurs in India faced significant hurdles, including:

Lack of Collateral: Many women do not own property or assets in their name, making it difficult to secure traditional loans.
Limited Financial Literacy: Women, especially in rural and semi-urban areas, often lacked awareness about formal financial systems and their benefits.
Societal Bias: Cultural norms and gender biases often discouraged women from seeking financial independence or starting their businesses.
Economic Potential: Recognizing women as untapped economic contributors, the scheme aimed to unlock their potential by providing them with adequate resources and opportunities.
The scheme was a step towards breaking these barriers and empowering women to achieve their entrepreneurial ambitions.

Benefits of the Orient Mahila Vikas Yojana
Promoting Financial Inclusion: By providing collateral-free loans and concessions, the scheme made formal credit accessible to women entrepreneurs who were previously excluded from the financial system.
Economic Empowerment: The loans enabled women to start and expand their businesses, contributing to their financial independence and family welfare.
Skill Development: Through training programs and workshops, the scheme supported women in building the skills necessary to run successful businesses.
Encouragement of Innovation: By funding diverse industries, the scheme encouraged women to venture into non-traditional fields, driving innovation and competition.
Social Upliftment: The scheme had a positive ripple effect on society by empowering women, reducing gender inequality, and creating jobs in local communities.
Application Process
The application process for the Orient Mahila Vikas Yojana was simplified to ensure accessibility:

Document Submission: Applicants needed to provide a detailed business plan, proof of identity, address, and income documents.
Loan Sanctioning: Based on the viability of the business plan and the applicant's creditworthiness, the loan was sanctioned.
Support Services: In addition to financial assistance, the bank provided business advisory services, helping women refine their ideas and strategies for success.
Challenges
While the Orient Mahila Vikas Yojana was a progressive step, it faced several challenges:

Awareness Gap: Many potential beneficiaries, especially in rural areas, were unaware of the scheme and its benefits.
Societal Barriers: Despite financial incentives, societal attitudes often discouraged women from taking loans or pursuing entrepreneurship.
Limited Outreach: The scheme's implementation was largely confined to regions where Oriental Bank of Commerce had branches, limiting its reach to other parts of the country.
Legacy and Current Status
After the merger of Oriental Bank of Commerce with Punjab National Bank in 2020, the Orient Mahila Vikas Yojana was integrated into the broader financial offerings of PNB. Today, its principles live on in other women-centric financial products, such as:

PNB Mahila Udyam Nidhi Scheme
PNB Empower Her Scheme
Mudra Yojana for Women
These schemes continue to prioritize women’s economic empowerment by offering similar benefits, including collateral-free loans, concessional interest rates, and training programs.

Impact of the Scheme
The Orient Mahila Vikas Yojana had a profound impact on the entrepreneurial landscape in India:

Thousands of women were able to establish or expand their businesses.
It encouraged women to enter non-traditional industries, thereby diversifying the economy.
The scheme inspired other banks and financial institutions to launch similar initiatives, creating a robust ecosystem for women entrepreneurs.
Conclusion
The Orient Mahila Vikas Yojana was a landmark initiative in promoting women’s entrepreneurship in India. By addressing financial barriers and fostering self-reliance, the scheme empowered women to become active contributors to the economy. Its innovative approach to collateral-free loans, interest rate concessions, and skill-building programs set a benchmark for gender-inclusive financial products. Although the scheme has evolved under the umbrella of Punjab National Bank, its legacy continues to inspire efforts toward achieving economic equality and empowering women entrepreneurs nationwide.`,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 6", schemeInfo: "Udyogini Scheme", schemeContent: `Udyogini Scheme: A Comprehensive Overview
The Udyogini Scheme is a government-backed financial assistance program specifically designed to empower women entrepreneurs by providing affordable loans to start or expand small businesses. The term "Udyogini" translates to "woman entrepreneur," reflecting the scheme's focus on fostering economic independence among women, particularly those from marginalized and financially weaker sections of society. Introduced by the Women Development Corporation (WDC) in various states and supported by nationalized banks and other financial institutions, the scheme is part of India's broader efforts to promote women's entrepreneurship and self-reliance.

Purpose of the Udyogini Scheme
The Udyogini Scheme was launched to address the barriers women face in accessing formal credit, including a lack of collateral, financial literacy, and societal norms that discourage women from starting businesses. The scheme provides financial support to women who wish to establish or grow their own ventures in sectors like agriculture, retail, and small-scale manufacturing. By bridging the gender gap in entrepreneurship, the Udyogini Scheme contributes to women’s economic empowerment and overall socioeconomic development in India.

Launch and Implementation
The Udyogini Scheme was initially introduced by the Karnataka State Women’s Development Corporation (KSWDC) and later adopted by other states across India with slight variations in terms and eligibility criteria. The scheme gained momentum in the 1990s and continues to operate through partnerships with various financial institutions, including public sector banks, regional rural banks, and cooperative banks.

Key Objectives
Empowering Women: The primary goal is to empower women by enabling them to contribute to household incomes and achieve financial independence.
Promoting Entrepreneurship: It fosters entrepreneurial skills and supports women in launching or expanding small businesses.
Reducing Gender Disparities: By providing financial assistance, the scheme aims to reduce gender-based inequalities in the economic domain.
Encouraging Self-Employment: The scheme motivates women to become self-employed, especially in rural and semi-urban areas.
Types of Loans Offered
The Udyogini Scheme provides loans primarily for micro and small enterprises in diverse sectors. The types of loans available include:

Agricultural Loans: For purchasing equipment, seeds, fertilizers, or livestock to support farming-related businesses.
Retail Loans: For setting up or expanding shops, kiosks, or small trading businesses.
Service Sector Loans: For starting ventures like tailoring, beauty parlors, or small service-based enterprises.
Manufacturing Loans: For establishing small-scale manufacturing units for products like handicrafts, textiles, and other goods.
Eligibility Criteria
The Udyogini Scheme is accessible to women who meet the following criteria:

Age Limit: Women aged between 18 and 55 years are eligible to apply.
Income Limit: The applicant’s family income should not exceed ₹1.5 lakhs per annum. However, this criterion is relaxed for widows, disabled women, and destitute women.
Business Scope: Loans are available for specific sectors approved under the scheme, such as agriculture, retail, and cottage industries.
No Collateral for Small Loans: Loans below a certain threshold (e.g., ₹1 lakh) often do not require collateral, making it easier for women from economically weaker sections to access credit.
Loan Amounts and Interest Rates
The loan amount under the Udyogini Scheme ranges from ₹10,000 to ₹3 lakhs, depending on the type of business and the applicant’s requirements.
Interest rates are highly subsidized or waived entirely for certain categories, such as widows or disabled women.
Loans up to ₹50,000 are typically provided interest-free in many states.
Documents Required
Applicants need to submit the following documents to avail of the loan:

Proof of identity (Aadhaar card, PAN card, or voter ID)
Proof of address (electricity bill, ration card, or passport)
Income certificate
Business plan or proposal
Caste certificate (if applicable)
Bank account details
Special Features of the Scheme
No Collateral Requirement: Many loans under the Udyogini Scheme are collateral-free, reducing the financial burden on women who lack assets.
Interest Subsidy: Women from economically weaker sections, including widows and disabled women, receive loans at reduced or zero interest rates.
Wide Sectoral Coverage: The scheme supports businesses in agriculture, retail, manufacturing, and other sectors, providing flexibility to the entrepreneurs.
Focus on Rural Areas: The scheme places a strong emphasis on rural and semi-urban areas to promote inclusive economic growth.
Training and Capacity Building: In addition to financial assistance, the scheme provides training programs to equip women with business management and operational skills.
Why Was It Introduced?
The Udyogini Scheme was introduced to tackle several challenges faced by women in the entrepreneurial ecosystem, including:

Lack of Financial Access: Many women are unable to secure loans due to a lack of collateral or guarantors.
Economic Dependency: The scheme aims to reduce women’s dependence on male family members for financial support.
Unemployment and Poverty: By promoting self-employment, the scheme addresses issues of unemployment and poverty, especially in rural areas.
Socioeconomic Empowerment: Empowering women economically contributes to improved education, healthcare, and overall community development.
Impact of the Udyogini Scheme
Since its inception, the Udyogini Scheme has significantly contributed to women’s empowerment in India:

Increased Women’s Participation: Thousands of women have successfully started or expanded their businesses, enhancing their participation in the economy.
Job Creation: By supporting small businesses, the scheme has generated employment opportunities, especially in rural areas.
Improved Livelihoods: Women entrepreneurs have reported improved living standards and greater financial stability due to the scheme.
Challenges and Limitations
Despite its successes, the Udyogini Scheme faces certain challenges:

Lack of Awareness: Many eligible women are unaware of the scheme and its benefits, limiting its reach.
Bureaucratic Hurdles: Lengthy application processes and documentation requirements deter some applicants.
Limited Funding: The allocated funds are often insufficient to meet the growing demand for loans.
Cultural Barriers: Societal norms in some regions discourage women from pursuing entrepreneurial ventures.
Legacy and Future Prospects
The Udyogini Scheme remains one of India’s most impactful initiatives for promoting women’s entrepreneurship. Its focus on financial inclusion, self-reliance, and economic empowerment aligns with the government’s broader goals of fostering gender equality and inclusive growth. As the scheme continues to evolve, efforts to increase awareness, simplify processes, and enhance funding will further amplify its impact.

In conclusion, the Udyogini Scheme is a vital step toward empowering women economically and socially. By providing affordable loans and supporting entrepreneurial ambitions, it not only transforms the lives of individual women but also contributes to the economic development of communities and the nation as a whole.`,
videoUrl: "https://www.youtube.com/embed/lC1TBSL1DYs?si=SOcvI6KGRTCQABri" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 7", schemeInfo: "Cent Kalyani Scheme", schemeContent: `Cent Kalyani Scheme: A Comprehensive Overview
The Cent Kalyani Scheme is a financial initiative launched by the Central Bank of India to empower women entrepreneurs and promote their participation in the economic growth of the country. Introduced as part of the government’s push towards financial inclusion and women empowerment, the scheme aims to provide financial assistance to women engaged in various entrepreneurial activities, helping them establish or expand their businesses. With its attractive features, including zero collateral requirements and zero processing fees, the Cent Kalyani Scheme has emerged as a popular choice for women entrepreneurs across India.

Purpose of the Cent Kalyani Scheme
The scheme was designed to address the unique challenges faced by women in accessing formal credit. Traditionally, women entrepreneurs have struggled to secure loans due to a lack of collateral, limited financial literacy, and systemic biases within the financial ecosystem. The Cent Kalyani Scheme seeks to eliminate these barriers by offering loans on favorable terms and encouraging women to take up entrepreneurship in a variety of sectors, including manufacturing, services, agriculture, and trade. By empowering women with financial independence, the scheme also aims to contribute to the larger goal of inclusive economic development.

Type of Loan
The Cent Kalyani Scheme provides business loans to women entrepreneurs for various purposes, including:

Establishment of New Businesses: Funding to cover initial setup costs such as equipment, machinery, and infrastructure.
Business Expansion: Assistance for scaling existing operations, purchasing additional machinery, or opening new branches.
Working Capital Needs: Support for day-to-day business expenses, including salaries, raw material procurement, and operational costs.
Technology Upgradation: Loans for modernizing business practices or adopting new technologies to improve productivity and efficiency.
These loans are tailored to meet the financial needs of small and medium enterprises (SMEs) owned and managed by women.

Features of the Scheme
The Cent Kalyani Scheme is designed to be simple, accessible, and beneficial for women entrepreneurs. Its key features include:

Loan Amount: Loans up to ₹1 crore are offered under the scheme, making it suitable for both small-scale businesses and larger ventures.
Interest Rates: Competitive interest rates are offered, which are typically lower than regular business loans. Women entrepreneurs benefit from the bank’s preferential lending rates.
Collateral-Free Loans: Loans are provided without any collateral or third-party guarantee, reducing the financial burden on women entrepreneurs.
No Processing Fees: The scheme waives all processing fees, ensuring that applicants can access credit without incurring additional costs.
Flexible Repayment Tenure: The repayment period is designed to accommodate the cash flow cycles of different businesses, with flexible tenures to ease financial pressure on borrowers.
Eligibility Criteria
The Cent Kalyani Scheme is open to a wide range of women entrepreneurs, with eligibility requirements designed to maximize accessibility. Applicants must:

Be women engaged in entrepreneurial activities, whether as individuals or as partners in a business.
Operate businesses in sectors such as manufacturing, agriculture, retail trade, or services.
Own businesses that are at least 51% women-owned and managed.
Have a valid business plan or demonstrate a viable business model.
There is no restriction on the educational qualifications of the applicant, making the scheme accessible to women from all walks of life.

Target Sectors
The scheme supports women entrepreneurs in various industries, including:

Manufacturing: For businesses producing goods or engaging in industrial activities.
Agriculture: Support for farming, animal husbandry, horticulture, and agro-processing ventures.
Retail Trade: Loans for running shops, kiosks, or online retail businesses.
Services Sector: For women providing services like consultancy, education, healthcare, or beauty parlors.
Self-Help Groups (SHGs): Assistance for collective entrepreneurial activities undertaken by groups of women.
Why Was the Scheme Introduced?
The Cent Kalyani Scheme was introduced to address systemic issues that hinder women’s access to credit and entrepreneurship opportunities. According to various studies, women in India constitute nearly half of the population but contribute significantly less to the formal economy due to societal, cultural, and institutional barriers. The scheme was designed with the following objectives:

Promote Women’s Economic Participation: By providing financial assistance, the scheme aims to encourage women to actively participate in entrepreneurial activities.
Reduce Dependence on Informal Credit: The scheme provides women with access to affordable formal credit, reducing reliance on high-interest loans from informal sources.
Foster Inclusive Growth: Supporting women entrepreneurs contributes to overall economic development and helps achieve gender equality in the workforce.
Encourage Innovation: Women-led businesses often bring fresh perspectives and innovative ideas to the market. The scheme aims to foster this creativity.
Implementation and Rollout
The Cent Kalyani Scheme was launched by the Central Bank of India as part of its commitment to financial inclusion and women empowerment. Since its inception, the scheme has been instrumental in providing financial assistance to thousands of women entrepreneurs across the country. The scheme aligns with the government’s broader initiatives, such as Beti Bachao Beti Padhao and Skill India, which aim to create an ecosystem that supports women in various capacities.

Documentation Requirements
The application process is straightforward, requiring minimal documentation. Applicants must provide:

Proof of identity and address.
Business registration documents.
Income proof or financial statements (if available).
A business plan detailing the purpose and expected outcomes of the loan.
Benefits for Women Entrepreneurs
The Cent Kalyani Scheme offers numerous benefits, including:

Financial Independence: Women can secure loans without depending on male family members or guarantors.
Encouragement for Small Businesses: The scheme is ideal for women starting small businesses with limited capital.
Simplified Processes: The absence of collateral and processing fees makes the scheme accessible to women from diverse economic backgrounds.
Support for Diverse Ventures: Women in both urban and rural areas, and across industries, can benefit from the scheme.
Confidence Building: By providing financial support, the scheme instills confidence in women to take entrepreneurial risks.
Impact of the Scheme
Since its launch, the Cent Kalyani Scheme has played a significant role in empowering women entrepreneurs across India. Thousands of women have benefited from the financial assistance provided under this scheme, enabling them to start or expand their businesses. By fostering economic independence, the scheme has contributed to breaking gender stereotypes and promoting gender equality in the business world.

Challenges and Limitations
While the Cent Kalyani Scheme has been successful, it has faced certain challenges, including:

Awareness Gap: Many women, especially in rural areas, remain unaware of the scheme and its benefits.
Limited Financial Literacy: A lack of financial knowledge among potential applicants limits their ability to navigate the application process.
Social Barriers: Cultural and societal norms still discourage many women from taking up entrepreneurial activities.
Conclusion
The Cent Kalyani Scheme is a remarkable initiative that has empowered countless women entrepreneurs by providing them with the financial resources needed to start and grow their businesses. Its unique features, including collateral-free loans and no processing fees, make it accessible to a broad spectrum of women. While challenges remain in terms of awareness and accessibility, the scheme’s impact on fostering women-led enterprises and promoting financial independence is undeniable. It continues to serve as a powerful tool for achieving gender equality and driving inclusive economic growth in India.`,
videoUrl: "https://www.youtube.com/embed/dlg8brW4pYw?si=hqyQy8Ts6KKQ-WNo" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 8", schemeInfo: "Mahila Udyam Nidhi Scheme", schemeContent: `Mahila Udyam Nidhi Scheme: A Detailed Overview
The Mahila Udyam Nidhi Scheme is a flagship initiative introduced by the Small Industries Development Bank of India (SIDBI) to support and empower women entrepreneurs in establishing and expanding their small-scale enterprises. This scheme aims to address the critical issue of financial barriers faced by women in business and to promote entrepreneurship among women, particularly in the micro, small, and medium enterprises (MSME) sector. Launched in 1993, the scheme aligns with the broader vision of fostering gender equality in economic participation and stimulating growth in underdeveloped and semi-urban areas. It provides financial assistance tailored to the unique needs of women entrepreneurs, ensuring that they have the resources to turn their business ideas into reality.

Purpose of the Scheme
The primary goal of the Mahila Udyam Nidhi Scheme is to encourage women to enter the entrepreneurial ecosystem by providing affordable and accessible financial support. It is designed to empower women who aspire to set up businesses or modernize existing small-scale ventures. Recognizing the challenges that women face in accessing traditional banking services, the scheme was created to bridge the gap by offering loans on favorable terms, ensuring that women-led enterprises thrive and contribute to the economy.

The scheme not only provides financial aid but also promotes self-reliance and independence among women by equipping them with the necessary resources to compete in the business world. It focuses on industries that are labor-intensive and have a significant impact on regional development, such as handicrafts, textiles, food processing, and manufacturing.

Type of Loan Offered
The Mahila Udyam Nidhi Scheme offers term loans specifically aimed at women entrepreneurs to support their financial needs for:

Setting up a new enterprise: Assistance is provided for purchasing machinery, equipment, and raw materials required to establish a small-scale industry.
Expanding or modernizing an existing business: Women looking to upgrade their technology, expand production capacity, or diversify their product lines can avail of the scheme.
Service-based enterprises: Businesses in areas such as IT, healthcare, education, or hospitality are also eligible for funding under this scheme.
The loan amount can go up to ₹10 lakhs, depending on the project’s size, scope, and requirements. The loans are offered at competitive interest rates and have a flexible repayment structure to accommodate the cash flow challenges that small businesses often face.

Eligibility Criteria
The Mahila Udyam Nidhi Scheme is targeted explicitly at:

Women Entrepreneurs: Any woman aged 18 years and above who is interested in starting or expanding a small-scale business is eligible.
Ownership: The enterprise should be majority-owned (51% or more) by women.
Small-Scale Industries (SSI): The business should fall under the definition of a small-scale industry as per the MSME classification.
Viable Business Plan: The applicant must present a sound business plan or project report demonstrating the feasibility and profitability of the proposed enterprise.
Priority is often given to projects that are innovative or have a high potential for employment generation, particularly in underdeveloped or rural areas.

Key Features of the Scheme
Loan Amount: The maximum loan amount available under the scheme is ₹10 lakhs.
Repayment Tenure: Loans are repayable over a period of 10 years, including a moratorium period of up to 5 years depending on the business’s needs.
Interest Rates: The interest rates are competitive and may vary based on the project’s location, type, and size.
Collateral-Free Loans: In some cases, the loans are covered under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), allowing women to access funds without providing collateral.
Sectoral Focus: The scheme supports industries such as food processing, garments, handicrafts, and traditional crafts, as well as innovative and technology-driven businesses.
Skill Development: Many women entrepreneurs who avail of loans under this scheme are also provided with training, mentoring, and business advisory services to ensure the success of their ventures.
Why Was It Introduced?
The Mahila Udyam Nidhi Scheme was introduced as part of SIDBI’s broader efforts to address the gender disparity in access to finance for business activities. Despite women playing a pivotal role in the economy, they have historically faced significant barriers in obtaining loans due to factors like lack of collateral, limited financial literacy, and societal norms discouraging risk-taking. The scheme was specifically designed to:

Encourage Entrepreneurship: By providing easy access to capital, the scheme motivates women to take up entrepreneurship as a career path.
Promote Financial Inclusion: It ensures that women from all sections of society, including rural and marginalized areas, have equal access to financial resources.
Boost Employment: The scheme emphasizes labor-intensive industries, indirectly generating employment opportunities for local communities.
Strengthen Regional Economies: By focusing on small-scale industries, it contributes to the growth of regional economies, particularly in rural and semi-urban areas.
Impact of the Scheme
Since its inception, the Mahila Udyam Nidhi Scheme has had a transformative impact on women entrepreneurs across India. It has enabled thousands of women to start and sustain businesses in various industries, contributing significantly to the MSME sector. The scheme has been instrumental in:

Creating self-employment opportunities for women.
Reducing dependency on family income or male counterparts for financial support.
Enhancing the socio-economic status of women and their families.
Encouraging innovation and competitiveness in small-scale industries.
Many women who availed of the scheme have gone on to become role models in their communities, inspiring others to pursue entrepreneurship.

Challenges
Despite its success, the scheme has faced certain challenges:

Awareness: Many eligible women are unaware of the scheme and its benefits, particularly in remote areas.
Bureaucratic Hurdles: Lengthy application processes and documentation requirements can deter potential applicants.
Limited Outreach: The scheme is often concentrated in urban or semi-urban areas, leaving rural women underserved.
Risk Aversion: Some women are hesitant to take loans due to fear of failure or societal stigma.
Current Relevance
While the Mahila Udyam Nidhi Scheme continues to be a vital initiative for empowering women entrepreneurs, it has inspired similar schemes across various banks and financial institutions. Today, programs like the Mudra Yojana for Women, Stree Shakti Package, and Udyogini Scheme build on the foundation laid by the Mahila Udyam Nidhi Scheme, ensuring that women entrepreneurs have a plethora of options to access financial support.

Conclusion
The Mahila Udyam Nidhi Scheme is more than just a financial assistance program; it is a testament to the transformative power of inclusive and targeted policies in driving socio-economic change. By addressing the unique challenges faced by women entrepreneurs, the scheme has played a pivotal role in fostering economic independence, innovation, and gender equality in India’s business landscape. Its emphasis on financial inclusion and self-reliance continues to inspire similar initiatives, making it a cornerstone in the journey toward a more equitable and prosperous economy.`,
videoUrl: "https://www.youtube.com/embed/gVw9j9EKAFk?si=Cu70s7xUMcJq45tf" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 9", schemeInfo: "Mudra Yojana for Women", schemeContent: `Mudra Yojana for Women: Comprehensive Overview
The Mudra Yojana for Women, introduced under the Pradhan Mantri Mudra Yojana (PMMY) in April 2015, is a flagship financial scheme by the Government of India aimed at fostering entrepreneurship and financial independence among women. The scheme is designed to provide easy access to loans for women entrepreneurs, enabling them to start or expand small-scale businesses across various sectors. It has been a crucial step toward empowering women, especially those in rural and semi-urban areas, who often face challenges in securing credit due to lack of collateral and traditional banking barriers.

Purpose of the Scheme
The primary objective of the Mudra Yojana for Women is to address the financial needs of women who aspire to become entrepreneurs or improve their existing businesses. The scheme seeks to:

Promote self-reliance among women by reducing dependency on informal sources of finance.
Encourage the establishment of micro and small enterprises across sectors like agriculture, trading, manufacturing, and services.
Bridge the gender gap in entrepreneurship and contribute to inclusive economic growth.
Support women from disadvantaged backgrounds, including rural and marginalized communities, to access formal financial systems.
Types of Loans
The Mudra Yojana for Women offers three categories of loans based on the stage and scale of the business. These categories are designed to cater to diverse business requirements:

Shishu (Infant):

Loan Amount: Up to ₹50,000.
Purpose: For women starting small businesses or micro-enterprises in their initial stages.
Example: Businesses like tailoring, papad making, candle production, and food stalls.
Kishor (Adolescent):

Loan Amount: ₹50,001 to ₹5,00,000.
Purpose: For women looking to expand their existing businesses or requiring additional working capital.
Example: Expansion of retail shops, purchase of machinery, or working capital for manufacturing units.
Tarun (Adult):

Loan Amount: ₹5,00,001 to ₹10,00,000.
Purpose: For well-established businesses requiring substantial investment for scaling operations or modernization.
Example: Establishing medium-scale units, purchasing advanced machinery, or expanding production facilities.
Eligibility Criteria
The Mudra Yojana for Women is open to:

Women aged 18 years and above.
Women entrepreneurs involved in non-corporate, non-farm small/micro enterprises.
Self-help groups (SHGs), joint liability groups (JLGs), and individual women entrepreneurs.
Businesses in diverse sectors, including manufacturing, retail trade, services, and agriculture-related activities.
No collateral or guarantor is required for loans under the scheme, making it highly accessible to women with limited financial means or assets.

Why Was the Scheme Introduced?
The Mudra Yojana for Women was launched as part of the government’s mission to promote financial inclusion and entrepreneurship. Historically, women in India, especially in rural and semi-urban areas, have struggled to secure formal credit due to systemic barriers such as lack of collateral, insufficient credit history, and societal norms discouraging financial independence. The scheme aims to:

Eliminate dependence on informal moneylenders who charge exorbitant interest rates.
Encourage women to participate actively in the economic workforce by starting or expanding businesses.
Strengthen India’s micro-enterprise sector, which is a significant contributor to employment and GDP.
By focusing on women, the scheme also addresses gender disparities in access to financial resources and promotes women-led economic growth.

Key Features
Collateral-Free Loans: No requirement for collateral or guarantors ensures easy access to credit.
Interest Rates: Competitive interest rates determined by lending institutions, making repayment manageable.
Flexible Tenure: Repayment terms range from 3 to 5 years, depending on the loan amount and type.
Dedicated Support: Banks and financial institutions offer guidance and support to women for preparing project reports and completing documentation.
Sectoral Coverage: The scheme supports a wide range of businesses, including food processing, beauty parlors, tailoring units, floriculture, handicrafts, and cottage industries.
Process to Apply
Women can apply for Mudra loans through:

Public sector banks, private sector banks, regional rural banks (RRBs), cooperative banks, and microfinance institutions (MFIs).
Online portals or directly at the nearest financial institution offering Mudra loans.
Applicants need to provide a detailed business plan, identity proof, address proof, and relevant financial documents to secure the loan.

Benefits for Women Entrepreneurs
Financial Empowerment: Women gain access to formal credit without the fear of exploitation by informal lenders.
Encouraging Self-Reliance: The scheme fosters financial independence by enabling women to generate income and create jobs.
Economic Participation: By supporting women-led businesses, the scheme contributes to overall economic growth and development.
Social Impact: Empowering women entrepreneurs helps uplift their families and communities, promoting a ripple effect of socio-economic development.
Success Stories
Since its inception, the Mudra Yojana for Women has supported millions of women entrepreneurs across India. Women have successfully established businesses in sectors like food processing, retail trade, and manufacturing. For example:

Women in rural Karnataka utilized Mudra loans to start dairy farming units.
A group of women in Uttar Pradesh leveraged the scheme to create a handicraft business, exporting products globally.
Challenges
While the scheme has been widely successful, it faces certain challenges:

Awareness Gaps: Many women, especially in rural areas, are unaware of the scheme’s benefits or the application process.
Financial Literacy: A lack of financial knowledge often hinders women from effectively utilizing the loans.
Delayed Processing: Bureaucratic hurdles can delay the disbursement of loans, affecting business operations.
Future Scope
To enhance the scheme’s reach and impact, the government and financial institutions are focusing on:

Increasing awareness through campaigns in rural areas.
Offering financial literacy programs to equip women with the skills to manage their businesses effectively.
Introducing digital platforms for faster loan processing and tracking.
Conclusion
The Mudra Yojana for Women has been a game-changer in empowering women entrepreneurs in India. By addressing the financial needs of women from diverse backgrounds, the scheme has enabled them to break free from economic dependency, contribute to their families’ income, and drive the nation’s economic growth. With continuous efforts to improve accessibility and awareness, the scheme has the potential to create a generation of self-reliant, successful women entrepreneurs who can inspire others to follow suit. Its success underscores the importance of gender-focused financial initiatives in building an inclusive and prosperous economy.`,
videoUrl: "https://www.youtube.com/embed/L6D7eFYJooQ?si=LzgJcK2L341dQY6r" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 10", schemeInfo: "TREAD Scheme", schemeContent: `TREAD Scheme: A Comprehensive Overview
The Trade Related Entrepreneurship Assistance and Development (TREAD) Scheme for Women is an initiative by the Government of India designed to support economically underprivileged women in starting or expanding their entrepreneurial ventures. Launched by the Ministry of Micro, Small, and Medium Enterprises (MSME) in 1998, the scheme recognizes the significant challenges faced by women in accessing credit, financial literacy, and entrepreneurial support. Its primary aim is to empower women through financial assistance, skill development, and capacity-building programs, thereby fostering economic inclusion and reducing gender disparities in the entrepreneurial space.

Purpose of the TREAD Scheme
The TREAD Scheme was established to address the financial and non-financial hurdles that women, particularly those from rural and economically weaker sections, face when venturing into business. Women in these demographics often lack collateral, financial literacy, and access to formal credit systems, making it difficult for them to start or sustain enterprises. By combining financial assistance with training and counseling, the TREAD Scheme aims to:

Enhance women's participation in entrepreneurship.
Promote self-reliance and economic independence for women.
Encourage the growth of women-led micro and small enterprises, particularly in rural areas.
Support industries that are traditionally women-centric, such as handicrafts, textiles, food processing, and agriculture-related businesses.
Key Features of the TREAD Scheme
Grant Assistance for NGOs: The scheme involves financial institutions partnering with Non-Governmental Organizations (NGOs) to provide credit to women entrepreneurs. NGOs play a critical role as intermediaries, offering training, guidance, and support to women entrepreneurs. The government provides grants of up to 30% of the total project cost to the NGOs, while the remaining 70% is covered by loans from financial institutions.

Credit Availability: Women entrepreneurs receive loans through the NGOs from participating financial institutions. The scheme is unique in leveraging the partnership between NGOs and banks to ensure that women, especially those without collateral, can access credit.

Skill Development and Training: The TREAD Scheme places significant emphasis on training and skill development. Workshops, seminars, and training sessions are organized to help women improve their entrepreneurial skills, financial literacy, and business management capabilities.

Awareness Building: To ensure widespread adoption, the scheme funds awareness campaigns and outreach programs. These initiatives inform women about the availability of financial assistance and entrepreneurial opportunities.

Types of Loans and Financial Assistance
Under the TREAD Scheme, women can access loans for a variety of business activities, such as:

Starting New Businesses: Financial support for launching businesses in areas like manufacturing, services, agriculture, and trading.
Expanding Existing Enterprises: Loans for scaling up operations, purchasing equipment, or hiring additional workers.
Working Capital Loans: Assistance for managing day-to-day operational costs, such as purchasing raw materials or paying labor wages.
Sector-Specific Loans: Priority is given to industries that are traditionally dominated by women, such as textiles, handicrafts, and food processing.
The loans provided are project-specific, ensuring that funds are used effectively to support entrepreneurial goals.

Eligibility Criteria
The TREAD Scheme targets economically weaker women who have a viable business idea but lack the financial resources to implement it. The eligibility requirements are as follows:

Women from rural or semi-urban areas, particularly those below the poverty line or from marginalized communities.
Women-led self-help groups (SHGs) or joint liability groups (JLGs).
NGOs working with women entrepreneurs to develop and execute viable business projects.
Women with basic entrepreneurial skills and a viable business plan.
Role of NGOs
NGOs are a cornerstone of the TREAD Scheme. They act as facilitators by:

Identifying eligible women entrepreneurs.
Developing project proposals and submitting them to financial institutions.
Conducting training programs to enhance entrepreneurial skills.
Ensuring proper utilization of funds and supporting repayment processes.
The government provides grant assistance of up to 30% of the project cost directly to NGOs to ensure that they have the resources needed to execute the scheme effectively.

Why Was the TREAD Scheme Introduced?
The TREAD Scheme was introduced to address systemic issues that disproportionately affect women entrepreneurs in India, such as:

Lack of Access to Credit: Women in rural areas often lack the collateral or credit history required to secure loans from traditional banks.
Skill and Knowledge Gap: Many women lack the necessary skills to manage businesses effectively, such as financial planning, marketing, and operations management.
Economic Marginalization: Women, particularly in rural and semi-urban areas, often face societal barriers that limit their participation in economic activities.
The scheme aligns with India’s broader goals of economic inclusion and gender equality, focusing on creating a level playing field for women entrepreneurs.

Impact of the TREAD Scheme
Since its inception, the TREAD Scheme has made significant contributions to women’s empowerment in India:

Financial Empowerment: Thousands of women entrepreneurs have received financial assistance to start or expand their businesses, leading to increased incomes and financial independence.
Skill Development: The training programs have enhanced women’s entrepreneurial skills, improving their confidence and ability to manage businesses.
Economic Inclusion: The scheme has enabled women from marginalized communities to participate in mainstream economic activities, contributing to overall economic growth.
Promotion of Self-Help Groups: The scheme has strengthened SHGs, enabling women to pool resources and support each other in entrepreneurial ventures.
Challenges and Limitations
Despite its successes, the TREAD Scheme has faced some challenges:

Limited Awareness: Many eligible women are unaware of the scheme due to inadequate outreach and communication.
Dependency on NGOs: The scheme’s reliance on NGOs has sometimes led to uneven implementation, as the quality and reach of NGOs vary.
Low Financial Literacy: Women with limited financial knowledge often struggle to manage loans effectively, leading to repayment challenges.
Geographical Imbalance: The scheme has seen better implementation in certain regions, leaving others underserved.
Current Status
Although the TREAD Scheme remains a critical part of India’s MSME initiatives, its implementation and reach have been supplemented by other schemes, such as:

Pradhan Mantri Mudra Yojana (PMMY): Offering collateral-free loans to micro and small enterprises.
Stand-Up India Scheme: Targeting women and SC/ST entrepreneurs with loans for greenfield enterprises.
National Rural Livelihood Mission (NRLM): Supporting women SHGs in rural areas.
Conclusion
The Trade Related Entrepreneurship Assistance and Development (TREAD) Scheme for Women is a pioneering initiative that has significantly contributed to the economic empowerment of women in India. By combining financial assistance with skill development and capacity building, the scheme has enabled women to overcome systemic barriers and achieve financial independence. While challenges remain, the scheme’s innovative approach of partnering with NGOs and financial institutions ensures that it continues to be a vital tool for promoting gender equality in entrepreneurship. Its legacy lives on through the various financial products and support systems inspired by its principles, contributing to the broader goal of inclusive and sustainable economic growth in India.`,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 11", schemeInfo: "Sukanya Samriddhi Yojana (SSY)", schemeContent: `Sukanya Samriddhi Yojana (SSY): A Comprehensive Overview
Sukanya Samriddhi Yojana (SSY) is a savings scheme launched by the Government of India in January 2015, specifically designed to promote the welfare of the girl child. The scheme was introduced as a part of the Beti Bachao Beti Padhao campaign, which aims to address issues like the declining child sex ratio, female literacy, and economic empowerment of women in India. The Sukanya Samriddhi Yojana is a small, yet highly effective, initiative that encourages parents to save for the future of their daughters, particularly for their education and marriage. SSY not only aims to secure the financial future of girls but also works towards enhancing the social status of women in India, where gender bias and patriarchy continue to hinder female development in various ways.

The Sukanya Samriddhi Yojana is a government-backed savings scheme, which means that the money deposited into this account is fully safe and offers assured returns, making it a highly attractive option for parents looking to invest in their daughter's future. It provides a mixture of the benefits of both tax savings and interest accumulation, making it an effective financial tool for long-term planning. The SSY offers a combination of higher interest rates, tax exemptions, and government guarantees, which provide a sense of security to parents when planning for their daughter’s future.

Key Features and Details
Target Audience: The Sukanya Samriddhi Yojana is targeted at parents or legal guardians of a girl child. The girl child must be under the age of 10 years when the account is opened, though a few exceptions exist for children born before the scheme's implementation. A parent or guardian can open a single account for one girl child and up to two accounts for two girl children in a family, ensuring that the benefits of this initiative are available to multiple daughters.

Objective of the Scheme: The core objective behind the launch of SSY was to encourage savings for a girl child’s education and marriage expenses, both of which are significant financial burdens for families. By promoting a secure financial future for girls, the scheme also indirectly supports the idea of equal rights and opportunities for women, allowing them to access education, better health, and financial independence, which are often denied to them due to societal biases.

Interest Rate and Tax Benefits: One of the most attractive features of the Sukanya Samriddhi Yojana is the interest rate, which is typically higher than most other small savings schemes. As of recent updates, the interest rate stands at around 7.6% per annum (subject to quarterly revisions by the Government of India). This rate is compounded annually, ensuring that the savings grow steadily over time. Moreover, the interest earned on SSY accounts is exempt from tax under Section 80C of the Income Tax Act. This offers significant tax relief to parents who invest in the scheme.

The principal amount invested in the Sukanya Samriddhi Yojana is also eligible for tax deduction under Section 80C, making it a tax-efficient savings tool. Furthermore, the interest earned and the maturity amount are tax-free, making it an attractive investment for long-term goals like education or marriage.

Account Opening and Deposits: To open a Sukanya Samriddhi Yojana account, a minimum deposit of ₹250 is required at the time of account opening. Subsequent deposits must be made in multiples of ₹100, with the maximum yearly deposit allowed up to ₹1.5 lakh. The scheme mandates that a minimum annual deposit of ₹250 must be maintained to keep the account active. Deposits can be made in lump sum or via regular deposits, and the total deposit period for the scheme is 15 years from the date of opening the account.

The Sukanya Samriddhi Yojana allows for flexible deposit options, meaning parents can choose to make deposits on a monthly, quarterly, or yearly basis, depending on their financial comfort. The total duration for contributing to the account is 14 years, and the remaining year allows the account to mature, with the interest continuing to accrue.

Maturity Period and Withdrawal: The Sukanya Samriddhi Yojana account reaches maturity after 21 years from the date of account opening, irrespective of when the account holder turns 18. However, partial withdrawals are allowed under certain conditions:

After the girl reaches the age of 18, a partial withdrawal of up to 50% of the balance is allowed for the purpose of education.
Marriage-related withdrawals can be made when the girl reaches 18 years or after that, to meet wedding expenses.
The principal deposit amount and accrued interest are also provided upon maturity, which can be used to fund the girl’s education or other long-term expenses.

Withdrawal Conditions and Restrictions: While the SSY provides flexibility in terms of access to the accumulated amount, there are strict rules to ensure that the funds are used for the intended purpose of education and marriage. If the funds are used for purposes outside the specified goals, penalties or restrictions may apply.

Why Was the Scheme Introduced? The Sukanya Samriddhi Yojana was introduced as part of the broader Beti Bachao Beti Padhao campaign, a nationwide initiative aimed at empowering girls and women in India. Despite the efforts to promote gender equality, women in India still face financial dependency, lack of education, and early marriages, often due to societal expectations. The scheme was created to combat these challenges and ensure that girls have access to a financially secure future.

By opening a Sukanya Samriddhi Yojana account for their daughters, parents can take proactive steps to ensure that their daughters have the financial resources needed to pursue higher education, vocational training, or even start a career, without being dependent on family or societal constraints. This contributes to the empowerment of girls, allowing them to fulfill their aspirations and dreams.

Impact on Society and Women Empowerment: The Sukanya Samriddhi Yojana is not just a savings scheme; it plays a significant role in promoting women’s empowerment. By encouraging savings for the future of the girl child, the scheme fosters a sense of security and financial independence among young women. It helps reduce child marriage rates, ensures that girls complete their education, and provides them with the financial foundation they need to become independent, well-educated, and confident individuals in society.

Eligibility and Restrictions: As mentioned earlier, the scheme is available to parents or legal guardians of a girl child who is below 10 years of age. However, the scheme allows for exceptions, as children born before the introduction of the scheme can also benefit, provided they were under the age of 10 when it was launched in 2015. For each family, a maximum of two accounts are allowed, which can be for two different daughters.

Conclusion: The Sukanya Samriddhi Yojana is a robust financial instrument introduced by the Government of India to improve the financial security and empowerment of girl children across the country. With its high interest rates, tax exemptions, and targeted focus on education and marriage expenses, the SSY provides an invaluable opportunity for parents to invest in their daughter’s future. This scheme addresses the fundamental challenges faced by women in India and plays a pivotal role in breaking societal barriers, ensuring that future generations of girls grow up with the education and independence they deserve. As a result, Sukanya Samriddhi Yojana has become one of the most trusted and popular savings schemes for women and their families in India.`,
videoUrl:"https://www.youtube.com/embed/wMn9MbPKBug?si=IEq_2AMrNvcC9S9N" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    { schemeName: "Scheme 12", schemeInfo: "Pradhan Mantri Jan Dhan Yojana (PMJDY)", schemeContent: `Pradhan Mantri Jan Dhan Yojana (PMJDY): A Comprehensive Overview
Pradhan Mantri Jan Dhan Yojana (PMJDY) is a flagship financial inclusion scheme launched by the Government of India on August 28, 2014, with the primary objective of ensuring access to financial services for all, especially the underprivileged and unbanked population. The scheme was introduced by the then Prime Minister Narendra Modi, aiming to create an inclusive financial ecosystem for India's economically weaker sections. The PMJDY is considered one of the most significant financial reforms in India as it focuses on providing universal access to banking facilities, insurance, and pension services, empowering individuals, particularly women and the marginalized communities, with financial independence and security.

Objective and Vision
The core purpose of PMJDY is to bring the unbanked and underbanked population into the formal banking system. In India, a large portion of the rural and economically disadvantaged population did not have access to banking services, such as savings accounts, credit, or insurance. Through PMJDY, the government sought to address these gaps by ensuring that everyone, irrespective of their socio-economic background, could benefit from basic banking services, thus improving financial inclusion across the nation.

The overarching vision behind PMJDY was to integrate the poorest sections of society into the formal financial system and promote financial literacy, encourage savings, and facilitate access to credit. The program was designed to act as a stepping stone for individuals to avail themselves of loans, insurance, and other financial products, thereby uplifting their economic status.

Key Features of PMJDY
PMJDY offers several benefits to the people of India, and its unique features include:

Zero-Balance Accounts: One of the fundamental features of PMJDY is that it allows individuals to open a savings account without any minimum balance requirement. This is crucial for people in rural and semi-urban areas, where people might not have a regular income stream to maintain a minimum balance.

Accidental Insurance Cover: Every individual who opens an account under PMJDY is eligible for an accidental insurance cover of ₹2 lakh. This insurance is a significant safety net for individuals who are at a financial risk due to unforeseen accidents.

Overdraft Facility: After six months of opening the PMJDY account, the account holder can avail an overdraft facility of up to ₹10,000, which can be used as short-term credit. This facility is especially beneficial for those in need of urgent funds but without access to traditional loans due to a lack of credit history.

RuPay Debit Card: Each account holder is provided with a RuPay debit card, which allows them to make withdrawals, purchases, and payments at point-of-sale (POS) terminals, as well as access ATMs and online transactions. This facilitates seamless banking and financial transactions.

Direct Benefit Transfers (DBT): The scheme is closely linked with the government’s Direct Benefit Transfer (DBT) program. This ensures that government subsidies, like those for LPG, food grains, and pensions, are directly credited to the PMJDY account holders, cutting down on leakages and corruption.

Mobile Banking and Online Banking: PMJDY encourages the use of mobile banking and online banking, making banking services more accessible and convenient for rural and urban populations alike. This feature helps people manage their finances more effectively without having to visit a branch frequently.

Financial Literacy Programs: PMJDY is not just about opening accounts; it also includes efforts to improve financial literacy. The government has launched several campaigns and programs to educate people on budgeting, saving, and using digital financial tools to manage their accounts and finances better.

Credit Guarantee Fund: To further boost financial inclusion, PMJDY introduced a Credit Guarantee Fund, which aims to provide small loans to individuals, especially those without a credit history or collateral. This helps poor and rural people access loans for starting small businesses or other economic activities.

Target Audience
PMJDY targets India’s unbanked and underbanked population, with a particular focus on those in rural areas, women, and economically weaker sections. The scheme is primarily aimed at individuals who were previously excluded from the formal banking system, such as:

Low-income individuals: People in rural areas, daily wage workers, and those from economically disadvantaged sections of society.
Women: Recognizing the gender disparity in access to financial services, the scheme has been particularly successful in encouraging women to open their accounts, empowering them financially and socially.
Senior Citizens: The scheme also benefits the elderly by providing them access to social security schemes, pensions, and direct benefit transfers.
Small Traders and Farmers: People engaged in small businesses, agriculture, or self-employment can avail themselves of small loans, insurance, and pension schemes under PMJDY.
Why Was PMJDY Introduced?
Before the launch of PMJDY, India faced significant challenges regarding financial inclusion. Millions of individuals, particularly in rural and remote areas, did not have access to basic banking facilities, which severely hindered their ability to save, invest, or access credit. The reasons behind this were numerous, including:

Lack of physical infrastructure: Many remote areas lacked physical bank branches, making it difficult for people to access financial services.
Low financial literacy: A large proportion of the population had limited understanding of banking and financial services.
Inadequate access to credit: Due to the absence of formal banking relationships, many individuals, especially women and the poor, were unable to access loans or credit.
Exclusion from government welfare schemes: A significant portion of the population was excluded from government schemes due to the lack of a formal banking account.
PMJDY was introduced to bridge this gap by leveraging India’s growing mobile and digital infrastructure, ensuring that everyone could have a bank account, access government subsidies, and benefit from various financial services.

Implementation Timeline and Milestones
The Pradhan Mantri Jan Dhan Yojana was launched on August 28, 2014, with the objective of providing universal access to banking facilities. The first phase of the scheme aimed at opening accounts for individuals in rural and remote areas. By 2018, the scheme had successfully reached over 31 crore beneficiaries, and the numbers continued to grow. In the subsequent phases, PMJDY also incorporated features like the RuPay debit card, mobile banking, and linkage with government welfare schemes.

One of the most notable milestones of PMJDY was the financial literacy drives and banking outreach programs. These programs were conducted by banks in collaboration with various government agencies and non-profit organizations to teach people about budgeting, savings, and digital banking.

Challenges and Criticism
While PMJDY achieved remarkable success in expanding access to banking, it also faced several challenges:

Bank Branch Accessibility: Although digital banking has grown, some remote areas still struggle with internet connectivity and access to physical bank branches.
Financial Literacy: Despite efforts, financial literacy remains low in some rural areas, hindering effective use of banking products and services.
Overdraft Utilization: Many individuals, particularly in rural areas, have not fully utilized the overdraft facilities, possibly due to a lack of financial understanding or fear of borrowing.
Conclusion
The Pradhan Mantri Jan Dhan Yojana has been a transformative initiative in India, revolutionizing access to financial services for millions of citizens. By offering zero-balance accounts, insurance, overdraft facilities, and linking beneficiaries to direct benefit transfers, PMJDY has ensured that the poorest and most marginalized populations have access to banking. Although challenges remain, particularly regarding financial literacy and infrastructure in remote areas, the scheme has been a key step toward making financial inclusion a reality in India, promoting social and economic empowerment for millions of people. As India continues to move toward a cashless, inclusive economy, PMJDY remains a cornerstone of these efforts, paving the way for greater economic participation and self-reliance.`,
videoUrl: "https://www.youtube.com/embed/uQEAMlKEXMA?si=5_jOY1_mU63RP96s" ,
faq: [
  { question: "What is Scheme 1?", answer: "This is Scheme 1 answer." },
  { question: "How can I apply for Scheme 1?", answer: "You can apply via the official website." },
  { question: "What are the benefits of Scheme 1?", answer: "This scheme offers financial aid to women." },
  { question: "Who is eligible for Scheme 1?", answer: "Women entrepreneurs are eligible." },
  { question: "What is the deadline for Scheme 1?", answer: "The deadline is end of the year." }
] },
    // { schemeName: "Scheme 13", schemeInfo: "Info about scheme 13", schemeContent: "Detailed content of Scheme 13." },
    // { schemeName: "Scheme 14", schemeInfo: "Info about scheme 14", schemeContent: "Detailed content of Scheme 14." }
  ];

  // document.body.innerHTML = boxes[0].schemeContent.replace(/\n/g, "<br>");

//   boxes.forEach(box => {
//     const content = box.schemeContent.replace(/\n/g, "<br>");
//     document.body.innerHTML += `<p>hello world</p>`;
// });




   // Handle box click
   const handleBoxClick = (index) => {
    setSelectedBox(index);

    // Use a timeout to wait for the help-box to be rendered before accessing it
  setTimeout(() => {
    const helpBox = document.getElementById('help-box');
    if (helpBox) {
      helpBox.classList.add(styles.show);
      setTimeout(() => {
        helpBox.classList.add(styles.shrink);
      }, 3000); // 5 seconds
    }
  }, 0); // Delay by a minimal amount of time to ensure the DOM updates
  };

  const handleChatClicked = ()  => {
    setIsCircleClicked(true);
    setReadyToCHat(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setUserQuestion(e.target.value);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (userQuestion.trim()) {
      // Add user question
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userQuestion },
      ]);

       // Simulate chatbot response with typing animation
       setIsTyping(true);
       setTimeout(() => {
         setChatMessages((prevMessages) => [
           ...prevMessages,
           { sender: 'chatbot', text: "I'm here to help!" },
         ]);
         setIsTyping(false);  // Stop typing animation
       }, 4000); // Chatbot responds after 2 seconds
 
       // Clear user input
       setUserQuestion('');
     }
  };


  const handleBackButton = () => {
    // setIsCircleClicked(false); 
    setSelectedBox(null);
    setChatMessages([]);

  }
  const handleOpenSideNav = () => { setSideNavOpen(true);};
  const handleCloseSideNav = () => { setSideNavOpen(false);};

  const toggleFaq = (index) => {
    if (faqOpen === index) {
      setFaqOpen(null); // Close the FAQ if it's already open
    } else {
      setFaqOpen(index); // Open the selected FAQ
    }
  };

  return (
    <div className="container">
      <div className={`${styles.schemebot} schemebot`}>
      <div className={styles.app}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>Logo</h1>
          <div className={styles.rightContent}>
            <Link to="/" style={{color:"white", textDecoration:"none", marginRight:"30px"}}><p>Home</p></Link>
            <button className={styles.navButton} onClick={handleOpenSideNav}>
              Menu
            </button>
          </div>
        </div>
      </nav>

      <div
        className={
          isSideNavOpen
            ? `${styles.sideNav} ${styles.open}`
            : `${styles.sideNav}`
        }
      >
        <button className={styles.closeButton} onClick={handleCloseSideNav}>
          &times;
        </button>
        <ul className={styles.sideNavLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>


    <div className={`${styles.schemesTopicsContainer} schemesTopicsContainer`}>


      {/* If no box is selected, show the grid of boxes */}
      {selectedBox === null ? (
        <div className={styles.boxContainer}>
          <h1>List of Schemes</h1>
          {boxes.map((box, index) => (
            <div
              key={index}
              className={styles.box}
              onClick={() => handleBoxClick(index)}
            >
              <h3>{box.schemeName}</h3>
              <p>{box.schemeInfo}</p>
            </div>
          ))}
        </div>
      ) : (
        // If a box is selected, show its full content
        <div className={styles.fullContent}>
          <h2>{boxes[selectedBox].schemeName}</h2>
          {/* <p>{boxes[selectedBox].schemeContent}</p> */}
          <p dangerouslySetInnerHTML={{
                __html: boxes[selectedBox].schemeContent.replace(/\n/g, "<br />")
              }} />

{/* Video Section */}
                 <div className={styles.videoSection}>
                  <iframe
                    width="100%"
                    height="315"
                    src={boxes[selectedBox].videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

              {/* FAQ Section */}
              <div className={styles.faqSection}>
                <h3>Frequently Asked Questions</h3>
                {boxes[selectedBox].faq.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <div
                      className={styles.faqQuestion}
                      onClick={() => toggleFaq(index)}
                    >
                      <strong>{faq.question}</strong>
                    </div>
                    <div
                      className={`${styles.faqAnswer} ${faqOpen === index ? styles.show : ""}`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
          <button onClick={handleBackButton} className={styles.backButton}>
            
            Go Back
          </button>
          {/* Help Box */}
          { readyToChat && <div id="help-box" className={styles.helpBox} onClick={handleChatClicked}>
            <p>Hey! I'm here to help about our scheme. Feel free to ask questions and doubts!</p>
            <div className={`${styles.schemeBotImg} schemeBotImg`}></div>
          </div> }

          {/* Floating Circle that becomes a chat box */}
        {isCircleClicked && (
          <div className={styles.chatBox}>
            <div className={styles.chatHeader}>
              <div className={styles.chatBubbleContainer}>
                {chatMessages.map((message, index) => (
                  <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                    {message.text}
                  </div>
                ))}
                {isTyping && (
                  <div className={styles.typingIndicator}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.chatInputContainer}>
              <input
                type="text"
                value={userQuestion}
                onChange={handleInputChange}
                className={styles.chatInput}
                placeholder="Ask a question..."
              />
              <button onClick={handleSendMessage} className={styles.chatSendButton}>
                Send
              </button>
              <img src={schemeBotIcon} alt="Chatbot" className={styles.chatbotImage} />
            </div>
          </div>
        )}

          
        </div>
      )}
      </div>
      </div>
    </div>
  )
}

export default Schemesbot