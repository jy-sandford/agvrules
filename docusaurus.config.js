const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkFootnotes = require('remark-footnotes');
const remarkAdmonitions = require('remark-admonitions');
const definitionsPlugin = require('./definitions');
const bylawLinksPlugin = require('./bylawlinksplugin');
const highlightPlugin = require('./highlight');
const subnumberingPlugin = require('./subnumbering');
const webpackPlugin = require('./webpackplugin');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'AGV Rules',
  tagline: 'Browsable governance',
  url: 'https://australiangreens.github.io',
  baseUrl: '/agvrules/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'australiangreens', // Usually your GitHub org/user name.
  projectName: 'agvrules', // Usually your repo name.
  trailingSlash: true,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: undefined,
          remarkPlugins: [
            [remarkFootnotes, { }],
            [remarkAdmonitions, {
              tag: ":::",
              icons: "emoji",
              infima: true,
              customTypes: {
                "effectivefrom": {
                  ifmClass: 'warning',
                  emoji: '⌛'
                }
              }
            }],
            [bylawLinksPlugin, {}],
            [definitionsPlugin, { definitions: {
              "AA": "Affirmative Action",
              "AEC": "Australian Electoral Commission",
              "AF": "Audit and Finance Committee",
              "AG": "Australian Greens",
              "AG": "Attorney-General",
              "AGPCC": "Australian Greens Policy Coordination Committee",
              "AGM": "Annual General Meeting",
              "AGV": "Australian Greens Victoria",
              "ALP": "Australian Labor Party",
              "AJP": "Animal Justice Party",
              "AIR": "Associations Incorporation Reform Act ",
              "APH": "Australian Parliament House",
              "ARP": "Administrative Review Panel",
              "AssSec": "Assistant Secretary",
              "ASS": "Assistant State Secretary",
              "AusPol": "Australian Politics",
              "AYG": "Australian Young Greens",
              "BRT": "Branch Reporting Tool",
              "CAV": "Consumer Affairs Victoria",
              "CEPWG": "Climate and Energy Policy Working Group",
              "CGN": "Country Greens Network",
              "CiviCRM": "Civi Customer Relationship Management (It’s just CiviCRM or Civi)",
              "CMT": "Campaign Management Team",
              "COM": "Committee of Management (In existence in some state Greens)",
              "Conf": "Conference",
              "CoS": "Chief of Staff",
              "CRP": "Constitutional Review Panel",
              "Co-Co": "Co-Convenor",
              "DIM": "Decisions Implementation Matrix",
              "DRG": "Donations Reference Group",
              "DRO": "Deputy Returning Officer",
              "EAP": "Employee Assistance Program",
              "ECC": "Election/Electorate Campaign Committee",
              "EGM": "Extraordinary General Meeting",
              "EMRC": "Eastern Metro Regional Council",
              "EMS": "Election Management System",
              "EoI": "Expressions of Interest",
              "ERC": "Endorsement Review Committee",
              "ETS": "Emissions Trading Scheme",
              "Exec": "State Executive",
              "FAIC": "Finance, Administration and Infrastructure Committee",
              "FNN": "First Nations Network",
              "GG": "Global Greens",
              "GIG": "Global Issues Group",
              "GPEW": "Greens Party of England & Wales",
              "GM": "(Ordinary) General Meeting",
              "GMO": "Genetically Modified Organisms",
              "GRN": "Greens",
              "GVIRS": "Grassroots Voter Interaction Recording System",
              "HoR": "House of Representatives",
              "HRC": "Human Rights Commission",
              "HtV": "How to Vote",
              "HTVC": "How to Vote Card",
              "ICAC": "Independent Commission Against Corruption",
              "IRV": "Instant Runoff Voting",
              "IP Policy": "Israel/Palestine Resolution",
              "JSJ": "Jordon Steele-John",
              "J-Greens": "Jewish Greens",
              "LAB": "Australian Labor Party",
              "LEAN": "Labor Environment Action Network",
              "LG": "Local Government",
              "LGA": "Local Government Area",
              "LGC": "Local Government Councillors",
              "LGBTIQA+": "Lesbian, Gay, Bisexual, Trans, Intersex, Queer, Asexual/Aromantic",
              "LNP": "Liberal National Party",
              "LIB": "Liberal Party",
              "LO": "Leader’s Office",
              "LP": "Liberal Party",
              "LRRR": "Left Renewal Renewal Renewal",
              "LR": "The OG Left Renewal",
              "MEC": "Membership Engagement Committee ",
              "MeP": "Mediation Panel",
              "MGV": "Multicultural Greens Victoria",
              "MiP": "Misconduct Panel",
              "MLA": "Member (of) Legislative Assembly (not commonly used in VIC, see MP)",
              "MLC": "Member (of) Legislative Council (Victorian state parliament upper house)",
              "MP": "Member (of) Parliament",
              "MTC": "Meet The Candidates (sometimes called Hustings)",
              "NAC": "National Affairs Committee (now NCC)",
              "NatCon": "National Conference",
              "NB": "NationBuilder",
              "NC": "National Council",
              "NCC": "National Conference Committee",
              "NM": "Northern Metropolitan region",
              "NVRSECC": "Northern Victoria Regional Standing Campaign Committee",
              "OB": "Office Bearer",
              "ON": "One Nation",
              "PDWG": "Participatory Democracy Working Group",
              "PCC": "Policy Coordination Committee",
              "PHON": "Pauline Hanson’s One Nation",
              "PR": "Party Room",
              "PSC": "Policy Steering Committee",
              "PWDWG": "People With Disabilities Working Group",
              "PWG": "Policy Working Group",
              "QDMG": "Quick Decision Making Group",
              "QGV": "Queer Greens Victoria",
              "RDN": "Richard Di Natali",
              "RO": "Returning Officer",
              "ROCkET": "Recruit, Organise, Campaign, Engagement Tool",
              "RR": "Risk Register",
              "SAlt": "Socialist Alternatives",
              "SC": "State Council",
              "SD": "State Director",
              "SDC": "State Delegates Council (used in other states)",
              "SFC": "Seek Further Candidate",
              "SGM": "Special General Meeting",
              "SHY": "Sarah Hanson-Young",
              "SM": "Southern Metropolitan region",
              "STV": "Single Transferable Vote",
              "SECC": "Standing Election Campaign Committee Report",
              "SEMRC": "South Eastern Metro Regional Council",
              "SO": "State Office",
              "STEM": "Statewide Tool for Election Management",
              "TGDNB": "Trans, Gender Diverse, and Non-Binary",
              "ToR": "Terms of Reference",
              "VEC": "Victorian Election Commission",
              "VEOHRC": "Victorian Equal Opportunity and Human Rights Commission",
              "Vic": "Victoria",
              "VicPol": "Victorian Politics",
              "VicPol": "Victorian Police",
              "VicSoc": "Victorian Socialists",
              "VCAT": "Victorian Civil and Administrative Tribunal",
              "VCC": "Victorian Campaign Committee",
              "VG": "Victorian Greens",
              "VGWN": "Victorian Greens Women's Network",
              "VLGA": "Victorian Local Government Association",
              "VPD": "Victorian Positions Document",
              "VPL": "Victorian Pride Lobby",
              "VYG": "Victorian Young Greens",
              "WVRCC": "Western Victoria Regional Campaign Committee",
              "most senior member of the agv staff": "State Director",
              "most senior agv staff member": "State Director",
              "most senior staff member": "State Director",
            } } ]
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      docsRouteBasePath: '/',
      highlightSearchTermsOnTargetPage: true,
      searchResultLimits: 10,
      searchResultContextMaxLength: 100
    }],
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        createRedirects: function (existingPath) {
          if (existingPath.startsWith('/bylaws/')) {
            const matches = existingPath.match(/[0-9]{2}/);
            if (matches) {
              const bylawNumber = matches[0];
              const shortLink = `/bylaws/${bylawNumber}`;
              const shorterLink = `/bylaws/${parseInt(bylawNumber)}`;
              return shortLink === shorterLink ? [shortLink] : [shortLink, shorterLink];
            }
          }
          if (existingPath.startsWith('/proposed-constitution/')) {
            const scheduleMatches = existingPath.match(/(?:schedule-)([0-9]{2})/);
            if (scheduleMatches) {
              const scheduleNumber = scheduleMatches[1];
              const shortLink = `/proposed-constitution/schedule-${scheduleNumber}`;
              const shorterLink = `/proposed-constitution/schedule-${parseInt(scheduleNumber)}`;
              return shortLink === shorterLink ? [shortLink] : [shortLink, shorterLink];
            }
          }
        },
      },
    ],
    [highlightPlugin, {}],
    [subnumberingPlugin, {}],
    [webpackPlugin, {}],
    // [
    //   require.resolve('docusaurus-plugin-papersaurus'),
    //   {
    //     keepDebugHtmls: false,
    //     sidebarNames: ['pdfSidebar'],
    //     rootDocIds: [
    //       { version: 'default', rootDocId: 'bylaws'}
    //     ],
    //     addDownloadButton: true,
    //     autoBuildPdfs: true,
    //     downloadButtonText: 'Download as PDF',
    //     getPdfCoverPage: (siteConfig, pluginConfig, pageTitle, version) => {
    //       return `<h1>By-laws</h1>`;
    //     },
    //     getPdfPageHeader: (siteConfig, pluginConfig, pageTitle) => {
    //       return `<h1>By-laws</h1>`;
    //     },
    //     getPdfPageFooter: (siteConfig, pluginConfig, pageTitle) => {
    //       return `<h1>By-laws</h1>`;
    //     },
    //   }
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AGV Rules',
        logo: {
          alt: 'AGV logo coming soon',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/bylaws', label: 'By-laws', position: 'left'},
          {to: '/constitution', label: 'Constitution', position: 'left'},
          {to: '/proposed-constitution', label: 'Proposed Constitution', position: 'left'},
          {to: '/terms-of-reference', label: 'Terms of Reference', position: 'left'},
          {to: '/charter', label: 'Charter', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contribute',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/australiangreens/agvrules',
              },
            ],
          },
        ],
        copyright: `Authorised by governance nerds everywhere, 45 William St, Melbourne, VIC 3000. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
