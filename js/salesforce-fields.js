// Salesforce field definitions for different object types

// Account object fields
const accountFields = [
  {
    id: "description",
    name: "Description",
    label: "Description",
    type: "LongTextArea",
    description: "Text description of the account."
  },
  {
    id: "accountSummary",
    name: "Account_Summary__c",
    label: "Account Summary",
    type: "LongTextArea",
    description: "A summary of key information about this account."
  },
  {
    id: "competitiveLandscape",
    name: "Competitive_Landscape__c",
    label: "Competitive Landscape",
    type: "LongTextArea",
    description: "Overview of the competitive landscape for this account."
  },
  {
    id: "painPoints",
    name: "Pain_Points__c",
    label: "Pain Points",
    type: "LongTextArea",
    description: "Key challenges or pain points for this account."
  },
  {
    id: "productFit",
    name: "Product_Fit__c",
    label: "Product Fit",
    type: "LongTextArea",
    description: "How our products align with this account's needs."
  },
  {
    id: "salesStrategy",
    name: "Sales_Strategy__c",
    label: "Sales Strategy",
    type: "LongTextArea",
    description: "Recommended approach for selling to this account."
  }
];

// Opportunity object fields
const opportunityFields = [
  {
    id: "description",
    name: "Description",
    label: "Description",
    type: "LongTextArea",
    description: "Text description of the opportunity."
  },
  {
    id: "nextSteps",
    name: "NextStep",
    label: "Next Steps",
    type: "TextArea",
    description: "Description of next steps for the opportunity."
  },
  {
    id: "competitiveAnalysis",
    name: "Competitive_Analysis__c",
    label: "Competitive Analysis",
    type: "LongTextArea",
    description: "Analysis of competitive factors for this opportunity."
  },
  {
    id: "customerNeeds",
    name: "Customer_Needs__c",
    label: "Customer Needs",
    type: "LongTextArea",
    description: "Detailed description of customer needs and requirements."
  },
  {
    id: "valueProposition",
    name: "Value_Proposition__c",
    label: "Value Proposition",
    type: "LongTextArea",
    description: "Our value proposition for this opportunity."
  }
];

// Event object fields (for meeting events)
const eventFields = [
  {
    id: "description",
    name: "Description",
    label: "Description",
    type: "LongTextArea",
    description: "Text description of the event."
  },
  {
    id: "meetingNotes",
    name: "Meeting_Notes__c",
    label: "Meeting Notes",
    type: "LongTextArea",
    description: "Detailed notes from the meeting."
  },
  {
    id: "meetingSummary",
    name: "Meeting_Summary__c",
    label: "Meeting Summary",
    type: "LongTextArea",
    description: "A concise summary of the key points discussed in the meeting."
  },
  {
    id: "actionItems",
    name: "Action_Items__c",
    label: "Action Items",
    type: "LongTextArea",
    description: "List of action items identified during the meeting."
  },
  {
    id: "attendeeFeedback",
    name: "Attendee_Feedback__c",
    label: "Attendee Feedback",
    type: "LongTextArea",
    description: "Feedback from meeting attendees."
  },
  {
    id: "nextSteps",
    name: "Next_Steps__c",
    label: "Next Steps",
    type: "LongTextArea",
    description: "Planned next steps following the meeting."
  }
];

// Task object fields
const taskFields = [
  {
    id: "description",
    name: "Description",
    label: "Description",
    type: "LongTextArea",
    description: "Text description of the task."
  },
  {
    id: "comments",
    name: "Comments",
    label: "Comments",
    type: "LongTextArea",
    description: "Additional comments about the task."
  },
  {
    id: "callNotes",
    name: "Call_Notes__c",
    label: "Call Notes",
    type: "LongTextArea",
    description: "Notes from the call associated with this task."
  },
  {
    id: "callSummary",
    name: "Call_Summary__c",
    label: "Call Summary",
    type: "LongTextArea",
    description: "A summary of the call associated with this task."
  },
  {
    id: "followUpNotes",
    name: "Follow_Up_Notes__c",
    label: "Follow-up Notes",
    type: "LongTextArea",
    description: "Notes for follow-up actions."
  }
];

// Function to get fields for a specific object type
function getFieldsForObjectType(objectType) {
  switch (objectType.toLowerCase()) {
    case "account":
      return accountFields;
    case "opportunity":
      return opportunityFields;
    case "event":
      return eventFields;
    case "task":
      return taskFields;
    default:
      return [];
  }
}

// Function to get a field by ID
function getFieldById(objectType, fieldId) {
  const fields = getFieldsForObjectType(objectType);
  return fields.find(field => field.id === fieldId);
}

// Function to get all text-based fields across all object types
function getAllTextFields() {
  const textTypes = ["LongTextArea", "TextArea", "Text", "RichText"];
  
  const allFields = [
    ...accountFields.filter(field => textTypes.includes(field.type)).map(field => ({
      ...field,
      objectType: "Account"
    })),
    ...opportunityFields.filter(field => textTypes.includes(field.type)).map(field => ({
      ...field,
      objectType: "Opportunity"
    })),
    ...eventFields.filter(field => textTypes.includes(field.type)).map(field => ({
      ...field,
      objectType: "Event"
    })),
    ...taskFields.filter(field => textTypes.includes(field.type)).map(field => ({
      ...field,
      objectType: "Task"
    }))
  ];
  
  return allFields;
}
