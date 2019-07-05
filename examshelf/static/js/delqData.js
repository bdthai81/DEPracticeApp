/**
 * GCP D.E. Linux Academy Quiz 2019
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

var delqData = [
    {
        // Question 1
        id: 1,
        question: "How would you best transfer data from an AWS S3 storage bucket to Google Cloud?",
        options: [
            "A. Use the Storage Transfer Service to transfer from the S3 bucket to a Google Cloud Storage bucket.",
            "B. Use the Storage Transfer Service to transfer from the S3 bucket to Google BigQuery",
            "C. Use a gsutil copy command.",
            "D. Use the Data Transfer Appliance for the transfer."
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 2
        id: 2,
        question: "Which of these are valid Storage services in the data lifecycle? (Choose all that apply)",
        options: [
            "A. BigQuery",
            "B. Cloud Pub/Sub",
            "C. Cloud Storage",
            "D. Cloud Dataflow",
            "E. Cloud Datastore",
            "F. Data Studio"
        ],
        answer: "ACE",
        explanation: "ACE, These are valid storage location. B, Pub/Sub is for real-time streaming ingest and asynchronous messaging, not storage."
    },
    {
        // Question 3
        id: 3,
        question: "Running a gsutil cp command is an example of what type of data ingest/transfer?",
        options: [
            "A. Undefined",
            "B. Real-time",
            "C. Batch",
            "D. Streaming"
        ],
        answer: "C",
        explanation: "C, You are copying data in bulk, not as it is generated. A, This is not a valid answer."
    },
    {
        // Question 4
        id: 4,
        question: "How would you best perform a one time transfer of 80 TB from an on-premises location to Google Cloud Storage? Your outgoing Internet connection from on-premises is only 20 Mbps.",
        options: [
            "A. Use a gsutil copy command to transfer the data to Cloud Storage.",
            "B. Use the Storage Transfer Service to transfer your data.",
            "C. Use the gcloud copy command to transfer data.",
            "D. Use the Transfer Appliance for the transfer."
        ],
        answer: "D",
        explanation: "D, Given the size of data and internet speed, the Data Transfer Appliance is the fastest and most economical choice for transferring data to Cloud Storage. C, You would use gsutil instead of gcloud, and the upload speed is too slow, anyway."
    },
    {
        // Question 5
        id: 5,
        question: "You need to deploy a database that will be managed manually on Compute Engine. This database does not need strong transactional consistency or ACID compliance. It does need to support high throughput read/write and must scale to over 20 TB. Choose three possible database options for this task.",
        options: [
            "A. Cassandra",
            "B. Oracle",
            "C. MySQL",
            "D. Microsoft SQL Server",
            "E. MongoDB",
            "F. HBase"
        ],
        answer: "AEF",
        explanation: ""
    },
    {
        // Question 
        id: 6,
        question: "You are working toward becoming more familiar with the data lifecycle on Google Cloud. Choose which Google Cloud services, in the right order, are involved in the following handling of data: 1. Streaming Data Ingest, 2. Processing Pipeline, 3. Storage in data warehouse",
        options: [
            "A. 1. Pub/Sub - 2. Dataflow - 3. Cloud Storage",
            "B. 1. Dataflow - 2. Pub/Sub - 3. BigQuery",
            "C. 1. Pub/Sub - 2. Dataflow - 3. BigQuery",
            "D. 1. Pub/Sub - 2. Cloud Storage - 3. BigQuery"
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 7
        id: 7,
        question: "You need to deploy an unmanaged database using Compute Engine instances. This database must have strong transactional consistency and meet ACID compliance. It will be no larger than 500 GB. It will be used to track customer medical records. Choose all of the possible database options you can use for this request.",
        options: [
            "A. MySQL",
            "B. Cassandra",
            "C. Microsoft SQL Server",
            "D. Bigtable"
        ],
        answer: "AC",
        explanation: "A, The description requires a relational database, and MySQL fits the requirements. C, The description requires a relational database, and Microsoft SQL Server fits the requirements. B, This is a non-relational database, and the problem requires a relational database."
    },
    {
        // Question 8
        id: 8,
        question: "Which of these is an example of streaming data ingest?",
        options: [
            "A. Loading data from Cloud Storage to Cloud ML engine for training machine learning models.",
            "B. Importing the contents of a Cloud Storage bucket to BigQuery for analysis",
            "C. Traffic sensors streaming data to Cloud Pub/Sub",
            "D. Copying data from your on-premises server to Cloud Storage"
        ],
        answer: "C",
        explanation: "C, This is a classic example of real-time, streaming data ingest. D, This is an example of batch ingest."
    },
    {
        // Question 9
        id: 9,
        question: "You have a large collection of different types of data that you will need to access regularly, which includes unstructured data. You will only need to access it from your office location in London. What type of storage solution should you use? Choose the single answer that fits all above use cases.",
        options: [
            "A. Standard Regional Cloud Storage bucket",
            "B. Regional Coldline bucket",
            "C. Multi-regional Cloud Storage bucket",
            "D. BigQuery"
        ],
        answer: "A",
        explanation: "A, You need a standard storage class due to frequent access. Regional will over better performance and lower cost to access from a single location. D, BigQuery is for structured data only, not unstructured data."
    },
    {
        // Question 10
        id: 10,
        question: "Your Datastore database has a large number of properties per entity. Some of these entities have only one possible value assigned to them. You want to avoid explosive indexing, which will hurt performance and increase storage. What step should you take to avoid this?",
        options: [
            "A. Use federated access to reduce the number of joins possible between entities.",
            "B. Do not index the properties with single values in your composite index.",
            "C. Add additional CPU cores to your Datastore nodes.",
            "D. In your index configuration file, enable the max index configuration to limit the number of indexing possibilities."
        ],
        answer: "B",
        explanation: "B, Reducing the number of properties that need to be indexed will substantially reduce the number of combination necessary, increasing performance. D, This is not a valid option."
    },
    {
        // Question 11
        id: 11,
        question: "You are the cloud administrator for a medical facility. Part of your duty is to manage the cloud SQL database used for patient records. When your database was first designed, using a single table for all patient records was sufficient. Over time, this table has grown 10x in size, and queries against the table have become slower as a result. What sequence of steps can you take to optimize query performance?",
        options: [
            "A. Use wildcards to select your entire table in the query.",
            "B. Break the single table into smaller tables.",
            "C. Use an INNER JOIN command for queries across tables",
            "D. Leave the database structure as-is, and add more CPU cores and RAM to your Cloud SQL instance"
        ],
        answer: "BC",
        explanation: "C, An INNER JOIN command will limit the scope of a query to improve efficiency. D, This technically helps, but does not improve database efficiency, which the exam will expect."
    },
    {
        // Question 12
        id: 12,
        question: "What happens to your Bigtable data when a Bigtable node suffers a critical failure?",
        options: [
            "A. The cluster is unable to process transactions until it is rebuilt.",
            "B. The last 5 minutes of transactions are lost.",
            "C. All data is lost.",
            "D. No data is lost."
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 13
        id: 13,
        question: "You are looking for a managed solution to store structured data. Your data requires very strong transactional consistency (must meet ACID compliance) and needs to be accessible via SQL queries. Your data is about 25 TB in size and growing. You will need to be able to access your data with low latency in both North America and Europe. Which solution should you choose to fulfill this request?",
        options: [
            "A. Cloud Datastore",
            "B. Cloud Bigtable",
            "C. Cloud SQL",
            "D. Cloud Spanner"
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 14
        id: 14,
        question: "Which types of Bigtable row keys can lead to hotspotting, that is, increased read/write loads on a particular Bigtable node? (Choose two)",
        options: [
            "A. Leading with a standard timestamp",
            "B. Non-sequential numeric IDs",
            "C. Sequential numeric IDs",
            "D. Reverse timestamp that are not at the front of the row key."
        ],
        answer: "AC",
        explanation: ""
    },
    {
        // Question 15
        id: 15,
        question: "You are planning the design of your Bigtable table, which will be used to collect speed limit data on highways. You anticipate needing to query by: 1. Highway name 2. Mile marker 3. Timestamp of measurement taken. How should you design your schema in order to maximize efficiency, query all necessary data, and avoid hotspots in the row key?",
        options: [
            "A. [TIMESTAMP]-[HIGHWAY]-[MILEMARKER]",
            "B. [HIGHWAY]-[MILEMARKER]-[REVERSE_TIMESTAMP]",
            "C. [HIGHWAY]-[MILEMARKER]",
            "D. [HIGHWAY] in row key, [MILEMARKER] in column 1, and [TIMESTAMP] in column 2"
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 16
        id: 16,
        question: "You need to choose a managed database solution for an upcoming application your company is designing. The database will store transactional, non-relational data, however, atomicity is required for strong consistency. Which managed database solution should you choose?",
        options: [
            "A. Cloud SQL",
            "B. Cloud Spanner",
            "C. Cloud Bigtable",
            "D. Cloud Datastore"
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 17
        id: 17,
        question: "You are evaluating a storage solution for your data. Your data is in structured, non-relational format, and will be used for analysis. You need low latency reads to your data, which is at least 40TB in size and growing. What solution should you use?",
        options: [
            "A. Cloud Bigtable",
            "B. Cloud Spanner",
            "C. Cloud SQL",
            "D. Cloud Datastore"
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 18
        id: 18,
        question: "What is the process of loading Cloud SQL data into BigQuery for analysis?",
        options: [
            "A. Create a new Cloud SQL instance with a copy of your original instance's data, then import into BigQuery without affecting the master instance.",
            "B. Export from Cloud SQL to a Cloud Storage bucket, then import from Cloud Storage into BigQuery.",
            "C. Use Pub/Sub to connect the two services.",
            "D. Import from Cloud SQL to BigQuery"
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 19
        id: 19,
        question: "Your company is evaluating moving to Google Cloud. You will need to migrate your 3 TB on-premises MySQL databases to a managed database service in order to reduce administrative overhead. Minimal modification to the database is desired for the move. What managed database service would best meet this requirement?",
        options: [
            "A. Cloud Spanner",
            "B. Cloud Datastore",
            "C. Cloud SQL",
            "D. Cloud Bigtable"
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 20
        id: 20,
        question: "You want to use an open source framework for constructing unified batch and data stream pipelines. Which open source framework should you choose?",
        options: [
            "A. Cassandra",
            "B. Apache Hadoop",
            "C. Apache Beam",
            "D. HBase"
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 21
        id: 21,
        question: "What is a requirement for running preemptible workers on a Dataproc cluster?",
        options: [
            "A. You can only have a maximum of a 2:1 ratio of preemptible to standard worker nodes.",
            "B. Preemptible nodes are only available on high availability master node configurations.",
            "C. The cluster must also have at least two standard worker nodes",
            "D. You must configure the startup and shutdown scripts to gracefully handle preemptible nodes being shut down."
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 22
        id: 22,
        question: "Which dataflow concept determines when the contents of a window should be submitted, based on certain conditions being met?",
        options: [
            "A. Watermark",
            "B. Trigger",
            "C. Condition",
            "D. Windows"
        ],
        answer: "B",
        explanation: "B, Triggers are what determine when a window's contents should be. D, Windows divide element groups by time span but do not determine when to submit contents."
    },
    {
        // Question 23
        id: 23,
        question: "How can you connect to the web interface of a Dataproc cluster? (Choose two)",
        options: [
            "A. VPN proxy",
            "B. Allow the necessary web ports access via firewall rules, and limit access to your network.",
            "C. HTTP proxy",
            "D. SOCKS proxy"
        ],
        answer: "BD",
        explanation: ""
    },
    {
        // Question 24
        id: 24,
        question: "You need to correct streaming messages that arrive out of order due to latency. Which Google Cloud service would you use to resolve this?",
        options: [
            "A. BigQuery",
            "B. Cloud Dataflow",
            "C. Cloud Pub/Sub",
            "D. Cloud SQL"
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 25
        id: 25,
        question: "You have a streaming Dataflow pipeline that you need to shut down. You want data already in the pipeline to finish and be sent to output before shutting down. Which shutdown option should you use to complete the shutdown process?",
        options: [
            "A. Stop",
            "B. Drain",
            "C. Shutdown",
            "D. Cancel"
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 26
        id: 26,
        question: "What IAM role do you need to grant to service accounts for Dataproc workloads, while offering the smallest scope of permissions?",
        options: [
            "A. Dataproc Worker",
            "B. Project Editor",
            "C. Dataproc Viewer",
            "D. Dataproc Servicing"
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 27
        id: 27,
        question: "You need to extract an address field from a multi-column element using Dataflow. Which mechanism is able to help with this task?",
        options: [
            "A. Window",
            "B. ParDo",
            "C. PCollection",
            "D. Transform"
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 28
        id: 28,
        question: "Which of these open source technologies is the direct equivalent to Google BigQuery?",
        options: [
            "A. Hive",
            "B. Spark",
            "C. Hadoop",
            "D. Pig"
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 29
        id: 29,
        question: "Which of these is not true for IAM on Cloud Pub/Sub",
        options: [
            "A. You can control access at the publisher level.",
            "B. You can control access at the project-wide level.",
            "C. You can control access at the subscription level.",
            "D. You can control access at the topic level."
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 30
        id: 30,
        question: "What is the open source equivalent to Cloud Pub/Sub?",
        options: [
            "A. Apache Beam",
            "B. Apache Hadoop",
            "C. Kubernetes",
            "D. Apache Kafka"
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 31
        id: 31,
        question: "How would you best connect your Dataflow pipeline to Bigtable for output?",
        options: [
            "A. Use Cloud Storage as a staging ground for outputting into Bigtable.",
            "B. You cannot connect Bigtable to Dataflow.",
            "C. Use the Cloud Dataflow connector for Bigtable.",
            "D. Dataflow connects natively to Bigtable."
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 32
        id: 32,
        question: "What are the different partitioning methods on BigQuery? (Choose two)",
        options: [
            "A. Ingestion-time partitioned",
            "B. Conditional partitions",
            "C. Sharding date",
            "D. Partition by specific timestamp/date column"
        ],
        answer: "AD",
        explanation: ""
    },
    {
        // Question 33
        id: 33,
        question: "Which of these actions can you not perform with the BigQuery Web UI?",
        options: [
            "A. Assign IAM roles.",
            "B. Toggle Legacy SQL to off on queries.",
            "C. Load multiple files at once",
            "D. Create dataset"
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 34
        id: 34,
        question: "Choose two best practices for creating more efficient queries and saving costs.",
        options: [
            "A. Save your biggest JOINs for last",
            "B. Avoid using SELECT * for column selection.",
            "C. Normalize your data when possible.",
            "D. Filter early and big with WHERE clauses"
        ],
        answer: "BD",
        explanation: ""
    },
    {
        // Question 35
        id: 35,
        question: "You want to analyze data in BigQuery that currently sits in the Cloud SQL service. How can you best get your Cloud SQL data into BigQuery?",
        options: [
            "A. It is not possible to view Cloud SQL data in BigQuery",
            "B. Use the BigQuery connector in Cloud SQL to export from Cloud SQL to BigQuery",
            "C. In Cloud SQL, designate BigQuery as an alternative write location.",
            "D. Export your Cloud SQL data to Cloud Storage, and then import from Cloud Storage to BigQuery."
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 36
        id: 36,
        question: "You are viewing the details of a recent large query and notice that Stage 1 has a full purple bar. What does this tell you?",
        options: [
            "A. Stage 1 spent most of its time reading from a large dataset.",
            "B. Stage 1 had a heavy computation procedure",
            "C. Your query could not be successfully completed.",
            "D. Your query stage spent a long time waiting for additional input."
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 37
        id: 37,
        question: "Which of these is not a valid BigQuery data format?",
        options: [
            "A. JSON",
            "B. AVRO",
            "C. CSV",
            "D. DOC"
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 38
        id: 38,
        question: "Which of these are you not charged for in BigQuery?",
        options: [
            "A. Queries",
            "B. Loading batch data",
            "C. Streaming Inserts",
            "D. Table storage"
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 39
        id: 39,
        question: "You host structured data for analysis for multiple clients in BigQuery. For organizational purposes, you need to store all of the different clients' data in a single project. You also need to be able to give your clients the ability to query their own data without having access to other clients' data. How can you best achieve this?",
        options: [
            "A. You must use separate projects for each client's data.",
            "B. Separate client data into separate datasets (one for each client), then give each client access to their own dataset via IAM roles.",
            "C. Restrict column views for each client.",
            "D. Assign separate IAM roles to individual tables in a single dataset."
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 40
        id: 40,
        question: "You need to give a team member the ability to use a training model for predictions, but not have the ability to create or delete models. What IAM role should you assign to achieve this task with the minimum necessary permissions?",
        options: [
            "A. Cloud ML Engine Developer",
            "B. Project Editor",
            "C. Model User",
            "D. Model Owner"
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 41
        id: 41,
        question: "You are developing an application that will process thousands of images and scan for explicit content. You need to develop your learning model quickly, and are not familiar with working in Tensorflow. How can you complete this task as quickly as possible while saving on costs",
        options: [
            "A. Have your application call on the Cloud Vision API and pass your images to it via a Cloud Storage URI.",
            "B. Use Cloud Datalab to develop your learning model in an interactive format, to make the process easier.",
            "C. Develop your training model in Cloud ML Engine, then have your application call on the trained model.",
            "D. Hire a consultant to assist with training your machine learning model to process your images."
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 42
        id: 42,
        question: "You want more control over the configuration of your Cloud ML Engine cluster. Which scaling tier would you choose?",
        options: [
            "A. CUSTOM",
            "B. USER_CONFIG",
            "C. PREMIUM_1",
            "D. CONFIGURE_CLUSTER"
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 43
        id: 43,
        question: "What is a difference between example (training) data and test data?",
        options: [
            "A. Examples are used for feature engineering, and test data is used for hyperparameter tuning.",
            "B. Examples are used to validate training models, and test data is used to train the learning model.",
            "C. Test data have labels attached and examples do not",
            "D. Example (training) data uses its labels to train the machine learning model, while test data uses its labels to validate the model’s accuracy."
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 44
        id: 44,
        question: "What are wide neural networks good for, compared deep neural networks?",
        options: [
            "A. Wide neural networks are better for memorization.",
            "B. Wide neural networks are better for generalization.",
            "C. Wide networks are an older style neural network.",
            "D. Wide networks are better at more complex problems."
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 45
        id: 45,
        question: "You need to create a model that predicts stock prices given a variety of factors. What type of problem are we modeling for?",
        options: [
            "A. Classification",
            "B. Clustering",
            "C. Linear",
            "D. Regression"
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 46
        id: 46,
        question: "Why would you want to train a machine learning model locally before deploying to Cloud ML Engine? (Choose all that apply)",
        options: [
            "A. Lower cost",
            "B. Better security",
            "C. Quick iteration",
            "D. Better scaling"
        ],
        answer: "AC",
        explanation: ""
    },
    {
        // Question 47
        id: 47,
        question: "What is a deep neural network?",
        options: [
            "A. An increasingly complex algorithm compared to a simple algorithm network",
            "B. A neural network with (generally) at least 3 hidden layers",
            "C. A neural network with a single hidden layer, but with at least 10 neurons",
            "D. A neural network with many features in use"
        ],
        answer: "B",
        explanation: ""
    },
    {
        // Question 48
        id: 48,
        question: "You are developing an application that will process thousands of images and scan for explicit content. You need to develop your learning model quickly, and are not familiar with working in Tensorflow. How can you complete this task as quickly as possible while saving on costs?",
        options: [
            "A. Have your application call on the Cloud Vision API and pass your images to it via a Cloud Storage URI.",
            "B. Use Cloud Datalab to develop your learning model in an interactive format, to make the process easier.",
            "C. Develop your training model in Cloud ML Engine, then have your application call on the trained model.",
            "D. Hire a consultant to assist with training your machine learning model to process your images."
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 49
        id: 49,
        question: "What software libraries does Cloud ML Engine support? (choose all that apply)",
        options: [
            "A. Tensorflow",
            "B. Tensorflow and PyTorch",
            "C. Theano and PyTorch",
            "D. XGBoost"
        ],
        answer: "AD",
        explanation: "D, Currently, only Tensorflow is supported. XGBoost and scikit-learn are currently in beta (as of this course creation date)."
    },
    {
        // Question 50
        id: 50,
        question: "What happens if you do not maintain separate test and training data for your learning model?",
        options: [
            "A. Your hyperparameters will not be correctly calibrated.",
            "B. The neural network will not have enough data to work with.",
            "C. The learning model will test better on the larger, combined set of data.",
            "D. Your model will only be trained on the specific training data and nothing else, known as overfitting."
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 51
        id: 51,
        question: "To run a local training job using the Google Cloud SDK, what command would you run?",
        options: [
            "A. gcloud ml-engine jobs submit training --local",
            "B. gcloud ml-engine job submit local",
            "C. gcloud ml-engine local train",
            "D. You cannot use the Google Cloud SDK for local training."
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 52
        id: 52,
        question: "Choose the components that are created when you type 'datalab create (instance_name)'. (Choose all that apply)",
        options: [
            "A. An App Engine application for your notebook.",
            "B. The compute engine instance to host your Datalab notebook.",
            "C. A VPC called 'datalab-network'.",
            "D. A Cloud Source repository"
        ],
        answer: "BCD",
        explanation: "C, This VPC is created to host your notebooks. D, This repository hosts your notebooks to share with others."
    },
    {
        // Question 53,
        id: 53,
        question: "What is Cloud Dataprep?",
        options: [
            "A. Interactive Jupyter notebook.",
            "B. A managed Hadoop service.",
            "C. A managed stream processor built on Apache Beam.",
            "D. Intelligent data preparation in a web-based format."
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 54
        id: 54,
        question: "Which of these is NOT a data format that Dataprep can use?",
        options: [
            "A. DOC",
            "B. Avro",
            "C. LOG",
            "D. XLS"
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 55
        id: 55,
        question: "Which languages does Datalab support? (Choose all that apply)",
        options: [
            "A. Java",
            "B. Python",
            "C. SQL",
            "D. JavaScript"
        ],
        answer: "BCD",
        explanation: ""
    },
    {
        // Question 56
        id: 56,
        question: "What other Google Cloud service does Dataprep use to complete the process of transforming data?",
        options: [
            "A. Dataflow",
            "B. BigQuery",
            "C. Datalab",
            "D. Dataproc"
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 57
        id: 57,
        question: "What open source software is Datalab based on?",
        options: [
            "A. Jupyter",
            "B. Tensorflow",
            "C. Apache Kafka",
            "D. Apache Hive"
        ],
        answer: "A",
        explanation: ""
    },
    {
        // Question 58
        id: 58,
        question: "In Data Studio, you want to use prefetch caching to reduce costs of querying BigQuery data. What should you do?",
        options: [
            "A. Configure the report to use the Viewer's credentials to access the underlying data in BigQuery, and also set it up to be a 'view-only' report.",
            "B. Select the query cache checkbox in report settings. Also, use the owner's credentials to access the source data.",
            "C. Select the enable cache checkbox in report settings. Also, use the owner's credentials to access the source data.",
            "D. Set up the report to use the Owner's credentials to access the underlying data in BigQuery, and instruct the users to view the report only once per business day (24-hour period)."
        ],
        answer: "C",
        explanation: ""
    },
    {
        // Question 59
        id: 59,
        question: "You need to prepare source data for analysis in BigQuery and want to delete rows that are missing data in your Date column. What should you do?",
        options: [
            "A. Use Cloud Dataprep to view the source data sample. Write a recipe to transform the data to remove rows that have the Date field blank.",
            "B. Use Cloud Dataprep to view the source data sample. In the Date column, highlight a blank cell and use the suggestion to delete blank rows to apply to the rest of the document.",
            "C. Write a Cloud Dataflow application using Apache Beam to examine the source data, remove the blank rows, and transform the data with the new results.",
            "D. Write a Cloud Dataflow application using Apache Spark to examine the source data, remove the blank rows, and transform the data with the new results."
        ],
        answer: "B",
        explanation: ""
    }
];


