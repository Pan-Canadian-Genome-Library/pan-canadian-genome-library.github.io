---
# This is the front matter - all docs on our site need front matter for Bioschemas markup.
# The mandatory fields you need to provide are: "@id", "name", "description" and "keywords"
# You must include, but do not need to edit the fields: "@context", "@type", and "dct:conformsTo" 
# Please also include: "author", "audience", "inLanguage", "license", "learningResourceType", "url", and "datePublished"
# Optional fields are: "dateModified", "contributor", and any other relevant Bioschemas fields
head:
  - tag: script
    attributes:
        type: application/ld+json
    content: |
        {
          "@context": "https://schema.org",
          "@type": "TrainingMaterial",
          "http://purl.org/dc/terms/conformsTo": {
            "@id": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
            "@type": "CreativeWork"
            },
          "@id": "URL of the material",
          "name": "Title of the material",
          "description": "A brief description of the material",
          "keywords": "A few keywords separated by commas",
          "author": {
            "@type": "Person",
            "name": "Author Name"
            },
          "audience": "A brief description of the intended audience",
          "inLanguage": ["en-US", "fr-FR"],
          "license": "https://creativecommons.org/licenses/by-sa/4.0/",
          "learningResourceType": "tutorial",
          "url": "URL of the material",
          "datePublished": "2025-08-21T14:46:00+00:00",
          "dateModified": "2025-08-21T14:46:00+00:00",
          "contributor": {
            "@type": "Person",
            "name": "Author Name"
            }
        }
---

# Template

This template is to be used for PCGL documentation.

## Overview
### Purpose
**This guide is for** [target audience] who need to [primary goal/task]. By the end of this guide you will [specific learning outcomes/deliverables].

### Prerequisites
**You will need:**
- [Required software/tools with versions]
- [Required access/permissions]
- [Required background knowledge]
- [Time estimate if applicable]

### Background Information
Provide a short description here, containing any essential information needed to understand the guide.

## Process
In this section, list the major steps that will be taken. For example, if the objective is to apply for access to controlled data, the major steps could be:
1. Find a dataset of interest
2. Create an account
4. Complete and submit the application
5. [Whatever steps the user takes after the application is reviewed]

### 1. Step Subheadings
Use numbered subheadings for each overall step to be taken. Using the example above, this section would contain information on finding a dataset of interest (i.e. references to the documentation on the research portal), and the next section would be about account creation.

1. Give stepwise instructions on what to do, using numbered lists.
2. Include screenshots where relevant

``` 
Codeblocks are also useful
- State the language used
- Provide paths where relevant
    - e.g. markdown title="docs/04-template.md"
```
```markdown title="docs/04-template.md"
This is what the example above looks like
```


#### 1.1. Sub-steps
If there are many sub-steps within an overall step, it may be useful to use additional levels of nesting.

Alternatively, consider if the topic for the guide is too broad and separate guides should be developed for the steps within your guide. This site allows us to nest documentation, so we can store related guides together. For example, our site can follow a structure like this:

- Data Submission
- Research Portal
- Data Access
    - Applying for Access to Controlled Data
    - DACO FAQs

## Conclusion
Describe briefly the outcomes of following the guide, as well as the next steps.
Include a call to action, like the one below.

:::info Next Steps
Check out [Overture Documentation Standards > Creating Guides](https://docs.overture.bio/docs/documentation-standards/guides/#best-practices) for best practices on writing documentation.
:::

### Acknowledgements
This template has been adapted for PCGL documentation from [Overture Documentation Standards > Creating Guides](https://docs.overture.bio/docs/documentation-standards/guides). 

Reference for Overture:
Shiell, M., Bajari, R., Andric, D., Eubank, J., Chan, B. F., Richardsson, A. J., ... Yung, C. K. (2025).
Overture: an open-source genomics data platform. GigaScience, 14, giaf038.
https://doi.org/10.1093/gigascience/giaf038