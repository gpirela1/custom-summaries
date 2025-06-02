// Meeting data object containing all content
const meetingData = {
  meetingDetails: {
    title: "Salesforce Discovery Call - Data Quality Initiative",
    date: "May 29, 2025",
    time: "9:00 AM - 9:45 AM (45 mins)",
    participants: "Sarah Martinez",
    additionalParticipants: "+4",
    account: "Salesforce Inc",
    dealContext: {
      title: "Salesforce Data Quality & Intelligence Initiative",
      stage: "Stage 2: Discovery",
      closeDate: "July 30, 2025",
      dealSize: "Enterprise ($500K+ ARR)"
    }
  },

  actionItems: [
    {
      id: 1,
      assignee: "Gabe",
      task: "to schedule technical demo focused on data enrichment and intent data capabilities for Sarah's team next week"
    },
    {
      id: 2,
      assignee: "Sarah",
      task: "to provide current data quality metrics and lead scoring challenges for ROI analysis"
    },
    {
      id: 3,
      assignee: "Gabe",
      task: "to connect Sarah with ZoomInfo customer success team for Salesforce integration best practices"
    },
    {
      id: 4,
      assignee: "Sarah",
      task: "to introduce Gabe to VP of Sales Operations (Michael Chen) for stakeholder alignment"
    },
    {
      id: 5,
      assignee: "Gabe",
      task: "to prepare custom ROI analysis based on Salesforce's current data challenges and team size"
    }
  ],

  meetingSummary: [
    "Discovery call with Salesforce to understand their data quality challenges and explore ZoomInfo's sales intelligence platform as a solution for their lead generation and account targeting initiatives.",
    "Sarah Martinez (Director of Sales Operations) outlined current pain points including inconsistent lead scoring, outdated contact data, and lack of intent signals for their 450+ person sales team.",
    "Salesforce currently uses a mix of internal tools and third-party data providers but struggles with data accuracy (estimated 30% decay rate) and integration challenges across their tech stack.",
    "Key requirements identified: real-time data enrichment, intent data for account prioritization, seamless Salesforce integration, and advanced lead scoring capabilities for their enterprise and mid-market segments.",
    "Strong interest expressed in ZoomInfo's AI-powered features and conversation intelligence capabilities, with budget allocated for Q3 implementation targeting $500K+ annual investment."
  ],

  detailedPanels: {
    // Empty - using static HTML content for Sandler methodology analysis
  },

  comments: [
    {
      id: 1,
      author: "Gabe Pirela",
      timestamp: "15:23",
      content: "Great point about the revenue-sourced metrics. We should definitely pivot our ROI calculations to focus on pipeline generation and deal acceleration rather than time savings.",
      replies: [
        {
          author: "Krista Hatem",
          timestamp: "15:25",
          content: "Agreed. I'll work with Thor to update our metrics dashboard to reflect this approach."
        }
      ]
    },
    {
      id: 2,
      author: "Chad Dyar",
      timestamp: "28:45",
      content: "The AI-powered account insights feature sounds very promising for our account planning initiatives. When can we expect to see this in beta?",
      replies: [
        {
          author: "Gabe Pirela",
          timestamp: "28:50",
          content: "We're targeting July-August for the initial rollout. I'll make sure Smartsheet is included in the early access program."
        }
      ]
    },
    {
      id: 3,
      author: "Thor",
      timestamp: "42:10",
      content: "The territory design and segmentation capabilities could be really valuable for Bill Mel's team. Let's explore this further in our next meeting.",
      replies: []
    }
  ],

  transcript: [
    {
      speaker: "Krista Hatem",
      timestamp: "00:00",
      content: "Good afternoon everyone, thanks for joining today's QBR session. As mentioned, we're keeping this pretty high level today as requested, and we'll schedule a more formal business review later."
    },
    {
      speaker: "Chad Dyar",
      timestamp: "00:15",
      content: "Thanks Krista. I'm really looking forward to learning more about the roadmap - it's been a couple of years since I've had a comprehensive update."
    },
    {
      speaker: "Gabe Pirela",
      timestamp: "00:30",
      content: "Absolutely Chad. I'll walk through our three key pillars: productivity enhancements, complete account intelligence, and strategic go-to-market insights."
    },
    {
      speaker: "Thor",
      timestamp: "02:45",
      content: "Before we dive into the roadmap, let me give you some context on how we're currently using ZoomInfo. We've got the Salesforce integration running for contact and company data enrichment."
    },
    {
      speaker: "Chad Dyar",
      timestamp: "05:20",
      content: "That's helpful. I'm particularly interested in account planning and prioritization capabilities. We're also moving from MEDIC to a value selling methodology."
    },
    {
      speaker: "Gabe Pirela",
      timestamp: "05:35",
      content: "Perfect timing. Our upcoming features will allow customization of meeting summaries and automatic extraction of qualification frameworks. We can adapt this for your value selling approach."
    },
    {
      speaker: "Chad Dyar",
      timestamp: "15:20",
      content: "I'm not as keen on time saving metrics because I'm focused on revenue sourced metrics. I would do source and I would do growth."
    },
    {
      speaker: "Krista Hatem",
      timestamp: "15:25",
      content: "That makes complete sense. We can definitely pivot our ROI calculations to focus on pipeline generation and deal acceleration."
    },
    {
      speaker: "Gabe Pirela",
      timestamp: "28:40",
      content: "The AI-powered account insights will combine conversation intelligence from Chorus with our database to create comprehensive account summaries."
    },
    {
      speaker: "Chad Dyar",
      timestamp: "28:45",
      content: "That sounds very promising for our account planning initiatives. What's the timeline for this?"
    },
    {
      speaker: "Gabe Pirela",
      timestamp: "28:50",
      content: "We're targeting sometime this summer, so like July August. I'll make sure Smartsheet is included in the early access program."
    }
  ]
};
