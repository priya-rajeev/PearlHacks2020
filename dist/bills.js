let billNames = [
    {
        "topic": "Agriculture, FY 2019 (Appropriations)"
    },
    {
        "topic": "Agriculture, FY 2020 (Appropriations)"
    },
    {
        "topic": "Budget for FY 2020 & 2021 (suspends the debt limit through July 31, 2021) (Appropriations)"
    },
    {
        "topic": "Budget for FY 2020 (Appropriations)"
    },
    {
        "topic": "Campaign, Ethics, Lobbying and Voting Reform"
    },
    {
        "topic": "Coast Guard, through FY 2021 (Agency Authorizations)"
    },
    {
        "topic": "Commerce, Justice, and Science, FY 2020 (Contains Agriculture, Interior and Environment, Military Construction and Veterans Affairs, & Transportation and HUD (Appropriations)"
    },
    {
        "topic": "Consolidated Appropriations, FY 2019 (Contains Agriculture; Commerce, Justice, and Science; Financial Services; Homeland Security; Interior and Environment; State and Foreign Operations; & Transportation and HUD (Appropriations)"
    },
    {
        "topic": "Consolidated Appropriations, FY 2019 (Contains Agriculture; Commerce, Justice, and Science; Financial Services; Interior and Environment; State and Foreign Operations; & Transportation and HUD (Appropriations)"
    },
    {
        "topic": "Consolidated Appropriations, FY 2020 (Contains Commerce, Justice, and Science; Defense; Financial Services and General Government; & Homeland Security (Appropriations)"
    },
    {
        "topic": "Defense, FY 2020 (Agency Authorizations)"
    },
    {
        "topic": "Defense, FY 2020 (Appropriations)"
    },
    {
        "topic": "Dream Act"
    },
    {
        "topic": "Drug Pricing"
    },
    {
        "topic": "Energy and Water, FY 2020 (Appropriations)"
    },
    {
        "topic": "Equality Act"
    },
    {
        "topic": "Export-Import Bank, through FY 2029 (Agency Authorizations)"
    },
    {
        "topic": "Financial Services and General Government, FY 2019 (Appropriations)"
    },
    {
        "topic": "Financial Services and General Government, FY 2020 (Appropriations)"
    },
    {
        "topic": "Further Consolidated Appropriations, FY 2020 (Contains Agriculture; Energy and Water; Interior and Environment; Labor, Health and Human Services; Legislative Branch; Military Construction and Veterans Affairs; State and Foreign Operations; & Transportation and HUD (Appropriations)"
    },
    {
        "topic": "FY 2019 Continuing Resolution, through February 15, 2019 (Appropriations)"
    },
    {
        "topic": "FY 2019 Continuing Resolution, through February 8, 2019 (Contains Homeland Security) (Appropriations)"
    },
    {
        "topic": "FY 2020 Continuing Resolution, through December 20, 2019 (Contains Further Health Extenders Act of 2019) (Appropriations)"
    },
    {
        "topic": "FY 2020 Continuing Resolution, through November 21, 2019 (Contains Health Extenders Act of 2019) (Appropriations)"
    },
    {
        "topic": "Green New Deal Resolution, recognition"
    },
    {
        "topic": "Health Emergency Preparedness Programs, through FY 2023 (Program Authorizations)"
    },
    {
        "topic": "Homeland Security, FY 2020 (Appropriations)"
    },
    {
        "topic": "Impeachment, articles"
    },
    {
        "topic": "Impeachment, inquiry"
    },
    {
        "topic": "Impeachment, Senate rules"
    },
    {
        "topic": "Intelligence, through FY 2020 (Agency Authorizations)"
    },
    {
        "topic": "Interior and Environment, FY 2019 (Appropriations)"
    },
    {
        "topic": "Interior and Environment, FY 2020 (Appropriations)"
    },
    {
        "topic": "Labor, HHS and Education, FY 2020 (Contains Labor, HHS, and Education; Defense; Energy and Water; & State and Foreign Operations) (Appropriations)"
    },
    {
        "topic": "Legislative Branch, FY 2020 (Appropriations)"
    },
    {
        "topic": "Middle East Policy (Includes Syria, Israel, and Jordan)"
    },
    {
        "topic": "Military Construction and Veterans Affairs, FY 2020 (Appropriations)"
    },
    {
        "topic": "Minimum Wage, increase"
    },
    {
        "topic": "Mueller Report, public"
    },
    {
        "topic": "National Emergency Declaration, relating to"
    },
    {
        "topic": "National Flood Insurance, through June 14, 2019 (Program Authorizations)"
    },
    {
        "topic": "Net Neutrality"
    },
    {
        "topic": "Nomination Consideration, rule change"
    },
    {
        "topic": "Paycheck Fairness"
    },
    {
        "topic": "Pesticide Registration, through FY 2023 (Agency Authorizations)"
    },
    {
        "topic": "Public Lands (Contains reauthorization of the Land and Water Conservation Fund)"
    },
    {
        "topic": "Robocalls, restrict"
    },
    {
        "topic": "September 11th Victim Compensation Fund, permanent (Program Authorizations)"
    },
    {
        "topic": "State and Foreign Operations, FY 2020 (Appropriations)"
    },
    {
        "topic": "State, through FY 2022 (contains assistance to El Salvador, Guatemala, and Honduras) (Agency Authorizations)"
    },
    {
        "topic": "Supplemental Appropriations (Disaster Aid), FY 2019 (Appropriations)"
    },
    {
        "topic": "Supplemental Appropriations, (emergency border funding) (Appropriations)"
    },
    {
        "topic": "Supplemental Appropriations, FY 2019 (Appropriations)"
    },
    {
        "topic": "Transportation and HUD, FY 2019 (Appropriations)"
    },
    {
        "topic": "Transportation and HUD, FY 2020 (Appropriations)"
    },
    {
        "topic": "USMCA, implementing"
    },
    {
        "topic": "Violence Against Women, through FY 2024 (Program Authorizations)"
    },
    {
        "topic": "Wild Bird Conservation, through FY 2025 (Program Authorizations)"
    },
    {
        "topic": "Yemen, remove U.S. Armed Forces from hostilities"
    },
    {
        "topic": "Abortion, 20-week ban"
    },
    {
        "topic": "Abortion, no taxpayer funding"
    },
    {
        "topic": "Agriculture, FY 2018 (Appropriations)"
    },
    {
        "topic": "Agriculture, FY 2019 (Appropriations)\nSEE ALSO:Minibus II"
    },
    {
        "topic": "Anti-harassment training"
    },
    {
        "topic": "Banking deregulation"
    },
    {
        "topic": "Broadband internet access service as an information service and mobile broadband internet access service as a private mobile radio service, congressional disapproval of the rule"
    },
    {
        "topic": "Budget Resolution for FY 2017 (Appropriations)"
    },
    {
        "topic": "Budget Resolution for FY 2018 (Appropriations)"
    },
    {
        "topic": "Budget Resolution for FY 2019 (Appropriations)"
    },
    {
        "topic": "CHIP (Program Authorizations)"
    },
    {
        "topic": "Coast Guard, through FY 2019 (Agency Authorizations)"
    },
    {
        "topic": "Commerce, Justice, and Science, FY 2018 (Appropriations)"
    },
    {
        "topic": "Commerce, Justice, and Science, FY 2019 (Appropriations)"
    },
    {
        "topic": "Consolidated Appropriations, FY 2017 (Appropriations)"
    },
    {
        "topic": "Criminal justice reform"
    },
    {
        "topic": "D.C. Council Death with Dignity law, repeal"
    },
    {
        "topic": "Defense, FY 2018 (Agency Authorizations)"
    },
    {
        "topic": "Defense, FY 2018 (Appropriations)"
    },
    {
        "topic": "Defense, FY 2019 (Agency Authorizations)"
    },
    {
        "topic": "Defense, FY 2019 (Contains FY 2019 Labor, HHS and Education and Continuing Resolution, through December 7, 2018) (Appropriations)"
    },
    {
        "topic": "Disaster Relief Supplemental (Appropriations)"
    },
    {
        "topic": "Disaster Relief Supplemental (Appropriations)"
    },
    {
        "topic": "Dodd-Frank, repeal"
    },
    {
        "topic": "Energy and Water, FY 2018 (Appropriations)"
    },
    {
        "topic": "Energy and Water, FY 2019 (Appropriations)\nSEE ALSO:Minibus I"
    },
    {
        "topic": "FAA, through FY 2023 (Contains Hurricane Florence aid) (Agency Authorizations)"
    },
    {
        "topic": "FAA, through March 2018 (Agency Authorizations)"
    },
    {
        "topic": "Farm bill"
    },
    {
        "topic": "FCC, FY 2019-FY 2020 (Agency Authorizations)"
    },
    {
        "topic": "FDA, FY 2018-FY 2022 (Agency Authorizations)"
    },
    {
        "topic": "Financial Services, FY 2018 (Appropriations)"
    },
    {
        "topic": "Financial Services, FY 2019 (Appropriations)\nSEE ALSO:Minibus II"
    },
    {
        "topic": "FISA, through FY 2023 (Program Authorizations)"
    },
    {
        "topic": "Flood insurance reform"
    },
    {
        "topic": "FY 2017 Continuing Resolution, through May 5, 2017 (Appropriations)"
    },
    {
        "topic": "FY 2018 Continuing Resolution, through December 22, 2017 (Contains temporary funding fix for CHIP) (Appropriations)"
    },
    {
        "topic": "FY 2018 Continuing Resolution, through December 8, 2017 (Contains Hurricane Harvey aid and short term debt limit suspension) (Appropriations)"
    },
    {
        "topic": "FY 2018 Continuing Resolution, through February 8, 2018 (Contains CHIP funding for FY 2018 to FY 2023) (Appropriations)"
    },
    {
        "topic": "FY 2018 Continuing Resolution, through January 19, 2018 (Contains missile defense and funding extension for CHIP) (Appropriations)"
    },
    {
        "topic": "FY 2018 Continuing Resolution, through March 23, 2018 (Contains budget caps for FY 2018 and FY 2019, debt limit suspension through March 1, 2019, tax extenders, disaster aid, and CHIP funding through 2027) (Appropriations)"
    },
    {
        "topic": "FY 2019 Continuing Resolution, through December 21, 2018 (Appropriations)"
    },
    {
        "topic": "FY 2019 Continuing Resolution, through February 8, 2019 (Appropriations)"
    },
    {
        "topic": "Gun legislation, concealed carry"
    },
    {
        "topic": "Harassment reporting in Congress, overhaul"
    },
    {
        "topic": "Health care, repeal and replace ACA"
    },
    {
        "topic": "HHS family planning grants and states rule, congressional disapproval of the rule"
    },
    {
        "topic": "Homeland Security (Agency Authorizations)"
    },
    {
        "topic": "Homeland Security, FY 2018 (Appropriations)"
    },
    {
        "topic": "Homeland Security, FY 2019 (Appropriations)"
    },
    {
        "topic": "Immigration and border security"
    },
    {
        "topic": "Immigration and border security, compromise"
    },
    {
        "topic": "Intelligence, FY 2017 (Agency Authorizations)"
    },
    {
        "topic": "Intelligence, FY 2018 (Agency Authorizations)"
    },
    {
        "topic": "Intelligence, FY 2018 and 2019 (Agency Authorizations)"
    },
    {
        "topic": "Interior and Environment, FY 2018 (Appropriations)"
    },
    {
        "topic": "Interior and Environment, FY 2019 (Appropriations)\nSEE ALSO:Minibus II"
    },
    {
        "topic": "JOBS Act 3.0"
    },
    {
        "topic": "Labor, HHS and Education, FY 2018 (Appropriations)"
    },
    {
        "topic": "Labor, HHS and Education, FY 2019 (Appropriations)"
    },
    {
        "topic": "Legislative Branch, FY 2018 (Appropriations)"
    },
    {
        "topic": "Legislative Branch, FY 2019 (Appropriations)\nSEE ALSO:Minibus I"
    },
    {
        "topic": "Methane from oil and gas operations on federal lands, congressional disapproval of the rule"
    },
    {
        "topic": "Military Construction and Veterans Affairs, FY 2018 (Appropriations)"
    },
    {
        "topic": "Military Construction and Veterans Affairs, FY 2019 (Appropriations)\nSEE ALSO:Minibus I"
    },
    {
        "topic": "Miners' health benefits, extend permanently"
    },
    {
        "topic": "Minibus (FY 2018 Appropriations for Defense, Energy and Water, Legislative Branch, & Military Construction and Veterans Affairs) (Appropriations)"
    },
    {
        "topic": "Minibus I (FY 2019 Appropriations for Energy and Water, Legislative Branch, & Military Construction and Veterans Affairs) (Appropriations)"
    },
    {
        "topic": "Minibus II (FY 2019 Agriculture, Financial Services, Interior and Environment, & Transportation and HUD) (Appropriations)"
    },
    {
        "topic": "NASA, FY 2017 (Agency Authorizations)"
    },
    {
        "topic": "NASA, FY 2018-2019 (Agency Authorizations)"
    },
    {
        "topic": "National Drug Control, through FY 2023 (Program Authorizations)"
    },
    {
        "topic": "National Flood Insurance, through December 7, 2018 (Program Authorizations)"
    },
    {
        "topic": "National Flood Insurance, through May 31, 2019 (Program Authorizations)"
    },
    {
        "topic": "National Flood Insurance, through November 2018 (Program Authorizations)"
    },
    {
        "topic": "Omnibus (FY 2018 Appropriations for Interior and Environment, Agriculture, Commerce, Justice, and Science, Financial Services, Homeland Security, Labor, HHS and Education, State and Foreign Operations & Transportation and HUD) (Appropriations)"
    },
    {
        "topic": "Omnibus, FY 2018 (Appropriations)"
    },
    {
        "topic": "Opioid crisis response"
    },
    {
        "topic": "Reconciliation bill\nSEE:Health care, repeal and replace ACA"
    },
    {
        "topic": "Rescissions"
    },
    {
        "topic": "Russia, Iran, and North Korea sanctions"
    },
    {
        "topic": "SEC Resource Extraction, congressional disapproval of the rule"
    },
    {
        "topic": "SSA background check gun rule, congressional disapproval of the rule"
    },
    {
        "topic": "State and Foreign Operations, FY 2018 (Appropriations)"
    },
    {
        "topic": "State and Foreign Operations, FY 2019 (Appropriations)"
    },
    {
        "topic": "Stream protection, congressional disapproval of the rule"
    },
    {
        "topic": "Tax adjustments"
    },
    {
        "topic": "Tax reform 2.0"
    },
    {
        "topic": "Tax reform"
    },
    {
        "topic": "Trafficking Victims Prevention, through FY 2021 (Program Authorizations)"
    },
    {
        "topic": "Transportation and HUD, FY 2018 (Appropriations)"
    },
    {
        "topic": "Transportation and HUD, FY 2019 (Appropriations)\nSEE ALSO:Minibus II"
    },
    {
        "topic": "VA Health Care"
    },
    {
        "topic": "Water resources development"
    },
    {
        "topic": "Yemen, military assistance"
    }
]