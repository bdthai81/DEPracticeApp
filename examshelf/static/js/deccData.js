/**
 * Data Engineering, Big Data, and Machine Learning on GCP
 * 
 * Rules: Questions has to be in sequencial order within the list
 *      - Currently 1-50
 *
 *  Data element Template
 * 
    {
        // Question 
        id:
        question:
        options: [

        ],
        answer:
        explanation:
    }
*/

var deccData = [
  {
    // Question 1
    id: 1,
    question:
      "Dataflow offers the following that makes it easy to create resilient streaming pipelines when working with unbounded data: (select all 2 correct responses)",
    options: [
      "A. Ability to flexibly reason about time",
      "B. Controls to ensure correctness",
      "C. Global message bus to buffer messages",
      "D. SQL support to query in-process results"
    ],
    answer: "AB",
    explanation: ""
  },
  {
    // Question 2
    id: 2,
    question:
      "Match the GCP product with its role when designing streaming systems. 1. Pub/Sub. 2. Dataflow. 3. BigQuery. 4. Bigtable. A. Controls to handle late-arriving and out-of-order data. B. Global message queue. C. Latency in the order of milliseconds when querying against overwhelming volume. D. Query data as it arrives from streaming pipelines.",
    options: ["A. ABDC", "B. BADC", "C. CADB", "D. DABC"],
    answer: "B",
    explanation: ""
  },
  {
    // Question 3
    id: 3,
    question: "Which of the following about Cloud Pub/Sub is not true?",
    options: [
      "A. Pub/Sub simplifies systems by removing the need for every component to speak to every component.",
      "B. Pub/Sub connects applications and services through a messaging infrastructure.",
      "C. Pub/Sub stores your messages indefinitely until you request it.",
      "D. A, B, and C are all correct."
    ],
    answer: "C",
    explanation: ""
  },
  {
    // Question 4
    id: 4,
    question:
      "True or False? Cloud Pub/Sub guarantees that messages delivered are in the order they were received.",
    options: ["A. True", "B. False"],
    answer: "B",
    explanation: ""
  },
  {
    // Question 5
    id: 5,
    question:
      "Which of the following about Cloud Pub/Sub topics and subscriptions are true? (select all 2 correct responses)",
    options: [
      "A. 1 or more publisher(s) can write to the same topic",
      "B. 1 or more subscriber(s) can request from the same subscription",
      "C. Each topic will deliver ALL messages for a topic for each subscriber",
      "D. Each topic MUST have at least 1 subscription"
    ],
    answer: "AB",
    explanation: ""
  },
  {
    // Question 6
    id: 6,
    question:
      "Which of the following methods is ideal for subscribers needing close to real time performance?",
    options: ["A. Pull Delivery", "B. Push Delivery"],
    answer: "B",
    explanation: ""
  },
  {
    // Question 7
    id: 7,
    question:
      "Dataflow models provides constructs that map to the four questions that are relevent in any out-of-order data processing pipeline: 1. WHAT results are calculated? 2. WHERE in event time are results calculated? 3. WHEN in processing time are results materialized? 4. HOW do refinements of results relate? A. Answered via Event-time windowing. B. Answered via transformations. C. Answered via Accumulation modes. D. Answered via Watermarks, triggers, and allowed lateness.",
    options: ["A. ADCB", "B. BADC", "C. CADB", "D. DBAC"],
    answer: "B",
    explanation: ""
  },
  {
    // Question 8
    id: 8,
    question: "Which of the following is true for Data Studio?",
    options: [
      "A. Data Studio can only ingest files stored in Cloud Storage buckets.",
      "B. Data Studio supports data ingest thought multiple connectors",
      "C. Data Studio is part of Dataflow and requires a streaming pipeline for data ingest.",
      "D. Data Studio is part of Google BigQuery and requires data to already exist in tables."
    ],
    answer: "B",
    explanation: ""
  },
  {
    // Question 9
    id: 9,
    question: "Data Studio can issue queries to BigQuery",
    options: ["A. True", "B. False"],
    answer: "A",
    explanation: ""
  },
  {
    // Question 10
    id: 10,
    question:
      "Which of the following are true about Cloud Bigtable? (select all 3 correct responses)",
    options: [
      "A. Offers very low-latency in order of milliseconds",
      "B. Ideal for >1TB data",
      "C. Great for time-series data",
      "D. Support for SQL"
    ],
    answer: "ABC",
    explanation: ""
  },
  {
    // Question 11
    id: 11,
    question:
      "True or False? Cloud Bigtable learns access patterns and attempts to distribute reads and storage across nodes evenly.",
    options: ["A. True", "B. False"],
    answer: "A",
    explanation: ""
  },
  {
    // Question 12
    id: 12,
    question:
      "Which of the following can help improve performance of Bigtable? (select all 3 correct responses)",
    options: [
      "A. Change schema to minimize data skew",
      "B. Clients and Bigtable are in same zone",
      "C. Use HDD instead of SSD",
      "D. Add more nodes"
    ],
    answer: "ABD",
    explanation: ""
  }
];
