/**
 * GCP Prof. Data Engineer Practice Tests 2019
 * 
 * Rules: Questions has to be in sequencial order within the list
 *      - Currently 1-150
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

var deptData = [
    {
        // Question 1
        id: 1,
        question: "You regularly use prefetch caching with a Data Studio report to visualize the results of BigQuery queries. You want to minimize service costs. What should you do?",
        options: [
            "A. Set up the report to use the Owner's credentials to access the underlying data in BigQuery, and direct the users to view the report only once per business day (24-hour period).",
            "B. Set up the report to use the Owner's credentials to access the underlying data in BigQuery, and verify that the 'Enable cache' checkbox is selected for the report.",
            "C. Set up the report to use the Viewer's credentials to access the underlying data in BigQuery, and also set it up to be a 'view-only' report.",
            "D. Set up the report to use the Viewer's credentials to access the underlying data in BigQuery, and verify that the 'Enable cache' checkbox is not selected for the report."
        ],
        answer: "B",
        explanation: "Correct option is B as you must set Owner credentials to use the 'enable cache' option in BigQuery. It is also a Google best practice to use the ‘enable cache’ option when the business scenario calls for using prefetch caching; Refer GCP documentation - Datastudio data caching: - https://support.google.com/datastudio/answer/7020039?hl=en; The prefetch cache is only active for data sources that use owner's credentials to access the underlying data. Options A, C, & D are wrong as cache auto-expires every 12 hours; a prefetch cache is only for data sources that use the Owner's credentials and not the Viewer's credentials;"
    },
    {
        // Question 2
        id: 2,
        question: "You are building storage for files for a data pipeline on Google Cloud. You want to support JSON files. The schema of these files will occasionally change. Your analyst teams will use running aggregate ANSI SQL queries on this data. What should you do?",
        options: [
            "A. Use BigQuery for storage. Provide format files for data load. Update the format files as needed.",
            "B. Use BigQuery for storage. Select 'Automatically detect' in the Schema section.",
            "C. Use Cloud Storage for storage. Link data as temporary tables in BigQuery and turn on the 'Automatically detect' option in the Schema section of BigQuery.",
            "D. Use Cloud Storage for storage. Link data as permanent tables in BigQuery and turn on the 'Automatically detect' option in the Schema section of BigQuery."
        ],
        answer: "B",
        explanation: "Correct answer is B as the requirement is to support occasionally (schema) changing JSON files and aggregate ANSI SQL queries: you need to use BigQuery, and it is quickest to use 'Automatically detect' for schema changes. Refer GCP documentation - BigQuery Auto-Detection: - https://cloud.google.com/bigquery/docs/schema-detect; Schema auto-detection is available when you load data into BigQuery, and when you query an external data source. When auto-detection is enabled, BigQuery starts the inference process by selecting a random file in the data source and scanning up to 100 rows of data to use as a representative sample. BigQuery then examines each field and attempts to assign a data type to that field based on the values in the sample. A is not correct because you should not provide format files: you can simply turn on the 'Automatically detect' schema changes flag. C and D are not correct as Cloud Storage is not ideal for this scenario; it is cumbersome, adds latency and doesn't add value."
    },
    {
        // Question 3
        id: 3,
        question: "You are developing an application on Google Cloud that will label famous landmarks in users’ photos. You are under competitive pressure to develop the predictive model quickly. You need to keep service costs low. What should you do?",
        options: [
            "A. Build an application that calls the Cloud Vision API. Inspect the generated MID values to supply the image labels.",
            "B. Build an application that calls the Cloud Vision API. Pass landmark locations as base64-encoded strings.",
            "C. Build and train a classification model with TensorFlow. Deploy the model using Cloud Machine Learning Engine. Pass landmark locations as base64-encoded strings.",
            "D. Build and train a classification model with TensorFlow. Deploy the model using Cloud Machine Learning Engine. Inspect the generated MID values to supply the image labels."
        ],
        answer: "B",
        explanation: "Correct answer is B as the requirement is to quickly develop a model that generates landmark labels from photos, it can be easily supported by Cloud Vision API. Refer GCP documentation - Cloud Vision: - https://cloud.google.com/vision/docs/; Cloud Vision offers both pretrained models via an API and the ability to build custom models using AutoML Vision to provide flexibility depending on your use case. Cloud Vision API enables developers to understand the content of an image by encapsulating powerful machine learning models in an easy-to-use REST API. It quickly classifies images into thousands of categories (such as, “sailboat”), detects individual objects and faces within images, and reads printed words contained within images. You can build metadata on your image catalog, moderate offensive content, or enable new marketing scenarios through image sentiment analysis. Option A is wrong as you should not inspect the generated MID values; instead, you should simply pass the image locations to the API and use the labels, which are output. Options C & D are wrong as you should not build a custom classification TF model for this scenario, as it would require time."
    },
    {
        // Question 4
        id: 4,
        question: "Your company is in a highly regulated industry. One of your requirements is to ensure external users have access only to the non PII fields information required to do their jobs. You want to enforce this requirement with Google BigQuery. Which access control method would you use?",
        options: [
            "A. Use Primitive role on the dataset",
            "B. Use Predefined role on the dataset",
            "C. Use Authorized view with the same dataset with proper permissions",
            "D. Use Authorized view with the different dataset with proper permissions"
        ],
        answer: "D",
        explanation: "Correct answer is D as the controlled access can be granted using Authorized view. The Authorized view needs to be in a different dataset than the source. Refer GCP documentation - BigQuery Authorized Views: - https://cloud.google.com/bigquery/docs/share-access-views; Giving a view access to a dataset is also known as creating an authorized view in BigQuery. An authorized view allows you to share query results with particular users and groups without giving them access to the underlying tables. You can also use the view's SQL query to restrict the columns (fields) the users are able to query. When you create the view, it must be created in a dataset separate from the source data queried by the view. Because you can assign access controls only at the dataset level, if the view is created in the same dataset as the source data, your users would have access to both the view and the data. Options A, B & C are wrong as they would provide access to the complete datasets with the source included."
    },
    {
        // Question 5
        id: 5,
        question: "You are building a data pipeline on Google Cloud. You need to select services that will host a deep neural network machine-learning model also hosted on Google Cloud. You also need to monitor and run jobs that could occasionally fail. What should you do?",
        options: [
            "A. Use Cloud Machine Learning to host your model. Monitor the status of the Operation object for 'error' results.",
            "B. Use Cloud Machine Learning to host your model. Monitor the status of the Jobs object for 'failed' job states.",
            "C. Use a Kubernetes Engine cluster to host your model. Monitor the status of the Jobs object for 'failed' job states.",
            "D. Use a Kubernetes Engine cluster to host your model. Monitor the status of Operation object for 'error' results."
        ],
        answer: "B",
        explanation: "Correct answer is B as the requirement is to host a Machine Learning Deep Neural Network job it is ideal to use the Cloud Machine Learning service. Monitoring works on Jobs object. Refer GCP documentation - ML Engine Managing Jobs: - https://cloud.google.com/ml-engine/docs/tensorflow/managing-models-jobs; Option A is wrong as monitoring should not be on Operation object to monitor failures. Options C & D are wrong as you should not use a Kubernetes Engine cluster for Machine Learning jobs."
    },
    {
        // Question 6
        id: 6,
        question: "Your company has data stored in BigQuery in Avro format. You need to export this Avro formatted data from BigQuery into Cloud Storage. What is the best method of doing so from the web console?",
        options: [
            "A. Convert the data to CSV format the BigQuery export options, then make the transfer.",
            "B. Use the BigQuery Transfer Service to transfer Avro data to Cloud Storage.",
            "C. Click on Export Table in BigQuery, and provide the Cloud Storage location to export to",
            "D. Create a Dataflow job to manage the conversion of Avro data to CSV format, then export to Cloud Storage."
        ],
        answer: "C",
        explanation: "Correct answer is C as BigQuery can export Avro data natively to Cloud Storage. Refer GCP documentation - BigQuery Exporting Data: - https://cloud.google.com/bigquery/docs/exporting-data; After you've loaded your data into BigQuery, you can export the data in several formats. BigQuery can export up to 1 GB of data to a single file. If you are exporting more than 1 GB of data, you must export your data to multiple files. When you export your data to multiple files, the size of the files will vary. You cannot export data to a local file or to Google Drive, but you can save query results to a local file. The only supported export location is Google Cloud Storage. For Export format, choose the format for your exported data: CSV, JSON (Newline Delimited), or Avro. Option A is wrong as BigQuery can export Avro data natively to Cloud Storage and does not need to be converted to CSV format. Option B is wrong as BigQuery Transfer Service is for moving BigQuery data to Google SaaS applications (AdWords, DoubleClick, etc.). You will want to do a normal export of data, which works with Avro formatted data. Option D is wrong as Google Cloud Dataflow can be used to read data from BigQuery instead of manually exporting it, but doesn't work through console."
    },
    {
        // Question 7
        id: 7,
        question: "You need to take streaming data from thousands of Internet of Things (IoT) devices, ingest it, run it through a processing pipeline, and store it for analysis. You want to run SQL queries against your data for analysis. What services in which order should you use for this task?",
        options: [
            "A. Cloud Dataflow, Cloud Pub/Sub, BigQuery",
            "B. Cloud Pub/Sub, Cloud Dataflow, Cloud Dataproc",
            "C. Cloud Pub/Sub, Cloud Dataflow, BigQuery",
            "D. App Engine, Cloud Dataflow, BigQuery"
        ],
        answer: "C",
        explanation: "Correct answer is C as the need to ingest it, transform and store the Cloud Pub/Sub, Cloud Dataflow, BigQuery is ideal stack to handle the IoT data. Refer GCP documentation - IoT: - https://cloud.google.com/solutions/iot-overview#ingestion; Google Cloud Pub/Sub provides a globally durable message ingestion service. By creating topics for streams or channels, you can enable different components of your application to subscribe to specific streams of data without needing to construct subscriber-specific channels on each device. Cloud Pub/Sub also natively connects to other Cloud Platform services, helping you to connect ingestion, data pipelines, and storage systems. Google Cloud Dataflow provides the open Apache Beam programming model as a managed service for processing data in multiple ways, including batch operations, extract-transform-load (ETL) patterns, and continuous, streaming computation. Cloud Dataflow can be particularly useful for managing the high-volume data processing pipelines required for IoT scenarios. Cloud Dataflow is also designed to integrate seamlessly with the other Cloud Platform services you choose for your pipeline. Google BigQuery provides a fully managed data warehouse with a familiar SQL interface, so you can store your IoT data alongside any of your other enterprise analytics and logs. The performance and cost of BigQuery means you might keep your valuable data longer, instead of deleting it just to save disk space. Sample Arch - Mobile Gaming Analysis Telemetry: - https://cloud.google.com/solutions/mobile/mobile-gaming-analysis-telemetry; Processing game client and game server events in real time; Option A is wrong as the stack is correct, however the order is not correct. Option B is wrong as Dataproc is not an ideal tool for analysis. Cloud Dataproc is a fast, easy-to-use, fully-managed cloud service for running Apache Spark and Apache Hadoop clusters in a simpler, more cost-efficient way. Option D is wrong as App Engine is not an ideal ingestion tool to handle IoT data."
    },
    {
        // Question 8
        id: 8,
        question: "You have 250,000 devices which produce a JSON device status event every 10 seconds. You want to capture this event data for outlier time series analysis. What should you do?",
        options: [
            "A. Ship the data into BigQuery. Develop a custom application that uses the BigQuery API to query the dataset and displays device outlier data based on your business requirements.",
            "B. Ship the data into BigQuery. Use the BigQuery console to query the dataset and display device outlier data based on your business requirements.",
            "C. Ship the data into Cloud Bigtable. Use the Cloud Bigtable cbt tool to display device outlier data based on your business requirements.",
            "D. Ship the data into Cloud Bigtable. Install and use the HBase shell for Cloud Bigtable to query the table for device outlier data based on your business requirements."
        ],
        answer: "C",
        explanation: "Correct answer is C as the time series data with its data type, volume, and query pattern best fits BigTable capabilities. Refer GCP documentation - Bigtable Time Series data and CBT: - https://cloud.google.com/bigtable/docs/schema-design-time-series; Options A & B are wrong as BigQuery is not suitable for the query pattern in this scenario. Option D is wrong as you can use the simpler method of 'cbt tool' to support this scenario."
    },
    {
        // Question 9
        id: 9,
        question: "Your company is planning the infrastructure for a new large-scale application that will need to store over 100 TB or a petabyte of data in NoSQL format for Low-latency read/write and High-throughput analytics. Which storage option should you use?",
        options: [
            "A. Cloud Bigtable",
            "B. Cloud Spanner",
            "C. Cloud SQL",
            "D. Cloud Datastore"
        ],
        answer: "A",
        explanation: "Correct answer is A as Bigtable is an ideal solution to provide low latency, high throughput data processing storage option with analytics; Refer GCP documentation - Storage Options: - https://cloud.google.com/storage/docs/; Options B & C are wrong as they are relational databases; Option D is wrong as Cloud Datastore is not ideal for analytics."
    },
    {
        // Question 10
        id: 10,
        question: "You are building new real-time data warehouse for your company and will use Google BigQuery streaming inserts. There is no guarantee that data will only be sent in once but you do have a unique ID for each row of data and an event timestamp. You want to ensure that duplicates are not included while interactively querying data. Which query type should you use?",
        options: [
            "A. Include ORDER BY DESK on timestamp column and LIMIT to 1.",
            "B. Use GROUP BY on the unique ID column and timestamp column and SUM on the values.",
            "C. Use the LAG window function with PARTITION by unique ID along with WHERE LAG IS NOT NULL.",
            "D. Use the ROW_NUMBER window function with PARTITION by unique ID along with WHERE row equals 1."
        ],
        answer: "D",
        explanation: "Correct answer is D as the best approach is to ROW_NUMBER with PARTITION by the UNIQUE_ID and filter it by row_number = 1. Refer GCP documentation - BigQuery Streaming Data - Removing Duplicates: - https://cloud.google.com/bigquery/streaming-data-into-bigquery#manually_removing_duplicates; To remove duplicates, perform the following query. You should specify a destination table, allow large results, and disable result flattening. #standardSQL SELECT   * EXCEPT(row_number) FROM (   SELECT     *,     ROW_NUMBER()           OVER (PARTITION BY ID_COLUMN) row_number   FROM     `TABLE_NAME`) WHERE  row_number = 1 ;"
    },
    {
        // Question 11
        id: 11,
        question: "Your customer is moving their corporate applications to Google Cloud Platform. The security team wants detailed visibility of all projects in the organization. You provision the Google Cloud Resource Manager and set up yourself as the org admin. What Google Cloud Identity and Access Management (Cloud IAM) roles should you give to the security team?",
        options: [
            "A. Org viewer, project owner",
            "B. Org viewer, project viewer",
            "C. Org admin, project browser",
            "D. Project owner, network admin"
        ],
        answer: "B",
        explanation: "Correct answer is B as the security team only needs visibility to the projects, project viewer provides the same with the best practice of least privilege. Refer GCP documentation - Organization & Project access control: - https://cloud.google.com/resource-manager/docs/access-control-org; Option A is wrong as project owner will provide access however it does not align with the best practice of least privilege. Option C is wrong as org admin does not align with the best practice of least privilege. Option D is wrong as the user needs to be provided organization viewer access to see the organization."
    },
    {
        // Question 12
        id: 12,
        question: "A company is building an image tagging pipeline. Which service should be used in the icon with the Question mark in the diagram?<br><img src='/static/images/deptq12.png'><br><br>",
        options: [
            "A. Cloud Datastore",
            "B. Cloud Dataflow",
            "C. Cloud Pub/Sub",
            "D. Cloud Bigtable"
        ],
        answer: "C",
        explanation: "Correct answer is C as Cloud Storage upload events can push Cloud Pub/Sub to trigger a Cloud Function to ingest and process the image. Refer GCP documentation - Cloud Storage Pub/Sub Notifications: - https://cloud.google.com/storage/docs/pubsub-notifications; Cloud Pub/Sub Notifications sends information about changes to objects in your buckets to Cloud Pub/Sub, where the information is added to a Cloud Pub/Sub topic of your choice in the form of messages. For example, you can track objects that are created and deleted in your bucket. Each notification contains information describing both the event that triggered it and the object that changed. Cloud Pub/Sub Notifications are the recommended way to track changes to objects in your Cloud Storage buckets because they're faster, more flexible, easier to set up, and more cost-effective. Options A, B & D are wrong as they cannot be configured for notifications from Cloud Storage.",
        image: "dept_question12.png"
    },
    {
        // Question 13
        id: 13,
        question: "For this Question, refer to the Flowlogistic case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic; Flowlogistic is ready to migrate their Hadoop workloads to Google Cloud. For the data migration, they need a cost-effective 'data lake' that will scale to their growing data needs and be able to easily connect to their Hadoop workloads in the cloud. What two actions should they perform?",
        options: [
            "A. Create a Dataproc cluster for long-term use, and transfer data to the HDFS partition on the cluster.",
            "B. Install the Bigtable connector in the on-premises Hadoop cluster, then migrate data to Bigtable for long-term storage.",
            "C. Add the Cloud Storage connector to their on-premises Hadoop environment, and transfer their data to a Cloud Storage bucket.",
            "D. For the existing Hadoop jobs that are migrating to Dataproc, use the gs:// prefix instead of hdfs:// to access data from Cloud Storage."
        ],
        answer: "CD",
        explanation: "Answer: C, D Correct answers are C & D as the best practice is to use Cloud Storage with Dataproc for long-term storage that does not require a Dataproc cluster to be persistent and constantly running. Modifying the data storage would require merely repointing the source and destination location in existing scripts. Option A is wrong as it is not a cost-effective solution to have persistent hadoop cluster. Option B is wrong as Bigtable is an expensive option to store data as compared to Cloud Storage."
    },
    {
        // Question 14
        id: 14,
        question: "You want to optimize the performance of an accurate, real-time, weather-charting application. The data comes from 50,000 sensors sending 10 readings a second, in the format of a timestamp and sensor reading. Where should you store the data?",
        options: [
            "A. Google BigQuery",
            "B. Google Cloud SQL",
            "C. Google Cloud Bigtable",
            "D. Google Cloud Storage"
        ],
        answer: "C",
        explanation: "Correct answer is C as Bigtable is a ideal solution for storing time series data. Storing time-series data in Cloud Bigtable is a natural fit. Cloud Bigtable stores data as unstructured columns in rows; each row has a row key, and row keys are sorted lexicographically. Refer GCP documentation - Storage Options: - https://cloud.google.com/storage/docs/; Option A is wrong as Google BigQuery is a scalable, fully-managed Enterprise Data Warehouse (EDW) with SQL and fast response times. It is for analytics and OLAP workload, though it also provides storage capacity and price similar to GCS. It cannot handle the required real time ingestion of data. Option B is wrong as Google Cloud SQL is a fully-managed MySQL and PostgreSQL relational database service for Structured data and OLTP workloads. It also won’t stand for this type of high ingesting rate in real time. Option D is wrong as Google Cloud Storage is a scalable, fully-managed, highly reliable, and cost-efficient object / blob store. It cannot stand for this amount of data streaming ingestion rate in real-time."
    },
    {
        // Question 15
        id: 15,
        question: "Your software uses a simple JSON format for all messages. These messages are published to Google Cloud Pub/Sub, then processed with Google Cloud Dataflow to create a real-time dashboard for the CFO. During testing, you notice that some messages are missing in the dashboard. You check the logs, and all messages are being published to Cloud Pub/Sub successfully. What should you do next?",
        options: [
            "A. Check the dashboard application to see if it is not displaying correctly.",
            "B. Run a fixed dataset through the Cloud Dataflow pipeline and analyze the output.",
            "C. Use Google Stackdriver Monitoring on Cloud Pub/Sub to find the missing messages.",
            "D. Switch Cloud Dataflow to pull messages from Cloud Pub/Sub instead of Cloud Pub/Sub pushing messages to Cloud Dataflow."
        ],
        answer: "B",
        explanation: "Correct answer is B as the issue can be debugged by running a fixed dataset and checking the output. Refer GCP documentation - Dataflow logging: - https://cloud.google.com/dataflow/docs/guides/logging; Option A is wrong as the Dashboard uses data provided by Dataflow, the input source for Dashboard seems to be the issue; Option C is wrong as Monitoring would not help find missing messages in Cloud Pub/Sub. Option D is wrong as Dataflow cannot be configured as Push endpoint with Cloud Pub/Sub."
    },
    {
        // Question 16
        id: 16,
        question: "You have hundreds of IoT devices that generate 1 TB of streaming data per day. Due to latency, messages will often be delayed compared to when they were generated. You must be able to account for data arriving late within your processing pipeline. How can the data processing system be designed?",
        options: [
            "A. Use Cloud SQL to process the delayed messages.",
            "B. Enable your IoT devices to generate a timestamp when sending messages. Use Cloud Dataflow to process messages, and use windows, watermarks (timestamp), and triggers to process late data.",
            "C. Use SQL queries in BigQuery to analyze data by timestamp.",
            "D. Enable your IoT devices to generate a timestamp when sending messages. Use Cloud Pub/Sub to process messages by timestamp and fix out of order issues."
        ],
        answer: "B",
        explanation: "Correct answer is B as Cloud Pub/Sub can help handle the streaming data. However, Cloud Pub/Sub does not handle the ordering, which can be done using Dataflow and adding watermarks to the messages from the source. Refer GCP documentation - Cloud Pub/Sub ordering & Subscriber: - https://cloud.google.com/pubsub/docs/ordering; How do you assign an order to messages published from different publishers? Either the publishers themselves have to coordinate, or the message delivery service itself has to attach a notion of order to every incoming message. Each message would need to include the ordering information. The order information could be a timestamp (though it has to be a timestamp that all servers get from the same source in order to avoid issues of clock drift), or a sequence number (acquired from a single source with ACID guarantees). Other messaging systems that guarantee ordering of messages require settings that effectively limit the system to multiple publishers sending messages through a single server to a single subscriber. Typically, Cloud Pub/Sub delivers each message once and in the order in which it was published. However, messages may sometimes be delivered out of order or more than once. In general, accommodating more-than-once delivery requires your subscriber to be idempotent when processing messages. You can achieve exactly once processing of Cloud Pub/Sub message streams using Cloud Dataflow PubsubIO. PubsubIO de-duplicates messages on custom message identifiers or those assigned by Cloud Pub/Sub. You can also achieve ordered processing with Cloud Dataflow by using the standard sorting APIs of the service. Alternatively, to achieve ordering, the publisher of the topic to which you subscribe can include a sequence token in the message. Options A & C are wrong as SQL and BigQuery do not support ingestion and ordering of IoT data and would need other services like Pub/Sub. Option D is wrong as Cloud Pub/Sub does not perform ordering of messages."
    },
    {
        // Question 17
        id: 17,
        question: "Your company has its input data hosted in BigQuery. They have existing Spark scripts for performing analysis which they want to reuse. The output needs to be stored in BigQuery for future analysis. How can you set up your Dataproc environment to use BigQuery as an input and output source?",
        options: [
            "A. Use the Bigtable syncing service built into Dataproc.",
            "B. Manually use a Cloud Storage bucket to import and export to and from both BigQuery and Dataproc",
            "C. Install the BigQuery connector on your Dataproc cluster",
            "D. You can only use Cloud Storage or HDFS for your Dataproc input and output."
        ],
        answer: "C",
        explanation: "Correct answer is C as Dataproc has a BigQuery connector library which allows it directly interface with BigQuery. Refer GCP documentation - Dataproc BigQuery Connector: - https://cloud.google.com/dataproc/docs/concepts/connectors/bigquery; You can use a BigQuery connector to enable programmatic read/write access to BigQuery. This is an ideal way to process data that is stored in BigQuery. No command-line access is exposed. The BigQuery connector is a Java library that enables Hadoop to process data from BigQuery using abstracted versions of the Apache Hadoop InputFormat and OutputFormat classes. Option A is wrong Bigtable syncing service does not exist. Options B & D are wrong as Dataproc can directly interface with BigQuery."
    },
    {
        // Question 18
        id: 18,
        question: "For this Question, refer to the Flowlogistic case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic; Flowlogistic’s CEO wants to gain rapid insight into their customer base, so his sales team can be better informed in the field. This team is not very technical, so they’ve purchased a visualization tool to simplify the creation of BigQuery reports. However, they’ve been overwhelmed by all the data in the table, and are spending a lot of money on queries trying to find the data they need. You want to solve their problem in the most cost-effective way. What should you do?",
        options: [
            "A. Export the data into a Google Sheet for virtualization.",
            "B. Export the data into a Google Sheet for virtualization.",
            "C. Create a view on the table to present to the virtualization tool.",
            "D. Create identity and access management (IAM) roles on the appropriate columns, so only they appear in a query."
        ],
        answer: "C",
        explanation: "Correct answer is C as the best way to limit and expose number of columns and access is to create a View. With BigQuery, the access can only be controlled on Datasets and Views, but not on tables. Refer GCP documentation - BigQuery Views: - https://cloud.google.com/bigquery/docs/views-intro; Option A is wrong as only limited amount of data can be imported. Option B is wrong as additional table would increase the cost. Option D is wrong as IAM cannot be applied on columns or tables, but only on datasets and views."
    },
    {
        // Question 19
        id: 19,
        question: "For this Question, refer to the MJTelco case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco; MJTelco needs to develop their machine learning model to control topology definitions. There are a large number of possible configurations to achieve the best results. What components of their machine learning model would they adjust to account for increased complexity? (Choose two answers);",
        options: [
            "A. Neurons",
            "B. Epoch",
            "C. Hidden layers",
            "D. Learning rate"
        ],
        answer: "AC",
        explanation: "Correct answers are A & C; Refer GCP documentation - Understanding Neural Networks: - https://cloud.google.com/blog/products/gcp/understanding-neural-networks-with-tensorflow-playground; With more neurons in a single hidden layer, you can capture more features. And having more hidden layers means more complex constructs that you can extract from the dataset. Options B & D are wrong as they are not valid parameters."
    },
    {
        // Question 20
        id: 20,
        question: "You are working on a sensitive project involving private user data. You have set up a project on Google Cloud Platform to house your work internally. An external consultant is going to assist with coding a complex transformation in a Google Cloud Dataflow pipeline for your project. How should you maintain users’ privacy?",
        options: [
            "A. Grant the consultant the Viewer role on the project.",
            "B. Grant the consultant the Cloud Dataflow Developer role on the project.",
            "C. Create a service account and allow the consultant to log on with it.",
            "D. Create an anonymized sample of the data for the consultant to work with in a different project."
        ],
        answer: "B",
        explanation: "Correct answer is B as the Dataflow developer role would help provide the third-party consultant access to create and work on the Dataflow pipeline. However, it does not provide access to view the data, thus maintaining user's privacy. Refer GCP documentation - Dataflow roles: - https://cloud.google.com/dataflow/docs/concepts/access-control#roles; Option A is wrong as it would not allow the consultant to work on the pipeline. Option C is wrong as the consultant cannot use the service account to login. Option D is wrong as it does not enable collabaration."
    },
    {
        // Question 21
        id: 21,
        question: "Your company has hired a new data scientist who wants to perform complicated analyses across very large datasets stored in Google Cloud Storage and in a Cassandra cluster on Google Compute Engine. The scientist primarily wants to create labelled data sets for machine learning projects, along with some visualization tasks. She reports that her laptop is not powerful enough to perform her tasks and it is slowing her down. You want to help her perform her tasks. What should you do?",
        options: [
            "A. Run a local version of Jupiter on the laptop.",
            "B. Grant the user access to Google Cloud Shell.",
            "C. Host a visualization tool on a VM on Google Compute Engine.",
            "D. Deploy Google Cloud Datalab to a virtual machine (VM) on Google Compute Engine."
        ],
        answer: "D",
        explanation: "Correct answer is D as Cloud Datalab provides a powerful interactive, scalable tool on Google Cloud with the ability to analyze, visualize data. Refer GCP documentation - Datalab: - https://cloud.google.com/datalab/; Cloud Datalab is a powerful interactive tool created to explore, analyze, transform and visualize data and build machine learning models on Google Cloud Platform. It runs on Google Compute Engine and connects to multiple cloud services easily so you can focus on your data science tasks. Cloud Datalab is built on Jupyter (formerly IPython), which boasts a thriving ecosystem of modules and a robust knowledge base. Cloud Datalab enables analysis of your data on Google BigQuery, Cloud Machine Learning Engine, Google Compute Engine, and Google Cloud Storage using Python, SQL, and JavaScript (for BigQuery user-defined functions). Whether you're analyzing megabytes or terabytes, Cloud Datalab has you covered. Query terabytes of data in BigQuery, run local analysis on sampled data and run training jobs on terabytes of data in Cloud Machine Learning Engine seamlessly. Use Cloud Datalab to gain insight from your data. Interactively explore, transform, analyze, and visualize your data using BigQuery, Cloud Storage and Python. Go from data to deployed machine-learning (ML) models ready for prediction. Explore data, build, evaluate and optimize Machine Learning models using TensorFlow or Cloud Machine Learning Engine. Options A, B & C do not provides all the abilities."
    },
    {
        // Question 22
        id: 22,
        question: "Your company is in a highly regulated industry. One of your requirements is to ensure individual users have access only to the minimum amount of information required to do their jobs. You want to enforce this requirement with Google BigQuery. Which three approaches can you take? (Choose three)",
        options: [
            "A. Disable writes to certain tables.",
            "B. Restrict access to tables by role.",
            "C. Ensure that the data is encrypted at all times.",
            "D. Restrict BigQuery API access to approved users.",
            "E. Segregate data across multiple tables or datasets.",
            "F. Use Google Stackdriver Audit Logging to determine policy violations."
        ],
        answer: "DEF",
        explanation: "Correct answers are D, E & F; Option D would help limit access to approved users only. Option E as it would help segregate the data with the ability to provide access to users as per their needs. Option F as it would help in auditing. Refer GCP documentation - BigQuery Dataset Access Control & Access Control: - https://cloud.google.com/bigquery/docs/access-control; You share access to BigQuery tables and views using project- level IAM roles and dataset-level access controls. Currently, you cannot apply access controls directly to tables or views. Project-level access controls determine the users, groups, and service accounts allowed to access all datasets, tables, views, and table data within a project. Dataset-level access controls determine the users, groups, and service accounts allowed to access the tables, views, and table data in a specific dataset. Option A is wrong as disabiling writes does not prevent the users from reading and does not align with the least privilege principle. Option B is wrong as access cannot be control on tables. Option C is wrong as data is encrypted by default, however it does not align with the least privilege principle."
    },
    {
        // Question 23
        id: 23,
        question: "A client has been developing a pipeline based on PCollections using local programming techniques and is ready to scale up to production. What should they do?",
        options: [
            "A. They should use the Cloud Dataflow Cloud Runner.",
            "B. They should upload the pipeline to Cloud Dataproc.",
            "C. They should use the local version of runner.",
            "D. Import the pipeline into BigQuery."
        ],
        answer: "A",
        explanation: "Correct answer is A as the PCollection indicates it is a Cloud Dataflow pipeline. And the Cloud Runner will enable the pipeline to scale to production levels. Refer documentation - Dataflow Cloud Runner: - https://cloud.google.com/dataflow/docs/; Options B & D are wrong as PCollections are related to Dataflow; Option C is wrong as Local runner is execute the pipeline locally."
    },
    {
        // Question 24
        id: 24,
        question: "Your company handles data processing for a number of different clients. Each client prefers to use their own suite of analytics tools, with some allowing direct query access via Google BigQuery. You need to secure the data so that clients cannot see each other’s data. You want to ensure appropriate access to the data. Which three steps should you take? (Choose three)",
        options: [
            "A. Load data into different partitions.",
            "B. Load data into a different dataset for each client.",
            "C. Put each client’s BigQuery dataset into a different table.",
            "D. Restrict a client’s dataset to approved users.",
            "E. Only allow a service account to access the datasets.",
            "F. Use the appropriate identity and access management (IAM) roles for each client’s users."
        ],
        answer: "BDF",
        explanation: "Correct answers are B, D & F. As the access control can be done using IAM roles on the dataset only to the specific approved users. Refer GCP documentation - BigQuery Access Control: - https://cloud.google.com/bigquery/docs/access-control; BigQuery uses Identity and Access Management (IAM) to manage access to resources. The three types of resources available in BigQuery are organizations, projects, and datasets. In the IAM policy hierarchy, datasets are child resources of projects. Tables and views are child resources of datasets — they inherit permissions from their parent dataset. To grant access to a resource, assign one or more roles to a user, group, or service account. Organization and project roles affect the ability to run jobs or manage the project's resources, whereas dataset roles affect the ability to access or modify the data inside of a particular dataset. Options A & C are wrong as the access control can only be applied on dataset and views, not on partitions and tables. Option E is wrong as service account is mainly for machines and would be a single account."
    },
    {
        // Question 25
        id: 25,
        question: "You currently have a Bigtable instance you've been using for development running a development instance type, using HDD's for storage. You are ready to upgrade your development instance to a production instance for increased performance. You also want to upgrade your storage to SSD's as you need maximum performance for your instance. What should you do?",
        options: [
            "A. Upgrade your development instance to a production instance, and switch your storage type from HDD to SSD.",
            "B. Export your Bigtable data into a new instance, and configure the new instance type as production with SSD's",
            "C. Run parallel instances where one instance is using HDD and the other is using SSD.",
            "D. Use the Bigtable instance sync tool in order to automatically synchronize two different instances, with one having the new storage configuration."
        ],
        answer: "B",
        explanation: "Correct answer is B as the storage for the cluster cannot be updated. You need to define the new cluster and copy or import the data to it. Refer GCP documentation - Bigtable Choosing HDD vs SSD: - https://cloud.google.com/bigtable/docs/choosing-ssd-hdd; Switching between SSD and HDD storage; When you create a Cloud Bigtable instance and cluster, your choice of SSD or HDD storage for the cluster is permanent. You cannot use the Google Cloud Platform Console to change the type of storage that is used for the cluster. If you need to convert an existing HDD cluster to SSD, or vice-versa, you can export the data from the existing instance and import the data into a new instance. Alternatively, you can use a Cloud Dataflow or Hadoop MapReduce job to copy the data from one instance to another. Keep in mind that migrating an entire instance takes time, and you might need to add nodes to your Cloud Bigtable clusters before you migrate your instance. Option A is wrong as storage type cannot be changed. Options C & D are wrong as it would have two clusters running at the same time with same data, thereby increasing cost."
    },
    {
        // Question 26
        id: 26,
        question: "Your company receives streaming data from IoT sensors capturing various parameters. You need to calculate a running average for each of the parameter on streaming data, taking into account the data that can arrive late and out of order. How would you design the system?",
        options: [
            "A. Use Cloud Pub/Sub and Cloud Dataflow with Sliding Time Windows.",
            "B. Use Cloud Pub/Sub and Google Data Studio.",
            "C. Cloud Pub/Sub can guarantee timely arrival and order.",
            "D. Use Cloud Dataflow's built-in timestamps for ordering and filtering."
        ],
        answer: "A",
        explanation: "Correct answer is A as Cloud Pub/Sub does not maintain message order and Dataflow can be used to order the messages and as well as calculate average using Sliding Time window. Refer GCP documentation - Pub/Sub Subscriber: - https://cloud.google.com/pubsub/docs/subscriber; Cloud Pub/Sub delivers each message once and in the order in which it was published. However, messages may sometimes be delivered out of order or more than once. In general, accommodating more-than-once delivery requires your subscriber to be idempotent when processing messages. You can achieve exactly once processing of Cloud Pub/Sub message streams using Cloud Dataflow PubsubIO. PubsubIO de-duplicates messages on custom message identifiers or those assigned by Cloud Pub/Sub. You can also achieve ordered processing with Cloud Dataflow by using the standard sorting APIs of the service. Alternatively, to achieve ordering, the publisher of the topic to which you subscribe can include a sequence token in the message. Option B is wrong as Data Studio is more of a visualization tool and does not help in analysis or ordering of messages. Option C is wrong as Cloud Pub/Sub does not guarantee order and arrival. Option D is wrong as Dataflow does not provide built-in timestamps for ordering and filtering. It needs to use the watermark/timestamp introduced either by the publisher source or Cloud Pub/Sub."
    },
    {
        // Question 27
        id: 27,
        question: "Your company is planning to migrate their on-premises Hadoop and Spark jobs to Dataproc. Which role must be assigned to a service account used by the virtual machines in a Dataproc cluster, so they can execute jobs?",
        options: [
            "A. Dataproc Worker",
            "B. Dataproc Viewer",
            "C. Dataproc Runner",
            "D. Dataproc Editor"
        ],
        answer: "A",
        explanation: "Correct answer is A as the compute engine should have Dataproc Worker role assigned. Refer GCP documentation - Dataproc Service Accounts: - https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#important_notes; Service accounts have IAM roles granted to them. Specifying a user-managed service account when creating a Cloud Dataproc cluster allows you to create and utilize clusters with fine-grained access and control to Cloud resources. Using multiple user-managed service accounts with different Cloud Dataproc clusters allows for clusters with different access to Cloud resources. Service accounts used with Cloud Dataproc must have Dataproc/Dataproc Worker role (or have all the permissions granted by Dataproc Worker role)."
    },
    {
        // Question 28
        id: 28,
        question: "You have spent a few days loading data from comma-separated values (CSV) files into the Google BigQuery table CLICK_STREAM. The column DT stores the epoch time of click events. For convenience, you chose a simple schema where every field is treated as the STRING type. Now, you want to compute web session durations of users who visit your site, and you want to change its data type to the TIMESTAMP. You want to minimize the migration effort without making future queries computationally expensive. What should you do?",
        options: [
            "A. Delete the table CLICK_STREAM, and then re-create it such that the column DT is of the TIMESTAMP type. Reload the data.",
            "B. Add a column TS of the TIMESTAMP type to the table CLICK_STREAM, and populate the numeric values from the column DT for each row. Reference the column TS instead of the column DT from now on.",
            "C. Create a view CLICK_STREAM_V, where strings from the column DT are cast into TIMESTAMP values. Reference the view CLICK_STREAM_V instead of the table CLICK_STREAM from now on.",
            "D. Construct a query to return every row of the table CLICK_STREAM, while using the built-in function to cast strings from the column DT into TIMESTAMP values. Run the query into a destination table NEW_CLICK_STREAM, in which the column TS is the TIMESTAMP type. Reference the table NEW_CLICK_STREAM instead of the table CLICK_STREAM from now on. In the future, new data is loaded into the table NEW_CLICK_STREAM."
        ],
        answer: "D",
        explanation: "Correct answer is D as the column type cannot be changed and the column needs to casting loaded into a new table using either SQL Query or import/export. Refer GCP documentation - BigQuery Changing Schema: - https://cloud.google.com/bigquery/docs/manually-changing-schemas#changing_a_columns_data_type; Option A is wrong as with this approach all the data would be lost and needs to be reloaded; Option B is wrong as numeric values cannot be used directly and would need casting. Option C is wrong as view is not materialized views, so the future queries would always be taxed as the casting would be done always."
    },
    {
        // Question 29
        id: 29,
        question: "You have Google Cloud Dataflow streaming pipeline running with a Google Cloud Pub/Sub subscription as the source. You need to make an update to the code that will make the new Cloud Dataflow pipeline incompatible with the current version. You do not want to lose any data when making this update. What should you do?",
        options: [
            "A. Update the current pipeline and use the drain flag.",
            "B. Update the current pipeline and provide the transform mapping JSON object.",
            "C. Create a new pipeline that has the same Cloud Pub/Sub subscription and cancel the old pipeline.",
            "D. Create a new pipeline that has a new Cloud Pub/Sub subscription and cancel the old pipeline."
        ],
        answer: "A",
        explanation: "Correct answer is A as the key requirement is not to lose the data, the Dataflow pipeline can be stopped using the Drain option. Drain options would cause Dataflow to stop any new processing, but would also allow the existing processing to complete; Refer GCP documentation - Dataflow Stopping a Pipeline: - https://cloud.google.com/dataflow/docs/guides/stopping-a-pipeline; Using the Drain option to stop your job tells the Cloud Dataflow service to finish your job in its current state. Your job will immediately stop ingesting new data from input sources. However, the Cloud Dataflow service will preserve any existing resources, such as worker instances, to finish processing and writing any buffered data in your pipeline. When all pending processing and write operations are complete, the Cloud Dataflow service will clean up the GCP resources associated with your job. Note: Your pipeline will continue to incur the cost of maintaining any associated GCP resources until all processing and writing has completed. Use the Drain option to stop your job if you want to prevent data loss as you bring down your pipeline. Effects of draining a job; When you issue the Drain command, Cloud Dataflow immediately closes any in-process windows and fires all triggers. The system does not wait for any outstanding time-based windows to finish. For example, if your pipeline is ten minutes into a two-hour window when you issue the Drain command, Cloud Dataflow won't wait for the remainder of the window to finish. It will close the window immediately with partial results."
    },
    {
        // Question 30
        id: 30,
        question: "You create an important report for your large team in Google Data Studio 360. The report uses Google BigQuery as its data source. You notice that visualizations are not showing data that is less than 1 hour old. What should you do?",
        options: [
            "A. Disable caching by editing the report settings.",
            "B. Disable caching in BigQuery by editing table details.",
            "C. Refresh your browser tab showing the visualizations.",
            "D. Clear your browser history for the past hour then reload the tab showing the visualizations."
        ],
        answer: "A",
        explanation: "Correct answer is A as Data Studio caches data for performance and as the latest data is not shown, the caching can be disabled to fetch the latest data. Refer GCP documentation - Data Studio Caching: - https://support.google.com/datastudio/answer/7020039?hl=en; Option B is wrong as BigQuery does not cache the data. Options C & D are wrong this would not allow fetching of latest data."
    },
    {
        // Question 31
        id: 31,
        question: "A company has loaded its complete financial data for last year for analytics into BigQuery. A Data Analyst is concerned that a BigQuery query could be too expensive. Which methods can be used to reduce the number of rows processed by BigQuery?",
        options: [
            "A. Use the LIMIT clause to limit the number of values in the results.",
            "B. Use the SELECT clause to limit the amount of data in the query. Partition data by date so the query can be more focused.",
            "C. Set the Maximum Bytes Billed, which will limit the number of bytes processed but still run the query if the number of bytes requested goes over the limit.",
            "D. Use GROUP BY so the results will be grouped into fewer output values."
        ],
        answer: "B",
        explanation: "Correct answer is B as SELECT with partition would limit the data for querying. Refer GCP documentation - BigQuery Cost Best Practices: - https://cloud.google.com/bigquery/docs/best-practices-costs; Option C is wrong as the query would fail and would not execute if the Maximum bytes limit is exceeded by the query. Option D is wrong as GROUP BY would return less output, but would still query the entire data."
    },
    {
        // Question 32
        id: 32,
        question: "A company wants to connect cloud applications to an Oracle database in its data center. Requirements are a maximum of 9 Gbps of data and a Service Level Agreement (SLA) of 99%. Which option best suits the requirements?",
        options: [
            "A. Implement a high-throughput Cloud VPN connection",
            "B. Cloud Router with VPN",
            "C. Dedicated Interconnect",
            "D. Partner Interconnect"
        ],
        answer: "D",
        explanation: "Correct answer is D as Partner Interconnect is useful for data up to 10 Gbps and is offered by ISPs with SLAs. Refer GCP documentation - Interconnect Options: - https://cloud.google.com/interconnect/docs/how-to/choose-type; Flexible capacity options with a minimum of 50 Mbps. More points of connectivity through one of our supported service providers. Traffic between networks flows through a service provider, not through the public Internet. Google provides an SLA for the connection between Google and service provider. Whether an end-to-end SLA for the connection is offered, depends on your service provider. Check with them for more information. Option A is wrong as Cloud VPN is over the internet through IPSec VPN at a low cost for your data bandwidth needs up to 3.0 Gbps. Option B is wrong as Cloud Router helps only in dynamic routing. Option C is wrong as Dedicated Interconnect is suitable for High bandwidth connections with a minimum of 10 Gbps. Traffic flows directly between networks, not through the public Internet."
    },
    {
        // Question 33
        id: 33,
        question: "You company’s on-premises Hadoop and Spark jobs have been migrated to Cloud Dataproc. When using Cloud Dataproc clusters, you can access the YARN web interface by configuring a browser to connect through which proxy?",
        options: [
            "A. HTTPS",
            "B. VPN",
            "C. SOCKS",
            "D. HTTP"
        ],
        answer: "C",
        explanation: "Correct answer is C as the internal services can be accessed using the SOCKS proxy server. Refer GCP documentation - Dataproc - Connecting to web interfaces: - https://cloud.google.com/dataproc/docs/concepts/accessing/cluster-web-interfaces; You can connect to web interfaces running on a Cloud Dataproc cluster using your project's Cloud Shell or the Cloud SDK gcloud command-line tool: Cloud Shell: The Cloud Shell in the Google Cloud Platform Console has the Cloud SDK commands and utilities pre-installed, and it provides a Web Preview feature that allows you to quickly connect through an SSH tunnel to a web interface port on a cluster. However, a connection to the cluster from Cloud Shell uses local port forwarding, which opens a connection to only one port on a cluster web interface—multiple commands are needed to connect to multiple ports. Also, Cloud Shell sessions automatically terminate after a period of inactivity (30 minutes). gcloud command-line tool: The gcloud compute ssh command with dynamic port forwarding allows you to establish an SSH tunnel and run a SOCKS proxy server on top of the tunnel. After issuing this command, you must configure your local browser to use the SOCKS proxy. This connection method allows you to connect to multiple ports on a cluster web interface."
    },
    {
        // Question 34
        id: 34,
        question: "A company has migrated their Hadoop cluster to the cloud and is now using Cloud Dataproc with the same settings and same methods as in the data center. What would you advise them to do to make better use of the cloud environment?",
        options: [
            "A. Upgrade to the latest version of HDFS. Change the settings in Hadoop components to optimize for the different kinds of work in the mix.",
            "B. Find more jobs to run so the cluster utilizations will cost-justify the expense.",
            "C. Store persistent data off-cluster. Start a cluster for one kind of work then shut it down when it is not processing data.",
            "D. Migrate from Cloud Dataproc to an open source Hadoop Cluster hosted on Compute Engine, because this is the only way to get all the Hadoop customizations needed for efficiency."
        ],
        answer: "C",
        explanation: "Correct answer is C as Storing persistent data off the cluster allows the cluster to be shut down when not processing data. And it allows separate clusters to be started per job or per kind of work, so tuning is less important. Refer GCP documentation - Dataproc Cloud Storage: - https://cloud.google.com/dataproc/docs/concepts/connectors/cloud-storage; Direct data access – Store your data in Cloud Storage and access it directly, with no need to transfer it into HDFS first. HDFS compatibility – You can easily access your data in Cloud Storage using the gs:// prefix instead of hdfs://. Interoperability – Storing data in Cloud Storage enables seamless interoperability between Spark, Hadoop, and Google services. Data accessibility – When you shut down a Hadoop cluster, you still have access to your data in Cloud Storage, unlike HDFS. High data availability – Data stored in Cloud Storage is highly available and globally replicated without a loss of performance. No storage management overhead – Unlike HDFS, Cloud Storage requires no routine maintenance such as checking the file system, upgrading or rolling back to a previous version of the file system, etc. Quick startup – In HDFS, a MapReduce job can't start until the NameNode is out of safe mode—a process that can take from a few seconds to many minutes depending on the size and state of your data. With Cloud Storage, you can start your job as soon as the task nodes start, leading to significant cost savings over time."
    },
    {
        // Question 35
        id: 35,
        question: "Your company has a BigQuery dataset created, which is located near Tokyo. For efficiency reasons, the company now wants the dataset duplicated in Germany. How can be dataset be made available to the users in Germany?",
        options: [
            "A. Change the dataset from a regional location to multi-region location, specifying the regions to be included.",
            "B. Export the data from BigQuery into a bucket in the new location, and import it into a new dataset at the new location.",
            "C. Copy the data from the dataset in the source region to the dataset in the target region using BigQuery commands.",
            "D. Export the data from BigQuery into nearby bucket in Cloud Storage. Copy to a new regional bucket in Cloud Storage in the new location and Import into the new dataset."
        ],
        answer: "D",
        explanation: "Correct answer is D as the dataset location cannot be changed once created. The dataset needs to be copied using Cloud Storage. Refer GCP documentation - BigQuery Exporting Data: - https://cloud.google.com/bigquery/docs/exporting-data; You cannot change the location of a dataset after it is created. Also, you cannot move a dataset from one location to another. If you need to move a dataset from one location to another, follow this process: 1. Export the data from your BigQuery tables to a regional or multi-region Cloud Storage bucket in the same location as your dataset. For example, if your dataset is in the EU multi-region location, export your data into a regional or multi-region bucket in the EU. There are no charges for exporting data from BigQuery, but you do incur charges for storing the exported data in Cloud Storage. BigQuery exports are subject to the limits on export jobs. 2. Copy or move the data from your Cloud Storage bucket to a regional or multi-region bucket in the new location. For example, if you are moving your data from the US multi-region location to the Tokyo regional location, you would transfer the data to a regional bucket in Tokyo. Note that transferring data between regions incurs network egress charges in Cloud Storage. 3. After you transfer the data to a Cloud Storage bucket in the new location, create a new BigQuery dataset (in the new location). Then, load your data from the Cloud Storage bucket into BigQuery.You are not charged for loading the data into BigQuery, but you will incur charges for storing the data in Cloud Storage until you delete the data or the bucket. You are also charged for storing the data in BigQuery after it is loaded. Loading data into BigQuery is subject to the limits on load jobs."
    },
    {
        // Question 36
        id: 36,
        question:"Your company is planning to migrate their analytics data into BigQuery. There is a need to handle both batch and streaming data. You are assigned the role to determine the costs that would be incurred for different operations. What are all of the BigQuery operations that Google charges for?",
        options: [
            "A. Storage, queries, and streaming inserts.",
            "B. Storage, queries, and loading data from a file.",
            "C. Storage, queries, and exporting data.",
            "D. Queries and streaming inserts."
        ],
        answer: "A",
        explanation: "Correct answer is A as BigQuery charges for Storage, Queries and Streaming inserts. Loading and Exporting of data are free operations and not charged by BigQuery. Refer GCP documentation - BigQuery Pricing: - https://cloud.google.com/bigquery/pricing; Options B & C are wrong as Loading and Exporting data are not charged. Option D is wrong as Storage is also charged."
    },
    {
        // Question 37
        id: 37,
        question: "A company has a new IoT pipeline. Which services will make this design work? Select the services that should be used to replace the icons with the number ''1'' and number ''2'' in the diagram.<br><img src='/static/images/deptq37.png'><br><br>",
        options: [
            "A. Cloud IoT Core, Cloud Datastore",
            "B. Cloud Pub/Sub, Cloud Storage",
            "C. Cloud IoT Core, Cloud Pub/Sub",
            "D. ​App Engine, Cloud IoT Core"
        ],
        answer: "C",
        explanation: "Correct answer is C as device data captured by Cloud IoT Core gets published to Cloud Pub/Sub, which can then trigger Dataflow and Cloud Functions. Refer GCP documentation - Cloud IoT Core: -https://cloud.google.com/iot-core/; Cloud IoT Core is a fully managed service that allows you to easily and securely connect, manage, and ingest data from millions of globally dispersed devices. Cloud IoT Core, in combination with other services on Cloud IoT platform, provides a complete solution for collecting, processing, analyzing, and visualizing IoT data in real time to support improved operational efficiency. Cloud IoT Core, using Cloud Pub/Sub underneath, can aggregate dispersed device data into a single global system that integrates seamlessly with Google Cloud data analytics services. Use your IoT data stream for advanced analytics, visualizations, machine learning, and more to help improve operational efficiency, anticipate problems, and build rich models that better describe and optimize your business.",
        image: "dept_question37.png"
    },
    {
        // Question 38
        id: 38,
        question: "You have developed a Machine Learning model to categorize where the financial transaction was a fraud or not. Testing the Machine Learning model with validation data returns 100% correct answers. What can you infer from the results?",
        options: [
            "A. The model is working extremely well, indicating the hyperparameters are set correctly.",
            "B. The model is overfit. There is a problem.",
            "C. The model is underfit. There is a problem.",
            "D. The model is perfectly fit. You do not need to continue training."
        ],
        answer: "B",
        explanation: "Correct answer is B as the 100% accuracy is an indicator that the validation data may have somehow gotten mixed in with the training data. You will need new validation data to generate recognizable error. Overfitting results when a model performs well on the training set, generating only a small error, but struggles with new or unknown data. In other words, the model overfits itself to the data. Instead of training a model to pick out general features in a given type of data, an overtrained model learns only how to pick out specific features found in the training set."
    },
    {
        // Question 39
        id: 39,
        question: "Your company hosts its analytical data in a BigQuery dataset for analytics. They need to provide controlled access to certain tables and columns within the tables to a third party. How do you design the access with least privilege?",
        options: [
            "A. Grant only DATA VIEWER access to the third party team",
            "B. Grant fine grained DATA VIEWER access to the tables and columns within the dataset",
            "C. Create Authorized views for tables in a same project and grant access to the teams",
            "D. Create Authorized views for tables in a separate project and grant access to the teams"
        ],
        answer: "D",
        explanation: "Correct answer is D as the controlled access can be provided using Authorized views created in a separate project. Refer GCP documentation - BigQuery Authorized View: - https://cloud.google.com/bigquery/docs/share-access-views; BigQuery is a petabyte-scale analytics data warehouse that you can use to run SQL queries over vast amounts of data in near realtime. Giving a view access to a dataset is also known as creating an authorized view in BigQuery. An authorized view allows you to share query results with particular users and groups without giving them access to the underlying tables. You can also use the view's SQL query to restrict the columns (fields) the users are able to query. When you create the view, it must be created in a dataset separate from the source data queried by the view. Because you can assign access controls only at the dataset level, if the view is created in the same dataset as the source data, your data analysts would have access to both the view and the data. Options A & B are wrong as access cannot be controlled over table, but only projects and datasets. Option C is wrong as Authorized views should be created in a separate project. If they are created in the same project, the users would have access to the underlying tables as well."
    },
    {
        // Question 40
        id: 40,
        question: "Your company has a variety of data processing jobs. Dataflow jobs to process real time streaming data using Pub/Sub. Data pipelines working with on-premises data. Dataproc spark batch jobs running weekly analytics with Cloud Storage. They want a single interface to manage and monitor the jobs. Which service would help implement a common monitoring and execution platform?",
        options: [
            "A. Cloud Scheduler",
            "B. Cloud Composer",
            "C. Cloud Spanner",
            "D. Cloud Pipeline"
        ],
        answer: "B",
        explanation: "Correct answer is B as Cloud Composer's managed nature allows you to focus on authoring, scheduling, and monitoring your workflows as opposed to provisioning resources. Refer GCP documentation - Cloud Composer: - https://cloud.google.com/composer/; Cloud Composer is a fully managed workflow orchestration service that empowers you to author, schedule, and monitor pipelines that span across clouds and on-premises data centers. Built on the popular Apache Airflow open source project and operated using the Python programming language, Cloud Composer is free from lock-in and easy to use. Cloud Composer's managed nature allows you to focus on authoring, scheduling, and monitoring your workflows as opposed to provisioning resources. Option A is wrong as Cloud Scheduler is a fully managed enterprise-grade cron job scheduler. It is not an multi-cloud orchestration tool. Option C is wrong as Google Cloud Spanner is relational database; Option D is wrong as Google Cloud Pipeline service does not exist."
    },
    {
        // Question 41
        id: 41,
        question: "Your company is developing a next generation pet collar that collects biometric information to assist potential millions of families with promoting healthy lifestyles for their pets. Each collar will push 30kb of biometric data In JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal. Management has tasked you to architect the collection platform ensuring the following requirements are met. 1. Provide the ability for real-time analytics of the inbound biometric data; 2. Ensure processing of the biometric data is highly durable, elastic and parallel; 3. The results of the analytic processing should be persisted for data mining; Which architecture outlined below win meet the initial requirements for the platform?",
        options: [
            "A. Utilize Cloud Storage to collect the inbound sensor data, analyze data with Dataproc and save the results to BigQuery.",
            "B. Utilize Cloud Pub/Sub to collect the inbound sensor data, analyze the data with Dataflow and save the results to BigQuery.",
            "C. Utilize Cloud Pub/Sub to collect the inbound sensor data, analyze the data with Dataflow and save the results to Cloud SQL.",
            "D. Utilize Cloud Pub/Sub to collect the inbound sensor data, analyze the data with Dataflow and save the results to Bigtable."
        ],
        answer: "B",
        explanation: "Correct answer is B as Cloud Pub/Sub provides elastic and scalable ingestion, Dataflow provides processing and BigQuery analytics. Refer GCP documentation - IoT: - https://cloud.google.com/solutions/iot-overview; Google Cloud Pub/Sub provides a globally durable message ingestion service. By creating topics for streams or channels, you can enable different components of your application to subscribe to specific streams of data without needing to construct subscriber-specific channels on each device. Cloud Pub/Sub also natively connects to other Cloud Platform services, helping you to connect ingestion, data pipelines, and storage systems. Google Cloud Dataflow provides the open Apache Beam programming model as a managed service for processing data in multiple ways, including batch operations, extract-transform-load (ETL) patterns, and continuous, streaming computation. Cloud Dataflow can be particularly useful for managing the high-volume data processing pipelines required for IoT scenarios. Cloud Dataflow is also designed to integrate seamlessly with the other Cloud Platform services you choose for your pipeline. Google BigQuery provides a fully managed data warehouse with a familiar SQL interface, so you can store your IoT data alongside any of your other enterprise analytics and logs. The performance and cost of BigQuery means you might keep your valuable data longer, instead of deleting it just to save disk space. Option A is wrong as Cloud Storage is not an ideal ingestion service for real time high frequency data. Also Dataproc is a fast, easy-to-use, fully-managed cloud service for running Apache Spark and Apache Hadoop clusters in a simpler, more cost-efficient way. Option C is wrong as Cloud SQL is a relational database and not suited for analytics data storage. Option D is wrong as Bigtable is not ideal for long term analytics data storage."
    },
    {
        // Question 42
        id: 42,
        question: "A retailer has 1PB of historical purchase dataset, which is largely unlabeled. They want to categorize the customer into different groups as per their spend. Which type of Machine Learning algorithm is suited to achieve this?",
        options: [
            "A. Classification",
            "B. Regression",
            "C. Association",
            "D. Clustering"
        ],
        answer: "D",
        explanation: "Correct answer is D as the data is unlabelled, unsupervised learning technique of Clustering can be applied to categorize the data. Refer GCP documentation - Machine Learning: - https://developers.google.com/machine-learning/problem-framing/cases; In unsupervised learning, the goal is to identify meaningful patterns in the data. To accomplish this, the machine must learn from an unlabeled data set. In other words, the model has no hints how to categorize each piece of data and must infer its own rules for doing so. Options A & B are wrong as they are supervised learning techniques. In supervised machine learning, you feed the features and their corresponding labels into an algorithm in a process called training. During training, the algorithm gradually determines the relationship between features and their corresponding labels. This relationship is called the model. Often times in machine learning, the model is very complex. Option C is wrong as Association rules is mainly to identify relationship."
    },
    {
        // Question 43
        id: 43,
        question: "A client is using Cloud SQL database to serve infrequently changing lookup tables that host data used by applications. The applications will not modify the tables. As they expand into other geographic regions they want to ensure good performance. What do you recommend?",
        options: [
            "A. Migrate to Cloud Spanner",
            "B. Read replicas",
            "C. Instance high availability configuration",
            "D. Migrate to Cloud Storage"
        ],
        answer: "B",
        explanation: "Correct answer is B as read replica will increase the availability of the service and can be located closer to the users in the new geographies. Refer GCP documentation - Cloud SQL Replication Options: - https://cloud.google.com/sql/docs/mysql/replication/; Cloud SQL provides the ability to replicate a master instance to one or more read replicas. A read replica is a copy of the master that reflects changes to the master instance in almost real time. Option A is wrong as Cloud Spanner is suitable for read/write operations, as the requirement is mainly for read, read replicas would be best fit. Option C is wrong as high availability is for failover and not for performance. Option D is wrong as Cloud Storage is not ideal storage for relational data."
    },
    {
        // Question 44
        id: 44,
        question: "A financial organization wishes to develop a global application to store transactions happening from different part of the world. The storage system must provide low latency transaction support and horizontal scaling. Which GCP service is appropriate for this use case?",
        options: [
            "A. Bigtable",
            "B. Datastore",
            "C. Cloud Storage",
            "D. Cloud Spanner"
        ],
        answer: "D",
        explanation: "Correct answer is D as Spanner provides Global scale, low latency and the ability to scale horizontally. Refer GCP documentation - Storage Options: - https://cloud.google.com/storage-options/;"
    },
    {
        // Question 45
        id: 45,
        question: "Your company wants to host confidential documents in Cloud Storage. Due to compliance requirements, there is a need for the data to be highly available and resilient even in case of a regional outage. Which storage classes help meet the requirement?",
        options: [
            "A. Nearline",
            "B. Standard",
            "C. Multi-Regional",
            "D. Dual-Regional",
            "E. Regional"
        ],
        answer: "AC",
        explanation: "Correct answers are A & C as Multi-Regional and Nearline storage classes provide multi-region geo-redundant deployment, which can sustain regional failure. Refer GCP documentation - Cloud Storage Classes: - https://cloud.google.com/storage/docs/storage-classes; Options B & D are wrong as they do not exist; Option E is wrong as Regional storage class is not geo-redundant. Data stored in a narrow geographic region and Redundancy is across availability zones;"
    },
    {
        // Question 46
        id: 46,
        question: "Which of the following statements about the Wide & Deep Learning model are true? (Choose two)",
        options: [
            "A. Wide model is used for memorization, while the deep model is used for generalization.",
            "B. Wide model is used for generalization, while the deep model is used for memorization.",
            "C. A good use for the wide and deep model is a recommender system.",
            "D. A good use for the wide and deep model is a small-scale linear regression problem."
        ],
        answer: "AC",
        explanation: "Correct answers are A & C as Wide learning model is good for memorization and a Deep learning model is generalization. Both Wide and Deep learning model can help build good recommendation engine. Refer Google blog - Wide Deep learning together: - https://ai.googleblog.com/2016/06/wide-deep-learning-better-together-with.html; The human brain is a sophisticated learning machine, forming rules by memorizing everyday events (“sparrows can fly” and “pigeons can fly”) and generalizing those learnings to apply to things we haven't seen before (“animals with wings can fly”). Perhaps more powerfully, memorization also allows us to further refine our generalized rules with exceptions (“penguins can't fly”). As we were exploring how to advance machine intelligence, we asked ourselves the Question—can we teach computers to learn like humans do, by combining the power of memorization and generalization? It's not an easy Question to answer, but by jointly training a wide linear model (for memorization) alongside a deep neural network (for generalization), one can combine the strengths of both to bring us one step closer. At Google, we call it Wide & Deep Learning. It's useful for generic large-scale regression and classification problems with sparse inputs (categorical features with a large number of possible feature values), such as recommender systems, search, and ranking problems."
    },
    {
        // Question 47
        id: 47,
        question: "Your company is developing an online video hosting platform. Users can upload their videos, which would be available for all the other users to view and share. As a compliance requirement, the videos need to undergo content moderation before it is available for all the users. How would you design your application?",
        options: [
            "A. Use Cloud Vision API to identify video with inappropriate content and mark it for manual checks.",
            "B. Use Cloud Natural Language API to identify video with inappropriate content and mark it for manual checks.",
            "C. Use Cloud Speech-to-Text API to identify video with inappropriate content and mark it for manual checks.",
            "D. Use Cloud Video Intelligence API to identify video with inappropriate content and mark it for manual checks."
        ],
        answer: "D",
        explanation: "Correct answer is D as Cloud Video Intelligence can be used to perform content moderation. Refer GCP documentation - Cloud Video Intelligence: - https://cloud.google.com/video-intelligence/; Google Cloud Video Intelligence makes videos searchable, and discoverable, by extracting metadata with an easy to use REST API. You can now search every moment of every video file in your catalog. It quickly annotates videos stored in Google Cloud Storage, and helps you identify key entities (nouns) within your video; and when they occur within the video. Separate signals from noise, by retrieving relevant information within the entire video, shot-by-shot, -or per frame. Identify when inappropriate content is being shown in a given video. You can instantly conduct content moderation across petabytes of data and more quickly and efficiently filter your content or user-generated content. Option A is wrong as Vision is for image analysis. Option B is wrong as Natural Language is for text analysis; Option C is wrong as Speech-to-Text is for audio to text conversion."
    },
    {
        // Question 48
        id: 48,
        question: "Your company has recently grown rapidly and now ingesting data at a significantly higher rate than it was previously. You manage the daily batch MapReduce analytics jobs in Apache Hadoop. However, the recent increase in data has meant the batch jobs are falling behind. You were asked to recommend ways the development team could increase the responsiveness of the analytics without increasing costs. What should you recommend they do?",
        options: [
            "A. Rewrite the job in Pig.",
            "B. Rewrite the job in Apache Spark.",
            "C. Increase the size of the Hadoop cluster.",
            "D. Decrease the size of the Hadoop cluster but also rewrite the job in Hive."
        ],
        answer: "B",
        explanation: "Correct answer is B as Spark can improve the performance as it performs lazy in-memory execution. Spark is important because it does part of its pipeline processing in memory rather than copying from disk. For some applications, this makes Spark extremely fast. With a Spark pipeline, you have two different kinds of operations, transforms and actions. Spark builds its pipeline used an abstraction called a directed graph. Each transform builds additional nodes into the graph but spark doesn't execute the pipeline until it sees an action. Spark waits until it has the whole story, all the information. This allows Spark to choose the best way to distribute the work and run the pipeline. The process of waiting on transforms and executing on actions is called, lazy execution. For a transformation, the input is an RDD and the output is an RDD. When Spark sees a transformation, it registers it in the directed graph and then it waits. An action triggers Spark to process the pipeline, the output is usually a result format, such as a text file, rather than an RDD. Option A is wrong as Pig is wrapper and would initiate Map Reduce jobs; Option C is wrong as it would increase the cost. Option D is wrong Hive is wrapper and would initiate Map Reduce jobs. Also, reducing the size would reduce performance."
    },
    {
        // Question 49
        id: 49,
        question: "Your company wants to develop an REST based application for image analysis. This application would help detect individual objects and faces within images, and reads printed words contained within images. You need to do a quick Proof of Concept (PoC) to implement and demo the same. How would you design your application?",
        options: [
            "A. Create and Train a model using Tensorflow and Develop an REST based wrapper over it",
            "B. Use Cloud Image Intelligence API and Develop an REST based wrapper over it",
            "C. Use Cloud Natural Language API and Develop an REST based wrapper over it",
            "D. Use Cloud Vision API and Develop an REST based wrapper over it"
        ],
        answer: "D",
        explanation: "Correct answer is D as Cloud Vision API provide pre-built models to identify and detect objects and faces within images. Refer GCP documentation - AI Products: - https://cloud.google.com/products/ai/; Cloud Vision API enables you to derive insight from your images with our powerful pretrained API models or easily train custom vision models with AutoML Vision Beta. The API quickly classifies images into thousands of categories (such as “sailboat” or “Eiffel Tower”), detects individual objects and faces within images, and finds and reads printed words contained within images. AutoML Vision lets you build and train custom ML models with minimal ML expertise to meet domain-specific business needs."
    },
    {
        // Question 50
        id: 50,
        question: "You currently have a Bigtable instance you've been using for development running a development instance type, using HDD's for storage. You are ready to upgrade your development instance to a production instance for increased performance. You also want to upgrade your storage to SSD's as you need maximum performance for your instance. What should you do?",
        options: [
            "A. Upgrade your development instance to a production instance, and switch your storage type from HDD to SSD.",
            "B. Run parallel instances where one instance is using HDD and the other is using SSD.",
            "C. Use the Bigtable instance sync tool in order to automatically synchronize two different instances, with one having the new storage configuration.",
            "D. Build a Dataflow pipeline or Dataproc job to copy the data to the new cluster with SSD storage type."
        ],
        answer: "D",
        explanation: "Correct answer is D as the storage for the cluster cannot be updated. You need to define the new cluster and copy or import the data to it. Refer GCP documentation - Bigtable Choosing HDD vs SSD: - https://cloud.google.com/bigtable/docs/choosing-ssd-hdd; Option A is wrong as storage type cannot be changed. Options B & C are wrong as it would have two clusters running at the same time with same data, thereby increasing cost."
    },
    {
        // Question 51
        id: 51,
        question: "You have a Dataflow job that you want to cancel. It is a streaming IoT pipeline, and you want to ensure that any data that is in-flight is processed and written to the output with no data loss. Which of the following commands can you use on the Dataflow monitoring console to stop the pipeline job?",
        options: [
            "A. Cancel",
            "B. Drain",
            "C. Stop",
            "D. Pause"
        ],
        answer: "B",
        explanation: "Correct answer is B as Drain command helps Dataflow process and complete in-flight messages and stops accepting any new ones. Refer GCP documentation - Dataflow stopping a pipeline: - https://cloud.google.com/dataflow/docs/guides/stopping-a-pipeline; If you need to stop a running Cloud Dataflow job, you can do so by issuing a command using either the Cloud Dataflow Monitoring Interface or the Cloud Dataflow Command-line Interface. There are two possible commands you can issue to stop your job: Cancel and Drain. Note: The Drain command is supported for streaming pipelines only. Using the Drain option to stop your job tells the Cloud Dataflow service to finish your job in its current state. Your job will immediately stop ingesting new data from input sources. However, the Cloud Dataflow service will preserve any existing resources, such as worker instances, to finish processing and writing any buffered data in your pipeline. When all pending processing and write operations are complete, the Cloud Dataflow service will clean up the GCP resources associated with your job. Note: Your pipeline will continue to incur the cost of maintaining any associated GCP resources until all processing and writing has completed. Use the Drain option to stop your job if you want to prevent data loss as you bring down your pipeline. Option A is wrong as Cancel does not handle in-flight messages and it might result in data loss. Options C & D are wrong as Stop and Pause option do not exist."
    },
    {
        // Question 52
        id: 52,
        question: "You work for a large fast food restaurant chain with over 400,000 employees. You store employee information in Google BigQuery in a Users table consisting of a FirstName field and a LastName field. A member of IT is building an application and asks you to modify the schema and data in BigQuery, so the application can query a FullName field consisting of the value of the FirstName field concatenated with a space, followed by the value of the LastName field for each employee. How can you make that data available while minimizing cost?",
        options: [
            "A. Create a view in BigQuery that concatenates the FirstName and LastName field values to produce the FullName.",
            "B. Add a new column called FullName to the Users table. Run an UPDATE statement that updates the FullName column for each user with the concatenation of the FirstName and LastName values.",
            "C. Create a Google Cloud Dataflow job that queries BigQuery for the entire Users table, concatenates the FirstName value and LastName value for each user, and loads the proper values for FirstName, LastName, and FullName into a new table in BigQuery.",
            "D. Use BigQuery to export the data for the table to a CSV file. Create a Google Cloud Dataproc job to process the CSV file and output a new CSV file containing the proper values for FirstName, LastName and FullName. Run a BigQuery load job to load the new CSV file into BigQuery."
        ],
        answer: "C",
        explanation: "Correct answer is C as the best option is to create a new table with the updated columns. Dataflow provides a serverless NoOps option to convert data. Option A is wrong as it is better to create materialized tables instead of views as the query would be executed everytime. Refer BigQuery Best Practices; Best practice: If possible, materialize your query results in stages. If you create a large, multi-stage query, each time you run it, BigQuery reads all the data that is required by the query. You are billed for all the data that is read each time the query is run. Instead, break your query into stages where each stage materializes the query results by writing them to a destination table. Querying the smaller destination table reduces the amount of data that is read and lowers costs. The cost of storing the materialized results is much less than the cost of processing large amounts of data. Option B is wrong as DML are limited by quotas. Maximum number of combined UPDATE, DELETE, and MERGE statements per day per table — 200; Option D is wrong as Dataproc would need provisioning of servers and writing scripts. ;"
    },
    {
        // Question 53
        id: 53,
        question: "Your company is hosting its analytics data in BigQuery. All the Data analysts have been provided with the IAM owner role to their respective projects. As a compliance requirement, all the data access logs needs to be captured for audits. Also, the access to the logs needs to be limited to the Auditor team only. How can the access be controlled?",
        options: [
            "A. Export the data access logs using aggregated sink to Cloud Storage in an existing project and grant VIEWER access to the project to the Auditor team",
            "B. Export the data access logs using project sink to BigQuery in an existing project and grant VIEWER access to the project to the Auditor team",
            "C. Export the data access logs using project sink to Cloud Storage in a separate project and grant VIEWER access to the project to the Auditor team",
            "D. Export the data access logs using aggregated sink to Cloud Storage in a separate project and grant VIEWER access to the project to the Auditor team"
        ],
        answer: "D",
        explanation: "Correct answer is D as the Data Analysts have OWNER roles to the projects, the logs need to be exported to a separate project which only the Auditor team has access to. Also, as there are multiple projects aggregated export sink can be used to export data access logs from all projects. Refer GCP documentation - BigQuery Auditing and Aggregated Exports: - https://cloud.google.com/logging/docs/export/aggregated_exports; You can create an aggregated export sink that can export log entries from all the projects, folders, and billing accounts of an organization. As an example, you might use this feature to export audit log entries from an organization's projects to a central location. Options A & B are wrong as the export needs to be in separate project. Option C is wrong as you need to use aggregated sink instead of project sink, as it would capture logs from all projects."
    },
    {
        // Question 54
        id: 54,
        question: "Your company is migrating to the Google cloud and looking for HBase alternative. Current solution uses a lot of custom code using the observer coprocessor. You are required to find the best alternative for migration while using managed services, is possible?",
        options: [
            "A. Dataflow",
            "B. HBase on Dataproc",
            "C. Bigtable",
            "D. BigQuery"
        ],
        answer: "B",
        explanation: "Correct answer is B as Bigtable is an HBase managed service alternative on Google Cloud. However, it does not support Coprocessors. So the best solution is to use HBase with Dataproc which can be installed using initialization actions. Refer GCP documentation - Bigtable HBase differences: - https://cloud.google.com/bigtable/docs/hbase-differences#coprocessors; Coprocessors are not supported. You cannot create classes that implement the interfaceorg.apache.hadoop.hbase.coprocessor. Options A & D are wrong as Dataflow and BigQuery are not HBase alternative; Option C is wrong as Bigtable does not support Coprocessors."
    },
    {
        // Question 55
        id: 55,
        question: "A company’s BigQuery data is currently stored in external CSV files in Cloud Storage. As the data has increased over the period of time, the query performance has dropped. What steps can help improve the query performance maintaining the cost-effectiveness?",
        options: [
            "A. Import the data into BigQuery for better performance.",
            "B. Request more slots for greater capacity to improve performance.",
            "C. Divide the data into partitions based on date.",
            "D. Time to move to Cloud Bigtable; it is faster in all cases."
        ],
        answer: "A",
        explanation: "Correct answer is A as the performance issue is because the data is stored in a non-optimal format in an external storage medium. Refer GCP documentation - BigQuery External Data Sources: - https://cloud.google.com/bigquery/external-data-sources; Query performance for external data sources may not be as high as querying data in a native BigQuery table. If query speed is a priority, load the data into BigQuery instead of setting up an external data source. The performance of a query that includes an external data source depends on the external storage type. For example, querying data stored in Cloud Storage is faster than querying data stored in Google Drive. In general, query performance for external data sources should be equivalent to reading the data directly from the external storage. Option B is wrong as there is no feature to request more slots. Option C is wrong as partitioning of data at source would not improve query time for all use cases. Option D is wrong as Bigtable is more ideal for NoSQL data type and can get very expensive;" 
    },
    {
        // Question 56
        id: 56,
        question: "Your company is building an aggregator, which receives feed from lot of other external data sources and companies. These dataset contain invalid & erroneous records, which need to be discarded. Your Data analysts should be able to perform the same without any programming or SQL knowledge. Which solution best fits the requirement?",
        options: [
            "A. Dataflow",
            "B. Dataproc",
            "C. Hadoop installation on Compute Engine",
            "D. Dataprep"
        ],
        answer: "D",
        explanation: "Correct answer is D as Dataprep provides the ability to detect, clean and transform data through a Graphical Interface without any programming knowledge. Refer GCP documentation - Dataprep: - https://cloud.google.com/dataprep/; Cloud Dataprep by Trifacta is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis. Cloud Dataprep is serverless and works at any scale. There is no infrastructure to deploy or manage. Easy data preparation with clicks and no code. Cloud Dataprep automatically detects schemas, datatypes, possible joins, and anomalies such as missing values, outliers, and duplicates so you get to skip the time-consuming work of profiling your data and go right to the data analysis. Cloud Dataprep automatically identifies data anomalies and helps you to take corrective action fast. Get data transformation suggestions based on your usage pattern. Standardize, structure, and join datasets easily with a guided approach. Options A, B & C are wrong as they all need programming knowledge."
    },
    {
        // Question 57
        id: 57,
        question: "Your company’s on-premises Spark jobs have been migrated to Cloud Dataproc. You are exploring the option to use Preemptible workers to increase the performance of the jobs, while cutting on costs. Which of these rules apply when you add preemptible workers to a Dataproc cluster? (Choose two)",
        options: [
            "A. Preemptible workers cannot use persistent disk.",
            "B. Preemptible workers cannot store data.",
            "C. If a preemptible worker is reclaimed, then a replacement worker must be added manually.",
            "D. A Dataproc cluster cannot have only preemptible workers."
        ],
        answer: "BD",
        explanation: "Correct answers are B & D. Option B as Preemptible instances are disposable and should not be used to store data. Option D as a Dataproc cluster cannot be with only preemptible instances. It needs to have two non-preemptible worker nodes. Refer GCP documentation - Dataproc Preemptible VMs: - https://cloud.google.com/dataproc/docs/concepts/compute/preemptible-vms; Option A is wrong as preemptible nodes can have persistent disks. Option C is wrong as Dataproc handles the addition and removal of preemptible nodes."
    },
    {
        // Question 58
        id: 58,
        question: "You are deploying 10,000 new Internet of Things devices to collect temperature data in your warehouses globally. You need to process, store and analyze these very large datasets in real time. How should you design the system in Google Cloud?",
        options: [
            "A. Send the data to Google Cloud Datastore and then export to BigQuery.",
            "B. Send the data to Google Cloud Pub/Sub, stream Cloud Pub/Sub to Google Cloud Dataflow, and store the data in Google BigQuery.",
            "C. Send the data to Cloud Storage and then spin up an Apache Hadoop cluster as needed in Google Cloud Dataproc whenever analysis is required.",
            "D. Export logs in batch to Google Cloud Storage and then spin up a Google Cloud SQL instance, import the data from Cloud Storage, and run an analysis as needed."
        ],
        answer: "B",
        explanation: "Correct answer is B as the need to ingest it, transform and store the Cloud Pub/Sub, Cloud Dataflow, BigQuery is ideal stack to handle the IoT data. Refer GCP documentation - IoT: - https://cloud.google.com/solutions/iot-overview#ingestion; Google Cloud Pub/Sub provides a globally durable message ingestion service. By creating topics for streams or channels, you can enable different components of your application to subscribe to specific streams of data without needing to construct subscriber-specific channels on each device. Cloud Pub/Sub also natively connects to other Cloud Platform services, helping you to connect ingestion, data pipelines, and storage systems. Google Cloud Dataflow provides the open Apache Beam programming model as a managed service for processing data in multiple ways, including batch operations, extract-transform-load (ETL) patterns, and continuous, streaming computation. Cloud Dataflow can be particularly useful for managing the high-volume data processing pipelines required for IoT scenarios. Cloud Dataflow is also designed to integrate seamlessly with the other Cloud Platform services you choose for your pipeline. Google BigQuery provides a fully managed data warehouse with a familiar SQL interface, so you can store your IoT data alongside any of your other enterprise analytics and logs. The performance and cost of BigQuery means you might keep your valuable data longer, instead of deleting it just to save disk space. Sample Arch - Mobile Gaming Analysis Telemetry: - https://cloud.google.com/solutions/mobile/mobile-gaming-analysis-telemetry; Option A is wrong as the Datastore is not an ideal ingestion service. Option C is wrong as Cloud Storage is not an ideal ingestion service and Dataproc is not a data warehousing solution. Option D is wrong as Cloud SQL is not a data warehousing solution."
    },
    {
        // Question 59
        id: 59,
        question: 'You have a table that includes a nested column called ""city"" inside a column called ""person"", but when you try to submit the following query in BigQuery, it gives you an error: SELECT person FROM `project1.example.table1` WHERE city = ""London""; How would you correct the error?',
        options: [
            'A. Add ", UNNEST(person)" before the WHERE clause.',
            'B. Change "person" to "person.city".',
            'C. Change "person" to "city.person".',
            'D. Add ", UNNEST(city)" before the WHERE clause.'
        ],
        answer: "A",
        explanation: "Answer: A Correct answer is A as the person column needs to be UNNEST for the nested city field to be used directly in the WHERE clause. Also, note this is standard SQL query by the reference of the table. Refer GCP documentation - BigQuery Nested Query: - https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql; #standardSQL SELECT   page.title FROM   `bigquery-public-data.samples.github_nested`, UNNEST(payload.pages) AS page WHERE page.page_name IN ('db_jobskill', 'Profession'); ;"
    },
    {
        // Question 60
        id: 60,
        question: "You are interacting with a Point Of Sale (PoS) terminal, which sends the transaction details only. Due to latest software update a bug was introduced in the terminal software that caused it to send individual PII and card details. As a security measure, you are required to implement a quick solution to prevent access to the PII. How would you design the solution?",
        options: [
            "A. Train Model using Tensorflow to identify PII and filter the information",
            "B. Store the data in BigQuery and create a Authorized view for the users",
            "C. Use Data Loss Prevention APIs to identify the PII information and filter the information",
            "D. Use Cloud Natural Language API to identify PII and filter the information"
        ],
        answer: "C",
        explanation: "Correct answer is C as Data Loss Prevention APIs can be used to quickly redact the sensitive information. Refer GCP documentation - Cloud DLP: - https://cloud.google.com/dlp/; Cloud DLP helps you better understand and manage sensitive data. It provides fast, scalable classification and redaction for sensitive data elements like credit card numbers, names, social security numbers, US and selected international identifier numbers, phone numbers and GCP credentials. Cloud DLP classifies this data using more than 90 predefined detectors to identify patterns, formats, and checksums, and even understands contextual clues. You can optionally redact data as well using techniques like masking, secure hashing, bucketing, and format-preserving encryption. Option A is wrong as building and training a model is not a quick and easy solution. Option B is wrong as the data would still be stored in the base tables and accessible. Option D is wrong as Cloud Natural APIs is for text analysis and does not handle sensitive information redaction."
    },
    {
        // Question 61
        id: 61,
        question: "Your company is migrating their 30-node Apache Hadoop cluster to the cloud. They want to re-use Hadoop jobs they have already created and minimize the management of the cluster as much as possible. They also want to be able to persist data beyond the life of the cluster. What should you do?",
        options: [
            "A. Create a Google Cloud Dataflow job to process the data.",
            "B. Create a Google Cloud Dataproc cluster that uses persistent disks for HDFS.",
            "C. Create a Hadoop cluster on Google Compute Engine that uses persistent disks.",
            "D. Create a Cloud Dataproc cluster that uses the Google Cloud Storage connector.",
            "E. Create a Hadoop cluster on Google Compute Engine that uses Local SSD disks."
        ],
        answer: "D",
        explanation: "Correct answer is D. As the requirement is to reuse Hadoop jobs with minimizing the infrastructure management with the ability to store data in a durable external storage, Dataproc with Cloud Storage would be an ideal solution. Refer GCP documentation - Dataproc FAQs: - https://cloud.google.com/dataproc/docs/resources/faq; Option A is wrong as Dataflow is not suited to execute Hadoop jobs. Option B is wrong as HDFS is associated with the Cluster. If the cluster is terminated, the data would be lost. Option C is wrong as Cluster on Compute Engine would increase infrastructure management and persistent disks would not provide scalability. Option E is wrong as Cluster on Compute Engine would increase infrastructure management and Local SSDs would not provide data durability."
    },
    {
        // Question 62
        id: 62,
        question: "Your company is running their first dynamic campaign, serving different offers by analyzing real-time data during the holiday season. The data scientists are collecting terabytes of data that rapidly grows every hour during their 30-day campaign. They are using Google Cloud Dataflow to preprocess the data and collect the feature (signals) data that is needed for the machine learning model in Google Cloud Bigtable. The team is observing suboptimal performance with reads and writes of their initial load of 10 TB of data. They want to improve this performance while minimizing cost. What should they do?",
        options: [
            "A. Redefine the schema by evenly distributing reads and writes across the row space of the table.",
            "B. The performance issue should be resolved over time as the size of the Bigtable cluster is increased.",
            "C. Redesign the schema to use a single row key to identify values that need to be updated frequently in the cluster.",
            "D. Redesign the schema to use row keys based on numeric IDs that increase sequentially per user viewing the offers."
        ],
        answer: "A",
        explanation: "Correct answer is A as the schema needs to be redesigned to distribute the reads and writes evenly across each table. Refer GCP documentation - Bigtable Performance: - https://cloud.google.com/bigtable/docs/performance; The table's schema is not designed correctly. To get good performance from Cloud Bigtable, it's essential to design a schema that makes it possible to distribute reads and writes evenly across each table. See Designing Your Schema for more information. Option B is wrong as increasing the size of cluster would increase the cost. Option C is wrong as single row key for frequently updated identifiers reduces performance; Option D is wrong as sequential IDs would degrade the performance. A safer approach is to use a reversed version of the user's numeric ID, which spreads traffic more evenly across all of the nodes for your Cloud Bigtable table."
    },
    {
        // Question 63
        id: 63,
        question: "For this Question, refer to the MJTelco case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco; MJTelco needs you to create a schema in Google Bigtable that will allow for the historical analysis of the last 2 years of records. Each record that comes in is sent every 15 minutes, and contains a unique identifier of the device and a data record. The most common query is for all the data for a given device for a given day. Which schema should you use?",
        options: [
            "A. Rowkey: date#device_id Column data: data_point",
            "B. Rowkey: date Column data: device_id, data_point",
            "C. Rowkey: device_id Column data: date, data_point",
            "D. Rowkey: data_point Column data: device_id, date",
            "E. Rowkey: date#data_point Column data: device_id"
        ],
        answer: "A",
        explanation: "Correct answer is A as the requirement is to be able to query on both device Id and date, both of them should be included in the key row. DATE + DEVICE_ID helps define the key row and query for daily data for each device. Refer GCP documentation - Bigtable Time series schema: - https://cloud.google.com/bigtable/docs/schema-design-time-series#use_tall_and_narrow_tables;"
    },
    {
        // Question 64
        id: 64,
        question: "For this Question, refer to the Flowlogistic case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic  ; Flowlogistic wants to use Google BigQuery as their primary analysis system, but they still have Apache Hadoop and Spark workloads that they cannot move to BigQuery. Flowlogistic does not know how to store the data that is common to both workloads. What should they do?",
        options: [
            "A. Store the common data in BigQuery as partitioned tables.",
            "B. Store the common data in BigQuery and expose authorized views.",
            "C. Store the common data encoded as Avro in Google Cloud Storage.",
            "D. Store the common data in the HDFS storage for a Google Cloud Dataproc cluster."
        ],
        answer: "C",
        explanation: "Correct answer is C as the common data in Avro can be shared using Cloud Storage. BigQuery can use load the data from Cloud Storage as Avro. Hadoop & Spark jobs can also use Cloud Storage data using Cloud Storage connector. Options A & B are wrong as Dataproc can easily read through Cloud Storage. Dataproc can use BigQuery Connector however it uses Cloud Storage as its temporary storage anyways. You can use a BigQuery connector to enable programmatic read/write access to BigQuery. This is an ideal way to process data that is stored in BigQuery.Additionally, the BigQuery connector downloads data into a Cloud Storage bucket before running a Hadoop job. After the Hadoop job successfully completes, the data is deleted from Cloud Storage. You are charged for storage according to Cloud Storage pricing. To avoid excess charges, check your Cloud Storage account and make sure to remove unneeded temporary files. Option D is wrong as HDFS storage cannot be shared with BiqQuery."
    },
    {
        // Question 65
        id: 65,
        question: "You have multiple Data Analysts who work with the dataset hosted in BigQuery within the same project. As a BigQuery Administrator, you are required to grant the data analyst only the privilege to create jobs/queries and an ability to cancel self-submitted jobs. Which role should assign to the user?",
        options: [
            "A. User",
            "B. Jobuser",
            "C. Owner",
            "D. Viewer"
        ],
        answer: "B",
        explanation: "Correct answer is B as JobUser access grants users permissions to run jobs and cancel their own jobs within the same project; Refer GCP documentation - BigQuery Access Control: - https://cloud.google.com/bigquery/docs/access-control; Option A is wrong as User would allow to run queries across projects. Option C is wrong as Owner would give more privileges to the users; Option D is wrong as Viewer does not give user permissions to run jobs."
    },
    {
        // Question 66
        id: 66,
        question: "You are selecting a streaming service for log messages that must include final result message ordering as part of building a data pipeline on Google Cloud. You want to stream input for 5 days and be able to query the most recent message value. You will be storing the data in a searchable repository. How should you set up the input messages?",
        options: [
            "A. Use Cloud Pub/Sub for input. Attach a timestamp to every message in the publisher.",
            "B. Use Cloud Pub/Sub for input. Attach a unique identifier to every message in the publisher.",
            "C. Use Apache Kafka on Compute Engine for input. Attach a timestamp to every message in the publisher.",
            "D. Use Apache Kafka on Compute Engine for input. Attach a unique identifier to every message in the publisher."
        ],
        answer: "A",
        explanation: "Correct answer is A as Cloud Pub/Sub does not maintain the order of the messages, and it is recommended to have it timestamped or watermarked from the publisher and ordered using Dataflow. Refer GCP documentation - Pub/Sub Ordering Messages: - https://cloud.google.com/pubsub/docs/ordering; How do you assign an order to messages published from different publishers? Either the publishers themselves have to coordinate, or the message delivery service itself has to attach a notion of order to every incoming message. Each message would need to include the ordering information. The order information could be a timestamp (though it has to be a timestamp that all servers get from the same source in order to avoid issues of clock drift), or a sequence number (acquired from a single source with ACID guarantees). Other messaging systems that guarantee ordering of messages require settings that effectively limit the system to multiple publishers sending messages through a single server to a single subscriber. Option B is wrong as you should not attach a GUID to each message to support the scenario. Options C & D are wrong as you should not use Apache Kafka for this scenario (it is overly complex compared to using Cloud Pub/Sub, which can support all of the requirements)."
    },
    {
        // Question 67
        id: 67,
        question: "You need to design a real time streaming data processing pipeline. The pipeline needs to read data from Cloud Pub/Sub, enrich it using Static reference data in BigQuery, transform it and store the results back in BigQuery for further analytics. How would you design the pipeline?",
        options: [
            "A. Dataflow, BigQueryIO and PubSubIO, SideOutputs",
            "B. Dataflow, BigQueryIO and PubSubIO, SideInputs",
            "C. DataProc, BigQueryIO and PubSubIO, SideInputs",
            "D. DataProc, BigQueryIO and PubSubIO, SideOutputs"
        ],
        answer: "B",
        explanation: "Correct answer is B as Dataflow is needed for real time streaming pipeline with the ability to enrich and transform using SideInputs. BigQueryIO and PubSubIO to interact with BigQuery and Pub/Sub. Refer GCP documentation - Dataflow Use Case Patterns: - https://cloud.google.com/blog/products/gcp/guide-to-common-cloud-dataflow-use-case-patterns-part-1; In streaming mode, lookup tables need to be accessible by your pipeline. If the lookup table never changes, then the standard Cloud Dataflow SideInput pattern reading from a bounded source such as BigQuery is a perfect fit. However, if the lookup data changes over time, in streaming mode there are additional considerations and options. The pattern described here focuses on slowly-changing data — for example, a table that's updated daily rather than every few hours. Options C & D are wrong as Dataproc is not ideal for handling real time streaming data. Options A & D are wrong as the lookup tables can be referred using SideInputs."
    },
    {
        // Question 68
        id: 68,
        question: "Your company hosts a 2PB on-premises Hadoop cluster with sensitive data. They want to plan the migration of the cluster to Google Cloud as part of phase 1 activity before the jobs are moved. Current network speed between the colocation and cloud is 10Gbps. What is the efficient way to transfer the data?",
        options: [
            "A. Use Transfer appliance to transfer the data to Cloud Storage",
            "B. Expose the data as a public URL and Storage Transfer Service to transfer it",
            "C. Use gsutil command to transfer the data to Cloud Storage",
            "D. Use hadoop distcp command to copy the data between cluster"
        ],
        answer: "A",
        explanation: "Correct answer is A as even with 10Gbps of transfer speed it would take minimum 24 days (assuming consistent speed and no interruption) to transfer the complete data. So the best option is to use Google Transfer Appliance. Refer GCP documentation - Data Transfer: - https://cloud.google.com/products/data-transfer/; Google Transfer Appliance - Securely capture, ship, and upload your data to Google Cloud Storage using the Transfer Appliance 100 TB or 480 TB models. Options B, C & D are wrong as they would still route the request through Internet."
    },
    {
        // Question 69
        id: 69,
        question: "Which of these numbers are adjusted by a neural network as it learns from a training dataset? (Choose two)",
        options: [
            "A. Continuous features",
            "B. Input values",
            "C. Weights",
            "D. Biases"
        ],
        answer: "CD",
        explanation: "Correct answers are C & D as weights and bias are the parameters learned by the computer from the training datasets. Refer Google Cloud blog - Understanding Neural Network: - https://cloud.google.com/blog/products/gcp/understanding-neural-networks-with-tensorflow-playground; As you can see a neural network is a simple mechanism that’s implemented with basic math. The only difference between the traditional programming and neural network is, again, that you let the computer determine the parameters (weights and bias) by learning from training datasets. In other words, the trained weight pattern in our example wasn’t programmed by humans."
    },
    {
        // Question 70
        id: 70,
        question: "An organization wishes to enable real time analytics on user interactions on their web application. They estimate that there will be 1000 interactions per second and wishes to use services, which are ops free. Which combination of services can be used in this case?",
        options: [
            "A. App Engine, Dataproc, DataStudio",
            "B. Compute Engine, BigQuery Streaming Inserts, DataStudio",
            "C. App Engine, BigQuery Streaming Inserts, DataStudio",
            "D. App Engine, Dataflow, DataStudio"
        ],
        answer: "C",
        explanation: "Correct answer is C as the focus is more on NoOps, the App Engine can be used to capture and insert the data into BigQuery using streaming inserts. The data can then be analyzed and visualized using DataStudio. Options A & D are wrong as Dataflow and Dataproc would need processing and storage. Option B is wrong as Compute Engine would not be Ops free."
    },
    {
        // Question 71
        id: 71,
        question: "Your company wants to develop an REST based application for text analysis to identify entities and label by types such as person, organization, location, events, products, and media from within a text. You need to do a quick Proof of Concept (PoC) to implement and demo the same. How would you design your application?",
        options: [
            "A. Create and Train a model using Tensorflow and Develop an REST based wrapper over it",
            "B. Create and Train a model using BigQuery ML and Develop an REST based wrapper over it",
            "C. Use Cloud Natural Language API and Develop an REST based wrapper over it",
            "D. Use Cloud Vision API and Develop an REST based wrapper over it"
        ],
        answer: "C",
        explanation: "Correct answer is C as the solution needs to develop quickly, the Cloud Natural Language API can be used to perform text analysis. Refer GCP documentation - AI Products: - https://cloud.google.com/products/ai/; Cloud Natural Language API reveals the structure and meaning of text by offering powerful machine learning models in an easy-to-use REST API. And with AutoML Natural Language Beta you can build and train ML models easily, without extensive ML expertise. You can use Natural Language to extract information about people, places, events, and much more mentioned in text documents, news articles, or blog posts. You can also use it to understand sentiment about your product on social media or parse intent from customer conversations happening in a call center or a messaging app. Options A & B are wrong as they do not provide quick results. Option D is wrong as Cloud Vision is for image analysis and not text analysis."
    },
    {
        // Question 72
        id: 72,
        question: "You have lot of Spark jobs. Some jobs need to run independently while others can run parallelly. There is also inter-dependency between the jobs and the dependent jobs should not be triggered unless the previous ones are completed. How do you orchestrate the pipelines?",
        options: [
            "A. Cloud Dataproc",
            "B. Cloud Scheduler",
            "C. Schedule jobs on a single Compute Engine using Cron.",
            "D. Cloud Composer"
        ],
        answer: "D",
        explanation: "Correct answer is D as Cloud Composer can help create workflows that connect data, processing, and services across clouds, giving you a unified data environment. Refer GCP documentation - Cloud Composer: - https://cloud.google.com/composer/; Cloud Composer is a fully managed workflow orchestration service that empowers you to author, schedule, and monitor pipelines that span across clouds and on-premises data centers. Built on the popular Apache Airflow open source project and operated using the Python programming language, Cloud Composer is free from lock-in and easy to use. Cloud Composer pipelines are configured as directed acyclic graphs (DAGs) using Python, making it easy for users of any experience level to author and schedule a workflow. One-click deployment yields instant access to a rich library of connectors and multiple graphical representations of your workflow in action, increasing pipeline reliability by making troubleshooting easy. Automatic synchronization of your directed acyclic graphs ensures your jobs stay on schedule. Option A is wrong as Google Cloud Dataproc is a fast, easy to use, managed Spark and Hadoop service for distributed data processing. It does not help easy orchestration. Option B is wrong as Cloud Scheduler is a fully managed enterprise-grade cron job scheduler. It is not an orchestration tool. Option C is wrong as it does not help orchestrate the dependency between jobs, but merely schedule them."
    },
    {
        // Question 73
        id: 73,
        question: "Your company is in a highly regulated industry. You have 2 groups of analysts, who perform the initial analysis and sanitization of the data. You now need to provide analyst three secure access to these BigQuery query results, but not the underlying tables or datasets. How would you share the data?",
        options: [
            "A. Export the query results to a public Cloud Storage bucket.",
            "B. Create a BigQuery Authorized View and assign a project-level user role to analyst three.",
            "C. Assign the bigquery.resultsonly.viewer role to analyst three.",
            "D. Create a BigQuery Authorized View and assign an organizational level role to analyst three."
        ],
        answer: "B",
        explanation: "Correct answer is B as you need to copy or store the query results in a separate dataset and provide authorization to view and/or use that dataset. The other solutions are not secure. Refer GCP documentation - BigQuery Authorized Views: - https://cloud.google.com/bigquery/docs/authorized-views; Giving a view access to a dataset is also known as creating an authorized view in BigQuery. An authorized view allows you to share query results with particular users and groups without giving them access to the underlying tables. You can also use the view's SQL query to restrict the columns (fields) the users are able to query. When you create the view, it must be created in a dataset separate from the source data queried by the view. Because you can assign access controls only at the dataset level, if the view is created in the same dataset as the source data, your users would have access to both the view and the data. Option A is wrong as a public Cloud Storage bucket is accessible to all. Option C is wrong as there is no resultsonly viewer role. Option D is wrong as an Organizational role would provide access to the underlying data as well."
    },
    {
        // Question 74
        id: 74,
        question: "Your company wants to transcribe the conversations between the manufacturing employees at real time. The conversations are recorded using old radio systems in the 8000Hz frequency. They are in English with a short duration of 35-40 secs. You need to design the system inline with Google recommended best practice. How would you design the application?",
        options: [
            "A. Use Cloud Speech-to-Text API in synchronous mode",
            "B. Use Cloud Speech-to-Text API in asynchronous mode",
            "C. Re-sample the audio using 16000Hz frequency and Use Cloud Speech-to-Text API in synchronous mode",
            "D. Re-sample the audio using 16000Hz frequency and Use Cloud Speech-to-Text API in asynchronous mode"
        ],
        answer: "A",
        explanation: "Correct answer is A as Speech-to-Text can be used to convert short duration audio in synchronous calls. As well as it is recommended not to re-sample the data, if it is coming at a lower sampling rate from the source. Refer GCP documentation - Speech-to-Text Sync & Best Practices: - https://cloud.google.com/speech-to-text/docs/sync-recognize & https://cloud.google.com/speech-to-text/docs/best-practices; Lower sampling rates may reduce accuracy. However, avoid re-sampling. For example, in telephony the native rate is commonly 8000 Hz, which is the rate that should be sent to the service. Synchronous speech recognition returns the recognized text for short audio (less than ~1 minute) in the response as soon as it is processed. To process a speech recognition request for long audio, useAsynchronous Speech Recognition."
    },
    {
        // Question 75
        id: 75,
        question: "Question 75: Your company is planning to migrate their historical dataset into BigQuery. This data would be exposed to the data scientists for perform analysis using BigQuery ML. The data scientists would like to know which ML models does the BigQuery ML support. What would be your answer? (Choose 2)",
        options: [
            "A. Random Forest",
            "B. Linear Regression",
            "C. K Means",
            "D. Principal Component Analysis",
            "E. Multiclass logistic regression for Classification"
        ],
        answer: "BE",
        explanation: 'Correct answers are B & E as BigQuery ML supports Linear regression, Binary Logistic regression and Multiclass logistic regression. Refer GCP documentation - BigQuery ML: - https://cloud.google.com/bigquery/docs/bigqueryml-intro; BigQuery ML currently supports the following types of models: Linear regression — These models can be used for predicting a numerical value. Binary logistic regression — These models can be used for predicting one of two classes (such as identifying whether an email is spam). Multiclass logistic regression for classification — These models can be used to predict more than two classes such as whether an input is ""low-value"", ""medium-value"", or ""high-value"".'
    },
    {
        // Question 76
        id: 76,
        question: "Your company is making the move to Google Cloud and has chosen to use a managed database service to reduce overhead. Your existing database is used for a product catalog that provides real-time inventory tracking for a retailer. Your database is 500 GB in size. The data is semi-structured and does not need full atomicity. You are looking for a truly no-ops/serverless solution. What storage option should you choose?",
        options: [
            "A. Cloud Datastore",
            "B. Cloud Bigtable",
            "C. Cloud SQL",
            "D. BigQuery"
        ],
        answer: "A",
        explanation: "Correct answer is A as Cloud Datastore offers NoOps NoSQL solution which is suited for Semistructured data and ideal for product catalogs. Refer GCP documentation - Storage Options: - https://cloud.google.com/storage-options/; Options B & C are wrong as they are not complete NoOps solution. Also Cloud SQL is not suited for Semi Structured data. Option D is wrong as BigQuery is ideal for analytics solution ;"
    },
    {
        // Question 77
        id: 77,
        question: "Your company receives a lot of financial data in CSV files. The files need to be processed, cleaned and transformed before they are made available for analytics. The schema of the data also changes every third month. The Data analysts should be able to perform the tasks; 1. No prior knowledge of any language with no coding; 2. Provided a GUI tool to build and modify the schema; What solution best fits the need?",
        options: [
            "A. Use Dataflow code and provide Data Analysts the access to the code. Store the schema externally to be easily modified.",
            "B. Use Dataprep with transformation recipes.",
            "C. Use Dataproc spark and provide Data Analysts the access to the code. Store the schema externally to be easily modified.",
            "D. Use DataLab with transformation recipes."
        ],
        answer: "B",
        explanation: "Correct answer is B as Dataprep can be used to handle schema changes by Data Analysts without any programming knowledge, but through an easy to use GUI. Refer GCP documentation - Dataprep: - https://cloud.google.com/dataprep/; Cloud Dataprep by Trifacta is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis. Cloud Dataprep is serverless and works at any scale. There is no infrastructure to deploy or manage. Easy data preparation with clicks and no code. Visually explore and interact with data in seconds. Instantly understand data distribution and patterns. You don't need to write code. You can prepare data with a few clicks. Process diverse datasets — structured and unstructured. Transform data stored in CSV, JSON, or relational table formats. Prepare datasets of any size, megabytes to terabytes, with equal ease. Options A, C & D are wrong as they would need programming knowledge."
    },
    {
        // Question 78
        id: 78,
        question: "A user wishes to generate reports on petabyte scale data using a Business Intelligence (BI) tools. Which storage option provides integration with BI tools and supports OLAP workloads up to petabyte-scale?",
        options: [
            "A. Bigtable",
            "B. Cloud Datastore",
            "C. Cloud Storage",
            "D. BigQuery"
        ],
        answer: "D",
        explanation: "Correct answer is D as BigQuery is fully managed data warehouse and is fast and easy to use on data of any size. With BigQuery, you’ll get great performance on your data, while knowing you can scale seamlessly to store and analyze petabytes more without having to buy more capacity. Refer GCP documentation - Storage Options: - https://cloud.google.com/storage-options/; Options A & B are wrong as Bigtable & Datastore are NoSQL solution and not suitable for OLAP data warehouse work loads. Option C is wrong as Cloud Storage provides object storage only."
    },
    {
        // Question 79
        id: 79,
        question: "Your company has assigned fixed number for slots to each project for BigQuery. Each project wants to monitor the number of available slots. How can the monitoring be configured?",
        options: [
            "A. Monitor the BigQuery Slots Used metric",
            "B. Monitor the BigQuery Slots Pending metric",
            "C. Monitor the BigQuery Slots Allocated metric",
            "D. Monitor the BigQuery Slots Available metric"
        ],
        answer: "D",
        explanation: "Correct answer is D as BigQuery provides 2 metrics for Slots. Slots Allocated to the project and Slots Available for the project. Refer GCP documentation - BigQuery Metrics: - https://cloud.google.com/bigquery/docs/monitoring#metrics;"
    },
    {
        // Question 80
        id: 80,
        question: "Your company is planning to migrate its data first to Google Cloud Storage. You need to keep the contents of this bucket in sync with a new Google Cloud Storage bucket to support a backup storage destination. What is the best method to achieve this?",
        options: [
            "A. Once per week, use a gsutil cp command to copy over newly modified files.",
            "B. Use gsutil rsync commands to keep both locations in sync.",
            "C. Use Storage Transfer Service to keep both the source and destination in sync.",
            "D. Use gsutil -m cp to keep both locations in sync."
        ],
        answer: "B",
        explanation: "Correct answer is B as the data transfer is between on-premises and Google Cloud, the gsutil rsync can be used to keep the source and destination in sync. gsutil rsync command makes the contents under dst_url the same as the contents under src_url, by copying any missing files/objects (or those whose data has changed), and (if the -d option is specified) deleting any extra files/objects. src_url must specify a directory, bucket, or bucket subdirectory. ; Options A & D are wrong as copy can be used to copy, however there needs to be more handling to keep it in sync. Option C is wrong as the data is not available in an online location."
    },
    {
        // Question 81
        id: 81,
        question: "Your company is planning to host its analytics data in BigQuery. You are required to control access to the dataset with least privilege meeting the following guidelines; Each team has multiple Team Leaders, who should have the ability to create, delete tables, but not delete dataset. Each team has Data Analysts, who should be able to query data, but not modify it; How would you design the access control?",
        options: [
            "A. Grant Team leader group - OWNER and Data Analyst - WRITER",
            "B. Grant Team leader group - OWNER and Data Analyst - READER",
            "C. Grant Team leader group - WRITER and Data Analyst - READER",
            "D. Grant Team leader group - READER and Data Analyst - WRITER"
        ],
        answer: "C",
        explanation: "Correct answer is C as Team leader group should be provider the WRITER access and the Data Analysts should be provided only the reader access. Refer GCP documentation - BigQuery Dataset Primitive Roles: - https://cloud.google.com/bigquery/docs/access-control#dataset-primitive-roles; Options A & D are wrong as Data Analyst should not have the WRITER permissions; Options A & B are wrong as Team leader should not have the OWNER permission;"
    },
    {
        // Question 82
        id: 82,
        question: "You have migrated your Hadoop jobs with external dependencies on a Dataproc cluster. As a security requirement, the cluster has been setup using internal IP addresses only and does not have a direct Internet connectivity. How can the cluster be configured to allow the installation of the dependencies?",
        options: [
            "A. Setup a SSH tunnel to Internet and route outbound requests through it.",
            "B. Store the external dependencies in Cloud Storage and modify the initialization scripts",
            "C. Setup a SOCKS proxy and route outbound requests through it.",
            "D. Setup the Dataproc master node is public subnet to be able to download external dependencies"
        ],
        answer: "B",
        explanation: "Correct answer is B as the Dataproc cluster is configured with internal IP addresses only, the dependencies can be stored in Cloud Storage so that they can be accessed using internal IPs. Refer GCP documentation - Dataproc Init Actions: - https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/init-actions#important_things_to_know; If you create a Cloud Dataproc cluster with internal IP addresses only, attempts to access the Internet in an initialization action will fail unless you have configured routes to direct the traffic through a NAT or a VPN gateway. Without access to the Internet, you can enable Private Google Access, and place job dependencies in Cloud Storage; cluster nodes can download the dependencies from Cloud Storage from internal IPs. Options A, C & D are wrong as they would not allow secure outbound connection."
    },
    {
        // Question 83
        id: 83,
        question: "Your company wants to develop a system to measure the feedback of their products from the reviews posted by people on various Social media platforms. The reviews are mainly text based. You need to do a quick Proof of Concept (PoC) to implement and demo the same. How would you design your application?",
        options: [
            "A. Create and Train a sentiment analysis model using Tensorflow",
            "B. Use Cloud Speech-to-Text API for sentiment analysis",
            "C. Use Cloud Natural Language API for sentiment analysis",
            "D. Use Cloud Vision API for sentiment analysis"
        ],
        answer: "C",
        explanation: "Correct answer is C as Natural Language processing provides pre-model to perform sentiment analysis. Refer GCP documentation - Cloud Natural Language: - https://cloud.google.com/natural-language/; You can use Cloud Natural Language to extract information about people, places, events, and much more mentioned in text documents, news articles, or blog posts. You can use it to understand sentiment about your product on social media or parse intent from customer conversations happening in a call center or a messaging app. You can analyze text uploaded in your request or integrate with your document storage on Google Cloud Storage. Option A is wrong as building and training a senetiment analysis model using Tensorflow would take time and effort. Option B is wrong as Speech-to-Text API is for audio to text conversion. Option D is wrong as Cloud Vision is for image analysis."
    },
    {
        // Question 84
        id: 84,
        question: "You have a real time data processing pipeline running in Dataflow. As a part of changed requirement you need to update the windowing and triggering strategy for the pipeline. You want to update the pipeline without any loss of in-flight messages. What is the best way to deploy the changes?",
        options: [
            "A. Stop with pipeline using the drain option and use new Dataflow pipeline",
            "B. Stop with pipeline using the cancel option and use new Dataflow pipeline",
            "C. Pass the --update option with --jobname parameter to the same name as the job you want to update",
            "D. Pass the --update option with --jobname parameter to the new job name you want to update"
        ],
        answer: "C",
        explanation: 'Correct answer is C as Dataflow allows updates to the existing pipeline in case of compatible changes while saving the intermediate state data. Refer GCP documentation - Dataflow Updating a Pipeline: - https://cloud.google.com/dataflow/docs/guides/updating-a-pipeline; Option A is wrong as with Drain option the windows and triggers would closed immediately. Option B is wrong as Cancel immediately halts processing, you may lose any ""in-flight"" data. Option D is wrong as the job name should be the same.'
    },
    {
        // Question 85
        id: 85,
        question: "Your infrastructure runs on AWS and includes a set of multi-TB enterprise databases that are backed up nightly on the S3. You need to create a redundant backup to Google Cloud. You are responsible for performing scheduled monthly disaster recovery drills. You want to create a cost-effective solution. What should you do?",
        options: [
            "A. Use Transfer Appliance to transfer the backup files to a Cloud Storage Nearline storage bucket as a final destination.",
            "B. Use Transfer Appliance to transfer the backup files to a Cloud Storage Coldline bucket as a final destination.",
            "C. Use Storage Transfer Service to transfer the backup files to a Cloud Storage Nearline storage bucket as a final destination.",
            "D. Use Storage Transfer Service to transfer the backup files to a Cloud Storage Coldline storage bucket as a final destination."
        ],
        answer: "C",
        explanation: "Correct answer is C as the data needs to be backed up nightly and accessed monthly, Storage Transfer service can be used to transfer it from S3 and Nearline storage for cost-effective storage solution. Refer GCP documentation - Storage Classes & Data Transfer: - https://cloud.google.com/storage/docs/storage-classes & https://cloud.google.com/products/data-transfer/; Options A & B are wrong Transfer Appliance is ideal for huge one time data. Option D is wrong as Coldline storage is suitable is data needs be accessed yearly."
    },
    {
        // Question 86
        id: 86,
        question: "Your company is working on real time click stream analysis. They want to implement a feature to capture user click during a session and aggregate the count for that session. Session timeout is 30 mins. How would you design the data processing?",
        options: [
            "A. Use Dataflow and fixed windowing of 30 minutes",
            "B. Use Dataflow and Session windowing with gap duration of 30 minutes",
            "C. Use Dataflow and Global window with gap duration of 30 minutes",
            "D. Use Dataproc and store the data in BigQuery and aggregate the same"
        ],
        answer: "B",
        explanation: "Correct answer is B as Dataflow would help in performing real time analytics and data count aggregation over a window. Session windows to track the session for the aggregate click count by the user. Refer GCP documentation - Beam Windowing Basics: - https://beam.apache.org/documentation/programming-guide/#windowing-basics; A session window function defines windows that contain elements that are within a certain gap duration of another element. Session windowing applies on a per-key basis and is useful for data that is irregularly distributed with respect to time. For example, a data stream representing user mouse activity may have long periods of idle time interspersed with high concentrations of clicks. If data arrives after the minimum specified gap duration time, this initiates the start of a new window. Options A & C are wrong as Fixed and Global windowing would not work. Option D is wrong as Dataproc and BigQuery would not provide real time analytics."
    },
    {
        // Question 87
        id: 87,
        question: "You are setting up Cloud Dataproc to perform some data transformations using Apache Spark jobs. The data will be used for a new set of non-critical experiments in your marketing group. You want to set up a cluster that can transform a large amount of data in the most cost-effective way. What should you do?",
        options: [
            "A. Set up a cluster in High Availability mode with high-memory machine types. Add 10 additional local SSDs.",
            "B. Set up a cluster in High Availability mode with default machine types. Add 10 additional Preemptible worker nodes.",
            "C. Set up a cluster in Standard mode with high-memory machine types. Add 10 additional Preemptible worker nodes.",
            "D. Set up a cluster in Standard mode with the default machine types. Add 10 additional local SSDs."
        ],
        answer: "C",
        explanation: "Correct answer is C as Dataproc is a managed service which handles Spark and Hadoop jobs and Spark and high-memory machines only need the Standard mode. Also, using Preemptible nodes provides cost-efficiency as this is not mission-critical. Refer GCP documentation - Dataproc pricing: - https://cloud.google.com/dataproc/pricing; Note: Preemptible instances can be used to lower your Compute Engine costs for Cloud Dataproc clusters, but do not change the way you are billed for the Cloud Dataproc premium. Options A & B are wrong as this scenario does not call for High Availability mode because it handles non-critical experiments. Option D is wrong as local SSDs would cost more; instead, use Preemptible nodes to meet your objective of delivering a cost-effective solution."
    },
    {
        // Question 88
        id: 88,
        question: "Your infrastructure includes two 100-TB enterprise file servers. You need to perform a one-way, one-time migration of this data to the Google Cloud securely. Only users in Germany will access this data. You want to create the most cost-effective solution. What should you do?",
        options: [
            "A. Use Transfer Appliance to transfer the offsite backup files to a Cloud Storage Regional storage bucket as a final destination.",
            "B. Use Transfer Appliance to transfer the offsite backup files to a Cloud Storage Multi-Regional bucket as a final destination.",
            "C. Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Regional storage bucket as a final destination.",
            "D. Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Multi-Regional storage bucket as a final destination."
        ],
        answer: "A",
        explanation: "Correct answer is A as the data is huge it can be transferred using Transfer Appliance in a time and cost effective way. Also, as the data is going to be accessed in a single region it can be hosted in a regional bucket. Refer GCP documentation - Storage Classes: - https://cloud.google.com/storage/docs/storage-classes; Option B is wrong as the data is accessed in a single region, it would be more cost effective storing it in a regional bucket. Options C & D are wrong as the data is huge it is more time and cost effective to transfer the data Transfer Appliance."
    },
    {
        // Question 89
        id: 89,
        question: "You are building a data pipeline on Google Cloud. You need to prepare source data for a machine-learning model. This involves quickly deduplicating rows from three input tables and also removing outliers from data columns where you do not know the data distribution. What should you do?",
        options: [
            "A. Write an Apache Spark job with a series of steps for Cloud Dataflow. The first step will examine the source data, and the second and third steps step will perform data transformations.",
            "B. Write an Apache Spark job with a series of steps for Cloud Dataproc. The first step will examine the source data, and the second and third steps step will perform data transformations.",
            "C. Use Cloud Dataprep to preview the data distributions in sample source data table columns. Write a recipe to transform the data and add it to the Cloud Dataprep job.",
            "D. Use Cloud Dataprep to preview the data distributions in sample source data table columns. Click on each column name, click on each appropriate suggested transformation, and then click 'Add' to add each transformation to the Cloud Dataprep job."
        ],
        answer: "D",
        explanation: "Correct answer is D as the requirements is to prepare/clean source data, use Cloud Dataprep suggested transformations to quickly build a transformation job. Refer GCP documentation - Dataprep: - https://cloud.google.com/dataprep/; Cloud Dataprep by Trifacta is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis. Cloud Dataprep is serverless and works at any scale. There is no infrastructure to deploy or manage. Easy data preparation with clicks and no code. Cloud Dataprep automatically identifies data anomalies and helps you to take corrective action fast. Get data transformation suggestions based on your usage pattern. Standardize, structure, and join datasets easily with a guided approach. Option C is wrong as you can simply use the suggested transformations instead of writing custom recipe in Cloud Dataprep; Options A & B are wrong as you should not use Apache Spark and Cloud Dataflow or Cloud Dataproc for this scenario."
    },
    {
        // Question 90
        id: 90,
        question: "Your company plans to migrate a multi-petabyte data set to the cloud. The data set must be available 24hrs a day. Your business analysts have experience only with using a SQL interface. How should you store the data to optimize it for ease of analysis?",
        options: [
            "A. Load data into Google BigQuery.",
            "B. Insert data into Google Cloud SQL.",
            "C. Put flat files into Google Cloud Storage.",
            "D. Stream data into Google Cloud Datastore."
        ],
        answer: "A",
        explanation: "Correct answer is A as BigQuery is the only of these Google products that supports an SQL interface and a high enough SLA (99.9%) to make it readily available. Option B is wrong as Cloud SQL cannot support multi-petabyte data. Storage limit for Cloud SQL is 10TB; Option C is wrong as Cloud Storage does not provide SQL interface. Option D is wrong as Datastore does not provide a SQL interface and is a NoSQL solution."
    },
    {
        // Question 91
        id: 91,
        question: "A company has lot of data sources from multiple systems used for reporting. Over a period of time, a lot data is missing and you are asked to perform anomaly detection. How would you design the system?",
        options: [
            "A. Use Dataprep with Data Studio",
            "B. Load in Cloud Storage and use Dataflow with Data Studio",
            "C. Load in Cloud Storage and use Dataprep with Data Studio",
            "D. Use Dataflow with Data Studio"
        ],
        answer: "C",
        explanation: "Correct answer is C as Dataprep provides data cleaning and automatically identifies anomalies in the data. It can integrated with Cloud Storage and BigQuery; Refer GCP documentation - Dataprep: - https://cloud.google.com/dataprep/; Option A is wrong as Dataprep would not be able interact directly with local system. Options B & D are wrong as Cloud Dataflow is a fully-managed service for transforming and enriching data in stream (real time) and batch (historical) modes with equal reliability and expressiveness -- no more complex workarounds or compromises needed. It does not provide anomaly detection."
    },
    {
        // Question 92
        id: 92,
        question: "You are designing storage for event data as part of building a data pipeline on Google Cloud. Your input data is in CSV format. You want to minimize the cost of querying individual values over time windows. Which storage service and schema design should you use?",
        options: [
            "A. Use Cloud Bigtable for storage. Design tall and narrow tables, and use a new row for each single event version.",
            "B. Use Cloud Bigtable for storage. Design short and wide tables, and use a new column for each single event version.",
            "C. Use Cloud Storage for storage. Join the raw file data with a BigQuery log table.",
            "D. Use Cloud Storage for storage. Write a Cloud Dataprep job to split the data into partitioned tables."
        ],
        answer: "A",
        explanation: "Correct answer is A as its an event data (time series) and need to be restricted to individual values over time windows, it is best to use Bigtable with tall and narrow tables. Refer GCP documentation - Bigtable Time series schema: - https://cloud.google.com/bigtable/docs/schema-design-time-series#use_tall_and_narrow_tables; For time series, you should generally use tall and narrow tables. This is for two reasons: Storing one event per row makes it easier to run queries against your data. Storing many events per row makes it more likely that the total row size will exceed the recommended maximum. As an optimization, you can use short and wide tables, but avoid unbounded numbers of events. For example, if you usually need to retrieve an entire month of events at once, the temperature table above is a reasonable optimization—the row is bounded in size to the number of days in a month. Option B is wrong as short and wide tables and are ideal for storing time series data. Options C & D are wrong as you do not need to use GCS/BQ for this scenario."
    },
    {
        // Question 93
        id: 93,
        question: "For this Question, refer to the Flowlogistic case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic; Flowlogistic's Kafka server cluster has been unable to scale to the demands of their data ingest needs. How can they migrate this functionality to Google Cloud to be able to scale for future growth?",
        options: [
            "A. Create a Computer Engine managed instance group that is configured to autoscale to 150% of peak demand. Use a managed instance template with Kafka installed to automatically scale as needed, and direct traffic to this autoscaling cluster.",
            "B. Create a single Pub/Sub topic. Configure endpoints to publish to the Pub/Sub topic, and configure Cloud Dataflow to subscribe to the same topic to process messages as they come in.",
            "C. Create a Kubernetes Engine cluster in each region needed. Install Kafka on the cluster. Use an HTTP load balancer to serve each Kubernetes cluster region. Configure a new Cloud Dataflow pipeline in each region to process requests forwarded from the Kubernetes cluster.",
            "D. Create a separate Pub/Sub topic for each region. Configure endpoints to publish to the Pub/Sub topic closest to their location, and configure a new Cloud Dataflow pipeline in each region to subscribe to the equivalent Pub/Sub topic to process messages as they come in."
        ],
        answer: "B",
        explanation: "Correct answer is B as Pub/Sub provides a direct replacement for Kafka on Google Cloud as a messaging service. It is also fully managed and scalable. Pub/Sub is global and can be used a single endpoint with Dataflow to process the messages. Options A & C are wrong as using Compute engine and Kubernetes engine are not cost-effective and are not actually completely managed no-ops solutions. Option D is wrong as separate endpoints are not required for each region."
    },
    {
        // Question 94
        id: 94,
        question: "You want to display aggregate view counts for your YouTube channel data in Data Studio. You want to see the video tiles and view counts summarized over the last 30 days. You also want to segment the data by the Country Code using the fewest possible steps. What should you do?",
        options: [
            "A. Set up a YouTube data source for your channel data for Data Studio. Set Views as the metric and set Video Title as a report dimension. Set Country Code as a filter.",
            "B. Set up a YouTube data source for your channel data for Data Studio. Set Views as the metric and set Video Title and Country Code as report dimensions.",
            "C. Export your YouTube views to Cloud Storage. Set up a Cloud Storage data source for Data Studio. Set Views as the metric and set Video Title as a report dimension. Set Country Code as a filter.",
            "D. Export your YouTube views to Cloud Storage. Set up a Cloud Storage data source for Data Studio. Set Views as the metric and set Video Title and Country Code as report dimensions."
        ],
        answer: "B",
        explanation: "Correct answer is B as there is no need to export; you can use the existing YouTube data source. Country Code is a dimension because it's a string and should be displayed as such, that is, showing all countries, instead of filtering. Refer GCP documentation - Data Studio Youtube connector: - https://support.google.com/datastudio/answer/7020432?hl=en; Option A is wrong as you cannot produce a summarized report that meets your business requirements using the options listed. Options C & D are wrong as you do not need to export data from YouTube to Cloud Storage; you can simply use the existing YouTube data source."
    },
    {
        // Question 95
        id: 95,
        question: "A company wants to transfer petabyte scale of data to Google Cloud for their analytics, however are constrained on their internet connectivity? Which GCP service can help them transfer the data quickly?",
        options: [
            "A. Transfer appliance and Dataprep to decrypt the data",
            "B. Google Transfer service using multiple VPN connections",
            "C. gustil with multiple VPN connections",
            "D. Transfer appliance and rehydrator to decrypt the data"
        ],
        answer: "D",
        explanation: "Correct answer is D as the data is huge it should be transferred using Transfer Appliance and use a Rehydrator to decrypt the data. Refer GCP documentation - Data Rehydration: - https://cloud.google.com/transfer-appliance/docs/2.0/data-rehydration; Option A is wrong as Dataprep does not help is decrypting the data. Option B is wrong as Google Transfer Service does not support importing data from on-premises data center. It only supports online imports. Option C is wrong as the data is huge transferring it with gsutil would take a long time."
    },
    {
        // Question 96
        id: 96,
        question: "For this Question, refer to the MJTelco case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco; MJTelco needs to be able to reliably handle ever-increasing amounts of streaming telemetry data, process it, and economically store analyzed data. What services should they use for this task?",
        options: [
            "A. Cloud Pub/Sub, Cloud Dataflow, BigQuery",
            "B. Cloud Pub/Sub, Cloud Dataproc, Bigtable",
            "C. Kubernetes Engine, Cloud Dataflow, Cloud Datastore",
            "D. Stackdriver, Cloud Dataproc, Cloud Spanner"
        ],
        answer: "A",
        explanation: "Correct answer is A as the need to ingest it, transform and store the Cloud Pub/Sub, Cloud Dataflow, BigQuery is ideal stack to handle the IoT data, while storing it economically for analysis. Refer GCP documentation - IoT: - https://cloud.google.com/solutions/iot-overview#ingestion; Option B is wrong as Dataproc is not completely serverless and would need Hadoop and Spark jobs. Also, Bigtable is an expensive storage option. Option C is wrong as Kubernetes Engine is not an ingestion service and would not be cost effective. Also, Datastore is not ideal solution for analytics. Option D is wrong as Dataproc is not completely serverless and would need Hadoop and Spark jobs. Stackdriver is not an ingestion service."
    },
    {
        // Question 97
        id: 97,
        question: "Your company wants to try out the cloud with low risk. They want to archive approximately 100 TB of their log data to the cloud and test the analytics features available to them there, while also retaining that data as a long-term disaster recovery backup. Which two steps should they take? (Choose two answers)",
        options: [
            "A. Load logs into Google BigQuery.",
            "B. Load logs into Google Cloud SQL.",
            "C. Import logs into Google Stackdriver.",
            "D. Insert logs into Google Cloud Bigtable.",
            "E. Upload log files into Google Cloud Storage."
        ],
        answer: "AE",
        explanation: "Correct answers are A & E as Google Cloud Storage can provide long term archival option and BigQuery provides analytics capabilities. Option B is wrong as Cloud SQL is relational database and does not support the capacity required as well as not suitable for long term archival storage. Option C is wrong as Stackdriver is a monitoring, logging, alerting and debugging tool. It is not ideal for long term retention of data and does not provide analytics capabilities. Option D is wrong as Bigtable is a NoSQL solution and can be used for analytics. However it is ideal for data with low latency access and is expensive."
    },
    {
        // Question 98
        id: 98,
        question: "Your BigQuery table needs to be accessed by team members who are not proficient in technology. You want to simplify the columns they need to query to avoid confusion. How can you do this while preserving all of the data in your table?",
        options: [
            "A. Train your team members on how to query larger tables.",
            "B. Create a query that uses the reduced number of columns they will access. Save this query as a view in a different dataset. Give your team members access to the new dataset and instruct them to query against the saved view instead of the main table.",
            "C. Apply column filtering to your table, and restrict the unfiltered view to yourself and those who need access to the full table.",
            "D. Create a copy of your table in a different dataset, and remove the unneeded columns from the copy. Have your team members run queries against this copy."
        ],
        answer: "B",
        explanation: "Correct answer is B as the best way to limit and expose number of columns and access is to create a View. With BigQuery, the access can only be controlled on Datasets and Views, but not on tables. Refer GCP documentation - BigQuery Views: - https://cloud.google.com/bigquery/docs/views-intro; Option A is wrong as it is not a feasible solution. Option C is wrong as column filtering cannot be applied to Table and it can be done through Views. Option D is wrong as it is not an ideal solution, as it results in duplication of data. Also, deletion of Columns is not supported."
    },
    {
        // Question 99
        id: 99,
        question: "You want to process payment transactions in a point-of-sale application that will run on Google Cloud Platform. Your user base could grow exponentially, but you do not want to manage infrastructure scaling. Which Google database service should you use?",
        options: [
            "A. Cloud SQL",
            "B. BigQuery",
            "C. Cloud Bigtable",
            "D. Cloud Datastore"
        ],
        answer: "D",
        explanation: "Correct answer is D as the payment transactions would need a transactional data service Datastore can support the same. Also it is fully managed with NoOps required. Refer GCP documentation - Storage Options: - https://cloud.google.com/storage-options/; Option A is wrong as Cloud SQL would need infrastructure scaling. Although storage can be automatically scaled (upto a limit), instance type needs to be changed as per the load manually. Option B is wrong as BigQuery is an data warehousing option. Option C is wrong as Bigtable is not a relational database but an NoSQL option."
    },
    {
        // Question 100
        id: 100,
        question: "Your company hosts its data into multiple Cloud SQL databases. You need to export your Cloud SQL tables into BigQuery for analysis. How can the data be exported?",
        options: [
            "A. Convert your Cloud SQL data to JSON format, then import directly into BigQuery",
            "B. Export your Cloud SQL data to Cloud Storage, then import into BigQuery",
            "C. Import data to BigQuery directly from Cloud SQL.",
            "D. Use the BigQuery export function in Cloud SQL to manage exporting data into BigQuery."
        ],
        answer: "B",
        explanation: "Correct answer is B as BigQuery does not provide direct load from Cloud SQL. The data needs to be loaded through Cloud Storage. Refer GCP documentation - BigQuery loading data: - https://cloud.google.com/bigquery/docs/loading-data; Options A, C & D are wrong as they are not supported options."
    },
    {
        // Question 101
        id: 101,
        question: "You are using Dataflow for running a real time streaming data processing pipeline. The pipeline currently uses 3 workers and is running on n1-standard-2 compute engine machine types. The pipeline is currently running slow and you want to increase its performance. How can you update the pipeline to improve the performance? (Choose 2)",
        options: [
            "A. Change workerMachineType machine type from n1-standard-2 to n1-standard-4",
            "B. Move the Dataflow pipeline is a dedicated network",
            "C. Modify the maxNumWorkers parameter to increase the worker nodes",
            "D. Change workerMachineType machine type from n1-standard-2 to n1-standard-1"
        ],
        answer: "AC",
        explanation: "Correct answers are A & C as the performance of the Dataflow pipeline can be improve by increasing the maximum number of nodes that can be used and upgrading the machine type from n1-standard-2 to n1-standard-4. Refer GCP documentation - Dataflow Execution parameters: - https://cloud.google.com/dataflow/docs/guides/specifying-exec-params; Option B is wrong as network does not have any impact on the Dataflow pipeline performance. Option D is wrong as it reduces the machine configuration and hence performance would be impacted."
    },
    {
        // Question 102
        id: 102,
        question: "For this Question, refer to the MJTelco case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco; In order to protect live customer data, MJTelco needs to maintain separate operating environments —development/test, staging, and production— to meet the needs of running experiments, deploying new features, and serving production customers. What is the best practice for isolating these environments while at the same time maintaining operability?",
        options: [
            "A. Create separate organization accounts for each environment, and use domain wide IAM roles to allow access between each organization environment to share data as needed.",
            "B. Place all three environments in the same project, however, use separate Cloud Storage buckets, Cloud ML Engine clusters, and other services for each environment",
            "C. Place resources into the same project. but use object versioning in Cloud Storage in order to separate data by environment.",
            "D. Create a separate project for dev/test, staging, and production. Migrate relevant data between projects when ready for the next stage."
        ],
        answer: "D",
        explanation: "Correct answer is D as the best practice is to isolate the environments by projects to control billing and access control. Refer GCP documentation - Separate Environments: - https://cloud.google.com/appengine/docs/standard/go/creating-separate-dev-environments; Cloud-based software projects should employ multiple environments. These environments typically have names like dev, qa, staging, and prod. It's vital that these environments be completely isolated from one another, and they typically have very different operator-access permissions. For example, the development team might have full access to the dev environment, but only limited access to the prod environment, with all code deployment driven only by automated scripts. Further, it's absolutely essential that the data in the different environments stay isolated. Using multiple GCP projects suits these requirements perfectly as the projects provide complete isolation of code and data, and operator permissions can be managed separately. Because App Engine automatically scales its serving instances, you only pay for what you use. For example, if your staging environment is only required one week out of every four, you won't pay for any serving instance costs for the other three. However, keep in mind that you will be billed for any data stored in these projects. Option A is wrong as separate organization is not needed. Options B & C is wrong as same project does not provide isolation."
    },
    {
        // Question 103
        id: 103,
        question: "Your company is building a package tracking application to track the complete lifecycle of the package. The data is stored in a BigQuery time partitioned table. Over the period of time the data in the table and grown manifold and Data Scientists are complaining of slowness in their package tracking queries. How can the table be modified to improve the performance and maintaining cost effectiveness?",
        options: [
            "A. Import the table data to Bigtable",
            "B. Change the partitioned table column from time to date",
            "C. Update to table to perform clustering on package id",
            "D. Ask the Data Scientists to use LIMIT parameter on the queries"
        ],
        answer: "C",
        explanation: "Correct answer is C as Clustering the data on the package Id can greatly improve the performance. Refer GCP documentation - BigQuery Clustered Table: - https://cloud.google.com/bigquery/docs/clustered-tables; Clustering can improve the performance of certain types of queries such as queries that use filter clauses and queries that aggregate data. When data is written to a clustered table by a query job or a load job, BigQuery sorts the data using the values in the clustering columns. These values are used to organize the data into multiple blocks in BigQuery storage. When you submit a query containing a clause that filters data based on the clustering columns, BigQuery uses the sorted blocks to eliminate scans of unnecessary data; In a table partitioned by a date or timestamp column, each partition contains a single day of data. When the data is stored, BigQuery ensures that all the data in a block belongs to a single partition. A partitioned table maintains these properties across all operations that modify it: query jobs, Data Manipulation Language (DML) statements, Data Definition Language (DDL) statements, load jobs, and copy jobs. This requires BigQuery to maintain more metadata than a non-partitioned table. As the number of partitions increases, the amount of metadata overhead increases. Although more metadata must be maintained, by ensuring that data is partitioned globally, BigQuery can more accurately estimate the bytes processed by a query before you run it. This cost calculation provides an upper bound on the final cost of the query. In a clustered table, BigQuery automatically sorts the data based on the values in the clustering columns and organizes them in optimally sized storage blocks. You can achieve more finely grained sorting by creating a table that is clustered and partitioned. A clustered table maintains the sort properties in the context of each operation that modifies it. As a result, BigQuery may not be able to accurately estimate the bytes processed by the query or the query costs. When blocks of data are eliminated during query execution, BigQuery provides a best effort reduction of the query costs. Option A is wrong as Bigtable would not be a cost effective option. Option B is wrong as changing the partitioning from time to date would be impact queries on packages. Option D is wrong as LIMIT parameter does limit the amount of data queried."
    },
    {
        // Question 104
        id: 104,
        question: "You have a dataset in BigQuery storing transaction data with details of product and date purchased. Query fired on the data for a product using --dry-run shows that is performs a complete scan. How can the performance of the query be improved?",
        options: [
            "A. Dry run always shows complete scan and the result would be different when the actual query is fired",
            "B. Use the limit parameter to limit the data queried",
            "C. Set maximum bytes on the query to limit the amount of data queried",
            "D. Use Partitioning and clustering on the table"
        ],
        answer: "D",
        explanation: "Correct answer is D as it is recommended to have the table partitioned and clustered so as query only relevant data to improve the performance and keep the costs low. Refer GCP documentation - BigQuery Cost Best Practices and Clustering: - https://cloud.google.com/bigquery/docs/best-practices-costs & https://cloud.google.com/bigquery/docs/clustered-tables; Option A is wrong as dry-run shows the actual data that would be queried and is one of the best practices to check before the actual query is fired. Option B is wrong as limit does not limit the amount of data queried, but only the results. Option C is wrong as maximum bytes limits the amount of data queried. However, it fails if the bytes is exceeded without any results."
    },
    {
        // Question 105
        id: 105,
        question: "Your company is using WILDCARD tables to query data across multiple tables with similar names. The SQL statement is currently failing with the following error:<br><img src='/static/images/deptq105.png'><br><br>Which table name will make the SQL statement work correctly?",
        options: [
            "A. `bigquery-public-data.noaa_gsod.gsod`",
            "B. bigquery-public-data.noaa_gsod.gsod*",
            "C. `bigquery-public-data.noaa_gsod.gsod`*",
            "D. `bigquery-public-data.noaa_gsod.gsod*`"
        ],
        answer: "D",
        explanation: 'Correct answer is D as the table name should include a * for the wildcard and it must be enclosed in backtick characters. Refer GCP documentation - BigQuery Wildcard table reference: - https://cloud.google.com/bigquery/docs/reference/standard-sql/wildcard-table-reference; Wildcard tables enable you to query multiple tables using concise SQL statements. Wildcard tables are available only in standard SQL. The wildcard character, ""*"", represents one more characters of a table name. The wildcard character can appear only as the final character of a wildcard table name. The wildcard table name contains the special character (*), which means that you must enclose the wildcard table name in backtick (`) characters.'
    },
    {
        // Question 106
        id: 106,
        question: "As part of a complex rollout, you have hired a third party developer consultant to assist with creating your Dataflow processing pipeline. The data that this pipeline will process is very confidential, and the consultant cannot be allowed to view the data itself. What actions should you take so that they have the ability to help build the pipeline but cannot see the data it will process?",
        options: [
            "A. Assign the consultant the Dataflow Developer IAM role.",
            "B. Apply custom encryption to the data before it goes through the pipeline.",
            "C. Use a separate development project to construct the pipeline with example data, therefore not exposing the live data to the developer's work environment.",
            "D. Anonymize the data before it gets to the Dataflow pipeline."
        ],
        answer: "A",
        explanation: "Correct answer is A as the Dataflow developer role would help provide the third-party consultant access to create and cancel jobs. However, it does not provide access to view the data. Refer GCP documentation - Dataflow roles: - https://cloud.google.com/dataflow/docs/concepts/access-control#roles; Options B,C & D are wrong as that would need additional steps and the access can be easily controlled using IAM roles."
    },
    {
        // Question 107
        id: 107,
        question: "You are asked to design next generation of smart helmet for accident detection and reporting system. Each helmet will push 10kb of biometric data In JSON format every 1 second to a collection platform that will process and use trained machine learning model to predict and detect if an accident happens and send notification. Management has tasked you to architect the platform ensuring the following requirements are met: · Provide the ability for real-time analytics of the inbound biometric data; · Ensure ingestion and processing of the biometric data is highly durable. Elastic and parallel; · The results of the analytic processing should be persisted for data mining to improve the accident detection ML model in the future. Which architecture outlined below will meet the initial requirements for the platform?",
        options: [
            "A. Utilize Cloud Storage to collect the inbound sensor data, analyze data with Dataproc and save the results to BigQuery.",
            "B. Utilize Cloud Pub/Sub to collect the inbound sensor data, analyze the data with Dataflow and save the results to BigQuery.",
            "C. Utilize Cloud Pub/Sub to collect the inbound sensor data, analyze the data with Dataflow and save the results to Cloud SQL.",
            "D. Utilize Cloud Pub/Sub to collect the inbound sensor data, analyze the data with Dataflow and save the results to Bigtable."
        ],
        answer: "B",
        explanation: "Correct answer is B as Cloud Pub/Sub provides elastic and scalable ingestion, Dataflow provides processing and BigQuery analytics. Refer GCP documentation - IoT: - https://cloud.google.com/solutions/iot-overview; Google Cloud Pub/Sub provides a globally durable message ingestion service. By creating topics for streams or channels, you can enable different components of your application to subscribe to specific streams of data without needing to construct subscriber-specific channels on each device. Cloud Pub/Sub also natively connects to other Cloud Platform services, helping you to connect ingestion, data pipelines, and storage systems. Google Cloud Dataflow provides the open Apache Beam programming model as a managed service for processing data in multiple ways, including batch operations, extract-transform-load (ETL) patterns, and continuous, streaming computation. Cloud Dataflow can be particularly useful for managing the high-volume data processing pipelines required for IoT scenarios. Cloud Dataflow is also designed to integrate seamlessly with the other Cloud Platform services you choose for your pipeline. Google BigQuery provides a fully managed data warehouse with a familiar SQL interface, so you can store your IoT data alongside any of your other enterprise analytics and logs. The performance and cost of BigQuery means you might keep your valuable data longer, instead of deleting it just to save disk space. Option A is wrong as Cloud Storage is not an ideal ingestion service for real time high frequency data. Also Dataproc is a fast, easy-to-use, fully-managed cloud service for running Apache Spark and Apache Hadoop clusters in a simpler, more cost-efficient way. Option C is wrong as Cloud SQL is a relational database and not suited for analytics data storage. Option D is wrong as Bigtable is not ideal for long term analytics data storage."
    },
    {
        // Question 108
        id: 108,
        question: "You have migrated your Hadoop jobs with external dependencies on a Dataproc cluster. As a security requirement, the cluster has been setup using internal IP addresses only and does not have a direct Internet connectivity. How can the cluster be configured to allow the installation of the dependencies? (Choose two)",
        options: [
            "A. Setup a SSH tunnel to Internet and route outbound requests through it.",
            "B. Use Cloud Dataproc custom images instead of initialization actions to set up job dependencies.",
            "C. Setup a SOCKS proxy and route outbound requests through it.",
            "D. Setup a NAT Gateway to allow Dataproc cluster to download external dependencies"
        ],
        answer: "BD",
        explanation: "Correct answers are B & D as the Dataproc cluster has been setup using internal IP addresses only, the external dependencies can either be bundled into a custom image or the internet outbound request can be securely routed using NAT gateway. Refer GCP documentation - Dataproc Init Scripts: - https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/init-actions#important_things_to_know; If you create a Cloud Dataproc cluster with internal IP addresses only, attempts to access the Internet in an initialization action will fail unless you have configured routes to direct the traffic through a NAT or a VPN gateway. Without access to the Internet, you can enable Private Google Access, and place job dependencies in Cloud Storage; cluster nodes can download the dependencies from Cloud Storage from internal IPs. You can use Cloud Dataproc custom images instead of initialization actions to set up job dependencies. Options A & C are wrong as they would not provide internet access or ability to install dependencies."
    },
    {
        // Question 109
        id: 109,
        question: "You need to deploy a TensorFlow machine-learning model to Google Cloud. You want to maximize the speed and minimize the cost of model prediction and deployment. What should you do?",
        options: [
            "A. Export your trained model to a SavedModel format. Deploy and run your model on Cloud ML Engine.",
            "B. Export your trained model to a SavedModel format. Deploy and run your model from a Kubernetes Engine cluster.",
            "C. Export 2 copies of your trained model to a SavedModel format. Store artifacts in Cloud Storage. Run 1 version on CPUs and another version on GPUs.",
            "D. Export 2 copies of your trained model to a SavedModel format. Store artifacts in Cloud ML Engine. Run 1 version on CPUs and another version on GPUs."
        ],
        answer: "A",
        explanation: 'Correct answer is A as it aligns with the Google recommended practices; that is, ""just deploy it.""; Refer GCP documentation - Deploying Models & ML Engine TensorFlow Prediction Overview: - https://cloud.google.com/ml-engine/docs/tensorflow/prediction-overview; Option B is wrong as Kubernetes Engine is not ideal to run models. Options C & D are wrong as you should not export 2 copies of your trained model, etc, for this scenario.'
    },
    {
        // Question 110
        id: 110,
        question: "You are running your Spark jobs on Google Cloud using Dataproc. The jobs are running very slow and upon investigating you find out that only 1 core of the available 16 cores are being used for the jobs. How do you tune the cluster to use all the cores and improve the job performance?",
        options: [
            "A. Pass the spark.driver.cores to parameter tune the number of cores used",
            "B. Increase the number of task nodes",
            "C. Pass the spark.executor.cores parameter to tune the number of cores used",
            "D. Update the job application to use all of the available cores"
        ],
        answer: "C",
        explanation: "Correct answer is C as the number of cores used by the executor can be increased by passing the spark.executor.cores parameter. Refer documentation - Spark configuration; Option A is wrong as Spark driver cores is for the driver only. The executor performance would not improve. Option B is wrong as increasing the task nodes would improve performance. However, it does not improve efficiency of using the current machines. Option D is wrong as the job application cannot be modified to use all cores and it needs to be at the scheduler level."
    },
    {
        // Question 111
        id: 111,
        question: "You created a job which runs daily to import highly sensitive data from an on-premises location to Cloud Storage. You also set up a streaming data insert into Cloud Storage via a Kafka node that is running on a Compute Engine instance. You need to encrypt the data at rest and supply your own encryption key. Your key should not be stored in the Google Cloud. What should you do?",
        options: [
            "A. Create a dedicated service account, and use encryption at rest to reference your data stored in Cloud Storage and Compute Engine data as part of your API service calls.",
            "B. Upload your own encryption key to Cloud Key Management Service, and use it to encrypt your data in Cloud Storage. Use your uploaded encryption key and reference it as part of your API service calls to encrypt your data in the Kafka node hosted on Compute Engine.",
            "C. Upload your own encryption key to Cloud Key Management Service, and use it to encrypt your data in your Kafka node hosted on Compute Engine.",
            "D. Supply your own encryption key, and reference it as part of your API service calls to encrypt your data in Cloud Storage and your Kafka node hosted on Compute Engine."
        ],
        answer: "D",
        explanation: "Correct answer is D as the scenario requires you to use your own key and also to not store your key on Compute Engine. Refer GCP documentation - Encryption at Rest: - https://cloud.google.com/security/encryption-at-rest/; Option A is wrong as the scenario states that you must supply your own encryption key instead of using one generated by Google Cloud Platform. Option B is wrong as the scenario states that you should use, but not store, your own key with Google Cloud Platform services. Option C is wrong as it does not meet the scenario requirement of not storing the keys on Google Platform services."
    },
    {
        // Question 112
        id: 112,
        question: "You are upgrading your existing (development) Cloud Bigtable instance for use in your production environment. The instance contains a large amount of data that you want to make available for production immediately. You need to design for fastest performance. What should you do?",
        options: [
            "A. Change your Cloud Bigtable instance type from Development to Production, and set the number of nodes to at least 3. Verify that the storage type is HDD.",
            "B. Change your Cloud Bigtable instance type from Development to Production, and set the number of nodes to at least 3. Verify that the storage type is SSD.",
            "C. Export the data from your current Cloud Bigtable instance to Cloud Storage. Create a new Cloud Bigtable Production instance type with at least 3 nodes. Select the HDD storage type. Import the data into the new instance from Cloud Storage.",
            "D. Export the data from your current Cloud Bigtable instance to Cloud Storage. Create a new Cloud Bigtable Production instance type with at least 3 nodes. Select the SSD storage type. Import the data into the new instance from Cloud Storage."
        ],
        answer: "B",
        explanation: "Correct answer is B as Cloud Bigtable allows you to 'scale-in-place,' which meets your requirements for this scenario. Refer GCP documentation - Cloud Bigtable & Choosing SSD vs HDD: - https://cloud.google.com/bigtable/docs/choosing-ssd-hdd; Incredible scalability. Cloud Bigtable scales in direct proportion to the number of machines in your cluster. A self-managed HBase installation has a design bottleneck that limits the performance after a certain threshold is reached. Cloud Bigtable does not have this bottleneck, so you can scale your cluster up to handle more reads and writes. Simple administration. Cloud Bigtable handles upgrades and restarts transparently, and it automatically maintains high data durability. To replicate your data, simply add a second cluster to your instance, and replication starts automatically. No more managing masters or regions; just design your table schemas, and Cloud Bigtable will handle the rest for you. Cluster resizing without downtime. You can increase the size of a Cloud Bigtable cluster for a few hours to handle a large load, then reduce the cluster's size again—all without any downtime. After you change a cluster's size, it typically takes just a few minutes under load for Cloud Bigtable to balance performance across all of the nodes in your cluster. SSD is significantly faster and has more predictable performance than HDD. In a Cloud Bigtable cluster, SSD storage delivers 6 ms latencies for both reads and writes for 99% of all requests. By contrast, HDD storage delivers 200 ms read latencies and 50 ms write latencies on the same benchmark. Option A is wrong as you should be using SSD storage for this scenario. Options C & D are wrong as creating a new Cloud Bigtable instance is extraneous and not needed to export, you can upgrade in place for nodes, but the storage type cannot be changed."
    },
    {
        // Question 113
        id: 113,
        question: "Your company uses Google Analytics for tracking. You need to export the session and hit data from a Google Analytics 360 reporting view on scheduled basis into BigQuery for analysis. How can the data be exported?",
        options: [
            "A. Configure a scheduler in Google Analytics to convert the Google Analytics data to JSON format, then import directly into BigQuery using bq command line.",
            "B. Use gsutil to export the Google Analytics data to Cloud Storage, then import into BigQuery and schedule it using Cron.",
            "C. Import data to BigQuery directly from Google Analytics using Cron",
            "D. Use BigQuery Data Transfer Service to import the data from Google Analytics"
        ],
        answer: "D",
        explanation: "Correct answer is D as BigQuery Data Transfer Service helps to automate importing of data from Google Analytics. Refer GCP documentation - BigQuery Data Transfer Service: - https://cloud.google.com/bigquery/docs/loading-data#data_transfer_service; Options A, B & C are wrong as the options are not supported."
    },
    {
        // Question 114
        id: 114,
        question: "When using Cloud ML Engine to train machine learning models, how are online predictions different from batch predictions? (Choose TWO)",
        options: [
            "A. Online prediction results are written to Cloud Storage as output.",
            "B. Batch predictions are used to reduce latency in serving predictions.",
            "C. Online predictions are returned in the response message.",
            "D. Batch predictions are optimized to handle a high volume of prediction examples while running on more complex models."
        ],
        answer: "CD",
        explanation: "Correct answers are C & D; Option C as Online predictions are returned in the response message. Option D as Batch predictions are optimized to handle a high volume of instances in a job and to run more complex models. Refer GCP documentation - Cloud ML Online vs Batch Prediction: - https://cloud.google.com/ml-engine/docs/tensorflow/online-vs-batch-prediction; Cloud ML Engine provides two ways to get predictions from trained models: online prediction (sometimes called HTTP prediction), and batch prediction. In both cases, you pass input data to a cloud-hosted machine-learning model and get inferences for each data instance. The differences are shown in the following table: Option A is wrong as Online predictions do not store data in Cloud Storage, but provide response message. Option B is wrong as batch predictions do not provide low latency."
    },
    {
        // Question 115
        id: 115,
        question: "You have been asked to select the storage system for the click-data of your company’s large portfolio of websites. This data is streamed in from a custom website analytics package at a typical rate of 6,000 clicks per minute. With bursts of up to 8,500 clicks per second. It must have been stored for future analysis by your data science and user experience teams. Which storage infrastructure should you choose?",
        options: [
            "A. Google Cloud SQL",
            "B. Google Cloud Bigtable",
            "C. Google Cloud Storage",
            "D. Google Cloud Datastore"
        ],
        answer: "B",
        explanation: "Correct answer is B as Bigtable provides a scalable, fully-managed NoSQL wide-column database that is suitable for both real-time access and analytics workloads. Refer GCP documentation - Storage Options: - https://cloud.google.com/storage-options/; Option A is wrong as Google Cloud SQL is mainly for OLTP (Transactional, CRUD) not for taking and storing streaming data. It does not have the scalability and elasticity to absorb this amount of data in real time. Option D is wrong as Google Cloud Datastore does not provide analytics capabilities. Google Cloud Datastore is a NoSQL document database built for automatic scaling, high performance, and ease of application development and integrating well with App Engine. Option C is wrong as Google Cloud Storage is not suitable to handle real time streaming data. It also needs to be used with BigQuery for analytics."
    },
    {
        // Question 116
        id: 116,
        question: "For this Question, refer to the MJTelco case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco; MJTelco is streaming telemetry data into BigQuery for long-term storage (2 years) and analysis, at the rate of about 100 million records per day. They need to be able to run queries against certain time periods of data without incurring the costs of querying all available records. What two options would you recommend for doing so? (Choose TWO)",
        options: [
            "A. Create a single table, but query only individual rows by data in the WHERE clause.",
            "B. Partition a single table by day, and run queries against individual partitions.",
            "C. Use a LIMIT clause to limit the number of rows queried based on WHERE clause criteria.",
            "D. Create a new table, one for each day. Run queries against the groups of tables relevant to their needs."
        ],
        answer: "BD",
        explanation: "Correct answers are B & D; Option B as partition table would help limit the queries to the specific date partition only. Option D as table per day also limits queries to the specific date only. Refer GCP documentation - BigQuery Best Practices: - https://cloud.google.com/bigquery/docs/best-practices-costs"
    },
    {
        // Question 117
        id: 117,
        question: "A company has its data distributed across multiple projects. They want to enable users to be able to execute BigQuery queries across dataset owned by the different projects. However, to optimize cost they want the billing to a single separate account. How should the access be controlled?",
        options: [
            "A. Add users to groups. Groups to have BigQuery User role for billing project and data viewer role to projects with dataset",
            "B. Add users to groups. Groups to have BigQuery jobUser role for billing project and data viewer role to projects with dataset",
            "C. Add users to groups. Groups to have BigQuery User role for projects with dataset billing project and data viewer role to billing project",
            "D. Add users to groups. Groups to have BigQuery jobUser role for projects with dataset billing project and data viewer role to billing project"
        ],
        answer: "A",
        explanation: "Correct answer is A as the groups needs to be given User role to be able to run jobs and access datasets within the billing project with a data viewer role to the different projects. Refer GCP documentation - BigQuery roles: - https://cloud.google.com/iam/docs/understanding-roles; Option B is wrong as jobUser does not give the ability to enumerate the datasets. Options C & D are wrong as the billing needs to be in a single project, the jobs needs to be executed from the billing project with data access to the dataset from different projects."
    },
    {
        // Question 118
        id: 118,
        question: "You are using a Compute Engine instance to manage your Cloud Dataflow processing workloads. What IAM role do you need to grant to the instance so that it has the necessary access?",
        options: [
            "A. Dataflow Viewer",
            "B. Dataflow Developer",
            "C. Dataflow Worker",
            "D. Dataflow Computer"
        ],
        answer: "C",
        explanation: "Correct answer is C as Dataflow Worker is the correct IAM role for service accounts assigned to Compute engines. Refer GCP documentation - Dataflow Roles: - https://cloud.google.com/dataflow/docs/concepts/access-control#roles; The [controller service account](security-and-permissions#controller_service_account needs the roles/dataflow.worker role to process data for the Cloud Dataflow service. It will need other roles (such as roles/storage.objectAdmin) in order to access job data. Options A & B are wrong as Viewer and Developer role does not provide access process data for the Cloud Dataflow service. Option D is wrong as Dataflow computer role does not exist."
    },
    {
        // Question 119
        id: 119,
        question: "You are part of your company’s migration team to transfer 1PB of data to Google Cloud. The network speed between the on-premises data center and Google Cloud is 100Mbps. The migration activity has a timeframe of 6 months. What is the efficient way to transfer the data?",
        options: [
            "A. Use BigQuery Data Transfer Service to transfer the data to Cloud Storage",
            "B. Expose the data as a public URL and Storage Transfer Service to transfer it",
            "C. Use Transfer appliance to transfer the data to Cloud Storage",
            "D. Use gsutil command to transfer the data to Cloud Storage"
        ],
        answer: "C",
        explanation: "Correct answer is C as even with 100Mbps of transfer speed it would take minimum 3 years (assuming consistent speed and no interruption) to transfer the complete data. So the best option is to use Google Transfer Appliance. Refer GCP documentation - Data Transfer: - https://cloud.google.com/products/data-transfer/; Google Transfer Appliance - Securely capture, ship, and upload your data to Google Cloud Storage using the Transfer Appliance 100 TB or 480 TB models. Options A, B & D are wrong as they would still route the request through Internet."
    },
    {
        // Question 120
        id: 120,
        question: "For this Question, refer to the Flowlogistic case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic; Flowlogistic needs to run analytics on their incoming inventory data. They need to use their existing Hadoop workloads to perform this task. What two steps must be performed to accomplish this? (Choose TWO)",
        options: [
            "A. Stream from Cloud Pub/Sub into Cloud Dataproc, placing data on the HDFS partition on the Dataproc cluster.",
            "B. Use Spark to accept the streaming ingest on the Dataproc cluster, and then process jobs on HDFS.",
            "C. Stream inventory data to Cloud Pub/Sub, process data with Cloud Dataflow into Bigtable and Cloud Storage.",
            "D. Connect Cloud Dataproc to Bigtable and Cloud Storage, running analytics on the data in both services."
        ],
        answer: "CD",
        explanation: "Correct answers are C & D as for streaming ingest, the best solution is to stream into a Pub/Sub topic, process with Dataflow, which can then be inserted into either Cloud Storage or Bigtable, depending on the data type. Option A is wrong as Dataproc does not natively connect to Pub/Sub. It needs to be done through Spark Streaming. Also, it is best to process stream with Dataflow and place into a storage service, then have Dataproc read from the storage service. Option B is wrong as Spark would need custom data handling with HDFS not be able to a persistent storage option."
    },
    {
        // Question 121
        id: 121,
        question: "You are developing a software application using Google's Dataflow SDK, and want to use conditional, for loops and other complex programming structures to create a branching pipeline. Which component will be used for the data processing operation?",
        options: [
            "A. PCollection",
            "B. Transform",
            "C. Pipeline",
            "D. Sink API"
        ],
        answer: "B",
        explanation: "Correct answer is B as Transform allows for processing functions on the elements. Refer GCP documentation - Dataflow Programming Model: - https://cloud.google.com/dataflow/model/programming-model; A transform is a data processing operation, or a step, in your pipeline. A transform takes one or more PCollections as input, performs a processing function that you provide on the elements of that PCollection, and produces an output PCollection. Your transforms don't need to be in a strict linear sequence within your pipeline. You can use conditionals, loops, and other common programming structures to create a branching pipeline or a pipeline with repeated structures. You can think of your pipeline as a directed graph of steps, rather than a linear sequence. Option A is wrong as a PCollection represents a set of data in your pipeline; Option C is wrong as A pipeline encapsulates an entire series of computations that accepts some input data from external sources, transforms that data to provide some useful intelligence, and produces some output data; Option D is wrong as sink APIs helps to write output data from your pipeline;"
    },
    {
        // Question 122
        id: 122,
        question: "You want to use Google Stackdriver Logging to monitor Google BigQuery usage. You need an instant notification to be sent to your monitoring tool when new data is appended to a certain table using an insert job, but you do not want to receive notifications for other tables. What should you do?",
        options: [
            "A. Make a call to the Stackdriver API to list all logs, and apply an advanced filter.",
            "B. In the Stackdriver logging admin interface, and enable a log sink export to BigQuery.",
            "C. In the Stackdriver logging admin interface, enable a log sink export to Google Cloud Pub/Sub, and subscribe to the topic from your monitoring tool.",
            "D. Using the Stackdriver API, create a project sink with advanced log filter to export to Pub/Sub, and subscribe to the topic from your monitoring tool."
        ],
        answer: "D",
        explanation: "Correct answer is D as the key requirement is to have notification on a particular table. It can be achieved using advanced log filter to filter only the table logs and create a project sink to Cloud Pub/Sub for notification. Refer GCP documentation - Advanced Logs Filters: - https://cloud.google.com/logging/docs/view/advanced-filters; Option A is wrong as advanced filter will help in filtering. However, there is no notification service. Option B is wrong as it would send all the logs and BigQuery does not provide notifications. Option C is wrong as it would send all the logs."
    },
    {
        // Question 123
        id: 123,
        question: "You work for a car manufacturer and have set up a data pipeline using Google Cloud Pub/Sub to capture anomalous sensor events. You are using a push subscription in Cloud Pub/Sub that calls a custom HTTPS endpoint that you have created to take action of these anomalous events as they occur. Your custom HTTPS endpoint keeps getting an inordinate amount of duplicate messages. What is the most likely cause of these duplicate messages?",
        options: [
            "A. The message body for the sensor event is too large.",
            "B. Your custom endpoint has an out-of-date SSL certificate.",
            "C. Cloud Pub/Sub topic has too many messages published to it.",
            "D. Your custom endpoint is not acknowledging messages within the acknowledgement deadline."
        ],
        answer: "D",
        explanation: "Correct answer is D as the Cloud Pub/Sub will deliver duplicate messages only if there has been no acknowledgement from the subscriber. Refer GCP documentation - Cloud Pub/Sub FAQs - Duplicates: - https://cloud.google.com/pubsub/docs/faq#duplicates; Why are there too many duplicate messages? Cloud Pub/Sub guarantees at-least-once message delivery, which means that occasional duplicates are to be expected. However, a high rate of duplicates may indicate that the client is not acknowledging messages within the configured ack_deadline_seconds, and Cloud Pub/Sub is retrying the message delivery."
    },
    {
        // Question 124
        id: 124,
        question: "As a mandate for least privilege within the company, the external users have been provided the Cloud Dataproc Viewer role. Which action these external users perform?",
        options: [
            "A. Submit a job.",
            "B. Create a cluster.",
            "C. Delete a cluster.",
            "D. List the jobs."
        ],
        answer: "D",
        explanation: "Correct answer is D as with Data Viewer role, the users would only be able to perform get and list operations. Refer GCP documentation - Dataproc IAM Access Control: - https://cloud.google.com/dataproc/docs/concepts/iam/iam; Identity and Access Management (IAM) Cloud Dataproc roles are a bundle of one or more permissions. You grant roles to users or groups to allow them to perform actions on the Cloud Dataproc resources in your project. For example, the Dataproc Viewerrole contains the dataproc.*.get and dataproc.*.list permissions, which allow a user to get and list Cloud Dataproc clusters, jobs, and operations in a project."
    },
    {
        // Question 125
        id: 125,
        question: "You receive customer transactions through Cloud Pub/Sub and you are planning to use Google's Dataflow SDK to analyze customer data such as displayed below: 1, Tom, 555 X street  ; 2, Tim, 553 Y street  ; 3, Sam, 111 Z street; Your project requirement is to extract only the customer name from the data source and then write to an output PCollection. Which operation is best suited for the above data processing requirement?",
        options: [
            "A. Sink API",
            "B. ParDo",
            "C. Transform",
            "D. Extract"
        ],
        answer: "B",
        explanation: "Correct answer is B as ParDo helps in extracting parts from elements. Refer GCP documentation - Dataflow ParDo & Programming Model: - https://cloud.google.com/dataflow/model/par-do & https://cloud.google.com/dataflow/model/programming-model; ParDo is useful for a variety of data processing operations, including: Filtering a data set. You can use ParDo to consider each element in a PCollection and either output that element to a new collection or discard it. Formatting or converting the type of each element in a data set. You can use ParDo to format the elements in your PCollection, such as formatting key/value pairs into printable strings. Extracting parts of each element in a data set. You can use ParDo to extract just a part of each element in your PCollection. This can be particularly useful for extracting individual fields from BigQuery table rows. Performing computations on each element in a data set. You can use ParDo to perform simple or complex computations on every element, or certain elements, of a PCollection. Option A is wrong as Sink API helps to write output data from your pipeline; Option C is wrong as Transform represents a data processing operation, or a step, in your pipeline. Option D is wrong as Extract does not exist."
    },
    {
        // Question 126
        id: 126,
        question: "Your production Bigtable instance is currently using four nodes. Due to the increased size of your table, you need to add additional nodes to offer better performance. How should you accomplish this without the risk of data loss?",
        options: [
            "A. Power off your Bigtable instance, then increase the node count, then power back on. Be sure to schedule downtime in advance.",
            "B. Export your Bigtable data as sequence files into Cloud Storage, then import the data into a new Bigtable instance with additional nodes added.",
            "C. Use the node migration service to add additional nodes.",
            "D. Edit instance details and increase the number of nodes. Save your changes. Data will re-distribute with no downtime."
        ],
        answer: "D",
        explanation: "Correct answer is D as Bigtable size i.e. nodes can be increased without any downtime. Refer GCP documentation - Modifying Bigtable Instance: - https://cloud.google.com/bigtable/docs/modifying-instance#nodes; Option A is wrong as Bigtable instance does not need to be turned off. Option B is wrong as this is not an optimized solution. Option C is wrong as there is no node migration service."
    },
    {
        // Question 127
        id: 127,
        question: "Your company’s on-premises Apache Hadoop servers are approaching end-of-life, and IT has decided to migrate the cluster to Google Cloud Dataproc. A like-for-like migration of the cluster would require 50 TB of Google Persistent Disk per node. The CIO is concerned about the cost of using that much block storage. You want to minimize the storage cost of the migration. What should you do?",
        options: [
            "A. Put the data into Google Cloud Storage.",
            "B. Use preemptible virtual machines (VMs) for the Cloud Dataproc cluster.",
            "C. Tune the Cloud Dataproc cluster so that there is just enough disk for all data.",
            "D. Migrate some of the cold data into Google Cloud Storage, and keep only the hot data in Persistent Disk."
        ],
        answer: "A",
        explanation: "Correct answer is A as moving the data to Cloud Storage would reduce the storage cost a lot. Also, this would enable the customer to use transient cluster. Refer GCP documentation - Dataproc Data Accessibility: - https://cloud.google.com/dataproc/docs/resources/faq#data_access_availability; How can I get data in and out of a cluster? Cloud Dataproc utilizes the Hadoop Distributed File System (HDFS) for storage. Additionally, Cloud Dataproc automatically installs the HDFS-compatible Google Cloud Storage connector, which enables the use of Cloud Storage in parallel with HDFS. Data can be moved in and out of a cluster through upload/download to HDFS or Cloud Storage. Can I use Cloud Storage with Dataproc? Yes, Cloud Dataproc clusters automatically install the Cloud Storage connector. There are a number of benefits to choosing Cloud Storage over traditional HDFS including data persistence, reliability, and performance. Option B is wrong as preemptible VMs would only help improve execution performance and cost, but would not reduce the storage cost. Option C is wrong as it would not reduce costs. Option D is wrong as it would not reduce the cost by much as it would still need the data to be stored across nodes."
    },
    {
        // Question 128
        id: 128,
        question: "Your company currently hosts an AWS S3 bucket. You need to keep the contents of this bucket in sync with a new Google Cloud Storage bucket to support a backup storage destination. What is the best method to achieve this?",
        options: [
            "A. Once per week, use a gsutil cp command to copy over newly modified files.",
            "B. Use gsutil rsync commands to keep both locations in sync.",
            "C. Use Storage Transfer Service to keep both the source and destination in sync.",
            "D. Use gsutil -m cp to keep both locations in sync."
        ],
        answer: "C",
        explanation: "Correct answer is C as the source is an S3 bucket, Storage Transfer Service is the preferred option, which can help scheduled jobs as well. Refer GCP documentation - Storage Transfer Service: - https://cloud.google.com/storage-transfer/docs/overview; Options A & D are wrong as copy can be used to copy, however there needs to be more handling to keep it in sync. Option B is wrong as gsutil rsync option is a valid option, however preferred when the transfer cannot be done through Storage transfer service."
    },
    {
        // Question 129
        id: 129,
        question: "For this Question, refer to the Flowlogistic case study @ https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic; Flowlogistic’s management has determined that the current Apache Kafka servers cannot handle the data volume for their real-time inventory tracking system. You need to build a new system on Google Cloud Platform (GCP) that will feed the proprietary tracking software. The system must be able to ingest data from a variety of global sources, process and query in real-time, and store the data reliably. Which combination of GCP products should you choose?",
        options: [
            "A. Cloud Pub/Sub, Cloud Dataflow, and Cloud Storage",
            "B. Cloud Pub/Sub, Cloud Dataflow, and Local SSD",
            "C. Cloud Pub/Sub, Cloud SQL, and Cloud Storage",
            "D. Cloud Load Balancing, Cloud Dataflow, and Cloud Storage"
        ],
        answer: "A",
        explanation: "Correct answer is A as they need to ingest data from a variety of global sources, Cloud Pub/Sub would be an ideal ingestion service. It would also replace Kafka. Cloud Dataflow would help processing and query in real-time, and the data can be stored reliably in Cloud Storage. Refer GCP documentation - IoT: - https://cloud.google.com/solutions/iot-overview#ingestion; Google Cloud Pub/Sub provides a globally durable message ingestion service. By creating topics for streams or channels, you can enable different components of your application to subscribe to specific streams of data without needing to construct subscriber-specific channels on each device. Cloud Pub/Sub also natively connects to other Cloud Platform services, helping you to connect ingestion, data pipelines, and storage systems. Google Cloud Dataflow provides the open Apache Beam programming model as a managed service for processing data in multiple ways, including batch operations, extract-transform-load (ETL) patterns, and continuous, streaming computation. Cloud Dataflow can be particularly useful for managing the high-volume data processing pipelines required for IoT scenarios. Cloud Dataflow is also designed to integrate seamlessly with the other Cloud Platform services you choose for your pipeline. Cloud Storage provides a single API for both current-use object storage, and archival data that is used infrequently. If your IoT device captures media data, Cloud Storage can store virtually unlimited quantities durably and economically. Option B is wrong as Local SSD does not provide durable storage. Option C is wrong as Cloud SQL is not an ideal real time processing service. Option D is wrong as there is no scalable ingestion option."
    },
    {
        // Question 130
        id: 130,
        question: "A bank wishes to predict that a given loan application will default in future. Given a dataset containing customer demographic information, loan application information, credit score and saving balance account information and a label containing default indicator (Y – Will Default, N – Will Not Default). Which type of Machine Learning algorithm is suited to achieve this?",
        options: [
            "A. Classification",
            "B. Regression",
            "C. Association",
            "D. Clustering"
        ],
        answer: "A",
        explanation: "Correct answer is A as Classification helps classify the data into N labels. Refer GCP documentation - Machine Learning: - https://developers.google.com/machine-learning/problem-framing/cases;"
    },
    {
        // Question 131
        id: 131,
        question: "You are deploying a new storage system for your mobile application, which is a media streaming service. You decide the best fit is Google Cloud Datastore. You have entities with multiple properties, some of which can take on multiple values. For example, in the entity ‘Movie’ the property ‘actors’ and the property ‘tags’ have multiple values but the property ‘date released’ does not. A typical query would ask for all movies with actor= ordered by date_released or all movies with tag=Comedy ordered by date_released. How should you avoid a combinatorial explosion in the number of indexes?",
        options: [
            "A. Manually configure the index in your index config as follows: indexes: ​ - kind: Movie; ​ properties: ​ - name: actors; ​ - name: date_released; ​ - kind: Movie; ​ properties: ​ - name: tags; ​ - name: date_released ;",
            "B. Manually configure the index in your index config as follows: indexes: ​ - kind: Movie; ​ properties: ​ - name: actors; ​ - name: tags; ​ - name: date_released ;",
            "C. Set the following in your entity options: exclude_from_indexes = 'actors, tags'",
            "D. Set the following in your entity options: exclude_from_indexes = 'date_published'"
        ],
        answer: "A",
        explanation: "Correct answer is A as it is better to manually configure index with separate properties. Refer GCP documentation - Datastore Indexes: - https://cloud.google.com/datastore/docs/concepts/indexes#index_limits; When the same property is repeated multiple times, Datastore mode can detect exploding indexes and suggest an alternative index. However, in all other circumstances (such as the query defined in this example), a Datastore mode database will generate an exploding index. In this case, you can circumvent the exploding index by manually configuring an index in your index configuration file: indexes: - kind: Task   properties:   - name: tags   - name: created - kind: Task   properties:   - name: collaborators   - name: created ;"
    },
    {
        // Question 132
        id: 132,
        question: "An application has the following data requirements. 1. It requires strongly consistent transactions. 2. Total data will be less than 500 GB. 3. The data does not need to be streaming or real time. Which data technology would fit these requirements?",
        options: [
            "A. BigQuery",
            "B. Cloud Bigtable",
            "C. Cloud SQL",
            "D. Cloud Memorystore"
        ],
        answer: "C",
        explanation: "Answer: C Correct answer is C as Cloud SQL supports strongly consistent transactions. And the size requirements will fit with a Cloud SQL instance. Refer GCP documentation - Storage Options: - https://cloud.google.com/storage-options/; Option A is wrong as BigQuery does not support consistent transactions. Option B is wrong as Bigtable is not recommended for data less than a TB as it can get very expensive and is not a relational database service. Option D is wrong as Cloud Memorystore for Redis provides a fully managed in-memory data store service built on scalable, secure, and highly available infrastructure managed by Google. It does not support consistent transactions;"
    },
    {
        // Question 133
        id: 133,
        question: "Your BigQuery dataset contains 1500 tables. When conducting a query, you are limited to a maximum of 1000 tables that you can query at once. You need to query data across all 1500 tables. What should you do?",
        options: [
            "A. Place tables into separate datasets.",
            "B. If possible, merge the 1500 tables to bring the total number below 1000. You may still partition single tables to divide data for queries.",
            "C. Export the data to Bigtable, and conduct your query inside of Bigtable.",
            "D. Create multiple views of chunks of the 1500 tables, then query the multiple views."
        ],
        answer: "B",
        explanation: "Correct answer is B as the only option is to reduce the tables and using partitioning to query the data effectively. Option A is wrong as even with separate datasets the limit to tables in an query exists. Option C is wrong as Bigtable is an expensive option. Option D is wrong as multiple views cannot be queried. Also wildcard does not support views."
    },
    {
        // Question 134
        id: 134,
        question: "You are deploying 10,000 new IoT devices to collect temperatures in your warehouses globally. However, the source data is streamed in bursts and is not periodical and must be transformed before it can be used. How should you design the system in Google Cloud?",
        options: [
            "A. Use Cloud Bigtable for fast input and cbt for ETL.",
            "B. Ingest data to Cloud Storage. Use Cloud Dataproc for ETL.",
            "C. Use Cloud Pub/Sub to buffer the data, and then use BigQuery for ETL.",
            "D. Use Cloud Pub/Sub to buffer the data, and then use Cloud Dataflow for ETL."
        ],
        answer: "D",
        explanation: "Correct answer is D as unpredictable data would require a buffer which can be provided using Cloud Pub/Sub and Cloud Dataflow can help perform transformations on the fly before the data is stored in any storage medium. Refer GCP documentation - Cloud Pub/Sub: - https://cloud.google.com/pubsub/; Option A, B & C are wrong as either the ingestion is not ideal for bursts or the data needs to be stored and the ETL performed as batch operation."
    },
    {
        // Question 135
        id: 135,
        question: "A company wants to connect cloud applications to an Oracle database in its data center. Requirements are a maximum of 20 Gbps of data and a Service Level Agreement (SLA) of 99%. Which option best suits the requirements?",
        options: [
            "A. Implement a high-throughput Cloud VPN connection",
            "B. Cloud Router with VPN",
            "C. Dedicated Interconnect",
            "D. Partner Interconnect"
        ],
        answer: "C",
        explanation: "Correct answer is C as Dedicated Interconnect is useful for data over 10 Gbps and is SLA is offered by Google; Refer GCP documentation - Interconnect Options: - https://cloud.google.com/interconnect/docs/how-to/choose-type; High bandwidth connections with a minimum of 10 Gbps. Traffic flows directly between networks, not through the public Internet. Google provides an end-to-end SLA for the connection. Option A is wrong as Cloud VPN is over the internet through IPSec VPN at a low cost for your data bandwidth needs up to 3.0 Gbps. Option B is wrong as Cloud Router helps only in dynamic routing. Option D is wrong as Partner Interconnect is suitable for bandwidth connections from 50 Mbps to 10 Gbps. Also, the SLA depends on the service provider."
    },
    {
        // Question 136
        id: 136,
        question: "An application that relies on Cloud SQL to read infrequently changing data is predicted to grow dramatically. How can you increase capacity for more read-only clients?",
        options: [
            "A. Configure high availability on the master node",
            "B. Establish an external replica in the customer's data center",
            "C. Use backups so you can restore if there's an outage",
            "D. Configure read replicas."
        ],
        answer: "D",
        explanation: "Correct answer is D as read replicas can help handle the read traffic reducing the load from the primary database. Refer GCP documentation - Cloud SQL Replication Options: - https://cloud.google.com/sql/docs/mysql/replication/; Cloud SQL provides the ability to replicate a master instance to one or more read replicas. A read replica is a copy of the master that reflects changes to the master instance in almost real time. Option A is wrong as high availability is for failover and not for performance. Option B is wrong as external replica is not recommended for scaling as it needs to be maintained and the network established for replication. Option C is wrong as backups are more to restore the database in case of any outage."
    },
    {
        // Question 137
        id: 137,
        question: "You are planning to embed a online customer support service within your website. Which GCP Service would allow you to design and integrate a conversational user interface into a mobile app, web application, device, bot, interactive voice response systems, and so on?",
        options: [
            "A. Cloud Video Intelligence",
            "B. Cloud Vision",
            "C. Cloud Natural language",
            "D. Dialogflow"
        ],
        answer: "D",
        explanation: "Correct answer is D as Dialogflow can help provide conversational interfaces across various platforms. Refer GCP documentation - AI Products: - https://cloud.google.com/products/ai/; Dialogflow Enterprise Edition is an end-to-end development suite for building conversational interfaces for websites, mobile applications, popular messaging platforms, and IoT devices. You can use it to build interfaces (e.g., chatbots) that are capable of natural and rich interactions between your users and your business. It is powered by machine learning to recognize the intent and context of what a user says, allowing your conversational interface to provide highly efficient and accurate responses."
    },
    {
        // Question 138
        id: 138,
        question: "A client wants to store files from one location and retrieve them from another location. Security requirements are that no one should be able to access the contents of the file while it is hosted in the cloud. What is the best option?",
        options: [
            "A. Default encryption should be sufficient",
            "B. Customer-Supplied Encryption Keys (CSEK)",
            "C. Customer Managed Encryption Keys (CMEK)",
            "D. Client-side encryption"
        ],
        answer: "D",
        explanation: "Correct answer is D as the requirement is that the file cannot be decrypted in the cloud, so encrypt it before it is uploaded and after it is downloaded adds a layer of encryption. Refer GCP documentation - Data Encryption Options: - https://cloud.google.com/storage/docs/encryption/; Server-side encryption: encryption that occurs after Cloud Storage receives your data, but before the data is written to disk and stored. Customer-supplied encryption keys: You can create and manage your own encryption keys for server-side encryption, which act as an additional encryption layer on top of the standard Cloud Storage encryption. Customer-managed encryption keys: You can generate and manage your encryption keys using Cloud Key Management Service, which act as an additional encryption layer on top of the standard Cloud Storage encryption. Client-side encryption: encryption that occurs before data is sent to Cloud Storage. Such data arrives at Cloud Storage already encrypted but also undergoes server-side encryption."
    },
    {
        // Question 139
        id: 139,
        question: "You have configured streaming data pipelines to ingest data from thousands of Internet of Things (IoT) devices, ingest it into BigQuery. The data is stored into ingestion-time partitioned table. You want to run SQL queries against your data for analysis. How would you query specific partitions in a BigQuery table?",
        options: [
            "A. Use the DATE column in the WHERE clause",
            "B. Use the EXTRACT(DATE) clause",
            "C. Use the _PARTITIONTIME pseudo-column in the WHERE clause",
            "D. Use DATE BETWEEN in the WHERE clause"
        ],
        answer: "C",
        explanation: "Correct answer is C as for ingestion-time partitioned tables, two columns _PARTITIONTIME and _PARTITIONDATE and available to query the partition. Refer GCP documentation - BigQuery Querying Partitioned Tables: - https://cloud.google.com/bigquery/docs/querying-partitioned-tables#ingestion-time_partitioned_table_pseudo_columns; Ingestion-time partitioned tables; When you create a table partitioned by ingestion time, BigQuery automatically loads data into daily, date-based partitions that reflect the data's ingestion or arrival date. Pseudo column and suffix identifiers allow you to restate (replace) and redirect data to partitions for a specific day. Ingestion-time partitioned tables include a pseudo column named _PARTITIONTIME that contains a date-based timestamp for data that is loaded into the table. Queries against time-partitioned tables can restrict the data read by supplying _PARTITIONTIME filters that represent a partition's location. All the data in the specified partition is read by the query, but the _PARTITIONTIME predicate filter restricts the number of partitions scanned. When you create an ingestion-time partitioned table, two pseudo columns are added to the table: a _PARTITIONTIME pseudo column and a _PARTITIONDATE pseudo column. The _PARTITIONTIME pseudo column contains a date-based timestamp for data that is loaded into the table. The _PARTITIONDATE pseudo column contains a date representation. Both pseudo column names are reserved, which means that you cannot create a column with either name in any of your tables. _PARTITIONTIME and _PARTITIONDATE are available only in ingestion-time partitioned tables. Partitioned tables do not have pseudo columns."
    },
    {
        // Question 140
        id: 140,
        question: "You are creating a model to predict housing prices. Due to budget constraints, you must run it on a single resource-constrained virtual machine. Which learning algorithm should you use?",
        options: [
            "A. Linear regression",
            "B. Logistic classification",
            "C. Recurrent neural network",
            "D. Feedforward neural network"
        ],
        answer: "A",
        explanation: "Correct answer is A as Supervised learning using Regression can help build a model to predict house prices. Refer documentation - Machine learning; Option B is wrong as Classification would not help to solve the problem. Options C & D are wrong as they would need more resources."
    },
    {
        // Question 141
        id: 141,
        question: "Your company wants to develop a robotic car. The car needs to figure out a best way to traverse a path by it owns and the best way is the one with limited hurdles and shortest path. They aim to maximum a cumulative measure (say a reward) based on interactions with a given system. What type of machine learning needs to be applied?",
        options: [
            "A. Supervised learning",
            "B. Unsupervised learning",
            "C. Reinforcement learning",
            "D. Dimensionality Reduction Technique"
        ],
        answer: "C",
        explanation: "Correct answer is C as Reinforcement Learning can help design a model for car based on the reward technique. Refer GCP documentation - Machine Learning cases: - https://developers.google.com/machine-learning/problem-framing/cases; An additional branch of machine learning is reinforcement learning (RL). Reinforcement learning differs from other types of machine learning. In RL you don't collect examples with labels. Imagine you want to teach a machine to play a very basic video game and never lose. You set up the model (often called an agent in RL) with the game, and you tell the model not to get a ''game over'' screen. During training, the agent receives a reward when it performs this task, which is called a reward function. With reinforcement learning, the agent can learn very quickly how to outperform humans."
    },
    {
        // Question 142
        id: 142,
        question: "Your company has hired an external consultant to help import its relational data into BigQuery for analysis. The consultant mentions the data needs to be denormalized in BigQuery. What are the two benefits of using denormalized data structures in BigQuery?",
        options: [
            "A. Reduces the amount of data processed, reduces the amount of storage required.",
            "B. Increases query speed, makes queries simpler.",
            "C. Reduces the amount of storage required, increases query speed.",
            "D. Reduces the amount of data processed, increases query speed."
        ],
        answer: "B",
        explanation: "Correct answer is B as Denormalization help increase query speed without the need to join tables with simpler queries. Refer GCP documentation - BigQuery Managing Data: - https://cloud.google.com/solutions/bigquery-data-warehouse#managing_data; Options A, C & D are wrong as Denormalization requires more storage, and also increased the amount of data processed."
    },
    {
        // Question 143
        id: 143,
        question: "Business owners at your company have given you a database of bank transactions. Each row contains the user ID, transaction type, transaction location, and transaction amount. They ask you to investigate what type of machine learning can be applied to the data. Which three machine learning applications can you use? (Choose two)",
        options: [
            "A. Supervised learning to determine which transactions are most likely to be fraudulent.",
            "B. Unsupervised learning to determine which transactions are most likely to be fraudulent.",
            "C. Clustering to divide the transactions into N categories based on feature similarity."
        ],
        answer: "AC",
        explanation: "Correct answers are A & C; Option A as you would use Supervised learning - Classification can help classify the transaction as fraudulent or not. Option C as Unsupervised learning - Clustering can help group similar examples and divide the transactions into patterns. Refer documentation - Machine learning: - https://cloud.google.com/ml-engine/docs/"
    },
    {
        // Question 144
        id: 144,
        question: "An organization wishes to automate data movement from Software as a Service (SaaS) applications such as Google Ads and Google Ad Manager on a scheduled, managed basis. This data is further needed for analytics and generate reports. How can the process be automated?",
        options: [
            "A. Use Storage Transfer Service to move the data to Cloud Storage",
            "B. Use Storage Transfer Service to move the data to BigQuery",
            "C. Use BigQuery Data Transfer Service to move the data to BigQuery",
            "D. Use Transfer Appliance to move the data to Cloud Storage"
        ],
        answer: "C",
        explanation: "Correct answer is C as BigQuery Data Service Transfer can help automate the data movement from data sources such as Google Ads and Google AD Manager. Refer GCP documentation - BigQuery Data Transfer Service: - https://cloud.google.com/bigquery/docs/transfer-service-overview; Option A is wrong as Storage Transfer Service cannot move the data from Google Ads to BigQuery and Cloud Storage cannot help in analytics directly. Option B is wrong as Storage Transfer Service cannot move the data from Google Ads to BigQuery; Option D is wrong as Transfer Appliance are for one time huge transfers."
    },
    {
        // Question 145
        id: 145,
        question: "Your company is forecasting a sharp increase in the number and size of Apache Spark and Hadoop jobs being run on your local datacenter. You want to utilize the cloud to help you scale this upcoming demand with the least amount of operations work and code change. Which product should you use?",
        options: [
            "A. Google Cloud Dataflow",
            "B. Google Cloud Dataproc",
            "C. Google Compute Engine",
            "D. Google Container Engine"
        ],
        answer: "B",
        explanation: "Correct answer is B as Cloud Dataproc allows running of Apache Spark and Hadoop jobs. Refer GCP documentation - Cloud Dataproc: - https://cloud.google.com/dataproc/; Cloud Dataproc is a fast, easy-to-use, fully-managed cloud service for running Apache Spark and Apache Hadoop clusters in a simpler, more cost-efficient way. Operations that used to take hours or days take seconds or minutes instead, and you pay only for the resources you use (with per-second billing). Cloud Dataproc also easily integrates with other Google Cloud Platform (GCP) services, giving you a powerful and complete platform for data processing, analytics and machine learning; Option A is wrong as Cloud Dataflow is a fully-managed service for transforming and enriching data in stream (real time) and batch (historical) modes with equal reliability and expressiveness -- no more complex workarounds or compromises needed. Options C & D are wrong as they are not suited for big data processing."
    },
    {
        // Question 146
        id: 146,
        question: "You are responsible for security and access control to a BigQuery dataset hosted within a project. Multiple users from multiple teams need to have access to the different tables within the dataset. How can the access be control?",
        options: [
            "A. Create Authorized views for tables in a separate project and grant access to the teams",
            "B. Create Authorized views for tables in a same project and grant access to the teams",
            "C. Create Materialized views for tables in a separate project and grant access to the teams",
            "D. Create Materialized views for tables in a same project and grant access to the teams"
        ],
        answer: "A",
        explanation: "Correct answer is A as the controlled access can be provided using Authorized views created in a separate project. BigQuery is a petabyte-scale analytics data warehouse that you can use to run SQL queries over vast amounts of data in near realtime. Giving a view access to a dataset is also known as creating an authorized view in BigQuery. An authorized view allows you to share query results with particular users and groups without giving them access to the underlying tables. You can also use the view's SQL query to restrict the columns (fields) the users are able to query. When you create the view, it must be created in a dataset separate from the source data queried by the view. Because you can assign access controls only at the dataset level, if the view is created in the same dataset as the source data, your data analysts would have access to both the view and the data. Option B is wrong as Authorized views should be created in a separate project. If they are created in the same project, the users would have access to the underlying tables as well. Options C & D are wrong as only logical views can be created and not materialized."
    },
    {
        // Question 147
        id: 147,
        question: "Your company wants to host confidential documents in Cloud Storage. Due to compliance requirements, there is a need for the data to be highly available and resilient even in case of a regional outage. Which storage classes help meet the requirement?",
        options: [
            "A. Standard",
            "B. Regional",
            "C. Coldline",
            "D. Dual-Regional",
            "E. Multi-Regional"
        ],
        answer: "CE",
        explanation: "Correct answers are C & E as Multi-Regional and Coldline storage classes provide multi-region geo-redundant deployment, which can sustain regional failure. Refer GCP documentation - Cloud Storage Classes: - https://cloud.google.com/storage/docs/storage-classes; Options A & D are wrong as they do not exist; Option B is wrong as Regional storage class is not geo-redundant. Data stored in a narrow geographic region and Redundancy is across availability zones;"
    },
    {
        // Question 148
        id: 148,
        question: "Your company is working on a multi-cloud initiative. The data processing pipelines requires creating workflows that connect data, transfer data, processing, and using services across clouds. What cloud native tool should be used for orchestration?",
        options: [
            "A. Cloud Scheduler",
            "B. Cloud Dataflow",
            "C. Cloud Composer",
            "D. Cloud Dataproc"
        ],
        answer: "C",
        explanation: "Correct answer is C as Cloud Composer can help create workflows that connect data, processing, and services across clouds, giving you a unified data environment. Refer GCP documentation - Cloud Composer: - https://cloud.google.com/composer/; Cloud Composer is a fully managed workflow orchestration service that empowers you to author, schedule, and monitor pipelines that span across clouds and on-premises data centers. Built on the popular Apache Airflow open source project and operated using the Python programming language, Cloud Composer is free from lock-in and easy to use. Cloud Composer gives you the ability to connect your pipeline through a single orchestration tool whether your workflow lives on-premises, in multiple clouds, or fully within GCP. The ability to author, schedule, and monitor your workflows in a unified manner means you can break down the silos in your environment and focus less on infrastructure. Option A is wrong as Cloud Scheduler is a fully managed enterprise-grade cron job scheduler. It is not an multi-cloud orchestration tool. Option B is wrong as Google Cloud Dataflow is a fully managed service for strongly consistent, parallel data-processing pipelines. It does not support multi-cloud handling. Option D is wrong as Google Cloud Dataproc is a fast, easy to use, managed Spark and Hadoop service for distributed data processing."
    },
    {
        // Question 149
        id: 149,
        question: "A retailer wishes to identify the products, which are bought together. It already has a historical dataset containing a customer id, receipt id and the products bought. Which type of Machine Learning algorithm is suited to achieve this?",
        options: [
            "A. Classification",
            "B. Regression",
            "C. Association",
            "D. Clustering"
        ],
        answer: "C",
        explanation: "Correct answer is C as Association rules help identify the association from past events to define relations with the new ones. Association rule learning is a rule-based machine learning method for discovering interesting relations between variables in large databases. It is intended to identify strong rules discovered in databases using some measures of interestingness.[1]This rule-based approach also generates new rules as it analyzes more data. The ultimate goal, assuming a large enough dataset, is to help a machine mimic the human brain’s feature extraction and abstract association capabilities from new uncategorized data."
    },
    {
        // Question 150
        id: 150,
        question: "You are designing a photo sharing mobile app. Users will upload pictures from their mobile device directly and will be able to share pictures with others. As a compliance requirement, no image with offensive content should be allowed to be uploaded. How would you design your application?",
        options: [
            "A. Use Cloud Vision API to identify image with offensive content and mark it for manual checks.",
            "B. Use Cloud Natural Language API to identify image with offensive content and mark it for manual checks.",
            "C. Use Cloud Image Intelligence API to identify image with offensive content and mark it for manual checks.",
            "D. Use Cloud Video Intelligence API to identify image with offensive content and mark it for manual checks."
        ],
        answer: "A",
        explanation: "Correct answer is A as Cloud Vision can be used for image analysis to detect offensive or inappropriate content. Refer GCP documentation - Cloud Vision: - https://cloud.google.com/vision/; Cloud Vision API enables developers to understand the content of an image by encapsulating powerful machine learning models in an easy-to-use REST API. It quickly classifies images into thousands of categories (such as, “sailboat”), detects individual objects and faces within images, and reads printed words contained within images. You can build metadata on your image catalog, moderate offensive content, or enable new marketing scenarios through image sentiment analysis. Option B is wrong as Cloud Natural Language is for text analysis. Option C is wrong as the Cloud Image Intelligence does not exist. Option D is wrong as Video Intelligence is for videos."
    }
];