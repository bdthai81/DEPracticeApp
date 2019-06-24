/**
 * GCP D.E. Linux Academy Tests 2019
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

var delaData = [
    {
        // Question 1
        id: 1,
        question: "Which of these is NOT a type of trigger that applies to Dataflow?",
        options: [
            "A. Element size in bytes.",
            "B. Element count.",
            "C. Combinations of other triggers.",
            "D. Timestamp"
        ],
        answer: "A",
        explanation: "A, Element size is not a type of trigger, therefore it is our correct answer. B, This is a valid trigger type. https://linuxacademy.com/cp/courses/lesson/course/2243/lesson/3/module/208"
    },
    {
        // Question 2
        id: 2,
        question: "You are building storage for files for a data pipeline on Google Cloud. You want to support JSON files. The schema of these files will occasionally change. Your analyst teams will use running aggregate ANSI SQL queries on this data. What should you do?",
        options: [
            "A. Use Cloud Storage for storage. Link data as permanent tables in BigQuery and turn on the Automatically detect option in the Schema section of BigQuery.",
            "B. Use BigQuery for storage. Provide format files for data load. Update the format files as needed.",
            "C. Use BigQuery for storage. Select Automatically detect in the Schema section.",
            "D. Use Cloud Storage for storage. Link data as temporary tables in BigQuery and turn on the Automatically detect option in the Schema section of BigQuery."
        ],
        answer: "C",
        explanation: "C is correct because of the requirement to support occasionally (schema) changing JSON files and aggregate ANSI SQL queries; you need to use BigQuery, and it is quickest to use Automatically detect for schema changes. B, You should not provide format files; you can simply turn on the Automatically detect schema changes flag. D is not correct because you should not use Cloud Storage for this scenario; it is cumbersome and doesn't add value. https://linuxacademy.com/cp/courses/lesson/course/2238/lesson/3/module/208"
    },
    {
        // Question 3
        id: 3,
        question: "You need to run analytical queries using SQL syntax against data formatted in JSON format. What should you do? Choose the best answer.",
        options: [
            "A. Load your JSON data into Cloud SQL, and run queries against it in that service.",
            "B. Load your JSON data into Cloud Storage. Add your JSON table as an external read source in BigQuery, since BigQuery is unable to store data in JSON format.",
            "C. Import the data into Bigtable and use Bigtable for your queries.",
            "D. Import the data in JSON format into BigQuery as a table, and run queries against it."
        ],
        answer: "D",
        explanation: ""
    },
    {
        // Question 4
        id: 4,
        question: "You have a long-running, streaming Dataflow pipeline that you need to shut down. You do not need to preserve data currently in the processing pipeline and need it shut down as soon as possible. Which shutdown option should you use to complete the shutdown process?",
        options: [
            "A. Graceful shutdown",
            "B. Cancel",
            "C. Stop",
            "D. Drain"
        ],
        answer: "B",
        explanation: "B, Cancel will shut down the pipeline without allowing buffered jobs to complete. D, This will stop new data from flowing in but will leave the processing pipeline running to process buffered data, which is not what we want. https://linuxacademy.com/cp/courses/lesson/course/2243/lesson/5/module/208"
    },
    {
        // Question 5
        id: 5,
        question: "You are configuring your Cloud Pub/Sub subscription. Assuming that all requirements are met, which subscription delivery method offers better 'near real-time' delivery of messages?",
        options: [
            "A. Pull",
            "B. Push",
            "C. Cached",
            "D. Instant"
        ],
        answer: "B",
        explanation: "B, Push deliver has Pub/Sub initiate the transfer of messages to the subscriber, and has overall better performance. Be aware that push delivery has more requirements than pull. D, This is not a valid option. https://linuxacademy.com/cp/courses/lesson/course/2241/lesson/2/module/208"
    },
    {
        // Question 6
        id: 6,
        question: "For this question, refer to the MJTelco case study here: https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco MJTelco needs to be able to reliably handle ever-increasing amounts of streaming telemetry data, process it, and economically store analyzed data. What services should they use for this task?",
        options: [
            "A. Cloud Pub/Sub, Cloud Dataflow, Bigquery",
            "B. Cloud Pub/Sub, Cloud Dataproc, Bigtable",
            "C. Kubernetes Engine, Cloud Dataflow, Cloud Datastore",
            "D. Stackdriver, Cloud Dataproc, Cloud Spanner"
        ],
        answer: "A",
        explanation: "A, Pub/Sub for streaming data ingest, Dataflow for processing streaming data, and BigQuery for storage and analysis. D, None of these services are ideal for the use case."
    },
    {
        // Question 7
        id: 7,
        question: "Pick two benefits of using denormalized data in BigQuery? (Choose all that apply)",
        options: [
            "A. Decreased query complexity",
            "B. Less storage space used",
            "C. Increased query performance",
            "D. Reduces the amount of data processed"
        ],
        answer: "AC",
        explanation: "A, Not having to use JOIN clauses due to combined tables makes queries easier. C, Denormalizing data increases performance on denormalized data since all of the data is in a single table instead of relying on JOIN's to combine multiple tables' data. B, Denormalizing tables has no effect on storage amounts. D, The amount of data is the same. However, performance is increased by not having to query from multiple tables."
    },
    {
        // Question 8
        id: 8,
        question: "What open source software is Cloud Pub/Sub most similar to?",
        options: [
            "A. Apache Beam",
            "B. Apache Kafka",
            "C. HBase",
            "D. Apache Hadoop"
        ],
        answer: "B",
        explanation: "B, Kafka is the open source streaming ingest framework for creating a manual streaming pipeline. D, Hadoop is a data processing and analytics service, not a streaming service like Pub/Sub. https://linuxacademy.com/cp/courses/lesson/course/2241/lesson/2/module/208"
    },
    {
        // Question 9
        id: 9,
        question: "What is the recommended minimum amount of data to store in Bigtable?",
        options: [
            "A. 500 GB",
            "B. 1 GB",
            "C. 1 TB",
            "D. 500 TB"
        ],
        answer: "C",
        explanation: "C, Google recommends that workloads of less than 1TB should not be used in Bigtable, especially from a cost/value perspective. B, Google recommends that workloads of less than 1TB should not be used in Bigtable, especially from a cost/value perspective. D, Bigtable can hold 500 GB, but 1TB is the recommended minimum to gain proper value from it. https://linuxacademy.com/cp/courses/lesson/course/2111/lesson/1/module/208"
    },
    {
        // Question 10
        id: 10,
        question: "Why do you want to train a machine learning model locally before training on cloud resources? (Choose all that apply)",
        options: [
            "A. Faster training with scaling resources.",
            "B. Faster iteration.",
            "C. Save costs.",
            "D. Restrict access to other parties."
        ],
        answer: "BC",
        explanation: "B, Local training allows you to make faster adjustments. C, Training locally does not cost money on the cloud when running. D, This may be partially true, but is not the primary reason to train locally. https://linuxacademy.com/cp/courses/lesson/course/2247/lesson/1/module/208"
    },
    {
        // Question 11
        id: 11,
        question: "How can you set up your Dataproc environment to use BigQuery as an input and output source?",
        options: [
            "A. Use the Bigtable syncing service built into Dataproc.",
            "B. Manually use a Cloud Storage bucket to import and export to and from both Bigquery and Dataproc",
            "C. Install the BigQuery connector on your Dataproc cluster",
            "D. You can only use Cloud Storage or HDFS for your Dataproc input and output."
        ],
        answer: "C",
        explanation: "C, You can install the BigQuery connector to your cluster for direct programmatic read/write access to BigQuery. Note that a Cloud Storage bucket is used between the two services, but you'll interact directly with BigQuery from Dataproc. D, This is not true. You can also use Bigtable and BigQuery after installing the appropriate connector. https://linuxacademy.com/cp/courses/lesson/course/2237/lesson/4/module/208"
    },
    {
        // Question 12
        id: 12,
        question: "You need to export Avro formatted data from BigQuery into Cloud Storage. What is the best method of doing so from the web console?",
        options: [
            "A. Convert the data to CSV format the BigQuery export options, then make the transfer.",
            "B. Use the BigQuery Transfer Service to transfer Avro data to Cloud Storage.",
            "C. Click on Export Table in BigQuery, and provide the Cloud Storage location to export to.",
            "D. Create a Dataflow job to manage the conversion of Avro data to CSV format, then export to Cloud Storage."
        ],
        answer: "C",
        explanation: "C, BigQuery can export Avro data natively to Cloud Storage. D, BigQuery can export Avro data natively to Cloud Storage. This is not necessary. https://linuxacademy.com/cp/courses/lesson/course/2238/lesson/3/module/208"
    },
    {
        // Question 13
        id: 13,
        question: "For this question, refer to the Flowlogistic case study here: https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic Flowlogistic is ready to migrate their Hadoop workloads to Google Cloud. For the data migration, they need a cost-effective 'data lake' that will scale to their growing data needs and be able to easily connect to their Hadoop workloads in the cloud. What two actions should they perform? (Choose all that apply)",
        options: [
            "A. Create a Dataproc cluster for long-term use, and transfer data to the HDFS partition on the cluster.",
            "B. Install the Bigtable connector in the on-premises Hadoop cluster, then migrate data to Bigtable for long-term storage.",
            "C. Add the Cloud Storage connector to their on-premises Hadoop environment, and transfer their data to a Cloud Storage bucket.",
            "D. For the existing Hadoop jobs that are migrating to Dataproc, use the gs:// prefix instead of hdfs:// to access data from Cloud Storage."
        ],
        answer: "CD",
        explanation: "C, Best practice is to use Cloud Storage with Dataproc for long-term storage that does not require a Dataproc cluster to be constantly running. https://linuxacademy.com/cp/courses/lesson/course/2293/lesson/2/module/208"
    },
    {
        // Question 14
        id: 14,
        question: 'You are creating a machine learning model to predict the likelihood of fraud from credit card transaction data. The end result will predicting the percent confidence of two results: "Fraud" and "Not Fraud". What type of learning model problem is this?',
        options: [
            "A. Classification",
            "B. Clustering",
            "C. Hyperparameter",
            "D. Regression"
        ],
        answer: "A",
        explanation: "A, Categorical is for a set of finite categories, such as 'yes' or 'no'. Fraud is a yes/no output, so this fits. B, Clustering is an unsupervised learning type, does not apply here. D, Regression is for continuous variables. Fraud is either 'yes' or 'no', so this does not match. https://linuxacademy.com/cp/courses/lesson/course/2246/lesson/1/module/208"
    },
    {
        // Question 15
        id: 15,
        question: "You are designing storage for event data as part of building a data pipeline on Google Cloud. Your input data is in CSV format. You want to minimize the cost of querying individual values over time windows. Which storage service and schema design should you use?",
        options: [
            "A. Use Cloud Bigtable for storage. Design tall and narrow tables, and use a new row for each single event version.",
            "B. Use Cloud Bigtable for storage. Design short and wide tables, and use a new column for each single event version.",
            "C. Use Cloud Storage for storage. Join the raw file data with a BigQuery log table.",
            "D. Use Cloud Storage for storage. Write a Cloud Dataprep job to split the data into partitioned tables."
        ],
        answer: "A",
        explanation: "A, You will want to use Bigtable for this 'values over time' scenario. Using tall and narrow tables is the best practice for this use case. B, You should design tall and narrow tables, not short and wide tables. Also, you should use a new row, not a new column. D, You should not use Cloud Storage or BigQuery for this scenario. Bigtable is the better option. https://linuxacademy.com/cp/courses/lesson/course/2111/lesson/3/module/208"
    },
    {
        // Question 16
        id: 16,
        question: "What types of Bigtable row keys can lead to hotspotting? (Choose all that apply)",
        options: [
            "A. Leading with a non-reversed timestamp.",
            "B. Standard domain names (non-reversed).",
            "C. Reverse timestamps.",
            "D. Non-sequential numeric IDs."
        ],
        answer: "AB",
        explanation: "A, Like sequential IDs, timestamps will read and write from the same node, causing increased load. B, Non-reversed domain names at the start of a row key can lead to hotspotting. If you need to use domain names, reverse it. D, Randomized IDs will spread the load for reads and writes between nodes, making this an incorrect answer for this question. https://linuxacademy.com/cp/courses/lesson/course/2111/lesson/4/module/208"
    },
    {
        // Question 17
        id: 17,
        question: "As part of a complex rollout, you have hired a third party developer consultant to assist with creating your Dataflow processing pipeline. The data that this pipeline will process is very confidential, and the consultant cannot be allowed to view the data itself. What actions should you take so that they have the ability to help build the pipeline but cannot see the data it will process?",
        options: [
            "A. Assign the consultant the Dataflow Developer IAM role.",
            "B. Apply custom encryption to the data before it goes through the pipeline.",
            "C. Use a separate development project to construct the pipeline with example data, therefore not exposing the live data to the developer's work environment.",
            "D. Anonymize the data before it gets to the Dataflow pipeline."
        ],
        answer: "A",
        explanation: "With the Developer IAM role, the developer will be able to create and cancel Dataflow jobs. Without other Google Cloud IAM roles, they will not be able to view the data that will be going through the pipeline. B, This is not necessary as the Dataflow Developer IAM role does not grant access to the data it will be used on. D, This is not necessary as the Dataflow Developer IAM role does not grant access to the data it will be used on. https://linuxacademy.com/cp/courses/lesson/course/2243/lesson/2/module/208"
    },
    {
        // Question 18
        id: 18,
        question: "For this question, refer to the MJTelco case study here: https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco MJTelco needs to develop their machine learning model to control topology definitions. There are a large number of possible configurations to achieve the best results. What components of their machine learning model would they adjust to account for increased complexity? (Choose two answers. (Choose all that apply)",
        options: [
            "A. Neurons",
            "B. Epoch",
            "C. Hidden layers",
            "D. Learning rate"
        ],
        answer: "AC", 
        explanation: "A, Adding additional neurons allows combining more input values. C, Hidden layers allow for passing outputs to another layer of neurons for more complex calculations. C, Learning rate is a hyperparameter, not related to adjusting to training data. B, An Epoch is a pass through the training dataset, not related to complexity. https://linuxacademy.com/cp/courses/lesson/course/2293/lesson/3/module/208" 
    },
    {
        // Question 19
        id: 19,
        question: "In a Dataflow processing pipeline, which concept describes timestamps attached to incoming messages?",
        options: [
            "A. Watermark",
            "B. ParDo",
            "C. PCollection",
            "D. Trigger"
        ],
        answer: "A", 
        explanation: "A, Watermark describes the event time, which is what a timestamp designates. B, ParDo is part of the Apache Beam workflow but does not describe timestamps. D, Triggers are what determine when a window's contents should be submitted, https://linuxacademy.com/cp/courses/lesson/course/2243/lesson/3/module/208" 
    },
    {
        // Question 20
        id: 20,
        question: "You are evaluating a storage solution for your data. Your data is in a structured, non-relational format, and will be used for analysis. You need the lowest latency read and write speeds possible. Your data is about 3 TB in size, predicted to grow to up to 5 TB. What solution should you use?",
        options: [
            "A. Use BigQuery to host your non-relational, structured data.",
            "B. Use Cloud Bigtable using HDD storage.",
            "C. Use Cloud Bigtable with SSD storage.",
            "D. Use Cloud Datastore for your operations."
        ],
        answer: "C", 
        explanation: "C is correct. Bigtable fulfills the requirements, and SSD storage will offer the best performance. B, Cloud Bigtable is correct, but SSD storage will provide better performance than HDD. D, Datastore is a transactional database, and the size of data is better suited to Bigtable. https://linuxacademy.com/cp/courses/lesson/course/2109/lesson/1/module/208" 
    },
    {
        // Question 21
        id: 21,
        question: "You are designing a relational data repository on Google Cloud to grow as needed. The data will be transactionally consistent and added from any location in the world. You want to monitor and adjust node count for input traffic, which can spike unpredictably. What should you do?",
        options: [
            "A. Use Cloud Bigtable for storage. Monitor data stored and increase node count if more than 70% utilized.",
            "B. Use Cloud Spanner for storage. Monitor storage usage and increase node count if more than 70% utilized.",
            "C. Use Cloud Bigtable for storage. Monitor CPU utilization and increase node count if more than 70% utilized for your time span.",
            "D. Use Cloud Spanner for storage. Monitor CPU utilization and increase node count if more than 70% utilized for your time span."
        ],
        answer: "D", 
        explanation: "D, This is correct because of the requirement for globally scalable transactions—use Cloud Spanner. CPU utilization is the recommended metric for scaling, per Google best practices, linked below. B, You should not use storage utilization as a scaling metric. https://linuxacademy.com/cp/courses/lesson/course/2113/lesson/1/module/208" 
    },
    {
        // Question 22
        id: 22,
        question: "As part of your backup plan, you create regular boot-disk snapshots of Compute Engine instances that are running. You want to be able to restore these snapshots using the fewest possible steps for replacement instances. What should you do?",
        options: [
            "A. Export the snapshots to Cloud Storage. Create images from the exported snapshot files.",
            "B. Use the snapshots to create replacement disks. Use the disks to create instances as needed.",
            "C. Use the snapshots to create replacement instances as needed.",
            "D. Export the snapshots to Cloud Storage. Create disks from the exported snapshot files. Create images from the new disks."
        ],
        answer: "C", 
        explanation: "C, Snapshots let you recreate instances in the fewest steps. B, This is more steps than needed. You can recreate instances directly from a boot-disk snapshot. D, Exporting an image to Cloud Storage is considered best practices for disaster recovery scenarios, but not for the above requirements. It is also more steps than necessary." 
    },
    {
        // Question 23
        id: 23,
        question: "Your organization is making the move to Google Cloud. You need to bring your existing big data processing workflows to the cloud without having to re-train employees on new products. Your organization uses the Apache Hadoop ecosystem for big data processing. Which Google Cloud managed service would your workflow move to?",
        options: [
            "A. Cloud Dataproc",
            "B. Cloud Bigtable",
            "C. Cloud Pub/Sub",
            "D. Cloud Dataflow"
        ],
        answer: "A", 
        explanation: "A, Dataproc is a managed version of the entire Hadoop ecosystem and would be the best choice. B, Bigtable is a managed NoSQL database, not the equivalent of the Hadoop ecosystem. D, Dataflow is the preferred choice for new workloads but is not compatible with Hadoop workloads. https://linuxacademy.com/cp/courses/lesson/course/2237/lesson/1/module/208" 
    },
    {
        // Question 24
        id: 24,
        question: "Your company is making the move to Google Cloud and has chosen to use a managed database service to reduce overhead. Your existing database is used for a product catalog that provides real-time inventory tracking for a retailer. Your database is 500 GB in size. The data is semi-structured and does not need full atomicity. You are looking for a truly no-ops/serverless solution. What storage option should you choose?",
        options: [
            "A. Cloud Datastore",
            "B. Cloud Bigtable",
            "C. Cloud SQL",
            "D. BigQuery"
        ],
        answer: "A", 
        explanation: "A, Datastore is perfect for semi-structured data less than 1TB in size. Product catalogs are a recommended use case. D, BigQuery is an analytical, not transactional, database and would not be a good fit. https://linuxacademy.com/cp/courses/lesson/course/2109/lesson/1/module/208" 
    },
    {
        // Question 25
        id: 25,
        question: "You are building a data pipeline on Google Cloud. You need to prepare source data for a machine-learning model. This involves quickly deduplicating rows from three input tables and also removing outliers from data columns where you do not know the data distribution. What should you do?",
        options: [
            "A. Use Cloud Dataprep to preview the data distributions in sample source data table columns. Write a recipe to transform the data and add it to the Cloud Dataprep job.",
            "B. Write an Apache Spark job with a series of steps for Cloud Dataflow. The first step will examine the source data, and the second and third steps will perform data transformations.",
            "C. Use Cloud Dataprep to preview the data distributions in sample source data table columns. Click on each column name, click on each appropriate suggested transformation, and then click Add to add each transformation to the Cloud Dataprep job.",
            "D. Write an Apache Spark job with a series of steps for Cloud Dataproc. The first step will examine the source data, and the second and third steps will perform data transformations."
        ],
        answer: "C", 
        explanation: "C, Dataprep is the correct choice because of the requirements to prepare/clean source data. For deduplication, using the suggestion transformation would be easier and quicker than writing a recipe, which is more work than needed. B, Dataprep is the better service for this request. D, Dataprep is the better service for this request. https://linuxacademy.com/cp/courses/lesson/course/2244/lesson/1/module/208" 
    },
    {
        // Question 26
        id: 26,
        question: "Which of these statements do not apply to preemptible worker nodes on Cloud Dataproc? Choose two answers.",
        options: [
            "A. You must have at max of 2:1 ratio of preemptible to standard workers.",
            "B. Preemptible workers only function as processing nodes.",
            "C. Your cluster can be created with only preemptible workers",
            "D. Preemptible workers can be added after the cluster is created."
        ],
        answer: "AC", 
        explanation: "A, There is no ratio requirement, but be aware that preemptible workers can be reclaimed at any time, and you will want a number of standard workers that are always persistent. C, You must have at least one standard worker in a cluster. D, You can add/remove preemptible workers at any time. https://linuxacademy.com/cp/courses/lesson/course/2237/lesson/2/module/208" 
    },
    {
        // Question 27
        id: 27,
        question: "You have in your possession a database of financial transactions, which include a user's name, location, purchase location, and purchase amount. With this data, what two types of machine learning can potentially applied to this dataset?",
        options: [
            "A. Apply supervised regressing learning to label which transactions are likely to be fraudulent",
            "B. Apply unsupervised learning to label which transactions are likely to be fraudulent.",
            "C. Unsupervised learning to identify patterns (clustering) in the data to predict the location of future purchases.",
            "D. Apply reinforcement learning to predict the location of purchase.",
            "E. Apply labels to the data based on whether it is fraudulent or not-fraudulent. Then apply supervised classification learning to predict which future transactions are likely to be fraudulent"
        ],
        answer: "CE", 
        explanation: "C, Unsupervised learning does not use labels but does look for patterns (or clustering) of data in order to make predictions based on the patterns it learns." 
    },
    {
        // Question 28
        id: 28,
        question: "You are working on a project with two compliance requirements. The first requirement states that your developers should be able to see the Google Cloud Platform billing charges for only their projects. The second requirement states that your finance team members can set budgets and view the current charges for all projects in the organization. The finance team should not be able to view the project contents. You want to set permissions. What should you do?",
        options: [
            "A. Add the finance team to the Viewer role for the Project. Add the developers to the Security Reviewer role for each of the billing accounts.",
            "B. Add the developers and finance managers to the Viewer role for the Project.",
            "C. Add the finance team members to the default IAM Owner role. Add the developers to a custom role that allows them to see their spending only.",
            "D. Add the finance team members to the Billing Administrator role for each of the billing accounts that they need to manage. Add the developers to the Viewer role for the Project."
        ],
        answer: "D", 
        explanation: "D, This answer uses the principle of least privilege for IAM roles. B, Primitive roles are far too broad for this requirement. https://cloud.google.com/iam/docs/understanding-roles" 
    },
    {
        // Question 29
        id: 29,
        question: "What types of jobs does Cloud Dataproc support? (Choose all that apply)",
        options: [
            "A. Hive",
            "B. Beam",
            "C. Pig",
            "D. Spark"
        ],
        answer: "ACD", 
        explanation: "A, Hive is part of the Hadoop ecosystem, therefore it is part of Dataproc. C, Pig is part of the Hadoop ecosystem, therefore it is part of Dataproc. D, Spark is part of the Hadoop ecosystem, therefore it is part of Dataproc. B, Beam is used with Cloud Dataflow, not Dataproc. https://linuxacademy.com/cp/courses/lesson/course/2237/lesson/1/module/208" 
    },
    {
        // Question 30
        id: 30,
        question: "You are developing an application that will only recognize and tag specific business to business product logos in images. What is the best method to accomplish this task?",
        options: [
            "A. Use the Cloud Vision API to recognize logos in the images.",
            "B. Create a custom machine learning model to recognize specific logos in photos, then train it on Cloud ML Engine.",
            "C. Train your model on Kubernetes Engine to scale training as quickly as possible.",
            "D. Use the Cloud Vision API to recognize all logos in images, then use the Cloud Natural Language API to recognize specific logos by name."
        ],
        answer: "B", 
        explanation: "B, Correct. D, This is a custom use case that Cloud Vision API is unable to do; therefore you would need to create a custom learning model on Cloud ML Engine." 
    },
    {
        // Question 31
        id: 31,
        question: "While conducting BigQuery queries against a large table with many columns, you notice in the details section that you have a very large purple bar in the first stage of your query execution. How can you troubleshoot this to increase performance and reduce costs? (Choose all that apply)",
        options: [
            "A. Restrict the number of columns in your SELECT field for those needed. This will reduce read times on your query.",
            "B. Partition or separate your large table into smaller pieces. Conduct a query against your smaller (or partitioned) tables to reduce read times.",
            "C. Reduce the number of read operations by adding a LIMIT clause to your query.",
            "D. Reduce the number of write operations by optimizing the complexity of your query functions."
        ],
        answer: "AB", 
        explanation: "A, The purple bar indicates the number of read operations. Limiting columns read will reduce the read time of your query. B, The purple bar indicates the number of read operations. Reducing the size of a table in rows will reduce read time. D, Write operations are indicated by the orange bar, not purple. https://linuxacademy.com/cp/courses/lesson/course/2238/lesson/4/module/208" 
    },
    {
        // Question 32
        id: 32,
        question: "You are setting up Cloud Dataproc to perform some data transformations using Apache Spark jobs. The data will be used for a new set of non-critical experiments in your marketing group. You want to set up a cluster that can transform a large amount of data in the most cost-effective way. What should you do?",
        options: [
            "A. Set up a cluster in High Availability mode with default machine types. Add 10 additional Preemptible worker nodes.",
            "B. Set up a cluster in Standard mode with high-memory machine types. Add 10 additional Preemptible worker nodes.",
            "C. Set up a cluster in Standard mode with the default machine types. Add 10 additional local SSDs.",
            "D. Set up a cluster in High Availability mode with high-memory machine types. Add 10 additional local SSDs."
        ],
        answer: "B", 
        explanation: "B, Since this is a non-critical workload, using standard mode instead of high availability, and using preemptible nodes can both help save costs. D, High availability mode is not necessary for non-mission critical workloads and is higher cost than necessary. Local SSD's are also an additional, non-needed cost. https://linuxacademy.com/cp/courses/lesson/course/2237/lesson/2/module/208" 
    },
    {
        // Question 33
        id: 33,
        question: "In machine learning, what is the difference between test and training data?",
        options: [
            "A. Training data is used for hyperparameter tuning, and test data is used for feature engineering.",
            "B. Test data is used to tune parameters, like weights and biases.",
            "C. Test data is labeled with the 'correct' answer; training data is not.",
            "D. Training data has a label attached to train on features for the correct answer. Test data is used to test the trained model for accuracy when completed on new data."
        ],
        answer: "D", 
        explanation: "" 
    },
    {
        // Question 34
        id: 34,
        question: "You have hundreds of IoT devices that generate 1 TB of streaming data per day. Due to latency, messages will often be delayed compared to when they were generated. You must be able to account for data arriving late within your processing pipeline. What should you do?",
        options: [
            "A. Use Cloud SQL to process the delayed messages.",
            "B. Enable your IoT devices to generate a timestamp when sending messages. Use Cloud Dataflow to process messages, and use windows, watermarks (timestamp), and triggers to process late data.",
            "C. Use SQL queries in BigQuery to analyze data by timestamp.",
            "D. Enable your IoT devices to generate a timestamp when sending messages. Use Cloud Pub/Sub to process messages by timestamp and fix out of order issues."
        ],
        answer: "B",
        explanation: "B, Dataflow is the service that corrects out of order messages. D, Pub/Sub does not care about message order; you would use Dataflow to process out of order messages by timestamp. https://linuxacademy.com/cp/courses/lesson/course/2243/lesson/3/module/208" 
    },
    {
        // Question 35
        id: 35,
        question: "You are developing an application on Google Cloud that will label famous landmarks in users’ photos. You are under competitive pressure to develop the predictive model quickly. You need to keep service costs low. What should you do?",
        options: [
            "A. Build and train a classification model with TensorFlow. Deploy the model using the Cloud Machine Learning Engine. Inspect the generated MID values to supply the image labels.",
            "B. Build an application that calls the Cloud Vision API. Pass client image locations as base64-encoded strings.",
            "C. Build an application that calls the Cloud Vision API. Inspect the generated MID values to supply the image labels.",
            "D. Build and train a classification model with TensorFlow. Deploy the model using the Cloud Machine Learning Engine. Pass client image locations as base64- encoded strings."
        ],
        answer: "B", 
        explanation: "B, Cloud Vision API supports the ability to generate landmark labels from photos. You would want to pass along the images as base64 encoded strings, not MID. D, Cloud Vision API supports the ability to generate landmark labels from photos. Training a custom model is more work and time than necessary. https://linuxacademy.com/cp/courses/lesson/course/2248/lesson/1/module/208" 
    },
    {
        // Question 36
        id: 36,
        question: "What will happen to your data in a Bigtable instance if a node goes down?",
        options: [
            "A. Bigtable will attempt to rebuild the data from RAID disk configuration when the node comes back online.",
            "B. Nothing, as the storage is separated from the node compute.",
            "C. Lost data will automatically rebuild itself from Cloud Storage backups when the node comes back online.",
            "D. Data will be lost, which makes regular backups to Cloud Storage necessary."
        ],
        answer: "B", 
        explanation: "B, Storage and compute are separate, so a node going down may affect performance, but not data integrity. Nodes only store pointers to storage as metadata. A, This is not a valid Bigtable function. https://linuxacademy.com/cp/courses/lesson/course/2111/lesson/1/module/208" 
    },
    {
        // Question 37
        id: 37,
        question: "You have 250,000 devices which produce a JSON device status event every 10 seconds. You want to capture this event data for outlier time series analysis. What should you do?",
        options: [
            "A. Ship the data into BigQuery. Develop a custom application that uses the BigQuery API to query the dataset and display a device's outlier data based on your business requirements.",
            "B. Ship the data into Cloud Bigtable. Use the Cloud Bigtable cbt tool to display device outlier data based on your business requirements.",
            "C. Ship the data into Cloud Bigtable. Install and use the HBase shell for Cloud Bigtable to query the table for the device outlier data based on your business requirements.",
            "D. Ship the data into BigQuery. Use the BigQuery console to query the dataset and display device outlier data based on your business requirements."
        ],
        answer: "B", 
        explanation: "B, The data type, volume, and query pattern best fits BigTable capabilities and also Google best practices. Also, the cbt tool is a simpler method for access. A, You do not need to use BigQuery for the query pattern in this scenario. https://linuxacademy.com/cp/courses/lesson/course/2111/lesson/2/module/208" 
    },
    {
        // Question 38
        id: 38,
        question: "For this question, refer to the Flowlogistic case study here: https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic Flowlogistic's Kafka server cluster has been unable to scale to the demands of their data ingest needs. How can they migrate this functionality to Google Cloud to be able to scale for future growth?",
        options: [
            "A. Create a Computer Engine managed instance group that is configured to autoscale to 150% of peak demand. Use a managed instance template with Kafka installed to automatically scale as needed, and direct traffic to this autoscaling cluster.",
            "B. Create a single Pub/Sub topic. Configure endpoints to publish to the Pub/Sub topic, and configure Cloud Dataflow to subscribe to the same topic to process messages as they come in.",
            "C. Create a Kubernetes Engine cluster in each region needed. Install Kafka on the cluster. Use an HTTP load balancer to serve each Kubernetes cluster region. Configure a new Cloud Dataflow pipeline in each region to process requests forwarded from the Kubernetes cluster.",
            "D. Create a separate Pub/Sub topic for each region. Configure endpoints to publish to the Pub/Sub topic closest to their location, and configure a new Cloud Dataflow pipeline in each region to subscribe to the equivalent Pub/Sub topic to process messages as they come in."
        ],
        answer: "B", 
        explanation: "B, This is the preferred managed and scalable solution. A, This technically works; however, it does not fulfill the requirement to use managed services whenever possible. Pub/Sub is the far better option. https://linuxacademy.com/cp/courses/lesson/course/2293/lesson/2/module/208" 
    },
    {
        // Question 39
        id: 39,
        question: "When training a machine learning model, why do you need separate training and test data?",
        options: [
            "A. Without different data, your model will not generalize for additional data, known as overfitting.",
            "B. Both sets of data are necessary for deep and wide neural networks.",
            "C. Your learning model will have an improper learning rate, making training difficult.",
            "D. Without separate sets of data, your neural network will not have enough data to train with."
        ],
        answer: "A", 
        explanation: "A, Without separate sets of data, your model will only learn from specifically the training data, and not new data. B, Neural network formation has nothing to do with separating test and training data. https://linuxacademy.com/cp/courses/lesson/course/2246/lesson/1/module/208" 
    },
    {
        // Question 40
        id: 40,
        question: "For this question, refer to the Flowlogistic case study here: https://cloud.google.com/certification/guides/data-engineer/casestudy-flowlogistic Flowlogistic needs to run analytics on their incoming inventory data. They need to use their existing Hadoop workloads to perform this task. What two steps must be performed to accomplish this? (Choose all that apply)",
        options: [
            "A. Stream from Cloud Pub/Sub into Cloud Dataproc, which can then place relevant data in the appropriate storage location",
            "B. Use Spark to accept the streaming ingest on the Dataproc cluster, and then process jobs on HDFS.",
            "C. Stream inventory data to Cloud Pub/Sub, process data with Cloud Dataflow into Bigtable and Cloud Storage.",
            "D. Connect Cloud Dataproc to Bigtable and Cloud Storage, running analytics on the data in both services."
        ],
        answer: "AD", 
        explanation: "A, Dataproc can connect to Pub/Sub for the streaming ingest, when can then process the data and place in the correct location. D, Dataproc can natively connect to both services and can run analytics on both. B, Pub/Sub is the correct service for streaming ingest. https://linuxacademy.com/cp/courses/lesson/course/2293/lesson/2/module/208" 
    },
    {
        // Question 41
        id: 41,
        question: "Your team has decided to use Datalab for interactive machine learning exercises. You want your team members to share their work and progress with each other. How do you accomplish this?",
        options: [
            "A. Every team member will use their own Datalab notebook and synchronize changes to the shared Cloud Source Repository.",
            "B. Use the team sync feature included in Datalab notebooks to synchronize each member's work.",
            "C. Give your team members Compute Instance Admin and Service Account Actor roles to access a shared notebook.",
            "D. Create a shared Datalab notebook, and assign the Datalab Editor role to your team members to access it."
        ],
        answer: "A", 
        explanation: "A, This is the correct method of sharing work. B, This option does not exist. https://linuxacademy.com/cp/courses/lesson/course/2251/lesson/1/module/208" 
    },
    {
        // Question 42
        id: 42,
        question: "You want to export your Cloud SQL tables into BigQuery for analysis. How can you do this?",
        options: [
            "A. Convert your Cloud SQL data to JSON format, then import directly into BigQuery",
            "B. Export your Cloud SQL data to Cloud Storage, then import into BigQuery",
            "C. Import data from BigQuery directly from Cloud SQL.",
            "D. Use the BigQuery export function in Cloud SQL to manage exporting data into BigQuery."
        ],
        answer: "B", 
        explanation: "B, You cannot import data into BigQuery directly from Cloud SQL. You need to export your data to a Cloud Storage bucket first. A, You do not need to convert your data, and you must use Cloud Storage as the in-between service. https://linuxacademy.com/cp/courses/lesson/course/2109/lesson/4/module/208" 
    },
    {
        // Question 43
        id: 43,
        question: "You want to train your machine learning model on Cloud ML Engine while saving costs. Which scaling tier would you choose?",
        options: [
            "A. STANDARD_1",
            "B. BASIC",
            "C. CUSTOM",
            "D. PREMIUM_1"
        ],
        answer: "B",
        explanation: "B, BASIC tier uses a single instance and is the lowest cost. A, STANDARD_1 uses one master instance, 4 workers, and 3 parameter servers. It is more expensive than basic. https://linuxacademy.com/cp/courses/lesson/course/2247/lesson/1/module/208" 
    },
    {
        // Question 44
        id: 44,
        question: "Regarding Cloud Pub/Sub, which resource locations can have access controlled via IAM roles? (Choose all that apply)",
        options: [
            "A. Topics",
            "B. Publisher",
            "C. Project-wide predefined roles",
            "D. Subscription"
        ],
        answer: "ACD", 
        explanation: "C, You can apply project-wide predefined roles for all Pub/Sub components for a project. B, You cannot assign separate IAM roles by Publishers. You can grant the publisher role, however it is not a Pub/Sub feature that has its own separate IAM controls like Topics, Subscriptions, and the entire project. D, You can assign separate IAM roles by subscribers. https://linuxacademy.com/cp/courses/lesson/course/2241/lesson/2/module/208" 
    },
    {
        // Question 45
        id: 45,
        question: "You want to display aggregate view counts for your YouTube channel data in Data Studio. You want to see the video tiles and view counts summarized over the last 30 days. You also want to segment the data by the Country Code using the fewest possible steps. What should you do?",
        options: [
            "A. Export your YouTube views to Cloud Storage. Set up a Cloud Storage data source for Data Studio. Set Views as the metric and set Video Title and Country Code as report dimensions.",
            "B. Export your YouTube views to Cloud Storage. Set up a Cloud Storage data source for Data Studio. Set Views as the metric and set Video Title as a report dimension. Set Country Code as a filter.",
            "C. Set up a YouTube data source for your channel data for Data Studio. Set Views as the metric and set Video Title as a report dimension. Set Country Code as a filter.",
            "D. Set up a YouTube data source for your channel data for Data Studio. Set Views as the metric and set Video Title and Country Code as report dimensions."
        ],
        answer: "D", 
        explanation: "D, There is no need to export; you can use the existing YouTube data source. Country Code is a dimension because it's a string and should be displayed as such, that is, showing all countries, instead of filtering. A, You do not need to export data from YouTube to Cloud Storage; you can simply use the existing YouTube data source. B, You do not need to export data from YouTube to Cloud Storage; you can simply use the existing YouTube data source. https://linuxacademy.com/cp/courses/lesson/course/2250/lesson/2/module/208" 
    },
    {
        // Question 46
        id: 46,
        question: "You are a consultant for several organizations. Each organization has data in their own BigQuery table within a single project. For application access reasons, all of the tables must remain in the same project. You want to give access to each organization to view and run queries against their own data without exposing the data of organizations to unauthorized viewers. What should you do?",
        options: [
            "A. You must separate the tables by project, and use a service account in your application to access data in each project. Give out project-wide roles to each organization.",
            "B. Place the tables in a single dataset, and apply IAM roles to each table, limiting access per table to each organization.",
            "C. Place all data in a single table, create authorized views restricting access by row based on the SESSION_USER() field. Add that same SESSION_USER() field with the same email addresses according to which company needs access to which roles.",
            "D. Create a separate dataset for each organization in the same project. Place each organization's table in each dataset. Restrict access to the organization's dataset to only that company, from which they can view their table but no one else's."
        ],
        answer: "D", 
        explanation: "D, You can assign roles at the dataset level. Placing tables in different datasets allows you to limit access per dataset. A, This would work but is unnecessary. Separating by dataset is the better option. B, You cannot apply IAM roles at the table level, only datasets. https://linuxacademy.com/cp/courses/lesson/course/2238/lesson/1/module/208" 
    },
    {
        // Question 47
        id: 47,
        question: "You need to choose a structure storage option for storing very large amounts of data with the following properties and requirements: * The data has a single key. * You need very low latency. Which solution should you choose?",
        options: [
            "A. Bigtable",
            "B. Datastore",
            "C. Cloud SQL",
            "D. BigQuery"
        ],
        answer: "A", 
        explanation: "" 
    },
    {
        // Question 48
        id: 48,
        question: "You are building an application that needs to convert recorded customer service calls into text format, and will then examine call transcripts to determine customer sentiment. What is the most time effective method of doing this?",
        options: [
            "A. Use the Cloud Speech to Text and Cloud Translate pre-trained API's to perform both steps in the process.",
            "B. Create a machine learning model and train it with both training and test data of your recorded audio logs on Cloud ML Engine. Do the same with analyzing customer sentiment from the transcribed calls.",
            "C. Use the Cloud Speech to Text and Cloud Natural Language pre-trained API's to perform both steps in the process.",
            "D. Hire an outside consulting firm to perform the process."
        ],
        answer: "C", 
        explanation: "C, Both pre-trained machine learning API's can handle this task and it is is the most time efficient method of doing so. A, Speech to Text is correct, however, Translate is for converting between different languages. The Natural Language API is the one we want. B, This technically works, however using the pre-trained API's is the more time efficient solution to this task. https://linuxacademy.com/cp/courses/lesson/course/2248/lesson/1/module/208" 
    },
    {
        // Question 49
        id: 49,
        question: "Which of these statements is true regarding BigQuery caching?",
        options: [
            "A. The BigQuery cache only lasts for 48 hours.",
            "B. Multiple users can use the same cached query.",
            "C. Cache is not enabled by default.",
            "D. Queries that retrieve results from the cache have no charge."
        ],
        answer: "D", 
        explanation: "D, Cached result have no charge. A, A previous query is only available as a cache for 24 hours. B, Cache is per-user only. https://linuxacademy.com/cp/courses/lesson/course/2238/lesson/2/module/208" 
    },
    {
        // Question 50
        id: 50,
        question: "Which of these open source frameworks is best suited to process simultaneous batch and streaming in a single data pipeline?",
        options: [
            "A. Apache Hadoop",
            "B. Apache Kafka",
            "C. Kubernetes",
            "D. Apache Beam"
        ],
        answer: "D", 
        explanation: "D, Beam is able to process both stream and batch data in the same pipeline. A, Hadoop can do both stream and batch processing, but not in the same pipeline. B, Kafka is an open source framework that can handle streaming events, but does not do data processing. https://linuxacademy.com/cp/courses/lesson/course/2243/lesson/1/module/208" 
    },
    {
        // Question 51
        id: 51,
        question: "In Cloud ML Engine, what does the CUSTOM tier allow you to configure? Choose the best answer.",
        options: [
            "A. Custom number of master, worker, and parameter servers.",
            "B. Custom number of workers and parameter servers. Machine type of master server",
            "C. The number of workers.",
            "D. Parameter servers."
        ],
        answer: "B", 
        explanation: "B" 
    },
    {
        // Question 52
        id: 52,
        question: "You created a job which runs daily to import highly sensitive data from an on-premises location to Cloud Storage. You also set up a streaming data insert into Cloud Storage via a Kafka node that is running on a Compute Engine instance. You need to encrypt the data at rest and supply your own encryption key. Your key should not be stored in the Google Cloud. What should you do?",
        options: [
            "A. Upload your own encryption key to Cloud Key Management Service, and use it to encrypt your data in your Kafka node hosted on Compute Engine.",
            "B. Create a dedicated service account, and use encryption at rest to reference your data stored in Cloud Storage and Compute Engine data as part of your API service calls.",
            "C. Upload your own encryption key to Cloud Key Management Service, and use it to encrypt your data in Cloud Storage. Use your uploaded encryption key and reference it as part of your API service calls to encrypt your data in the Kafka node hosted on Compute Engine.",
            "D. Supply your own encryption key, and reference it as part of your API service calls to encrypt your data in Cloud Storage and your Kafka node hosted on Compute Engine."
        ],
        answer: "D", 
        explanation: "D, The question requires you to use your own key and also not store your key on Google Cloud. B, The scenario states that you must supply your own encryption key instead of using one generated by the Google Cloud Platform. https://cloud.google.com/storage/docs/encryption/customer-supplied-keys" 
    },
    {
        // Question 53
        id: 53,
        question: "Your infrastructure includes two 100-TB enterprise file servers. You need to perform a one-way, one-time migration of this data to the Google Cloud securely. Only users in Germany will access this data. You want to create the most cost-effective solution. What should you do?",
        options: [
            "A. Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Multi-Regional storage bucket as a final destination.",
            "B. Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Regional storage bucket as a final destination.",
            "C. Use Transfer Appliance to transfer the offsite backup files to a Cloud Storage Regional storage bucket as a final destination.",
            "D. Use Transfer Appliance to transfer the offsite backup files to a Cloud Storage Multi-Regional bucket as a final destination."
        ],
        answer: "C",
        explanation: "C, This answer is correct because you are performing a one-time (rather than an ongoing series) data transfer from on-premises to Google Cloud Platform for users in a single region (Germany). Using a Regional storage bucket will reduce cost and also conform to regulatory requirements. B, Storage Transfer Service is not for data stored on-premises, but for AWS/Google Cloud/online locations. https://linuxacademy.com/cp/courses/lesson/course/2103/lesson/3/module/208"
    },
    {
        // Question 54
        id: 54,
        question: "You are using a Compute Engine instance to manage your Cloud Dataflow processing workloads. What IAM role do you need to grant to the instance so that it has the necessary access?",
        options: [
            "A. Dataflow Viewer",
            "B. Dataflow Developer",
            "C. Dataflow Worker",
            "D. Dataflow Computer"
        ],
        answer: "C",
        explanation: "C, Dataflow Worker is assigned to the Compute Engine service account for necessary access. B, Service accounts need the Dataflow Worker role. https://linuxacademy.com/cp/courses/lesson/course/2243/lesson/2/module/208"
    },
    {
        // Question 55
        id: 55,
        question: "You are upgrading your existing (development) Cloud Bigtable instance for use in your production environment. The development Bigtable instance is using SSD storage. The instance contains a large amount of data that you want to make available for production immediately. You need to design for the fastest performance. What should you do?",
        options: [
            "A. Change your Cloud Bigtable instance type from Development to Production, and set the number of nodes to at least 3. Verify that the storage type is HDD.",
            "B. Export the data from your current Cloud Bigtable instance to Cloud Storage. Create a new Cloud Bigtable Production instance type with at least 3 nodes. Select the SSD storage type. Import the data into the new instance from Cloud Storage.",
            "C. Change your Cloud Bigtable instance type from Development to Production, and set the number of nodes to at least 3. Verify that the storage type is SSD.",
            "D. Export the data from your current Cloud Bigtable instance to Cloud Storage. Create a new Cloud Bigtable Production instance type with at least 3 nodes. Select the HDD storage type. Import the data into the new instance from Cloud Storage."
        ],
        answer: "C",
        explanation: "C, If the storage type is already SSD for the development instance, you can 'scale-in-place' without having to export/import into a new instance. SSD will offer the fastest performance. Note that this question does not explicitly state what storage type you already have. However it does state that you have a large amount of data that needs to be available immediately, and exporting/importing to another instance would take too long. B, Creating a new Cloud Bigtable instance is not needed. However be aware that you can upgrade in place for nodes, but the storage type cannot be changed."
    },
    {
        // Question 56
        id: 56,
        question: "When using Cloud ML Engine to train machine learning models, how are online predictions different from batch predictions? (Choose all that apply)",
        options: [
            "A. Online prediction results are written to Cloud Storage as output.",
            "B. Batch predictions are used to reduce latency in serving predictions.",
            "C. Online predictions are returned in the response message.",
            "D. Batch predictions are optimized to handle a high volume of prediction examples while running on more complex models."
        ],
        answer: "D",
        explanation: "D, This is correct. Batch predictions are used for larger loads and more complex models. B, This describes online predictions, not batch. https://linuxacademy.com/cp/courses/lesson/course/2247/lesson/1/module/208"
    },
    {
        // Question 57
        id: 57,
        question: "For this question, refer to the MJTelco case study here: https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco In order to protect live customer data, MJTelco needs to maintain separate operating environments —development/test, staging, and production— to meet the needs of running experiments, deploying new features, and serving production customers. What is the best practice for isolating these environments while at the same time maintaining operability?",
        options: [
            "A. Create separate organization accounts for each environment, and use domain wide IAM roles to allow access between each organization environment to share data as needed.",
            "B. Place all three environments in the same project, however, use separate Cloud Storage buckets, Cloud ML Engine clusters, and other services for each environment",
            "C. Place resources into the same project. but use object versioning in Cloud Storage in order to separate data by environment.",
            "D. Create a separate project for dev/test, staging, and production. Migrate relevant data between projects when ready for the next stage."
        ],
        answer: "D",
        explanation: "D, Best practices are to maintain separate projects for each environment for full isolation. You will then want to migrate data between environments in separate projects using proper CI/CD orchestration tools (Jenkins, etc.). B, Best practices are to maintain separate projects for each environment for full isolation. You will then want to migrate data between environments in separate projects using proper CI/CD orchestration tools (Jenkins, etc.). https://linuxacademy.com/cp/courses/lesson/course/2293/lesson/3/module/208"
    },
    {
        // Question 58
        id: 58,
        question: "When training a machine learning model on Cloud ML Engine on a distributed scaled tier, what types of machines are part of that distributed resource?",
        options: [
            "A. Host",
            "B. Worker",
            "C. Master",
            "D. Parameter server"
        ],
        answer: "BCD",
        explanation: "B, Correct. C, You have a single Master instance per scaled tier. D, Parameter servers coordinate shared model states between the workers. https://linuxacademy.com/cp/courses/lesson/course/2247/lesson/1/module/208"
    },
    {
        // Question 59
        id: 59,
        question: "You currently have a Bigtable instance you've been using for development running a development instance type, using HDD's for storage. You are ready to upgrade your development instance to a production instance for increased performance. You also want to upgrade your storage to SSD's as you need maximum performance for your instance. What should you do?",
        options: [
            "A. Export your Bigtable data into a new instance, and configure the new instance type as production with SSD's",
            "B. Upgrade your development instance to a production instance, and switch your storage type from HDD to SSD.",
            "C. Run parallel instances where one instance is using HDD and the other is using SSD.",
            "D. Use the Bigtable instance sync tool in order to automatically synchronize two different instances, with one having the new storage configuration."
        ],
        answer: "A",
        explanation: "A, Since you cannot change the disk type on an existing Bigtable instance, you will need to export/import your Bigtable data into a new instance with the different storage type. You will need to export to Cloud Storage then back to Bigtable again. B, You cannot change the storage type on an existing Bigtable instance. The storage type is permanent. You will need to export the data to a new instance with the different storage type. https://linuxacademy.com/cp/courses/lesson/course/2111/lesson/2/module/208"
    },
    {
        // Question 60
        id: 60,
        question: "Your organization has migrated their Hadoop workloads to Cloud Dataproc. To fully take advantage of the cloud, you want to decouple your Hadoop storage and compute, and be able to destroy your cluster when compute is complete in order to save costs while preserving your data. What should you do?",
        options: [
            "A. You must use another processing framework such as Apache Beam for this task.",
            "B. Copy your data from HDFS to Cloud Storage. Update your scripts to point to the Cloud Storage location (gs://) instead of the HDFS location (hdfs://). Within your Dataproc job, configure output to output to Cloud Storage.",
            "C. Use the Dataproc sync tool to synchronize HDFS with GCS.",
            "D. You must leave your managed Dataproc cluster running in order to access computer data."
        ],
        answer: "B",
        explanation: "B, is correct."
    },
    {
        // Question 61
        id: 61,
        question: "Your production Bigtable instance is currently using four nodes. Due to the increased size of your table, you need to add additional nodes to offer better performance. How should you accomplish this without the risk of data loss?",
        options: [
            "A. Power off your Bigtable instance, then increase the node count, then power back on. Be sure to schedule downtime in advance.",
            "B. Export your Bigtable data as sequence files into Cloud Storage, then import the data into a new Bigtable instance with additional nodes added.",
            "C. Use the node migration service to add additional nodes.",
            "D. Edit instance details and increase the number of nodes. Save your changes. Data will re-distribute with no downtime."
        ],
        answer: "D",
        explanation: "D, You can add/remove nodes to Bigtable with no downtime necessary. B, This action is not necessary because you can increase node count with no downtime. https://linuxacademy.com/cp/courses/lesson/course/2111/lesson/2/module/208"
    },
    {
        // Question 62
        id: 62,
        question: "Your infrastructure runs on another cloud and includes a set of multi-TB enterprise databases that are backed up nightly both on-premises and also to that cloud. You need to create a redundant backup to Google Cloud. You are responsible for performing scheduled monthly disaster recovery drills. You want to create a cost-effective solution. What should you do?",
        options: [
            "A. Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Nearline storage bucket as a final destination.",
            "B. Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Coldline storage bucket as a final destination.",
            "C. Use Transfer Appliance to transfer the offsite backup files to a Cloud Storage Nearline storage bucket as a final destination.",
            "D. Use Transfer Appliance to transfer the offsite backup files to a Cloud Storage Coldline bucket as a final destination."
        ],
        answer: "A",
        explanation: "A, This is correct because you will need to access your backup data monthly to test your disaster recovery process, so you should use a Nearline bucket; also, because you will be performing ongoing, regular data transfers, so you should use the storage transfer service. B, Coldline buckets need to stay un-modified for 3 months (90 days) to avoid additional charges, and your scenario calls for once a month access. https://linuxacademy.com/cp/courses/lesson/course/2103/lesson/3/module/208"
    },
    {
        // Question 63
        id: 63,
        question: "Your BigQuery dataset contains 1500 tables. When conducting a query, you are limited to a maximum of 1000 tables that you can query at once. You need to query data across all 1500 tables. What should you do?",
        options: [
            "A. Place tables into separate datasets.",
            "B. If possible, merge the 1500 tables to bring the total number below 1000. You may still partition single tables to divide data for queries.",
            "C. Export the data to Bigtable, and conduct your query inside of Bigtable.",
            "D. Create multiple views of chunks of the 1500 tables, then query the multiple views."
        ],
        answer: "B",
        explanation: "B, is correct."
    },
    {
        // Question 64
        id: 64,
        question: "Which of these numbers are adjusted by a machine learning neural network as it works with its training dataset? (Choose all that apply)",
        options: [
            "A. Weights",
            "B. Epochs",
            "C. Biases",
            "D. Features"
        ],
        answer: "AC",
        explanation: "A, Weights are a parameter that adjusts for a neural network to learn from its training data. C, Biases are a parameter that is adjusted for a neural network to learn from its training data. B, An epoch is a single pass through the training dataset. https://linuxacademy.com/cp/courses/lesson/course/2246/lesson/2/module/208"
    },
    {
        // Question 65
        id: 65,
        question: "You are building a data pipeline on Google Cloud. You need to select services that will host a deep neural network machine learning model also hosted on Google Cloud. You also need to monitor and run jobs that could occasionally fail. What should you do?",
        options: [
            "A. Use the Cloud Machine Learning Engine to host your model. Monitor the status of the Jobs object for 'failed' job states.",
            "B. Use the Cloud Machine Learning Engine to host your model. Monitor the status of the Operation object for 'error' results.",
            "C. Use a Kubernetes Engine cluster to host your model. Monitor the status of the Jobs object for 'failed' job states.",
            "D. Use a Kubernetes Engine cluster to host your model. Monitor the status of the Operation object for 'error' results."
        ],
        answer: "A",
        explanation: "A, Cloud Machine Learning Engine is the correct service for deep neural network models. You would correctly monitor Jobs for failures. B, Cloud Machine Learning Engine is the correct service for deep neural network models. However, you would not monitor operation objects for failed jobs. https://linuxacademy.com/cp/courses/lesson/course/2247/lesson/1/module/208"
    },
    {
        // Question 66
        id: 66,
        question: "For this question, refer to the MJTelco case study here: https://cloud.google.com/certification/guides/data-engineer/casestudy-mjtelco MJTelco is streaming telemetry data into BigQuery for long-term storage (2 years) and analysis, at the rate of about 100 million records per day. They need to be able to run queries against certain time periods of data without incurring the costs of querying all available records. What two options would you recommend for doing so? (Choose all that apply)",
        options: [
            "A. Create a single table, but query only individual rows by data in the WHERE clause.",
            "B. Partition a single table by day, and run queries against individual partitions.",
            "C. Use a LIMIT clause to limit the number of rows queried based on WHERE clause criteria.",
            "D. Create a new table, one for each day. Run queries against the groups of tables relevant to their needs."
        ],
        answer: "BD",
        explanation: "D, BigQuery can query a maximum of 1000 tables at once. Two years worth of tables, one for each day, would come under this limit, which makes it a viable solution. https://linuxacademy.com/cp/courses/lesson/course/2293/lesson/3/module/208"
    },
    {
        // Question 67
        id: 67,
        question: "You are selecting a streaming service for log messages that must include final result message ordering as part of building a data pipeline on Google Cloud. You want to stream input for 5 days and be able to query the most recent message value. You will be storing the data in a searchable repository. How should you set up the input messages?",
        options: [
            "A. Use Apache Kafka on Compute Engine for input. Attach a timestamp to every message in the publisher.",
            "B. Use Cloud Pub/Sub for input. Attach a unique identifier to every message in the publisher.",
            "C. Use Apache Kafka on Compute Engine for input. Attach a unique identifier to every message in the publisher.",
            "D. Use Cloud Pub/Sub for input. Attach a timestamp to every message in the publisher."
        ],
        answer: "D",
        explanation: "D, Adding a timestamp is necessary for making sure that the final result messaging is in the correct order. B, Attaching a unique identifier is not the preferred answer compared to attaching a timestamp, which is the correct answer. https://linuxacademy.com/cp/courses/lesson/course/2241/lesson/2/module/208"
    }
];
