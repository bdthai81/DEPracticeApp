/**
 * Coursera Practice Exam Quiz
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

var decpData = [
  {
    // Question 1
    id: 1,
    question:
      "Storage of JSON files with occasionally changing schema, for ANSI SQL queries.",
    options: [
      "A. Store in BigQuery. Provide format files for data load and update them as needed.",
      "B. Store in BigQuery. Select 'Automatically detect' in the Schema section.",
      "C. Store in Cloud Storage. Link data as temporary tables in BigQuery and turn on the 'Automatically detect' option in the Schema section of BigQuery.",
      "D. Store in Cloud Storage. Link data as permanent tables in BigQuery and turn on the 'Automatically detect' option in the Schema section of BigQuery."
    ],
    answer: "B",
    explanation:
      "B, This is correct because of the requirement to support occasionally (schema) changing JSON files and aggregate ANSI SQL queries: you need to use BigQuery, and it is quickest to use 'Automatically detect' for schema changes. A, This is not correct because you should not provide format files: you can simply turn on the 'Automatically detect' schema changes flag. C, This is not correct because you should not use Cloud Storage for this scenario: it is cumbersome and doesn't add value. D, This is not correct because you should not use Cloud Storage for this scenario: it is cumbersome and doesn't add value."
  },
  {
    // Question 2
    id: 2,
    question:
      "Low-cost one-way one-time migration of two 100-TB file servers to GCP; data will only be accessed from Germany.",
    options: [
      "A. Use Transfer Appliance. Transfer to a Cloud Storage Regional storage bucket.",
      "B. Use Transfer Appliance. Transfer to a Cloud Storage Multi-Regional bucket.",
      "C. Use Storage Transfer Service. Transfer to a Cloud Storage Regional bucket.",
      "D. Use Storage Transfer Service. Transfer to a Cloud Storage Multi-Regional bucket."
    ],
    answer: "A",
    explanation:
      "A, This is correct because you are performing a one-time (rather than an ongoing series) data transfer from on-premises to Google Cloud Platform for users in a single region (Germany). Using a Regional storage bucket will reduce cost and also conform to regulatory requirements. B, This is not correct because you should not use a Multi-Regional storage bucket for users in a single region. Also, Storage Transfer Service does not work for data stored on-premises. C, This is not correct because you should only use Transfer Service for a one-time one-way transfer. Also, Storage Transfer Service does not work for data stored on-premises.. D, This is not correct because you should only use Transfer Service for a one-time one-way transfer. This is not correct because you should not use a Multi-Regional storage bucket for users in a single region. Also, Storage Transfer Service does not work for data stored on-premises."
  },
  {
    // Question 3
    id: 3,
    question:
      "Cost-effective backup to GCP of multi-TB databases from another cloud including monthly DR drills.",
    options: [
      "A. Use Transfer Appliance. Transfer to Cloud Storage Nearline bucket.",
      "B. Use Transfer Appliance. Transfer to Cloud Storage Coldline bucket.",
      "C. Use Storage Transfer Service. Transfer to Cloud Storage Nearline bucket.",
      "D. Use Storage Transfer Service. Transfer to Cloud Storage Coldline bucket."
    ],
    answer: "C",
    explanation:
      "This is correct because you will need to access your backup data monthly to test your disaster recovery process, so you should use a Nearline bucket; also because you will be performing ongoing, regular data transfers, so you should use Storage Transfer Service. A, B, D, This is not correct because you should not use Coldline if you want to access the files monthly and you should not use Transfer Appliance for repeated data transfers."
  },
  {
    // Question 4
    id: 4,
    question:
      "250,000 devices produce a JSON device status every 10 seconds. How do you capture event data for outlier time series analysis?",
    options: [
      "A. Capture data in BigQuery. Develop a BigQuery API custom application to query the dataset and display device outlier data.",
      "B. Capture data in BigQuery. Use the BigQuery console to query the dataset and display device outlier data.",
      "C. Capture data in Cloud Bigtable. Use the Cloud Bigtable cbt tool to display device outlier data.",
      "D. Capture data in Cloud Bigtable. Install and use the HBase shell for Cloud Bigtable to query the table for device outlier data."
    ],
    answer: "C",
    explanation:
      "C, This is correct because the data type, volume, and query pattern best fit Cloud Bigtable capabilities. A and B, This is not correct because you do not need to use BigQuery for the query pattern in this scenario. The focus is on a single action (identify outliers), not interactive analysis. And the speed of the data is more suited to Cloud Bigtable. D, This is not correct because you can use the simpler method of 'cbt tool' to support this scenario. There is no reason given in the scenario to use HBase, so stay with more direct and native tools."
  },
  {
    // Question 5
    id: 5,
    question:
      "Event data in CSV format to be queried for individual values over time windows. Which storage and schema to minimize query costs?",
    options: [
      "A. Use Cloud Bigtable. Design tall and narrow tables, and use a new row for each single event version.",
      "B. Use Cloud Bigtable. Design short and wide tables, and use a new column for each single event version.",
      "C. Use Cloud Storage. Join the raw file data with a BigQuery log table.",
      "D. Use Cloud Storage. Write a Cloud Dataprep job to split the data into partitioned tables."
    ],
    answer: "A",
    explanation:
      "A, This is correct because it is a recommended best practice. Use Cloud Bigtable and this schema for this scenario. Cloud Storage would have cheaper STORAGE costs than Cloud Bigtable, but we want to minimize QUERY costs. B, This is not correct because the query should be based on a new row for each event, not a new column. You should design tall and narrow tables, not short and wide tables. C, This is not correct because you do not need to use Google Cloud Storage for this scenario. It might be cheaper for storage, but not for processing. D, This is not correct because you do not need to use Google Cloud Storage for this scenario. It might be cheaper for storage, but not for processing."
  },
  {
    // Question 6
    id: 6,
    question:
      "Customer wants to maintain investment in existing Apache Spark code data pipeline.",
    options: [
      "A. BigQuery",
      "B. Cloud Dataflow",
      "C. Cloud Dataproc",
      "D. Cloud Dataprep"
    ],
    answer: "C",
    explanation:
      "C, This is correct because Cloud Dataproc is a managed Hadoop service and runs Apache Spark applications. A, BigQuery would not be an appropriate tools and cannot run Spark applications. B, This would require recreating or adapting the code (an additional investment). D, Cloud Dataprep would not be an appropriate tools and cannot run Spark applications."
  },
  {
    // Question 7
    id: 7,
    question:
      "Host a deep neural network machine learning model on GCP. Run and monitor jobs that could occasionally fail.",
    options: [
      "A. Use Cloud Machine Learning Engine to host your model. Monitor the status of the Operation object for 'error' results.",
      "B. Use Cloud Machine Learning Engine to host your model. Monitor the status of the Jobs object for 'failed' job states.",
      "C. Use a Kubernetes Engine cluster to host your model. Monitor the status of the Jobs object for 'failed' job states.",
      "D. Use a Kubernetes Engine cluster to host your model. Monitor the status of the Operation object for 'error' results."
    ],
    answer: "B",
    explanation:
      "B, This is correct because of the requirement to host an ML DNN. Cloud ML Engine for Tensorflow can handle DNNs. Google recommends monitoring Jobs, not Operations. A, This is not correct because you should not use the Operation object to monitor failures. C, This is not correct because you should not use a Kubernetes Engine cluster for this scenario. D, This is not correct because you should not use a Kubernetes Engine cluster for this scenario."
  },
  {
    // Question 8
    id: 8,
    question:
      "Cost-effective way to run non-critical Apache Spark jobs on Cloud Dataproc?",
    options: [
      "A. Set up a cluster in high availability mode with high-memory machine types. Add 10 additional local SSDs.",
      "B. Set up a cluster in high availability mode with default machine types. Add 10 additional preemptible worker nodes.",
      "C. Set up a cluster in standard mode with high-memory machine types. Add 10 additional preemptible worker nodes.",
      "D. Set up a cluster in standard mode with the default machine types. Add 10 additional local SSDs."
    ],
    answer: "C",
    explanation:
      "C, This is correct because Spark and high-memory machines only need the standard mode. Also, use preemptible nodes because you want to save money and this is not mission-critical. A, This is not correct because this scenario does not call for high availability mode. B, This is not correct because this scenario does not call for high availability mode. D, This is not correct because you should not add more local SSDs; instead, use preemptible nodes to meet your objective of delivering a cost-effective solution."
  },
  {
    // Question 9
    id: 9,
    question:
      "Promote a Cloud Bigtable solution with a lot of data from development to production and optimize for performance.",
    options: [
      "A. Change your Cloud Bigtable instance type from Development to Production, and set the number of nodes to at least 3. Verify that the storage type is HDD.",
      "B. Change your Cloud Bigtable instance type from Development to Production, and set the number of nodes to at least 3. Verify that the storage type is SSD.",
      "C. Export the data from your current Cloud Bigtable instance to Cloud Storage. Create a new Cloud Bigtable Production instance type with at least 3 nodes. Select the HDD storage type. Import the data into the new instance from Cloud Storage.",
      "D. Export the data from your current Cloud Bigtable instance to Cloud Storage. Create a new Cloud Bigtable Production instance type with at least 3 nodes. Select the SSD storage type. Import the data into the new instance from Cloud Storage."
    ],
    answer: "B",
    explanation:
      "B, This is correct because Cloud Bigtable allows you to 'scale in place,' which meets your requirements for this scenario. A, This is not correct because you should be using SSD storage for this scenario. C, This is not correct because creating a new Cloud Bigtable instance is extraneous and not needed to export; you can upgrade in place for nodes, but the storage type cannot be changed. D, This is not correct because creating a new Cloud Bigtable instance is extraneous and not needed to export; you can upgrade in place for nodes, but the storage type cannot be changed."
  },
  {
    // Question 10
    id: 10,
    question:
      "As part of your backup plan, you want to be able to restore snapshots of Compute Engine instances using the fewest steps.",
    options: [
      "A. Export the snapshots to Cloud Storage. Create disks from the exported snapshot files. Create images from the new disks.",
      "B. Export the snapshots to Cloud Storage. Create images from the exported snapshot files.",
      "C. Use the snapshots to create replacement disks. Use the disks to create instances as needed.",
      "D. Use the snapshots to create replacement instances as needed."
    ],
    answer: "D",
    explanation:
      "D, This is correct because the scenario asks how to recreate instances. You can create an instance directly from a snapshot without restoring to disk first. A, This is not correct because you don't need to export the snapshot to use it. B, This is not correct because you don't need to export the snapshot to use it. C, This is not correct because it includes the step of creating a persistent disk before creating an instance, which is not necessary."
  },
  {
    // Question 11
    id: 11,
    question:
      "You want to minimize costs to run Google Data Studio reports on BigQuery queries by using prefetch caching.",
    options: [
      "A. Set up the report to use the Owner's credentials to access the underlying data in BigQuery, and direct the users to view the report only once per business day (24-hour period).",
      "B. Set up the report to use the Owner's credentials to access the underlying data in BigQuery, and verify that the 'Enable cache' checkbox is selected for the report.",
      "C. Set up the report to use the Viewer's credentials to access the underlying data in BigQuery, and also set it up to be a 'view-only' report.",
      "D. Set up the report to use the Viewer's credentials to access the underlying data in BigQuery, and verify that the 'Enable cache' checkbox is not selected for the report."
    ],
    answer: "B",
    explanation:
      "B, This is correct because you must set Owner credentials to use the 'enable cache' option in BigQuery. It is also a Google best practice to use the ‘enable cache’ option when the business scenario calls for using prefetch caching. 1) Report must use Owner's Credentials. 2) You don't need to tell the users not to use the report, you need to tell the system to use Query and Pre-fetch caching to cut down on BigQuery jobs. A, This is not correct because a cache auto-expires every 12 hours; a prefetch cache is only for data sources that use the Owner's credentials (not the Viewer's credentials). C, This is not correct because a cache auto-expires every 12 hours; a prefetch cache is only for data sources that use the Owner's credentials (not the Viewer's credentials). D, This is not correct because a cache auto-expires every 12 hours; a prefetch cache is only for data sources that use the Owner's credentials (not the Viewer's credentials)."
  },
  {
    // Question 12
    id: 12,
    question:
      "A Data Analyst is concerned that a BigQuery query could be too expensive",
    options: [
      "A. Use the LIMIT clause to limit the number of values in the results.",
      "B. Use the SELECT clause to limit the amount of data in the query. Partition data by date so the query can be more focused.",
      "C. Set the Maximum Bytes Billed, which will limit the number of bytes processed but still run the query if the number of bytes requested goes over the limit.",
      "D. Use GROUP BY so the results will be grouped into fewer output values."
    ],
    answer: "B",
    explanation:
      "B, This is correct. SELECT limits the input data. A, This is not correct because the LIMIT clause limits the output, but does not limit data processes. C, This is not correct because if the query contains too many bytes, the job will fail and not be run. D, This is not correct because ordering the output will have no effect on the data processed up to that point."
  },
  {
    // Question 13
    id: 13,
    question:
      "BigQuery data is stored in external CSV files in Cloud Storage; as the data has increased, the query performance has dropped.",
    options: [
      "A. Import the data into BigQuery for better performance.",
      "B. Request more slots for greater capacity to improve performance.",
      "C. Divide the data into partitions based on date.",
      "D. Time to move to Cloud Bigtable; it is faster in all cases."
    ],
    answer: "A",
    explanation:
      "A, This is correct. The performance issue is because the data is stored in a non-optimal format in an external storage medium. B, This is incorrect because a slot is a measure of processing power, and the bottleneck is in the data access, not the data processing. C, This might improve performance by focusing the query to a date-range if the data was already imported into a dataset. D, This is incorrect because a solution is available using BigQuery, and redesigning the data pipeline would be more complicated than adjusting the existing solution."
  },
  {
    // Question 14
    id: 14,
    question:
      "Source data is streamed in bursts and must be transformed before use.",
    options: [
      "A. Use Cloud Bigtable for fast input and cbt for ETL.",
      "B. Ingest data to Cloud Storage. Use Cloud Dataproc for ETL.",
      "C. Use Cloud Pub/Sub to buffer the data, and then use BigQuery for ETL.",
      "D. Use Cloud Pub/Sub to buffer the data, and then use Cloud Dataflow for ETL."
    ],
    answer: "D",
    explanation:
      "D, This is correct because the unpredictable data requires a buffer. A, This is not correct because there is no guarantee in the scenario that Cloud Bigtable will be fast enough. cbt is used for querying; it is not an ETL tool. B, This is not correct because without Cloud Pub/Sub there is no guarantee that the data will make it into Cloud Storage. The ETL could be in Cloud Dataproc. C, This is not correct because BigQuery would not be the best tool for ETL in this case."
  },
  {
    // Question 15
    id: 15,
    question:
      "Calculate a running average on streaming data that can arrive late and out of order.",
    options: [
      "A. Use Cloud Pub/Sub and Cloud Dataflow with Sliding Time Windows.",
      "B. Use Cloud Pub/Sub and Google Data Studio.",
      "C. Cloud Pub/Sub can guarantee timely arrival and order.",
      "D. Use Cloud Dataflow's built-in timestamps for ordering and filtering."
    ],
    answer: "A",
    explanation:
      "A, This is correct because together, Cloud Pub/Sub and Cloud Dataflow can provide a solution. B, This is not correct because Google Data Studio is a visualization tool. C, This is not correct because Cloud Pub/Sub alone is not sufficient. D, This is not correct because Cloud Dataflow does not have built-in timestamps, and you would want event time, not system time, for processing."
  },
  {
    // Question 16
    id: 16,
    question:
      "Testing a Machine Learning model with validation data returns 100% correct answers.",
    options: [
      "A. The model is working extremely well, indicating the hyperparameters are set correctly.",
      "B. The model is overfit. There is a problem.",
      "C. The model is underfit. There is a problem.",
      "D. The model is perfectly fit. You do not need to continue training."
    ],
    answer: "B",
    explanation:
      "B, This is correct. The 100% accuracy is an indicator that the validation data may have somehow gotten mixed in with the training data. You will need new validation data to generate recognizable error. A, This is not correct because the 100% accuracy is an indicator of an overfit model. It may mean your validation data has gotten mixed in with your training data. C, This is not correct. An underfit model would have poor results, not perfect results. D, This is not correct because the 100% accuracy is an indicator of an overfit model. It may mean your validation data has gotten mixed in with your training data."
  },
  {
    // Question 17
    id: 17,
    question:
      "A client is using Cloud SQL database to serve infrequently changing lookup tables that host data used by applications. The applications will not modify the tables. As they expand into other geographic regions they want to ensure good performance. What do you recommend?",
    options: [
      "A. Migrate to Cloud Spanner",
      "B. Read replicas",
      "C. Instance high availability configuration",
      "D. Replicate from an external server"
    ],
    answer: "B",
    explanation:
      "B, This is correct. A read replica will increase the availability of the service and can be located closer to the users in the new geographies. A, This is not correct because there is no mention of a scale issue requiring a larger database or globally consistent transactions. C, High availability will not improve performance or availability for additional geographic locations. D, This feature replicates from an existing MySQL server IN to a Cloud SQL service. So that would not help in this circumstance."
  },
  {
    // Question 18
    id: 18,
    question:
      "A client wants to store files from one location and retrieve them from another location. Security requirements are that no one should be able to access the contents of the file while it is hosted in the cloud. What is the best option?",
    options: [
      "A. Default encryption should be sufficient",
      "B. Client-side encryption",
      "C. Customer-Supplied Encryption Keys (CSEK)",
      "D. Customer Managed Encryption Keys (CMEK)"
    ],
    answer: "B",
    explanation:
      "B, This is correct. The requirement is that the file cannot be decrypted in the cloud, so encrypt it before it is uploaded and after it is downloaded adds a layer of encryption. A, Not correct. The file will be readable within the project. C, The specific requirement is that the file cannot be decrypted in the cloud. This feature simply makes decryption more private and secure. So it is not the best solution because it does not satisfy the business requirements stated in the question. D, Not correct. The file can still be decrypted while hosted in the cloud."
  },
  {
    // Question 19
    id: 19,
    question:
      "Three Google Cloud services commonly used together in data engineering solutions. (Described in this course).",
    options: [
      "A. Cloud Dataproc, Cloud SQL, BigQuery",
      "B. Cloud Pub/Sub, Cloud Dataflow, BigQuery",
      "C. Cloud Pub/Sub, Kubernetes Engine, Cloud Spanner",
      "D. Cloud Bigtable, Cloud Dataproc, Cloud Spanner"
    ],
    answer: "B",
    explanation:
      "B, Correct. Cloud Pub/Sub provides messaging, Cloud Dataflow is used for ETL and data transformation, and Cloud BigQuery is used for interactive queries. A, C and D are not correct."
  },
  {
    // Question 20
    id: 20,
    question: "What is AVRO used for?",
    options: [
      "A. Serialization and de-serialization of data so that it can be transmitted and stored while maintaining an object structure.",
      "B. AVRO is an encryption method. AVRO-256 is a 256-bit key standard.",
      "C. AVRO is a file type usually specified with *.avr and a common format for spreadsheets.",
      "D. AVRO is a numerical type in SQL that stores a 38 digit value with 9 digit decimal representation. It avoids rounding errors in financial calculations."
    ],
    answer: "A",
    explanation:
      "A, This is correct. AVRO is a serialization / de-serialization standard. B, Incorrect. That is the AES-256 standard. C, Incorrect. AVRO is not a file format. It is a serialization method. D, Incorrect. That is the NUMERIC SQL type."
  },
  {
    // Question 21
    id: 21,
    question:
      "A company has a new IoT pipeline. Which services will make this design work?Select the services that should be used to replace the icons with the number '1' and number '2' in the diagram. Devices -> 1 -> 2 -> Dataflow -> BigQuery",
    options: [
      "A. Cloud IoT Core, Cloud Datastore",
      "B. Cloud Pub/Sub, Cloud Storage",
      "C. Cloud IoT Core, Cloud Pub/Sub",
      "D. App Engine, Cloud IoT Core"
    ],
    answer: "C",
    explanation:
      "C, This is correct because device data captured by Cloud IoT Core gets published to Cloud Pub/Sub. A, This is not correct because Cloud IoT Core does not publish to other services and it doesn't store data. B, This is not correct because Cloud Pub/Sub does not do device management. D, This is not correct. In theory, an App Engine application could duplicate the functions of Cloud IoT Core, but since Cloud IoT Core only publishes to Cloud Pub/Sub, in position 2, it would not communicate with either Cloud Functions or Cloud Dataflow."
  },
  {
    // Question 22
    id: 22,
    question:
      "A company wants to connect cloud applications to an Oracle database in its data center. Requirements are a maximum of 9 Gbps of data and a Service Level Agreement (SLA) of 99%.",
    options: [
      "A. Implement a high-throughput Cloud VPN connection",
      "B. Cloud Router with VPN",
      "C. Dedicated Interconnect",
      "D. Partner Interconnect"
    ],
    answer: "D",
    explanation:
      "D, This is correct. Partner Interconnect is useful for data up to 10 Gbps and is offered by ISPs with SLAs. A, This is not correct. Cloud VPN traverses the public internet. It is useful for low-volume connections. The SLA offered by Google covers the Cloud VPN service itself, and not the internet transport. So it would not meet the SLA requirement. Which is the best option? B, This is not correct. Cloud Router is a form of network route discovery using BGP and is not relevant to the requirements. C, This is not correct. Direct Interconnect is useful for data from 10 Gbps to 80 Gbps. An ISP could offer a 99% SLA, but the max 9 Gbps requirement means this solution would not be optimal."
  },
  {
    // Question 23
    id: 23,
    question:
      "A client has been developing a pipeline based on PCollections using local programming techniques and is ready to scale up to production. What should they do?",
    options: [
      "A. They should use the Cloud Dataflow Cloud Runner.",
      "B. They should upload the pipeline to Cloud Dataproc.",
      "C. They should use the local version of runner.",
      "D. Import the pipeline into BigQuery."
    ],
    answer: "A",
    explanation:
      "A, This is correct. The PCollection indicates it is a Cloud Dataflow pipeline. And the Cloud Runner will enable the pipeline to scale to production levels. B, This is incorrect. A PCollection is a Cloud Dataflow data abstraction, not a Cloud Dataproc abstraction. C, This is incorrect. They are already using the local version of runner to develop the pipeline. They need to use a different runner to scale the working pipeline. D, BigQuery does not have a connector or import for a Cloud Dataflow pipeline. Additionally, BigQuery is focused on queries and Cloud Dataflow is focused on data transformation."
  },
  {
    // Question 24
    id: 24,
    question:
      "A company has migrated their Hadoop cluster to the cloud and is now using Cloud Dataproc with the same settings and same methods as in the data center. What would you advise them to do to make better use of the cloud environment?",
    options: [
      "A. Upgrade to the latest version of HDFS. Change the settings in Hadoop components to optimize for the different kinds of work in the mix.",
      "B. Find more jobs to run so the cluster utilizations will cost-justify the expense.",
      "C. Store persistent data off-cluster. Start a cluster for one kind of work then shut it down when it is not processing data.",
      "D. Migrate from Cloud Dataproc to an open source Hadoop Cluster hosted on Compute Engine, because this is the only way to get all the Hadoop customizations needed for efficiency."
    ],
    answer: "C",
    explanation:
      "C, This is correct. Storing persistent data off the cluster allows the cluster to be shut down when not processing data. And it allows separate clusters to be started per job or per kind of work, so tuning is less important. A, This is not correct. This would be advice for a data center open source Hadoop installation. It is not the best advice for cloud. B, This is not correct. This is a problem with data center Hadoop installations that Cloud-based Hadoop overcomes. D, This is not correct. Cloud Memorystore is Reddis as a service, which is a caching in-memory high speed database. Speed was not a key requirement."
  },
  {
    // Question 25
    id: 25,
    question:
      "An application has the following data requirements. 1. It requires strongly consistent transactions. 2. Total data will be less than 500 GB. 3. The data does not need to be streaming or real time. Which data technology would fit these requirements?",
    options: [
      "A. BigQuery",
      "B. Cloud Bigtable",
      "C. Cloud SQL",
      "D. Cloud Memorystore"
    ],
    answer: "C",
    explanation:
      "C, This is correct. Cloud SQL supports strongly consistent transactions. And the size requirements will fit with a Cloud SQL instance. A, This is not correct. BigQuery is not designed to support strongly consistent transactions. B, This is not correct. Cloud Bigtable is not designed to support strongly consistent transactions. D, TODO."
  }
];
