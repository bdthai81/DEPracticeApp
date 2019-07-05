/**
 * WhizLab GCP Certified Professional Data Engineer Practice Exam
 * 
 * Rules: Questions has to be in sequencial order within the list
 *      - Currently 1-120
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

var dewlData = [
    {
        // Question 1
        id: 1,
        question: "A multi-national company wants to unify their data sources by building a universal centralized data warehouse instead of their current architecture in which every branch has its own and branches from other regions cannot access it. They want to build a data analytics team to extract data from all branches and build daily reports and dashboards to visualize the metrics required for C-Level managers to take decisions. The current data warehouses are all MySQL databases and analytics team will use SQL for data reporting. The company is distributed among different continents ( North America, Europe & Asia). Which of the following approach is best suits to satisfy the company's new data warehouse architecture?",
        options: [
            "A. Use Cloud SQL to launch MySQL databases on each region. Enable cross-region read replication for each to sync between different regions.",
            "B. Use Cloud SQL to launch Multi-regional MySQL databases. Each in North America, Europe & Asia. Enable cross-region read replication for each to sync between different regions.",
            "C. Use BigQuery as a data warehouse and grant data analytics team editor roles.",
            "D. Use Cloud Spanner by launching a multi-regional database to be the company's unified data warehouse."
        ],
        answer: "D",
        explanation: "Cloud Spanner is a horizontally scalable, strongly consistent, relational database service. It's built to combine the benefits of relational database structure with non-relational horizontal scale. This delivers high-performance transactions and strong consistency across rows, regions and continents. <br>Option A is incorrect, Launching MySQL databases on each region defeats the purpose of having a unified data warehouse. <br>Option B is incorrect, Cloud SQL does not support multi-regional databases. <br>Option C is incorrect, While BigQuery is a strong and potential alternative, BigQuery does not have horizontal scaling and it only covers USA & Europe (by the time of writing this question). Another drawback is, BigQuery doesn't support full data manipulation language (DML) and it has limitations on how rows can be updated or deleted. <br>Option D is correct, Cloud Spanner is a relational database supports horizontal scaling across continents. <br>Source(s): <br>Cloud Spanner: https://cloud.google.com/spanner/ <br>BigQuery dataset locations: https://cloud.google.com/bigquery/docs/locations <br>Bigquery: Data Manipulation Langauge: https://cloud.google.com/bigquery/docs/reference/standard- sql/data-manipulation-language"
    },
    {
        // Question 2
        id: 2,
        question: "A fast-food chain restaurant wants to detect the different meal photos its customers upload to the different social media platforms tagged with their name in order to know what meals customers like and share the most for better quality analysis. It asks your advice on developing such solution for them. <br> However, they want it to be available and in production the soonest possible because they expect a high activity on their social media pages by the next public holiday which is coming in 2 weeks and marketing team finds it a great opportunity to receive feedback based on what customers say online. What is the best approach for this?",
        options: [
            "A. Use AutoML Vision to build and train the model by using all the training photos you collected from food-chain's social media pages for better results.",
            "B. Use AutoML Vision to build and train the model by using 50-70% of training photos you collected from food-chain's social media pages while the rest of training set is to test and tune the model.",
            "C. Use Dataproc to build the model using SparkML. Use 50-70% of training photos you collected to train the model and the rest to test and tune the model. Deploy the model using Cloud ML Engine.",
            "D. Use Cloud ML Engine with TensorFlow to build the model. Use all training photos you collected to train the model. Deploy the model using Cloud ML Engine."
        ],
        answer: "B",
        explanation: "Since you have a very short time to build, train and deploy the model, building your own model can be time-consuming and not in your favor. Google provides a great ML service called AutoML to quickly build models for you. AutoML Vision is one of its products which you can start with a training set as little as a dozen photo samples and AutoML takes care of the rest.<br>Option A is incorrect. AutoML Vision is the right choice. However, training the model with whole training set is not the right approach in Machine Learning because you ought to test the model before considering it accurate enough for production. Usually, training set is split into 70-30% sets, first for training while the second is for testing and tuning the model's parameters.<br>Option C is incorrect. Using any approach other than AutoML can be time-consuming and with such tight deadline, it's not the best approach.<br>Option D is incorrect. Using this approach can also be time-consuming and using the whole training set for training is not a best practice as explained before.<br>Thus, the best approach for this scenario is Option B.<br>Source(s):<br>Google Cloud AutoML: https://cloud.google.com/automl/ <br>Cloud Machine Learning Engine: https://cloud.google.com/ml-engine/"
    },
    {
        // Question 3
        id: 3,
        question: "A financial services firm providing products such as credit cards and bank loans receives thousands of online applications from clients applying for their products. Because it takes a lot of effort to scan and check all applications if they meet the minimum requirements for the products they are applying for, they want to build a machine learning model takes application fields like annual income, marital status, date of birth, occupation and other attributes as input and finds out if the applicant is qualified for the product the client applied for. Which of the following the machine learning technique will help to build such model?",
        options: [
            "A. Regression",
            "B. Classification",
            "C. Clustering",
            "D. Reinforcement learning"
        ],
        answer: "B",
        explanation: "A regression problem is a problem which its output variable is of continuous value. Problems which finds out about variables such as weights, prices or age are considered regression problems. A classification problem is a problem which the output variable is a category. Examples of classification problems are finding a passenger's nationality, detect if a patient is diagnosed with a disease or if an applicant is qualified for a job interview. Regression and classification are supervised learning problems. It means, the machine learns from past experiences by training it on a labeled data set. A training set is a set of rows with input and output parameters. The machine then learns from the training set and improves its parameters for better detection.<br>Clustering is an unsupervised learning method. An unsupervised learning is a method to find references between input data without labeled output. The purpose is to find meaningful structure between the input sets with similar features and group them. Clustering is the method of grouping data points share similarities and separating dissimilar points to other groups. Examples of clustering applications are customer segmentation (new, frequent, loyal, ..), city land value and detecting anomalies in network traffic.<br>Reinforcement learning is a technique which a machine takes actions without training sets to reach the highest rewards possible. The agent learns from trial and decides what to do to perform a given task without supervision. The task punishes the agent for a wrong action and rewards it for achieving the task. Examples of reinforcement learning is asking an agent to play a maze game to reach the exit with traps along the way or making an agent play a video game and win a racing game.<br>From the explanation above, we can see the scenario problem which finding if a client is qualified for a product is a classification problem. So, option B is correct."
    },
    {
        // Question 4
        id: 4,
        question: "You have built a machine learning model to classify if a customer would buy a certain product when recommended by the company's website. You trained the model with a sample set. Upon testing the model, you found out only 28% of the testing sets are actually true positives and the model isn't very accurate. You figured out the model is over-fitted. How would you solve this?",
        options: [
            "A. Increase training data, increase feature parameters & increase regularization.",
            "B. Decrease training data, decrease feature parameters & increase regularization.",
            "C. Increase training data, decrease feature parameters & increase regularization.",
            "D. Increase training data, decrease feature parameters & decrease regularization."
        ],
        answer: "C",
        explanation: "Overfitting happens when a model performs well on a training set, generating only a small error, while giving wrong output for the test set. This happens because the model is only picking up specific features input found in the training set instead of picking out general features of the given training set.<br>To solve overfitting, the following would help improving the model's quality:<br>Increase the number of examples, the more data a model is trained with, the more use cases the model can be training on and better improves its predictions.<br>Tune hyperparameters which is related to number and size of hidden layers (for neural networks), and regularization, which means using techniques to make your model simpler such as using dropout method to remove neuron networks or adding penalty parameters to the cost function.<br>Remove features by removing irrelevant features. Feature engineering is a wide subject and feature selection is a critical part of building and training a model. Some algorithms have built- in feature selection, but in some cases, data scientists need to cherry-pick or manually select or remove features for debugging and finding the best model output.<br>From the brief explanation, to solve the overfitting problem in the scenario, you need to:<br>Increase the training set.<br>Decrease features parameters.<br>Increase regularization.<br>Hence, answer C is correct.<br>Source(s):<br>Building a serverless Machine learning model: https://cloud.google.com/solutions/building-a- serverless-ml-model"
    },
    {
        // Question 5
        id: 5,
        question: "A coach line bus service company wants to predict how many passengers they expect to book for tickets on their buses for the upcoming months. This helps the company to know how many buses they need to be in service for maintenance and fuel and how many drivers to be available. The company has data sets of all booked tickets since its launch in 1968 and it allows private sharing of the data if this helps the prediction process.<br>You will build the machine learning model for the coach line company. Which technique you will use to predict the number of passengers in the next months?",
        options: [
            "A. Regression.",
            "B. Association.",
            "C. Classification.",
            "D. Clustering."
        ],
        answer: "A",
        explanation: "A regression problem is a problem which its output variable is of continuous value. Problems which finds out about variables such as weights, prices or age are considered regression problems. A classification problem is a problem which the output variable is a category. Examples of classification problems are finding a passenger's nationality, detect if a patient is diagnosed with a disease or if an applicant is qualified for a job interview. Regression and classification are supervised learning problems. It means, the machine learns from past experiences by training it on a labeled data set. A training set is a set of rows with input and output parameters. The machine then learns from the training set and improves its parameters for better detection.<br>Association is a rule-learning technique for discovering interesting relations between variables in large data sets. Example of association rules is discovering regularities between products in large-scale transaction data recorded by point-of-sales for a retail chain store.<br>Clustering is an unsupervised learning method. An unsupervised learning is a method to find references between input data without labeled output. The purpose is to find meaningful structure between the input sets with similar features and group them. Clustering is the method of grouping data points share similarities and separating dissimilar points to other groups. Examples of clustering applications are customer segmentation (new, frequent, loyal, ..), city land value and detecting anomalies in network traffic.<br>From the explanation above, the technique to help solving the scenario is Answer A: Regression."
    },
    {
        // Question 6
        id: 6,
        question: "A video-on-demand company wants to generate subtitles for its content on the web. They have over 20,000 hours of content to be subtitled and their current subtitle team cannot catch up with the every- growing video hours the content team keep adding to the website library. They want a solution to automate this as man power can be expensive and may take long time.<br>Which service of the following can greatly help the automation of video subtitles?",
        options: [
            "A. Cloud Natural Language.",
            "B. Cloud Speech-to-Text.",
            "C. AutoML Vision API.",
            "D. Machine Learning Engine."
        ],
        answer: "B",
        explanation: "Answer A is incorrect: Cloud natural language service is to derive insights from unstructured text revealing meaning of the documents and categorize articles. It won't help extracting captions from videos.<br>Answer B is correct: Cloud Speech-to-Text is a service to generate captions from videos by detecting speakers language and speech.<br>Answer C is incorrect: AutoML Vision API is a service to recognize and derive insights from images by either using pre-trained models or training a custom model based on a set of photographics.<br>Answer D is incorrect: Machine Learning Engine is a managed service letting developers and scientists build their own models and run them in production. This means, you have to build your own model to generate text from videos which needs much effort and experience to build such model. So, it's not a practical solution for this scenario.<br>Source(s):<br>Google NLP: https://cloud.google.com/natural-language/ <br>Google Machine Learning Engine: https://cloud.google.com/ml-engine/ <br>Google Vision API: https://cloud.google.com/vision <br>Google Speech-to-Text API: https://cloud.google.com/speech-to-text/"
    },
    {
        // Question 7
        id: 7,
        question: "An online learning platform wants to generate captions for its videos. The platform offers around 2,500 courses with topics about business, finance, cooking, development & science. The platform allows content with different languages such as French, German, Turkish and Thai. Thus, this can be very difficult for a single team to caption all available courses and they are looking for an approach which helps do such massive job.<br>Which product from Google Cloud will you suggest them to use?",
        options: [
            "A. Cloud Speech-to-Text.",
            "B. Cloud Natural Language.",
            "C. Machine Learning Engine.",
            "D. AutoML Vision API."
        ],
        answer: "A",
        explanation: "Answer A is correct: Cloud Speech-to-Text is a service to generate captions from videos by detecting speakers language and speech.<br>Answer B is incorrect: Cloud natural language service is to derive insights from unstructured text revealing meaning of the documents and categorize articles. It won't help extracting captions from videos.<br>Answer C is incorrect: Machine Learning Engine is a managed service letting developers and scientists build their own models and run them in production. This means, you have to build your own model to generate text from videos which needs much effort and experience to build such model. So, it's not a practical solution for this scenario.<br>Answer D is incorrect: AutoML Vision API is a service to recognize and derive insights from images by either using pre-trained models or training a custom model based on a set of photographics.<br>Source(s):<br>Google NLP: https://cloud.google.com/natural-language/ <br>Google Machine Learning Engine: https://cloud.google.com/ml-engine/ <br>Google Vision API: https://cloud.google.com/vision <br>Google Speech-to-Text API: https://cloud.google.com/speech-to-text/"
    },
    {
        // Question 8
        id: 8,
        question: "You have a dataflow pipeline reads a CSV file daily at 6am, applies the needed cleansing & transformation on it, then loads it to BigQuery. Occassionally, the CSV file might be modified within the day due to human error or incomplete data. This causes you to manually re-run dataflow pipeline again. Is there a way to fix this by automatically re-run the pipeline if file has been modified?",
        options: [
            "A. Use Cloud Scheduler to re-run dataflow after 6am. Check what is the average time the file is modified and schedule based on it.",
            "B. Use Dataproc to reprocess the file after 6am. You can use Cloud Functions to launch a Dataproc cluster.",
            "C. Use Cloud Composer to rerun dataflow and reprocess the file. Create a custom sensor to detect file condition if changed.",
            "D. Use a compute engine to schedule a cron job to run every 10 minutes to check if the file was modified to rerun dataflow."
        ],
        answer: "C",
        explanation: "Cloud Composer is a fully managed workflow orchestration service built on Apache Airflow. Cloud composer is built specifically to schedule and monitor workflows and take required actions. You can use Cloud Composer to orchestrate dataflow pipeline and create a custom sensor to detect file's condition if any changes occurred, then it triggers the dataflow pipeline to run again.<br>Answer A is incorrect: Guessing what time scheduler should rerun dataflow is not efficient.<br>Answer B is incorrect: Dataproc is unnecessary in this scenario. Answer D is incorrect: This solution is viable, but Answer C has a better and more efficient design.<br>Source(s):<br>Cloud Composer: https://cloud.google.com/composer/"
    },
    {
        // Question 9
        id: 9,
        question: "A dairy products company is using sensors installed around different areas in its farms to monitor employees activities and detect any intruders. Apache Kafka cluster is used to gather the events coming from sensors. Recently, Kafka cluster is becoming a bottleneck causing lag in receiving sensor events. Turns out sensors are sending more frequent events and due to the company expanding with more farms, more sensors are installed and this will cause extra load on the cluster. What is the most resilient approach to solve this issue?",
        options: [
            "A. Use pub/sub to ingest and stream sensor events.",
            "B. Scale out Kafka cluster to withstand the continuously flowing event stream.",
            "C. Spin up a new Kafka cluster and distribute sensors even streams between the two clusters.",
            "D. Build a Dataflow pipeline to ingest the events stream."
        ],
        answer: "A",
        explanation: "Cloud Pub/Sub is a service to ingest event streams at any scale. It's scalable and reliable for stream analytics and event-driven computing systems. So it's the most reliable Google product for such scenario.<br>Answers B & C are wrong because these are not scalable solutions.<br>Answer D is wrong because Dataflow cannot ingest event streams. It needs Pub/Sub service to do so.<br>Source(s):<br>Google Pub/Sub: https://cloud.google.com/pubsub/docs/overview"
    },
    {
        // Question 10
        id: 10,
        question: "A social media platform stores various details of their platform users such as session login time, URLs visited, activities on platform and other logs. With GDPR (General Data Protection Regulation) compliance to be officially implemented, the platform now allows users to download their activity logs from their profile settings which they can click a button to call an API to generate a full report.<br>Recently, users are complaining timeouts after 60 seconds of requesting to download their activity logs at peak hours when the platform has the most traffic. They have to try for several minutes or even hours for the API to return their report available for download.<br>How can you solve this issue?",
        options: [
            "A. Increase timeout for API at peak times to 120 seconds. If it keeps failing, try increasing the timeout until the issue is resolved.",
            "B. Build a Dataflow pipeline to generate daily reports of users' activity logs. Users can download those daily reports whenever they want to.",
            "C. Migrate data source to Cloud Spanner for horizontal scaling to avoid query timeouts.",
            "D. Use Pub/sub to pull the requests for activity logs from users. Send a link to users by their email addresses with a temporary download link for them to access their report."
        ],
        answer: "D",
        explanation: "Cloud Pub/Sub is a service to ingest event streams at any scale. It's scalable and reliable for stream analytics and event-driven computing systems.<br>Pub/sub is a good product to de-couple a system's components so they communicate with each other asymmetrically. From the scenario shown here, instead of directly calling the API to export required report which puts great loads on the API and hence the timeouts faced by users. Instead, the platform can â€œpublishâ€ messages to a â€œtopicâ€ related to exporting activity log reports sending the required parameters such as user ID and custom settings such as date range and what data to export. The API can be switched to be a â€œsubscriberâ€ which receives the messages sent and processes each message asymmetrically to generate the report, then sends the download link to the user's mailbox when ready.<br>Hence, answer D is correct.<br>Answer A is incorrect: Increasing timeout isn't a scalable solution and it may keep occurring eventually when more and more users join the platform.<br>Answer B is incorect: While this would solve the timeout issues, generating daily reports for users can be costly as more users join, knowing that requesting activity log reports are a non-frequent action and this costs both compute and storage resources. This solution also doesn't provide flexibility with what parameters the report is generated on such as date range and other custom metrics.<br>Answer C is incorrect: This solution has several issues. First, we're assuming the data source is a relational database, which can be unlikely since NoSQL databases better perform for massive log input which uses the user ID as a key to reach the data. Second, Cloud Spanner isn't a cheap solution for a service not frequently used.<br>Source(s):<br>Google Pub/Sub: https://cloud.google.com/pubsub/docs/overview"
    },
    {
        // Question 11
        id: 11,
        question: "A company decides to migrate its on-premise data infrastructure to the cloud mainly for high availability of cloud services and to lower the high costs of storing data on-premise. The infrastructure uses HDFS to store data and be processed and transformed using Apache Hive & Spark. The company wants to migrate the infrastructure and DevOps team still wants to administrate the infrastructure in the cloud. As a data architect, which of the following is the approach recommended by Google?",
        options: [
            "A. Use Dataproc to process the data. Store data in Google Storage.",
            "B. Build a Dataflow pipeline. Store the data in Google Storage. Use Cloud Compute to launch instances and install the required dependencies for processing the data.",
            "C. Use Dataproc to process the data. Store data in Dataproc's HDFS.",
            "D. Build a Dataflow pipeline. Store the data in persistent disks in HDFS. Execute the code in Spark framework provided by Dataflow."
        ],
        answer: "A",
        explanation: "Dataproc is cloud-native Apache Hadoop & Apache Spark service. Dataproc is a fully-managed service from Google to run Apache Hadoop & Spark clusters. Dataflow is a simplified streaming/batching data processing service. With Apache Beam, it provides rich set of windowing and session analysis primitives as well as an ecosystem of source & sink connectors.<br>Answer B is incorect: Dataflow is serverless which may not suit DevOps requirement to fully manage the pipeline and it's unnecessary to use Cloud Compute for installing dependencies.<br>Answer C is incorrect: Dataproc's HDFS is volatile, means it will be removed when the cluster is deleted. Dataproc clusters can be kept up indefinitely but this may lead to high costs which defeats the purpose of migration.<br>Answer D: In addition to what discussed in answer B, storing data using persistent disks can be only accessible by Compute engines and it's more expensive than storing in Google Storage.<br>Answer A fulfills the requirements for migrating the on-premise infra to the cloud with high availability, minimum costs and full control by DevOps.<br>Source(s):<br>Cloud Dataproc: https://cloud.google.com/dataproc/ <br>Cloud Dataflow & Dataflow vs. Dataproc:"
    },
    {
        // Question 12
        id: 12,
        question: "A multi-international company has multiple Google Storage buckets in different regions around the world. Each branch has its own set of buckets in the region nearest to them to avoid latencies. However, this led to a problem for analytics team to reach and do the necessary reports on the data using BigQuery since they need to create they need to create the tables in the same region either to import the data or create external tables to access the data in different regions. The head of data decided to sync the data daily from different Google Storage buckets scattered in different regions to a single multi-regional bucket to do the necessary data analysis and reporting.<br>Which service could help with this approach?",
        options: [
            "A. Appliance Transfer Service",
            "B. gsutil",
            "C. Storage Transfer Service",
            "D. Dataflow"
        ],
        answer: "C",
        explanation: "Storage Transfer Service allows you to quickly import ONLINE data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another.<br>Transfer Appliance is an OFFLINE secure, high capacity storage server that you set up in your datacenter. You fill it with data and ship it to an ingest location where the data is uploaded to Google Cloud Storage.<br>So, answer C is correct, while answer<br>A is incorrect.<br>Answer B is incorrect: gsutil tool is good for programmatic usage by developers and may be useful to copy and move megabytes/gigabytes of data. Not so practical for Terabytes of data. It's also not reliable data transfer technique as it is related to the machine's connectivity with Google Cloud.<br>Answer D is incorrect: Dataflow as a solution may be viable, but you need to build a pipeline to migrate data from bucket to another. Storage Transfer Service can do it without the extra effort.<br>Source(s):<br>Google Cloud Storage Transfer Service: https://cloud.google.com/storage-transfer/docs/ <br>Google Appliance Transfer Service: https://cloud.google.com/transfer-appliance/"
    },
    {
        // Question 13
        id: 13,
        question: "A company is migrating its current infrastructure from on-premise to Google cloud. It stores over 280TB of data on its on-premise HDFS servers. You were tasked to move data from HDFS to Google Storage in a secure and efficient manner. Which of the following approaches are best to fulfill this task?",
        options: [
            "A. Install Google Storage gsutil tool on servers and copy the data from HDFS to Google Storage.",
            "B. Use Cloud Data Transfer Service to migrate the data to Google Storage.",
            "C. Import the data from HDFS to BigQuery. Then, export the data to Google Storage in AVRO format.",
            "D. Use Transfer Appliance Service to migrate the data to Google Storage."
        ],
        answer: "D",
        explanation: "Storage Transfer Service allows you to quickly import ONLINE data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another.<br>Transfer Appliance is an OFFLINE secure, high capacity storage server that you set up in your datacenter. You fill it with data and ship it to an ingest location where the data is uploaded to Google Cloud Storage.<br>So, answer D is the correct one, while B is incorrect.<br>Answer A is incorrect: gsutil tool is good for programmatic usage by developers and may be useful to copy and move megabytes/gigabytes of data. Not so practical for Terabytes of data. It's also not reliable data transfer technique as it is related to the machine's connectivity with Google Cloud.<br>Answer C is incorrect: In order to migrate to BigQuery, you need to migrate data to Google Storage. This is a useless approach as the main challenge is migrating data from HDFS to Google Storage and BigQuery won't help solving it.<br>Source(s):<br>Google Cloud Storage Transfer Service: https://cloud.google.com/storage-transfer/docs/ <br>Google Appliance Transfer Service: https://cloud.google.com/transfer-appliance/ <br>Migrate HDFS to Google Storage: https://cloud.google.com/solutions/migration/hadoop/hadoop-gcp- migration-data"
    },
    {
        // Question 14
        id: 14,
        question: "A company is moving its data center from its on-premise servers to the cloud. It was estimated that they have about 2 Petabytes of data to be moved and security team is very concerned the data should be migrated securely and project manager has a timeline of 6 months for the whole migration to be done.<br>Which of the following approaches is best to do the job?",
        options: [
            "A. Appliance Transfer Service.",
            "B. Google Storage (Coldline).",
            "C. Cloud Transfer Service.",
            "D. Datastore."
        ],
        answer: "A",
        explanation: "Storage Transfer Service allows you to quickly import ONLINE data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another.<br>Transfer Appliance is an OFFLINE secure, high capacity storage server that you set up in your datacenter. You fill it with data and ship it to an ingest location where the data is uploaded to Google Cloud Storage. Data is encrypted automatically, and remains safe until you decrypt it.<br>So, answer A suggests using Transfer Appliance is the best approach.<br>Answer C is incorrect: It's an online data transfer service. Won't help for on-premise infrastructure.<br>Answer B is incorrect: Google Storage Coldline is a way to store archive data not frequently accessed cheaply in the cloud. It won't help migrating data to the cloud.<br>Answer D is incorrect: Datastore is a NoSQL database built for automatic scaling and high performance. It won't help with this scenario.<br>Source(s):<br>Google Cloud Storage Transfer Service: https://cloud.google.com/storage-transfer/docs/ <br>Google Appliance Transfer Service: https://cloud.google.com/transfer-appliance/ <br>Google Datastore: https://cloud.google.com/datastore/docs/concepts/overview <br>Google Storage Classes: https://cloud.google.com/storage/docs/storage-classes"
    },
    {
        // Question 15
        id: 15,
        question: "You have the following legacy SQL query in BigQuery:<br># legacy SQL<br>SELECTorder_date,<br><br>     COUNT(DISTINCT customer_id)) AS customers<br>FROM<br>     [my-project:orders.orders_2018]<br>GROUP BY<br>     order_date<br>ORDER BY<br>     order_date;<br>How can you convert this query to standard SQL?",
        options: [
            "A. Change table syntax to `my-project:orders.orders_2018`",
            "B. Change table syntax to `my-project.orders.orders_2018`",
            "C. Change table syntax to [my-project.orders.orders_2018]",
            "D. No change required. This works fine if standard SQL is enabled."
        ],
        answer: "B",
        explanation: "The correct way to represent a BigQuery table in standard SQL is:<br>`project-id.dataset-id.table-id`<br>So, answer B is the correct one.<br>Source(s):<br>Migrating from Legacy to Standard SQL: https://cloud.google.com/bigquery/docs/reference/standard- sql/migrating-from-legacy-sql#subqueries_in_more_places"
    },
    {
        // Question 16
        id: 16,
        question: "What is the keyword in BigQuery standard SQL used when selecting from multiple tables with wildcard by their suffices?",
        options: [
            "A. _WILDCARD_SUFFIX",
            "B. _TABLES_SUFFIX",
            "C.  _SUFFIX",
            "D. _TABLE_SUFFIX"
        ],
        answer: "D",
        explanation: "To restrict the query so that it scans an arbitrary set of tables, use the _TABLE_SUFFIX pseudo column in the WHERE clause. The _TABLE_SUFFIX pseudo column contains the values matched by the table wildcard.<br>Answer D is the correct one. Other answers are incorrect because such keywords do not exist.<br>Source(s):<br>Bigquery â€“ Querying wildcard tables: https://cloud.google.com/bigquery/docs/querying-wildcard- tables"
    },
    {
        // Question 17
        id: 17,
        question: "You have the following BigQuery legacy SQL query :<br>SELECT SUM (amount)<br>FROM TABLE_DATE_RANGE ([some-dataset.orders_],<br>TIMESTAMP (â€˜2017-06-01'),<br>TIMESTAMP (â€˜2017-09-01');<br>How can you convert it to standard SQL?",
        options: [
            "A. SELECT SUM(amount)<br>        FROM `some-dataset.orders_*`<br>        WHERE TABLE_DATE_RANGE BETWEEN â€˜20170601' AND â€˜20170901';",
            "B. SELECT SUM(amount)<br>        FROM `some-dataset.orders_*`<br>        WHERE _TABLE_SUFFIX BETWEEN â€˜20170601' AND â€˜20170901';",
            "C. SELECT SUM(amount)<br>        FROM `some-dataset.orders_`<br>        WHERE _TABLE_SUFFIX BETWEEN â€˜20170601' AND â€˜20170901';",
            "D. SELECT SUM(amount)<br>        FROM `some-dataset.orders_*`<br>        WHERE _TABLE_DATE_RANGE BETWEEN â€˜20170601' AND â€˜20170901';"
        ],
        answer: "B",
        explanation: "To restrict the query so that it scans an arbitrary set of tables, use the _TABLE_SUFFIX pseudo column in the WHERE clause. The _TABLE_SUFFIX pseudo column contains the values matched by the table wildcard.<br>TABLE_DATE_RANGE queries daily tables that overlap with the time range between and . This function is a LEGACY SQL function.<br>Answer A is incorrect: TABLE_DATE_RANGE is a legacy SQL function.<br>Answer C is incorrect: To use wildcard table, the asterisk symbol â€œ*â€ should be used at the end of the wildcard table.<br>Answer D is incorrect: This is no function called â€œ_TABLE_DATE_RANGEâ€ (starts with underscore â€œ_â€ sign).<br>So, answer B is the accurate standard SQL syntax.<br>Source(s):<br>Bigquery â€“ Querying wildcard tables:https://cloud.google.com/bigquery/docs/querying-wildcard-tables <br>BigQuery Legacy SQL: https://cloud.google.com/bigquery/docs/reference/legacy-sql#table-date-range"
    },
    {
        // Question 18
        id: 18,
        question: "A weather forecasting facility receives events from its 25,000 sensors every 10 seconds. Those events are stored in Google Storage in JSON format. Events can have different attributes based on purpose, location and brand. Data Science team wants to apply their SQL-queries on this data for further transformation and forecasting analysis.<br>Which of the following approaches is best to satisfy Data Scientists request?",
        options: [
            "A. Load the data directly to BigQuery with enabling â€œauto-detectâ€ option.",
            "B. Build a dataflow pipeline to read JSON data and transform it to a structured format like CSV. Then, load the data to BigQuery.",
            "C. Import the data to BigTable. Choose combination #eventType-location-brand to differentiate between different events.",
            "D. Use Dataproc cluster and create Hive external clusters on the data for data scientists to query data."
        ],
        answer: "A",
        explanation: "Schema auto-detection: Schema auto-detection is available when you load data into BigQuery, and when you query an external data source. When auto-detection is enabled, BigQuery starts the inference process by selecting the file in the data source and scanning up to 100 rows of data to use as a representative sample. BigQuery then examines each field and attempts to assign a data type to that field based on the values in the sample. BigQuery makes a best-effort attempt to automatically infer the schema for CSV and JSON files.<br>So, answer A is the correct answer. The other answers are complicated and unnecessary approaches for this scenario.<br>Source(s):<br>BigQuery â€“ Auto-detect schema: https://cloud.google.com/bigquery/docs/schema-detect"
    },
    {
        // Question 19
        id: 19,
        question: "An environment safety facility receives thousands of events every 60 seconds from its sensors assembled in different sectors monitoring air pollution in the region. Scientists want to access and query the data for observation and daily reporting. Due to current funding state, their budget is limited and they seek a cost-effective, highly available and ACID-compliant solution supports SQL querying.<br>Which approach would you recommend for such scenario?",
        options: [
            "A. Use BigQuery to store and query the event data. Enable streaming on BigQuery for data to be loaded in real-time.",
            "B. Batch-load data into BigTable with launching 10 nodes to allow high performance.",
            "C. Use Cloud SQL to load events into a relational database and allow access to scientists to query.",
            "D. Use BigQuery to store and query event data. Batch load the data to BigQuery using its API."
        ],
        answer: "D",
        explanation: "BigQuery supports both batch & streaming data. However, due to mentioned budget restrictions, the solution would choose the cheaper approach, which is batching data to BigQuery. Batching data to BigQuery is free of charge. Streaming data on the other hand is charged by size.<br>So, answer D is correct.<br>Answer A is incorrect for this scenario.<br>Answer B is incorrect: BigTable does not support SQL querying.<br>Answer C is incorrect: Cloud SQL needs administration and not easily scalable. Cloud SQL does not provide batching tools. BigQuery is a better approach for such scenario.<br>Source(s):<br>Bigquery: Streaming data: https://cloud.google.com/bigquery/streaming-data-into-bigquery <br>Bigquery: Batch data: https://cloud.google.com/bigquery/batch <br>Bigquery Pricing: https://cloud.google.com/bigquery/pricing"
    },
    {
        // Question 20
        id: 20,
        question: "Analytics team receives data from different data sources stored in Google Storage. The team wants to query the data for required ETL operations which they will fully take care of using SQL. They want your advice on what is the best approach recommended by Google to do it. What would you suggest?",
        options: [
            "A. Batch load the data from Google Storage into BigQuery using its batch API, run cleansing and transformation queries on data and insert the transformed rows to another BigQuery table.",
            "B. Batch load the data from Google Storage into BigQuery using its batch API, run cleansing and transformation queries on data and export the data to Google Storage. Launch Dataproc cluster and use Hive to query the transformed data.",
            "C. Create external tables on data using BigQuery, apply the cleansing and transformation queries on data then load the output to an internal BigQuery table for reporting and visualization.",
            "D. Create external tables on data using BigQuery, apply the cleansing and transformation queries on data then load the output to BigTable for reporting and visualization."
        ],
        answer: "C",
        explanation: "An external data source (also known as a federated data source) is a data source that you can query directly even though the data is not stored in BigQuery. Instead of loading or streaming the data, you create a table that references the external data source.<br>Querying an external data source using a temporary table is useful for one-time, ad-hoc queries over external data, or for extract, transform, and load (ETL) processes.<br>In summary, using external tables in BigQuery is useful for such cases:<br>â€¢ Perform ETL operations on data.<br>â€¢ Frequently changed data.<br>â€¢ Data is being ingested periodically.<br>Answer C is the correct answer based on above explanation and using BigQuery for reporting and visualization is a better approach.<br>Answer D is incorrect because BigTable isn't a practical (and cheap) approach to report and visualize data.<br>Answers A & B are incorrect: Based on Google's best practices, using external tables for ETL is better than loading data to BigQuery.<br>Source(s):<br>BigQuery external tables: https://cloud.google.com/bigquery/external-data-sources <br>BigQuery â€“ Define external tables: https://cloud.google.com/bigquery/external-table-definition"
    },
    {
        // Question 21
        id: 21,
        question: "An environment safety facility receives thousands of events every 60 seconds from its sensors assembled in different sectors monitoring air pollution in the region. Scientists want to access and query the data for observation and daily reporting. Due to current funding state, their budget is limited and they seek a cost-effective, highly available and ACID-compliant solution supports SQL querying.<br>Which approach would you recommend for such scenario?",
        options: [
            "A. Use BigQuery to store and query the event data. Enable streaming on BigQuery for data to be loaded in real-time.",
            "B. Batch-load data into BigTable with launching 10 nodes to allow high performance.",
            "C. Use Cloud SQL to load events into a relational database and allow access to scientists to query.",
            "D. Use BigQuery to store and query event data. Batch load the data to BigQuery using its API."
        ],
        answer: "D",
        explanation: "BigQuery supports both batch & streaming data. However, due to mentioned budget restrictions, the solution would choose the cheaper approach, which is batching data to BigQuery. Batching data to BigQuery is free of charge. Streaming data on the other hand is charged by size.<br>So, answer D is correct.<br>Answer A is incorrect for this scenario.<br>Answer B is incorrect: BigTable does not support SQL querying.<br>Answer C is incorrect: Cloud SQL needs administration and not easily scalable. Cloud SQL does not provide batching tools. BigQuery is a better approach for such scenario.<br>Source(s):<br>Bigquery: Streaming data: https://cloud.google.com/bigquery/streaming-data-into-bigquery <br>Bigquery: Batch data: https://cloud.google.com/bigquery/batch <br>Bigquery Pricing: https://cloud.google.com/bigquery/pricing"
    },
    {
        // Question 22
        id: 22,
        question: "You have a dataflow pipeline reads a CSV file daily at 6am, applies the needed cleansing & transformation on it, then loads it to BigQuery. Occassionally, the CSV file might be modified within the day due to human error or incomplete data. This causes you to manually re-run dataflow pipeline again. Is there a way to fix this by automatically re-run the pipeline if file has been modified?",
        options: [
            "A. Use Cloud Scheduler to re-run dataflow after 6am. Check what is the average time the file is modified and schedule based on it.",
            "B. Use Dataproc to reprocess the file after 6am. You can use Cloud Functions to launch a Dataproc cluster.",
            "C. Use Cloud Composer to rerun dataflow and reprocess the file. Create a custom sensor to detect file condition if changed.",
            "D. Use a compute engine to schedule a cron job to run every 10 minutes to check if the file was modified to rerun dataflow."
        ],
        answer: "C",
        explanation: "Cloud Composer is a fully managed workflow orchestration service built on Apache Airflow. Cloud composer is built specifically to schedule and monitor workflows and take required actions. You can use Cloud Composer to orchestrate dataflow pipeline and create a custom sensor to detect file’s condition if any changes occurred, then it triggers the dataflow pipeline to run again.<br>Answer A is incorrect: Guessing what time scheduler should rerun dataflow is not efficient.<br>Answer B is incorrect: Dataproc is unnecessary in this scenario.<br>Answer D is incorrect: This solution is viable, but Answer C has a better and more efficient design.<br>Source(s):<br>Cloud Composer: https://cloud.google.com/composer/"
    },
    {
        // Question 23
        id: 23,
        question: "A dairy products company is using sensors installed around different areas in its farms to monitor employees activities and detect any intruders. Apache Kafka cluster is used to gather the events coming from sensors. Recently, Kafka cluster is becoming a bottleneck causing lag in receiving sensor events. Turns out sensors are sending more frequent events and due to the company expanding with more farms, more sensors are installed and this will cause extra load on the cluster.<br>What is the most resilient approach to solve this issue?",
        options: [
            "A. Use pub/sub to ingest and stream sensor events.",
            "B. Scale out Kafka cluster to withstand the continuously flowing event stream.",
            "C. Spin up a new Kafka cluster and distribute sensors even streams between the two clusters.",
            "D. Build a Dataflow pipeline to ingest the events stream."
        ],
        answer: "A",
        explanation: "Cloud Pub/Sub is a service to ingest event streams at any scale. It’s scalable and reliable for stream analytics and event-driven computing systems. So it’s the most reliable Google product for such scenario.<br>Answers B & C are wrong because these are not scalable solutions.<br>Answer D is wrong because Dataflow cannot ingest event streams. It needs Pub/Sub service to do so.<br>Source(s):<br>Google Pub/Sub: https://cloud.google.com/pubsub/docs/overview"
    },
    {
        // Question 24
        id: 24,
        question: "A social media platform stores various details of their platform users such as session login time, URLs visited, activities on platform and other logs. With GDPR (General Data Protection Regulation) compliance to be officially implemented, the platform now allows users to download their activity logs from their profile settings which they can click a button to call an API to generate a full report.<br>Recently, users are complaining timeouts after 60 seconds of requesting to download their activity logs at peak hours when the platform has the most traffic. They have to try for several minutes or even hours for the API to return their report available for download.<br>How can you solve this issue?",
        options: [
            "A. Increase timeout for API at peak times to 120 seconds. If it keeps failing, try increasing the timeout until the issue is resolved.",
            "B. Build a Dataflow pipeline to generate daily reports of users’ activity logs. Users can download those daily reports whenever they want to.",
            "C. Migrate data source to Cloud Spanner for horizontal scaling to avoid query timeouts.",
            "D. Use Pub/sub to pull the requests for activity logs from users. Send a link to users by their email addresses with a temporary download link for them to access their report."
        ],
        answer: "D",
        explanation: "Cloud Pub/Sub is a service to ingest event streams at any scale. It’s scalable and reliable for stream analytics and event-driven computing systems.<br>Pub/sub is a good product to de-couple a system’s components so they communicate with each other asymmetrically. From the scenario shown here, instead of directly calling the API to export required report which puts great loads on the API and hence the timeouts faced by users. Instead, the platform can “publish” messages to a “topic” related to exporting activity log reports sending the required parameters such as user ID and custom settings such as date range and what data to export. The API can be switched to be a “subscriber” which receives the messages sent and processes each message asymmetrically to generate the report, then sends the download link to the user’s mailbox when ready.<br>Hence, answer D is correct.<br>Answer A is incorrect: Increasing timeout isn’t a scalable solution and it may keep occurring eventually when more and more users join the platform.<br>Answer B is incorect: While this would solve the timeout issues, generating daily reports for users can be costly as more users join, knowing that requesting activity log reports are a non-frequent action and this costs both compute and storage resources. This solution also doesn’t provide flexibility with what parameters the report is generated on such as date range and other custom metrics.<br>Answer C is incorrect: This solution has several issues. First, we’re assuming the data source is a relational database, which can be unlikely since NoSQL databases better perform for massive log input which uses the user ID as a key to reach the data. Second, Cloud Spanner isn’t a cheap solution for a service not frequently used.<br>Source(s):<br>Google Pub/Sub: https://cloud.google.com/pubsub/docs/overview"
    },
    {
        // Question 25
        id: 25,
        question: "A company decides to migrate its on-premise data infrastructure to the cloud mainly for high availability of cloud services and to lower the high costs of storing data on-premise. The infrastructure uses HDFS to store data and be processed and transformed using Apache Hive & Spark. The company wants to migrate the infrastructure and DevOps team still wants to administrate the infrastructure in the cloud. As a data architect, which of the following is the approach recommended by Google?",
        options: [
            "A. Use Dataproc to process the data. Store data in Google Storage.",
            "B. Build a Dataflow pipeline. Store the data in Google Storage. Use Cloud Compute to launch instances and install the required dependencies for processing the data.",
            "C. Use Dataproc to process the data. Store data in Dataproc’s HDFS.",
            "D. Build a Dataflow pipeline. Store the data in persistent disks in HDFS. Execute the code in Spark framework provided by Dataflow."
        ],
        answer: "A",
        explanation: "Dataproc is cloud-native Apache Hadoop & Apache Spark service. Dataproc is a fully-managed service from Google to run Apache Hadoop & Spark clusters.<br>Dataflow is a simplified streaming/batching data processing service. With Apache Beam, it provides rich set of windowing and session analysis primitives as well as an ecosystem of source & sink connectors.<br>Answer B is incorect: Dataflow is serverless which may not suit DevOps requirement to fully manage the pipeline and it’s unnecessary to use Cloud Compute for installing dependencies.<br>Answer C is incorrect: Dataproc’s HDFS is volatile, means it will be removed when the cluster is deleted. Dataproc clusters can be kept up indefinitely but this may lead to high costs which defeats the purpose of migration.<br>Answer D: In addition to what discussed in answer B, storing data using persistent disks can be only accessible by Compute engines and it’s more expensive than storing in Google Storage.<br>Answer A fulfills the requirements for migrating the on-premise infra to the cloud with high availability, minimum costs and full control by DevOps.<br>Source(s):<br>Cloud Dataproc: https://cloud.google.com/dataproc/ <br>Cloud Dataflow: https://cloud.google.com/dataflow/"
    },
    {
        // Question 26
        id: 26,
        question: "Data analysts are switching to use Apache Spark to perform experiments on the data before applying the changes to production. Those experiments are not critical, but they will be conducted on big data sets. As a data engineer, the head of data asked you to prepare the tech stack required to be used by data analysts to run their Spark scripts and experiment on with taking into consideration the cost of the stack used.<br>Which of the following tech stack is suggested?",
        options: [
            "A. Launch a Dataproc cluster in high-availability mode with using high-memory worker machine types.",
            "B. Launch a Dataproc cluster in standard mode with using high-CPU worker machine types.",
            "C. Launch a Dataproc cluster in standard mode with using high-memory worker machine types.",
            "D. Advice the data analysts to use Dataprep for their data manipulation."
        ],
        answer: "C",
        explanation: "Answer A is incorrect: Since the scenario states non-critical experiments will be conducted by data analysts, Dataproc cluster used can be in standard mode.<br>Answer B is incorrect: Since the scenario states non-critical experiments, there is no need for high-CPU worker machine types.<br>Answer D is incorrect: Dataprep does not provide Apache Spark job transformation. Dataprep is best for visual exploration and manual cleaning and preparation of data for analysis and machine learning.<br>Source(s):<br>Cloud Dataprep: https://cloud.google.com/dataprep/"
    },
    {
        // Question 27
        id: 27,
        question: "You have several Data Studio reports reading from BigQuery. Those reports are used to visualize several metrics for marketing team. Data visualized is updated only once a day. You notice that reports running queries on BigQuery are not free and they cost for each query. You want to control and minimize the costs caused by frequent queries coming from Data Studio dashboards.<br>What should you do?",
        options: [
            "A. Enable caching on reports for reading from BigQuery. No need to change the credentials.",
            "B. Grant owner credentials for the reports on BigQuery datasets and enable caching.",
            "C. Configure reports data sources to update data every 24 hours only.",
            "D. Export data as CSV files to Google Storage every 24 hours and change reports data source to read from those files."
        ],
        answer: "A",
        explanation: "Responsive cache: When a component in your report requests data, the responsive cache remembers the response returned by the underlying platform. If a person viewing the report requests the exact same data (for example, the same dimensions and metrics with the same filter conditions and date range) as a previously received query, then the new request is served by the responsive cache. If the request can't be served by the responsive cache, Data Studio next looks to the predictive cache.<br>Answer B is incorrect: There is no need to enable owner credentials for responsive caching.<br>Answer C is incorrect: Maximum period for caching in Data Studio is 12 hours.<br>Answer D is incorrect: This is a very cumbersome option and there is no need to export to Google Storage when better options are available.<br>Source(s):<br>Data Studio – Manage Data Freshness: https://support.google.com/datastudio/answer/7020039?hl=en"
    },
    {
        // Question 28
        id: 28,
        question: "You are using BigQuery as the data warehouse. Data analysts & scientists run queries to get data from BigQuery. When you checked the billing costs for the previous month, you noticed a spike in running queries on BigQuery despite caching is enabled. You tried to find out the reason for the spike by reading some of the queries data analysts and scientists are running on BigQuery.<br>Which of the following can be reasons for queries not cached? (Choose 2)",
        options: [
            "A. Queries use current_timestamp function.",
            "B. SELECT queries with asterisk (*).",
            "C. Queries select from authorized views on archive tables.",
            "D. Queries use wildcards."
        ],
        answer: "AD",
        explanation: "Currently, cached results are not supported for queries against multiple tables using a wildcard even if the 'Use Cached Results' option is checked. If you run the same wildcard query multiple times, you are billed for each query.<br>If the query uses non-deterministic functions; for example, date and time functions such as CURRENT_TIMESTAMP() and NOW(), and other functions such as CURRENT_USER() return different values depending on when a query is executed<br>Source(s):<br>BigQuery - Wildcards: https://cloud.google.com/bigquery/docs/querying-wildcard-tables BigQuery – Cached Results: https://cloud.google.com/bigquery/docs/cached-results"
    },
    {
        // Question 29
        id: 29,
        question: "You are deploying a Tensorflow model built by data science team to the cloud. Based on the requirements provided by data scientists, the model should be able to return the output as soon as possible to minimize the latency of serving predictions. Input will be passed as JSON.<br>Which of the following approaches are best for this scenario?",
        options: [
            "A. Use Google Kubernetes Engine to deploy the model. Use online prediction to pass input data to the model hosted in cloud.",
            "B. Use Google Kubernetes Engine to deploy the model. Use batch prediction to pass input data to the model hosted in cloud.",
            "C. Use Cloud Machine Learning Engine to deploy the model. Use batch prediction to pass input data to the model hosted in cloud.",
            "D. Use Cloud Machine Learning Engine to deploy the model. Use online prediction to pass input data to the model hosted in cloud."
        ],
        answer: "D",
        explanation: "<img src='/static/images/dewlq29.jpg'><br><br>AI Platform provides two ways to get predictions from trained models: online prediction (sometimes called HTTP prediction), and batch prediction. In both cases, you pass input data to a cloud-hosted machine-learning model and get inferences for each data instance.<br>Online prediction passes input as a JSON string and returns the output as soon as possible.<br>Answer A & B are incorrect: GKE is not a recommended option to deploy the model.<br>Answer C is incorrect: Batch prediction doesn’t support returning the output as soon as possible. Input is passed indirectly as one or more URIs of files in Google Storage.<br>Source(s):<br>Online vs. Batch Prediction: https://cloud.google.com/ml-engine/docs/tensorflow/online-vs-batch- prediction"
    },
    {
        // Question 30
        id: 30,
        question: "You have a massively multiplayer online (MMO) game which sends events from each player every 10 seconds. Events contain stats about the player session’s state (play, idle, off) as well as ping duration. You want to use Dataflow for windowing. The purpose is to aggregate events and extracting stats to detect how many players are currently online and what is the average ping duration for each server in a time window of 30 seconds.<br>Which windowing function you should choose to design the pipeline?",
        options: [
            "A. Fixed-time window.",
            "B. Sliding-time window.",
            "C. Per-session window.",
            "D. Single global window."
        ],
        answer: "B",
        explanation: "<img src='/static/images/dewlq30.png'><br><br>A sliding time window uses time intervals in the data stream to define bundles of data. However, with sliding time windowing, the windows overlap. Each window might capture five minutes worth of data, but a new window starts every ten seconds. The frequency with which sliding windows begin is called the period. Therefore, our example would have a window size of five minutes and a period of ten seconds.<br>Sliding-time window is the windowing function recommended for this scenario.<br>Source(s):<br>Windowing Functions: https://cloud.google.com/dataflow/model/windowing#windowing-functions"
    },
    {
        // Question 31
        id: 31,
        question: "An e-payment service allows users to purchase online and transfer money securely. They log into the website to perform the transactions and they log out. The website needs to check if their sessions are idle for 10 minutes, means they did not perform any action or they opened a new link within the website. In case of idle session, the website ends their session for security purposes.<br>You need to build a Dataflow pipeline to aggregate session events received from the website and detect sessions idle more than 10 minutes to get their sessions expired.<br>Which windowing function you should choose to design the pipeline?",
        options: [
            "A. Fixed-time window with duration of 10 minutes.",
            "B. Sliding-time window with duration of 10 minutes.",
            "C. Per-session window with time gap duration of 10 minutes.",
            "D. Single global window with time-based trigger of 10 minutes."
        ],
        answer: "C",
        explanation: "A session window function defines windows around areas of concentration in the data. Session windowing is useful for data that is irregularly distributed with respect to time; for example, a data stream representing user mouse activity may have long periods of idle time interspersed with high concentrations of clicks. Session windowing groups the high concentrations of data into separate windows and filters out the idle sections of the data stream. Note that session windowing applies on a per-key basis: That is, grouping into sessions only takes into account data that has the same key. Each key in your data collection will therefore be grouped into disjoint windows of differing sizes.<br><br><img src='/static/images/dewlq31.png'><br><br>For this scenario, per-session window is the function to choose to build Dataflow pipeline.<br>Source(s):<br>Windowing Functions: https://cloud.google.com/dataflow/model/windowing#windowing-functions"
    },
    {
        // Question 32
        id: 32,
        question: "You have several Dataflow pipelines streaming data for transformation and further analysis. At one point of the transformation, there is a need for two pipelines to share data among pipeline instances. You need to modify the architecture to allow data sharing between different pipelines.<br>How should this requirement be met in Google Cloud?",
        options: [
            "A. Enable data sharing option when creating Dataflow pipeline.",
            "B. Grant pipeline instances the right IAM roles to access other pipelines instances for data sharing.",
            "C. Use Google Storage to share data with other pipeline instances.",
            "D. Data sharing among Dataflow pipelines is only possible if instances reside in same region."
        ],
        answer: "C",
        explanation: "There is no Cloud Dataflow-specific cross pipeline communication mechanism for sharing data or processing context between pipelines. You can use durable storage like Cloud Storage or an in-memory cache like App Engine to share data between pipeline instances.<br>Answer A is incorrect: Dataflow doesn’t have a cross pipeline communication mechanism for sharing data between pipelines.<br>Answer B is incorrect: This approach is not recommended, if possible. Use Google Storage to share data between pipelines.<br>Answer D is incorrect: Sharing data is not possible unless using a reliable data storage such as Google Storage.<br>Source(s):<br>Dataflow – FAQ: https://cloud.google.com/dataflow/docs/resources/faq"
    },
    {
        // Question 33
        id: 33,
        question: "You are building a data pipeline using Google Dataflow SDK. This pipeline is going to perform operations on data using conditional and for loops creating a branch pipeline.<br>Which of the following concepts should be used to achieve this?",
        options: [
            "A. ParDo",
            "B. PCollection",
            "C. Transform",
            "D. Pipeline"
        ],
        answer: "C",
        explanation: "A transform represents a processing operation that transforms data. A transform takes one or more PCollections as input, performs an operation that you specify on each element in that collection, and produces one or more PCollections as output. A transform can perform nearly any kind of processing operation, including performing mathematical computations on data, converting data from one format to another, grouping data together, reading and writing data, filtering data to output only the elements you want, or combining data elements into single values.<br>Source(s):<br>Dataflow - Programming Model for Apache Beam: https://cloud.google.com/dataflow/docs/concepts/beam-programming-model"
    },
    {
        // Question 34
        id: 34,
        question: "A multinational company has multiple Google Storage buckets in different regions around the world. Each branch has its own set of buckets in the region nearest to them to avoid latencies.<br>However, this led to a problem for the analytics team to reach and do the necessary reports on the data using BigQuery since they need to create the tables in the same region either to import the data or create external tables to access the data in different regions. The head of data decided to sync the data daily from different Google Storage buckets scattered in different regions to a single multi-regional bucket to do the necessary data analysis and reporting.<br>Which service could help with this approach?",
        options: [
            "A. Appliance Transfer Service",
            "B. gsutil",
            "C. Storage Transfer Service",
            "D. Dataflow"
        ],
        answer: "C",
        explanation: "Storage Transfer Service allows you to quickly import ONLINE data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another.<br>Transfer Appliance is an OFFLINE secure, high capacity storage server that you set up in your datacenter. You fill it with data and ship it to an ingest location where the data is uploaded to Google Cloud Storage.<br>So, answer C is correct, while answer A is incorrect.<br>Answer B is incorrect: gsutil tool is good for programmatic usage by developers and may be useful to copy and move megabytes/gigabytes of data. Not so practical for Terabytes of data. It’s also not reliable data transfer technique as it is related to the machine’s connectivity with Google Cloud.<br>Answer D is incorrect: Dataflow as a solution may be viable, but you need to build a pipeline to migrate data from bucket to another. Storage Transfer Service can do it without the extra effort.<br>Source(s):<br>Google Cloud Storage Transfer Service: https://cloud.google.com/storage-transfer/docs/ <br>Google Appliance Transfer Service: https://cloud.google.com/transfer-appliance/"
    },
    {
        // Question 35
        id: 35,
        question: "A company is migrating its current infrastructure from on-premise to Google cloud. It stores over 280TB of data on its on-premise HDFS servers. You were tasked to move data from HDFS to Google Storage in a secure and efficient manner. Which of the following approaches are best to fulfill this task?",
        options: [
            "A. Install Google Storage gsutil tool on servers and copy the data from HDFS to Google Storage.",
            "B. Use Cloud Data Transfer Service to migrate the data to Google Storage.",
            "C. Import the data from HDFS to BigQuery. Then, export the data to Google Storage in AVRO format.",
            "D. Use Transfer Appliance Service to migrate the data to Google Storage."
        ],
        answer: "D",
        explanation: "Storage Transfer Service allows you to quickly import ONLINE data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another.<br>Transfer Appliance is an OFFLINE secure, high capacity storage server that you set up in your datacenter. You fill it with data and ship it to an ingest location where the data is uploaded to Google Cloud Storage.<br>So, answer D is the correct one, while B is incorrect.<br>Answer A is incorrect: gsutil tool is good for programmatic usage by developers and may be useful to copy and move megabytes/gigabytes of data. Not so practical for Terabytes of data. It’s also not reliable data transfer technique as it is related to the machine’s connectivity with Google Cloud.<br>Answer C is incorrect: In order to migrate to BigQuery, you need to migrate data to Google Storage. This is a useless approach as the main challenge is migrating data from HDFS to Google Storage and BigQuery won’t help solving it.<br>Source(s):<br>Google Cloud Storage Transfer Service: https://cloud.google.com/storage-transfer/docs/ <br>Google Appliance Transfer Service: https://cloud.google.com/transfer-appliance/ <br>Migrate HDFS to Google Storage: https://cloud.google.com/solutions/migration/hadoop/hadoop-gcp- migration-data"
    },
    {
        // Question 36
        id: 36,
        question: "A company is moving its data center from its on-premise servers to the cloud. It was estimated that they have about 2 Petabytes of data to be moved and security team is very concerned the data should be migrated securely and project manager has a timeline of 6 months for the whole migration to be done.<br>Which of the following approaches is best to do the job?",
        options: [
            "A. Appliance Transfer Service.",
            "B. Google Storage (Coldline).",
            "C. Cloud Transfer Service.",
            "D. Datastore."
        ],
        answer: "A",
        explanation: "Storage Transfer Service allows you to quickly import ONLINE data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another.<br>Transfer Appliance is an OFFLINE secure, high capacity storage server that you set up in your datacenter. You fill it with data and ship it to an ingest location where the data is uploaded to Google Cloud Storage. Data is encrypted automatically, and remains safe until you decrypt it.<br>So, answer A suggests using Transfer Appliance is the best approach.<br>Answer C is incorrect: It’s an online data transfer service. Won’t help for on-premise infrastructure.<br>Answer B is incorrect: Google Storage Coldline is a way to store archive data not frequently accessed cheaply in the cloud. It won’t help migrating data to the cloud.<br>Answer D is incorrect: Datastore is a NoSQL database built for automatic scaling and high performance. It won’t help with this scenario.<br>Source(s):<br>Google Cloud Storage Transfer Service: https://cloud.google.com/storage-transfer/docs/ <br>Google Appliance Transfer Service: https://cloud.google.com/transfer-appliance/ <br>Google Datastore: https://cloud.google.com/datastore/docs/concepts/overview <br>Google Storage Classes: https://cloud.google.com/storage/docs/storage-classes"
    },
    {
        // Question 37
        id: 37,
        question: "A company plans to move its 250TB of data from their on-premise FTP servers to the cloud. The security team wants to make sure the data is transferred securely. Data transfer should be a one-time migration. Data team reported the data should be accessed by clients in Asia.<br>Which of the following is the best approach?",
        options: [
            "A. Use Transfer Appliance Service for one-time migration to Google Storage. Google Storage bucket should be multi-regional in Asia.",
            "B. Use Transfer Appliance Service for one-time migration to Google Storage. Google Storage bucket should be in Tokyo region.",
            "C. Use Storage Transfer Service for one-time migration to Google Storage. Google Storage bucket should be multi-regional in Asia.",
            "D. Use Storage Transfer Service for one-time migration to Google Storage. Google Storage bucket should be in Tokyo region."
        ],
        answer: "A",
        explanation: "Storage Transfer Service allows you to quickly import ONLINE data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another.<br>Transfer Appliance is an OFFLINE secure, high capacity storage server that you set up in your datacenter. You fill it with data and ship it to an ingest location where the data is uploaded to Google Cloud Storage. Data is encrypted automatically, and remains safe until you decrypt it.<br>In this scenario, Transfer Appliance Service should be used for one-time migration. Based on what region data will be accessed in, it will be accessed in Asia, means the storage bucket should be multi- regional, and creating the storage bucket in a single region might cause latencies trying to access it from other regions in Asia.<br>So, answer A is correct.<br>Answer B is incorrect because it creates a single-region bucket.<br>Answers C & D are incorrect because they suggest Storage Transfer Service which works for online data transfer and it’s best for frequent data transfers."
    },
    {
        // Question 38
        id: 38,
        question: "You have been using BigTable instance with HDD as storage type. You want to increase the performance of the instance by changing the storage type to SSD. You want to make sure the data will not be lost. How can you achieve that?",
        options: [
            "A. Use Dataflow to export data from the existing BigTable instance to the new instance.",
            "B. From Google Cloud console UI, you can switch the storage type from HDD to SDD. Data will be moved to new storage type. Instance will be inaccessible by this time until migration is complete.",
            "C. From Google Cloud console UI, you can switch the storage type from HDD to SDD. Data will be moved to new storage type. Instance will be in read-only mode by this time until migration is complete.",
            "D. You need to change the instance from development to production."
        ],
        answer: "A",
        explanation: "You can change cluster IDs only by deleting and recreating the cluster. Also, you cannot change the instance ID or the instance's storage type, and you cannot downgrade a production instance to a development instance. To change any of these settings, you must create a new instance with your preferred settings; export your data from the old instance; import your data into the new instance; and delete the old instance.<br>From the description above, the best solution is using Dataflow to migrate data from the old BigTable instance to the new one.<br>All other answers are incorrect based on the description.<br>Source(s):<br>BigTable - Modifying a Cloud Bigtable Instance: https://cloud.google.com/bigtable/docs/modifying- instance"
    },
    {
        // Question 39
        id: 39,
        question: "You use BigQuery as the main data warehouse. You decided to perform advanced data transformation of the data. You want to use Dataproc with Apache Spark to do the transformation. How can you enable Dataproc’s access to data in BigQuery?",
        options: [
            "A. Install Dataproc’s BigQuery connector on the cluster using initialization actions. Dataproc temporarily loads data from BigQuery to Google Storage. If failed, Dataproc deletes temp files before finishing the job.",
            "B. Install Dataproc’s BigQuery connector on the cluster using initialization actions. Dataproc temporarily loads data from BigQuery to Google Storage. If failed, you need to manually delete temp files.",
            "C. Dataproc cannot directly connect to BigQuery. You should export data from BigQuery to Google Storage first. Dataproc can then read data from Google Storage. You need to manually delete data files after Dataproc is done.",
            "D. Dataproc can connect to BigQuery if you set the cluster as owner to the dataset."
        ],
        answer: "B",
        explanation: "You can use a BigQuery connector to enable programmatic read/write access to BigQuery. This is an ideal way to process data that is stored in BigQuery. No command-line access is exposed. The BigQuery connector is a Java library that enables Hadoop to process data from BigQuery using abstracted versions of the Apache Hadoop InputFormat and OutputFormat classes.<br>You can access BigQuery from Dataproc by installing BigQuery connector to Dataproc cluster using initialization actions. When a Dataproc spark job reads from BigQuery, it writes the BigQuery table’s content temporarily to Google Storage using Dataproc cluster’s assigned bucket. If the job completes successfully, temporary files are automatically deleted from the cluster. If the job fails, you need to delete temp files manually.<br>Answer A is incorrect: If job fails, you need to delete temp files manually.<br>Answer C is incorrect: Dataproc can read from BigQuery by installing the connector. No need to export data from BigQuery to Google Storage manually.<br>Answer D: Dataproc cannot directly read from BigQuery without installing the connector first.<br>Source(s): https://cloud.google.com/dataproc/docs/concepts/connectors/bigquery https://cloud.google.com/dataproc/docs/concepts/connectors/bigquery <br>https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/init-actions"
    },
    {
        // Question 40
        id: 40,
        question: "You have a Dataflow pipeline to run and process set of data files received from a client for transformation and load data into data warehouse. This pipeline should run at 7am everyday so metrics can be ready by 9am when client’s management can browse latest stats based on provided data.<br>Which service you should use to schedule Dataflow pipeline?",
        options: [
            "A. Cloud Functions",
            "B. Compute Engine",
            "C. Kubernetes Engine",
            "D. Cloud Scheduler"
        ],
        answer: "D",
        explanation: "Cloud Scheduler is a fully managed enterprise-grade cron job scheduler. It allows you to schedule virtually any job, including batch, big data jobs, cloud infrastructure operations, and more. You can automate everything, including retries in case of failure to reduce manual toil and intervention. Cloud Scheduler even acts as a single pane of glass, allowing you to manage all your automation tasks from one place.<br>Source(s):<br>Cloud Scheduler: https://cloud.google.com/scheduler/"
    },
    {
        // Question 41
        id: 41,
        question: "You have the following legacy SQL query in BigQuery:<br># legacy SQL SELECT<br>order_date,<br>COUNT(DISTINCT customer_id)) AS customers<br>FROM<br>[my-project:orders.orders_2018]<br>GROUP BY<br>order_date ORDER BY<br>order_date;<br>How can you convert this query to standard SQL?",
        options: [
            "A. Change table syntax to `my-project:orders.orders_2018`",
            "B. Change table syntax to `my-project.orders.orders_2018`",
            "C. Change table syntax to [my-project.orders.orders_2018]",
            "D. No change required. This works fine if standard SQL is enabled."
        ],
        answer: "B",
        explanation: "The correct way to represent a BigQuery table in standard SQL is:<br>`project-id.dataset-id.table-id`<br>So, answer B is the correct one.<br>Source(s):<br>Migrating from Legacy to Standard SQL: https://cloud.google.com/bigquery/docs/reference/standard- sql/migrating-from-legacy-sql#subqueries_in_more_places"
    },
    {
        // Question 42
        id: 42,
        question: "What is the keyword in BigQuery standard SQL used when selecting from multiple tables with wildcard by their suffices?",
        options: [
            "A. _WILDCARD_SUFFIX",
            "B. _TABLES_SUFFIX",
            "C. _SUFFIX",
            "D. _TABLE_SUFFIX"
        ],
        answer: "D",
        explanation: "To restrict the query so that it scans an arbitrary set of tables, use the _TABLE_SUFFIX pseudo column in the WHERE clause. The _TABLE_SUFFIX pseudo column contains the values matched by the table wildcard.<br>Answer D is the correct one. Other answers are incorrect because such keywords do not exist.<br>Source(s):<br>Bigquery – Querying wildcard tables: https://cloud.google.com/bigquery/docs/querying-wildcard- tables"
    },
    {
        // Question 43
        id: 43,
        question: "A weather forecasting facility receives events from its 25,000 sensors every 10 seconds. Those events are stored in Google Storage in JSON format. Events can have different attributes based on purpose, location and brand. Data Science team wants to apply their SQL-queries on this data for further transformation and forecasting analysis. Which of the following approaches is best to satisfy Data Scientists request?",
        options: [
            "A. Load the data directly to BigQuery with enabling “auto-detect” option.",
            "B. Build a dataflow pipeline to read JSON data and transform it to a structured format like CSV. Then, load the data to BigQuery.",
            "C. Import the data to BigTable. Choose combination #eventType-location-brand to differentiate between different events.",
            "D. Use Dataproc cluster and create Hive external clusters on the data for data scientists to query data."
        ],
        answer: "A",
        explanation: "Schema auto-detection: Schema auto-detection is available when you load data into BigQuery, and when you query an external data source.<br>When auto-detection is enabled, BigQuery starts the inference process by selecting the file in the data source and scanning up to 100 rows of data to use as a representative sample. BigQuery then examines each field and attempts to assign a data type to that field based on the values in the sample. BigQuery makes a best-effort attempt to automatically infer the schema for CSV and JSON files.<br>So, answer A is the correct answer.<br>The other answers are complicated and unnecessary approaches for this scenario.<br>Source(s):<br>BigQuery – Auto-detect schema: https://cloud.google.com/bigquery/docs/schema-detect"
    },
    {
        // Question 44
        id: 44,
        question: "Which of the following statements is not true about BigQuery:",
        options: [
            "A. You cannot upload multiple tables at the same time.",
            "B. Uploading data is free of charge. Streaming data is not.",
            "C. Use window functions instead of cross joins for better performance.",
            "D. You can upload data in SQL format."
        ],
        answer: "D",
        explanation: "BigQuery does not support importing data in SQL format. The supported data types available currently are:<br>Cloud Storage:<br>CSV<br>JSON (newline delimited only)<br>Avro<br>Parquet<br>ORC<br>Cloud Datastore exports<br>Cloud Firestore exports<br>Readable data source (such as your local machine):<br>CSV<br>JSON (newline delimited only)<br>Avro<br>Parquet<br>ORC<br>Source(s):<br>BigQuery – Pricing: https://cloud.google.com/bigquery/pricing <br>BigQuery – Load Data: https://cloud.google.com/bigquery/docs/loading-data"
    },
    {
        // Question 45
        id: 45, 
        question: "Your company uses BigQuery as their main data warehouse. Recently, data team has proposed a new schema for existing tables: They want to modify some column names to a more meaningful ones. You are tasked to help data team apply the necessary changes on BigQuery’s tables schemas. How can you achieve this?",
        options: [
            "A. Modify column names for each table using ALTER command.",
            "B. Export data for tables with schema changes to Google Storage. Create a new table with the new schema. Import data to new table from Google Storage.",
            "C. Create views on BigQuery tables with new column names.",
            "D. Create a new table in BigQuery with the new schema. Insert data from existing tables to the new tables using INSERT SELECT statement."
        ],
        answer: "D",
        explanation: "In BigQuery, the following schema modifications are unsupported and require manual workarounds:<br>Changing a column's name.<br>Changing a column's data type.<br>Changing a column's mode (aside from relaxing REQUIRED columns to NULLABLE).<br>Deleting a column.<br>Answer A is incorrect: You cannot change a column’s name in BigQuery.<br>Answer B is incorrect: No need to export data to Google Storage. You can use INSERT SELECT to move data from existing table to new one.<br>Answer C is incorrect: It is aimed to change the schema’s column names. Creating views may solve selecting from it, but original columns still have same names.<br>Source(s):<br>BigQuery – Modifying Table Schemas: https://cloud.google.com/bigquery/docs/managing-table- schemas"
    },
    {
        // Question 46
        id: 46,
        question: "A pharmaceutical factory has over 100,000 different sensors generating JSON-format events every 10 seconds to be collected. You need to gather the event data for sensor & time series analysis.Which database is best used to collect event data?",
        options: [
            "A. Google Storage",
            "B. Cloud Spanner",
            "C. BigTable",
            "D. Datastore"
        ],
        answer: "C",
        explanation: "Cloud BigTable is a petabyte-scale, fully managed NoSQL database service for large analytical and operational workloads.<br>Answer A is incorrect: Storing data to Google Storage needs further processing to be eligible for time- series analysis using tools such as Apache Hive or Presto.<br>Answer B is incorrect: Cloud Spanner is a relational database service. It is not recommended for JSON- format data that may have changing structure.<br>Answer D is incorrect: Datastore can be a potential choice since it’s a NoSQL database. The issue is, Datastore is not built for storing and reading huge data volumes as in this scenario. Datastore is deisgned for web applications of small scale.<br>Source(s):<br>BigTable vs. Datastore: https://stackoverflow.com/questions/30085326/google-cloud-bigtable-vs- google-cloud-datastore"
    },
    {
        // Question 47
        id: 47,
        question: "An e-payment company collects its service payment transaction events from its app installed in nearly 200,000 devices. Those events need to be stored for further time-series analysis and fraud detection. Which of the following approaches is recommended to implement?",
        options: [
            "A. Use Google Storage to store data. Use Dataproc with Apache Hive to do required queries on data.",
            "B. Use Cloud SQL as a database. Make sure you launch a multi-regional instance for higher peformance.",
            "C. Use BigTable as a database. Use short & wide tables when designing the schema and row key.",
            "D. Use BigTable as a database. Use tall & narrow tables when designing the schema and row key."
        ],
        answer: "D",
        explanation: "Storing time-series data in Cloud Bigtable is a natural fit. Cloud Bigtable stores data as unstructured columns in rows; each row has a row key, and row keys are sorted lexicographically.<br>For time series, you should generally use tall and narrow tables. This is for two reasons:<br>Storing one event per row makes it easier to run queries against your data.<br>Storing many events per row makes it more likely that the total row size will exceed the recommended maximum.<br>Answer A is incorrect: For this scenario, using BigTable is preferred over storing data in Google Storage as further data partitioning and file formatting is required to use Dataproc with Apache Hive.<br>Answer B is incorrect: Cloud SQL is a relational database. Event data might not have a fixed structure. Cloud SQL is not scalable to write thousands of rows in a given second.<br>Answer C is incorrect: Wide & short table schema is not optimal for time-series event data.<br>Source(s):<br>BigTable – Schema Design for Time Series Data: https://cloud.google.com/bigtable/docs/schema- design-time-series"
    },
    {
        // Question 48
        id: 48,
        question: "A company wants to use NoSQL database for storing its system logs. The system can generate thousands of logs every minute. Those logs are occasionally read by security team in case of possible anomaly behavior or developers for debugging purposes. Due to system’s architecture, system logs are not structured and can be different between different components.<br>Which database do you suggest be used for this scenario?",
        options: [
            "A. Use BigTable as a database with HDD storage to store system logs.",
            "B. Use BigTable as a database with SSD storage to store system logs.",
            "C. Use Datastore as a database to store system logs.",
            "D. Use Firebase as a database to store system logs."
        ],
        answer: "A",
        explanation: "When you create a Cloud Bigtable instance, you choose whether its clusters store data on solid-state drives (SSD) or hard disk drives (HDD).HDD storage is suitable for use cases that meet the following criteria:<br>You expect to store at least 10 TB of data.<br>You will not use the data to back a user-facing or latency-sensitive application.<br>Your workload falls into one of the following categories:<br>Batch workloads with scans and writes, and no more than occasional random reads of a small number of rows.<br>Data archival, where you write very large amounts of data and rarely read that data.<br>From the scenario, system logs are to be stored to BigTable. This data will be only used for occasional debugging and security anomaly detection. So, using HDD storage type for BigTable is the answer.<br>Answer B is incorrect: The scenario does not require SSD storage type.<br>Answer C is incorrect: Datastore is not built for storing and reading huge data volumes as in this scenario. Datastore is deisgned for web applications of small scale.<br>Answer D is incorrect: Firebase is for mobile and web applications. Not a solution for storing big data.<br>Source(s):<br>Choosing Between SSD and HDD Storage: https://cloud.google.com/bigtable/docs/choosing-ssd-hdd"
    },
    {
        // Question 49
        id: 49,
        question: "You design a pipeline for your company. You want to find a solution to store event data generated in CSV format. The goal is to SQL-query data over time window.Which storage and schema design should you use recommended by Google?",
        options: [
            "A. Use Google Storage to store event data and use BigQuery to create external tables referencing event data and partitioned by time window.",
            "B. Use Google Storage to store event data and use DataPrep jobs to partition data by time windows.",
            "C. Use BigTable for storage and design tall and narrow tables adding each event as single row.",
            "D. Use BigTable for storage and design short and wide tables adding each event as single row."
        ],
        answer: "A",
        explanation: "The scenario states the goal is to query data using SQL. From the available answers, BigQuery is the best service to meet this requirement. Data can be stored in Google Storage, partitioned by time.<br>BigQuery can read directly from Google Storage creating external tables partitioned by time.<br>Answer B is incorrect: Dataprep does not support SQL queries.<br>Answer C & D are incorrect: BigTable is not necessary for this scenario.<br>Source(s):<br>BigQuery - Introduction to external data sources: https://cloud.google.com/bigquery/external-data- sources"
    },
    {
        // Question 50
        id: 50,
        question: "A company specializes in monitoring and distributing data about road traffic for more than 60 cities. Data is used by navigation apps to notify users of traffic congestion on their destination routes and alert them of road accidents. There are thousands of queries running to write new events and read events for analysis and get the latest stats on road traffic.<br>Which of the following is the best option for this scenario?",
        options: [
            "A. Cloud Spanner",
            "B. BigQuery",
            "C. Datastore",
            "D. BigTable"
        ],
        answer: "D",
        explanation: "Cloud BigTable is a petabyte-scale, fully managed NoSQL database service for large analytical and operational workloads. Under a typical workload, Cloud BigTable delivers highly predictable performance. When everything is running smoothly, a typical workload can achieve the following performance for each node in the Cloud Bigtable cluster, depending on which type of storage the cluster uses:<br><br><img src='/static/images/dewlq50.jpg'><br><br>In general, a cluster's performance increases linearly as you add nodes to the cluster. For example, if you create an SSD cluster with 10 nodes, the cluster can support up to 100,000 rows per second for a typical read-only or write-only workload, with 6 ms latency for each read or write operation.<br>Answer A is incorrect: Cloud Spanner does not guarantee the same performance and low latency as BigTable.<br>Answer B is incorrect: While BigQuery is a potential choice, BigQuery doesn’t provide high throughput and low latency as powerful as BigTable.<br>Answer C is incorrect: Datastore can be a potential choice since it’s a NoSQL database. The issue is, Datastore is not built for storing and reading huge data volumes as in this scenario. Datastore is deisgned for web applications of small scale.<br>Source(s):<br>Understanding BigTable Performance: https://cloud.google.com/bigtable/docs/performance"
    },
    {
        // Question 51
        id: 51,
        question: "Analytics team receives data from different data sources stored in Google Storage. The team wants to query the data for required ETL operations which they will fully take care of using SQL. They want your advice on what is the best approach recommended by Google to do it. What would you suggest?",
        options: [
            "A. Batch load the data from Google Storage into BigQuery using its batch API, run cleansing and transformation queries on data and insert the transformed rows to another BigQuery table.",
            "B. Batch load the data from Google Storage into BigQuery using its batch API, run cleansing and transformation queries on data and export the data to Google Storage. Launch Dataproc cluster and use Hive to query the transformed data.",
            "C. Create external tables on data using BigQuery, apply the cleansing and transformation queries on data then load the output to an internal BigQuery table for reporting and visualization.",
            "D. Create external tables on data using BigQuery, apply the cleansing and transformation queries on data then load the output to BigTable for reporting and visualization."
        ],
        answer: "C",
        explanation: "An external data source (also known as a federated data source) is a data source that you can query directly even though the data is not stored in BigQuery. Instead of loading or streaming the data, you create a table that references the external data source.<br>Querying an external data source using a temporary table is useful for one-time, ad-hoc queries over external data, or for extract, transform, and load (ETL) processes.<br>In summary, using external tables in BigQuery is useful for such cases:<br>Perform ETL operations on data.<br>Frequently changed data.<br>Data is being ingested periodically.<br>Answer C is the correct answer based on above explanation and using BigQuery for reporting and visualization is a better approach.<br>Answer D is incorrect because BigTable isn’t a practical (and cheap) approach to report and visualize data.<br>Answers A & B are incorrect: Based on Google’s best practices, using external tables for ETL is better than loading data to BigQuery.<br>Source(s):<br>BigQuery external tables: https://cloud.google.com/bigquery/external-data-sources <br>BigQuery – Define external tables: https://cloud.google.com/bigquery/external-table-definition"
    },
    {
        // Question 52
        id: 52,
        question: "You want to import data into BigQuery. You used Google Cloud’s BigQuery UI to import the data. You selected a comma-delimiter CSV file from your local machine to upload and enabled “automatically detect” for BigQuery to predict the schema of the table. When you checked the data, you found a skew in data and it’s not properly distributed.<br>What can be the reason for the skew in the table?",
        options: [
            "A. CSV file is not UTF-8 encoded. You need to convert the CSV file’s encoding and load it again.",
            "B. CSV file is not UTF-8 encoded. You need to explicitly specify the encoding when loading data so it can be converted to UTF-8.",
            "C. File size exceeds 1GB. You need to break the file into smaller chunks.",
            "D. You need to explicitly specify the delimiter of CSV file when loading the data."
        ],
        answer: "B",
        explanation: "BigQuery supports UTF-8 encoding for both nested or repeated and flat data. BigQuery supports ISO- 8859-1 encoding for flat data only for CSV files.<br>By default, the BigQuery service expects all source data to be UTF-8 encoded. Optionally, if you have CSV files with data encoded in ISO-8859-1 format, you should explicitly specify the encoding when you import your data so that BigQuery can properly convert your data to UTF-8 during the import process.<br>Answer A is incorrect: There is no need to manually convert the file to UTF-8. BigQuery can convert it for you.<br>Answer C is incorrect: There is no limits in data size when loading data to BigQuery.<br>Answer D is incorrect: While you may explicitly define the delimiter, BigQuery can detect the delimiter.<br>Source(s):<br>BigQuery – Loading data: https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv <br>https://cloud.google.com/bigquery/docs/loading-data"
    },
    {
        // Question 53
        id: 53,
        question: "Which of the following statements is not true about Dataproc?",
        options: [
            "A. You can change number of preemptible workers for existing clusters.",
            "B. Dataproc charges by the second.",
            "C. You cannot store data in preemptible nodes.",
            "D. You can change workers instance type for existing clusters."
        ],
        answer: "D",
        explanation: "Cloud Dataproc does not support changing worker size (vCPUs, memory, persistent disk) when you add workers to a cluster.<br>Source(s):<br>Dataproc – Scaling Clusters: https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/ scaling-clusters"
    },
    {
        // Question 54
        id: 54,
        question: "Your team is planning to perform tests on Cloud BigTable instance to ensure the performance quality of the BigTable instance to be used in production. Which of the following conditions should be met to consider the performance testing valid? (Choose 3)",
        options: [
            "A. Use development instance for testing.",
            "B. Run a heavy pre-test for several minutes before the test starts.",
            "C. Scale up the instance just before the test starts.",
            "D. Use at least 300GB of data.",
            "E. Do not scale up the instance just before the test starts.",
            "F. Test should take no longer than 10 minutes."
        ],
        answer: "BDE",
        explanation: "If you're running a performance test that depends upon Cloud Bigtable, be sure to follow these steps as you plan and execute your test:<br>Use a production instance. A development instance will not give you an accurate sense of how a production instance performs under load.<br>Use at least 300 GB of data. Cloud Bigtable performs best with 1 TB or more of data. However, 300 GB of data is enough to provide reasonable results in a performance test on a 3-node cluster. On larger clusters, use at least 100 GB of data per node.<br>Stay below the recommended storage utilization per node.<br>Before you test, run a heavy pre-test for several minutes. This step gives Cloud Bigtable a chance to balance data across your nodes based on the access patterns it observes.<br>Run your test for at least 10 minutes. This step lets Cloud Bigtable further optimize your data, and it helps ensure that you will test reads from disk as well as cached reads from memory.<br>Source(s):<br>Understanding BigTable Performance: https://cloud.google.com/bigtable/docs/performance"
    },
    {
        // Question 55
        id: 55,
        question: "Your team decided to use BigTable for storing event data. The engineer responsible of launching and testing the instance has reported a slower performance than expected by Google Cloud documentation. Which of the following could be a factor for the slow performance? (Choose 3)",
        options: [
            "A. The rows in the tables tested contain high number of cells.",
            "B. The rows in the tables have large data size.",
            "C. Test data size is over 300GB.",
            "D. The instance uses SSD storage type.",
            "E. Heavy pre-test was done before the testing started.",
            "F. The instance doesn’t have enough nodes."
        ],
        answer: "ABF",
        explanation: "There are several factors that can cause Cloud Bigtable to perform more slowly than expected:<br>The table's schema is not designed correctly. To get good performance from Cloud BigTable, it's essential to design a schema that makes it possible to distribute reads and writes evenly across each table.<br>The workload isn't appropriate for Cloud BigTable. If you test with a small amount (< 300 GB) of data, or if you test for a very short period of time (seconds rather than minutes or hours), Cloud BigTable won't be able to balance your data in a way that gives you good performance.<br>The rows in your Cloud Bigtable table contain large amounts of data. You can read and write larger amounts of data per row, but increasing the amount of data per row will also reduce the number of rows per second.<br>The rows in your Cloud Bigtable table contain a very large number of cells. It takes time for Cloud Bigtable to process each cell in a row. Also, each cell adds some overhead to the amount of data that's stored in your table and sent over the network.<br>The Cloud Bigtable cluster doesn't have enough nodes. If your Cloud Bigtable cluster is overloaded, adding more nodes can improve performance.<br>The Cloud Bigtable cluster was scaled up or scaled down recently. After you change the number of nodes in a cluster, it can take up to 20 minutes under load before you see an improvement in the cluster's performance.<br>The Cloud Bigtable cluster uses HDD disks. In most cases, your cluster should use SSD disks, which have significantly better performance than HDD disks.<br>The Cloud Bigtable instance is a development instance. Development instance's performance is equivalent to an instance with one single-node cluster, it will not perform as well as a production instance.<br>There are issues with the network connection. Network issues can reduce throughput and cause reads and writes to take longer than usual.<br>Source(s):<br>Understanding BigTable Performance: https://cloud.google.com/bigtable/docs/performance"
    },
    {
        // Question 56
        id: 56,
        question: "A fast-food chain restaurant wants to detect the different meal photos its customers upload to the different social media platforms tagged with their name in order to know what meals customers like and share the most for better quality analysis.<br>It asks your advice on developing such solution for them. However, they want it to be available and in production the soonest possible because they expect a high activity on their social media pages by the next public holiday which is coming in 2 weeks and marketing team finds it a great opportunity to receive feedback based on what customers say online.<br>What is the best approach for this?",
        options: [
            "A. Use AutoML Vision to build and train the model by using all the training photos you collected from food-chain’s social media pages for better results.",
            "B. Use AutoML Vision to build and train the model by using 50-70% of training photos you collected from food-chain’s social media pages while the rest of training set is to test and tune the model.",
            "C. Use Dataproc to build the model using SparkML. Use 50-70% of training photos you collected to train the model and the rest to test and tune the model. Deploy the model using Cloud ML Engine.",
            "D. Use Cloud ML Engine with TensorFlow to build the model. Use all training photos you collected to train the model. Deploy the model using Cloud ML Engine."
        ],
        answer: "B",
        explanation: "Since you have a very short time to build, train and deploy the model, building your own model can be time-consuming and not in your favor. Google provides a great ML service called AutoML to quickly build models for you. AutoML Vision is one of its products which you can start with a training set as little as a dozen photo samples and AutoML takes care of the rest.<br>Answer A is incorrect: AutoML Vision is the right choice. However, training the model with whole training set is not the right approach in Machine Learning because you ought to test the model before considering it accurate enough for production. Usually, training set is split into 70-30% sets, first for training while the second is for testing and tuning the model’s parameters.<br>Answer C is incorrect: Using any approach other than AutoML can be time-consuming and with such tight deadline, it’s not the best approach.<br>Answer D is incorrect: Using this approach can also be time-consuming and using the whole training set for training is not a best practice as explained before.<br>Thus, the best approach for this scenario is Answer B.<br>Source(s):<br>Google Cloud AutoML: https://cloud.google.com/automl/ <br>Cloud Machine Learning Engine: https://cloud.google.com/ml-engine/"
    },
    {
        // Question 57
        id: 57,
        question: "A video-on-demand company wants to generate subtitles for its content on the web. They have over 20,000 hours of content to be subtitled and their current subtitle team cannot catch up with the every- growing video hours the content team keep adding to the website library. They want a solution to automate this as man power can be expensive and may take long time.<br>Which service of the following can greatly help the automation of video subtitles?",
        options: [
            "A. Cloud Natural Language.",
            "B. Cloud Speech-to-Text.",
            "C. AutoML Vision API.",
            "D. Machine Learning Engine."
        ],
        answer: "B",
        explanation: "Answer A is incorrect: Cloud natural language service is to derive insights from unstructured text revealing meaning of the documents and categorize articles. It won’t help extracting captions from videos.<br> Answer B is correct: Cloud Speech-to-Text is a service to generate captions from videos by detecting speakers language and speech.<br>Answer C is incorrect: AutoML Vision API is a service to recognize and derive insights from images by either using pre-trained models or training a custom model based on a set of photographics.<br>Answer D is incorrect: Machine Learning Engine is a managed service letting developers and scientists build their own models and run them in production. This means, you have to build your own model to generate text from videos which needs much effort and experience to build such model. So, it’s not a practical solution for this scenario.<br>Source(s):<br>Google NLP: https://cloud.google.com/natural-language/ <br>Google Machine Learning Engine: https://cloud.google.com/ml-engine/ <br>Google Vision API: https://cloud.google.com/vision <br>Google Speech-to-Text API: https://cloud.google.com/speech-to-text/"
    },
    {
        // Question 58
        id: 58,
        question: "A financial services firm providing products such as credit cards and bank loans receives thousands of online applications from clients applying for their products. Because it takes a lot of effort to scan and check all applications if they meet the minimum requirements for the products they are applying for, they want to build a machine learning model takes application fields like annual income, marital status, date of birth, occupation and other attributes as input and finds out if the applicant is qualified for the product the client applies for.<br>What is the machine learning technique will help build such model?",
        options: [
            "A. Regression",
            "B. Classification",
            "C. Clustering",
            "D. Reinforcement learning"
        ],
        answer: "B",
        explanation: "A regression problem is a problem which its output variable is of continuous value. Problems which finds out about variables such as weights, prices or age are considered regression problems.<br>A classification problem is a problem which the output variable is a category. Examples of classification problems are finding a passenger’s nationality, detect if a patient is diagnosed with a disease or if an applicant is qualified for a job interview.<br>Regression and classification are supervised learning problems. It means, the machine learns from past experiences by training it on a labeled data set. A training set is a set of rows with input and output parameters. The machine then learns from the training set and improves its parameters for better detection.<br>Clustering is an unsupervised learning method. An unsupervised learning is a method to find references between input data without labeled output. The purpose is to find meaningful structure between the input sets with similar features and group them. Clustering is the method of grouping data points share similarities and separating dissimilar points to other groups. Examples of clustering applications are customer segmentation (new, frequent, loyal, ..), city land value and detecting anomalies in network traffic.<br>Reinforcement learning is a technique which a machine takes actions without training sets to reach the highest rewards possible. The agent learns from trial and decides what to do to perform a given task without supervision. The task punishes the agent for a wrong action and rewards it for achieving the task. Examples of reinforcement learning is asking an agent to play a maze game to reach the exit with traps along the way or making an agent play a video game and win a racing game.<br>From the explanation above, we can see the scenario problem which finding if a client is qualified for a product is a classification problem. So, answer B is correct."
    },
    {
        // Question 59
        id: 59,
        question: "You have built a machine learning model to classify if a customer would buy a certain product when recommended by the company’s website. You trained the model with a sample set. Upon testing the model, you found out only 28% of the testing sets are actually true positives and the model isn’t very accurate. You figured out the model is over-fitted. How would you solve this?",
        options: [
            "A. Increase training data, increase feature parameters & increase regularization.",
            "B. Decrease training data, decrease feature parameters & increase regularization.",
            "C. Increase training data, decrease feature parameters & increase regularization.",
            "D. Increase training data, decrease feature parameters & decrease regularization."
        ],
        answer: "C",
        explanation: "Overfitting happens when a model performs well on a training set, generating only a small error, while giving wrong output for the test set. This happens because the model is only picking up specific features input found in the training set instead of picking out general features of the given training set.<br>To solve overfitting, the following would help improving the model’s quality:<br>Increase the number of examples, the more data a model is trained with, the more use cases the model can be training on and better improves its predictions.<br>Tune hyperparameters which is related to number and size of hidden layers (for neural networks), and regularization, which means using techniques to make your model simpler such as using dropout method to remove neuron networks or adding “penalty” parameters to the cost function.<br>Remove features by removing irrelevant features. Feature engineering is a wide subject and feature selection is a critical part of building and training a model. Some algorithms have built- in feature selection, but in some cases, data scientists need to cherry-pick or manually select or remove features for debugging and finding the best model output.<br>From the brief explanation, to solve the overfitting problem in the scenario, you need to:<br>Increase the training set.<br>Decrease features parameters.<br>Increase regularization.<br>Hence, answer C is correct.<br>Source(s):<br>Building a serverless Machine learning model: https://cloud.google.com/solutions/building-a- serverless-ml-model"
    },
    {
        // Question 60
        id: 60,
        question: "A coach line bus service company wants to predict how many passengers they expect to book for tickets on their buses for the upcoming months. This helps the company to know how many buses they need to be in service for maintenance and fuel and how many drivers to be available. The company has data sets of all booked tickets since its launch in 1968 and it allows private sharing of the data if this helps the prediction process.<br>You will build the machine learning model for the coach line company. Which technique you will use to predict the number of passengers in the next months?",
        options: [
            "A. Regression.",
            "B. Association.",
            "C. Classification.",
            "D. Clustering."
        ],
        answer: "A",
        explanation: "A regression problem is a problem which its output variable is of continuous value. Problems which finds out about variables such as weights, prices or age are considered regression problems.<br>A classification problem is a problem which the output variable is a category. Examples of classification problems are finding a passenger’s nationality, detect if a patient is diagnosed with a disease or if an applicant is qualified for a job interview.<br>Regression and classification are supervised learning problems. It means, the machine learns from past experiences by training it on a labeled data set. A training set is a set of rows with input and output parameters. The machine then learns from the training set and improves its parameters for better detection.<br>Association is a rule-learning technique for discovering interesting relations between variables in large data sets. Example of association rules is discovering regularities between products in large-scale transaction data recorded by point-of-sales for a retail chain store.<br>Clustering is an unsupervised learning method. An unsupervised learning is a method to find references between input data without labeled output. The purpose is to find meaningful structure between the input sets with similar features and group them. Clustering is the method of grouping data points share similarities and separating dissimilar points to other groups. Examples of clustering applications are customer segmentation (new, frequent, loyal, ..), city land value and detecting anomalies in network traffic.<br>From the explanation above, the technique to help solving the scenario is Answer A: Regression."
    },
    {
        // Question 61
        id: 61,
        question: "You are building a machine learning model to solve a classification problem. The model should identify if a patient has a tumor. Based on statistics, only 1.4% of scanned patients are identified positive for tumor.<br>You want to make sure the machine learning model is able to correctly identify patients with tumor. What is the technique to examine the effectiveness of the model?",
        options: [
            "A. Gradient Descent",
            "B. Precision",
            "C. Recall",
            "D. Dropout"
        ],
        answer: "C",
        explanation: "Precision is the formula to check how accurate the model is when most of the output are positives. In other words, if most of the output is yes.<br>Recall: is the formula to check how accurate the model is when most of the output are negatives. In other words, if most of the output is no.<br>Gradient Descent is an optimization algorithm to find the minimal value of a function. Gradient descent is used to find the minimal minimal RMSE or cost function.<br>Dropout is a regularization method to remove random selection of fixed number of units in a neural network layer. More units dropped out, the stronger the regularization.<br>From the description, answers A & D are unrelated so they are incorrect.<br>Since very few cases are positively diagnosed with tumor, recall formula should be used to calculate the accuracy of the model. So, answer C is the correct answer.<br>Source(s):<br>Precision & Recall: https://developers.google.com/machine-learning/crash-course/classification/ precision-and-recall<br>Gradient Descent: https://en.wikipedia.org/wiki/Gradient_descent <br>Dropout Regularization: https://developers.google.com/machine-learning/glossary/"
    },
    {
        // Question 62
        id: 62,
        question: "Which of the following vectors are sparse vectors and used for categorical features:",
        options: [
            "A. [1, 0, 1, 0]",
            "B. [1, 0, 0, 1]",
            "C. [0, 1, 0]",
            "D. [0, 1, 0, 3, 0]"
        ],
        answer: "C",
        explanation: "Sparse vectors are used to represent categorical features when using ‘one-hot’ encoding. They are called ‘sparse’ because they contain many zeros. Sparse vectors have only a single 1.<br>From the answers, only answer C matches the description of sparse vectors.<br>Source(s):<br>One-Hot Encoding: https://en.wikipedia.org/wiki/One-hot"
    },
    {
        // Question 63
        id: 63,
        question: "You are training a Tensorflow deep neural network model. The model should recognize different type of cars and return the brand and type of the car from the image input. While training, you decided to perform hyper-parameter tuning to optimize the model.<br>Which of the variables are used for hyperparameter tuning? (Choose 2)",
        options: [
            "A. Number of nodes in hidden layers",
            "B. Number of features",
            "C. Number of hidden layers",
            "D. Weight values"
        ],
        answer: "AC",
        explanation: "hyperparameters are the variables govern the training process itself. For example, part of setting up a deep neural network is deciding how many hidden layers of nodes to use between the input layer and the output layer, and how many nodes each layer should use. These variables are not directly related to the training data. They are configuration variables. Note that parameters change during a training job, while hyperparameters are usually constant during a job.<br>From the description, the right answers are A & C.<br>Answer B is incorrect: Feature numbers are set by feature engineering, not hyperparameter tuning.<br>Answer D is incorrect: Weight values are set when training the model.<br>Source(s):<br>Hyperparameter Tuning: https://cloud.google.com/ml-engine/docs/tensorflow/hyperparameter-tuning- overview"
    },
    {
        // Question 64
        id: 64,
        question: "Data scientists of your company has finished building their deep neural network model. As a data engineer, you are asked to deploy the model to production. Which of the following products in Google Cloud you would use to host the model?",
        options: [
            "A. Google Kubernetes Engine",
            "B. Google ML Deep Learning VM",
            "C. Google Container Registry",
            "D. Google Machine Learning Engine"
        ],
        answer: "D",
        explanation: "Google Kubernetes Engine is a managed, production-ready environment for deploying containerized applications. It brings our latest innovations in developer productivity, resource efficiency, automated operations, and open source flexibility to accelerate your time to market.<br>Answer A is incorrect: GKE is a service to deploy and scale docker containers in the cloud. You need to build the docker image for your model if you want to use it, which is not recommended for this scenario.<br>Answer B is incorrect: Google ML Deep Learning VM is a service offers pre-configured virtual machines for deep learning applications. It is not used to deploy ML models to production.<br>Answer C is incorrect: Google Container Registry is a service to store, manage, and secure your Docker container images. It does not for deploying machine learning models.<br>Cloud Machine Learning Engine is a managed service that lets developers and data scientists build and run superior machine learning models in production. Cloud ML Engine offers training and prediction services, which can be used together or individually.<br>Answer D is correct: Google ML Engine is the service to use to deploy your machine learning models.<br>Source(s):<br>Google Kubernetes Engine: https://cloud.google.com/kubernetes-engine/ <br>Google Machine Learning Engine: https://cloud.google.com/ml-engine/ <br>Google ML Deep Learning VM: https://cloud.google.com/deep-learning-vm/"
    },
    {
        // Question 65
        id: 65,
        question: "Data science team has successfully built a deep neural network machine learning model to detect car plate numbers entering and exiting a parking lot of a high-rise condominium. The model was built using Tensorflow and the model was exported as SavedModel. As a data engineer, you are assigned to deploy their model. The company is using Google Cloud for their project.<br>Which approach is best for deploying the detection model?",
        options: [
            "A. Upload SavedModel object to Google Storage. Use Dataproc with Spark ML to use the model by accessing it using Google Storage Connector.",
            "B. Deploy the model to Google Kubernetes Engine after wrapping SavedModel as docker image and uploading it to Google Container Registry.",
            "C. Deploy the model to Cloud ML Engine after asking data science team to convert the model to binary format using PyTorch.",
            "D. Deploy the model exported as SavedModel directly to Cloud ML Engine."
        ],
        answer: "D",
        explanation: "You can export your SavedModel directly to Cloud ML Engine. There is no need to take any other approach as it is more cumbersome.<br>Answer A is incorrect: This approach is too complicated and not necessary for this scenario.<br>Answer B is incorrect: There is no need to go through converting SavedModel to a docker image and use GKE. It’s not the recommended approach by Google anyway.<br>Answer C: No need to convert the model to any other format. Cloud ML Engine supports Tensorflow and SavedModel format.<br>Source(s):<br>Google ML Engine: https://cloud.google.com/ml-engine/docs/tensorflow/prediction-overview <br>Deploying ML models to Google Cloud:<br>https://cloud.google.com/ml-engine/docs/tensorflow/deploying-models"
    },
    {
        // Question 66
        id: 66,
        question: "You are asked by the data science team to deploy their Tensorflow deep neural network model to the cloud. You choose Cloud ML Engine as the product to deploy the model with. Upon checking the available tiers, you decided to choose a custom tier launching a cluster with custom specifications to cover the requirements provided to deploy the model.<br>Which of the following specifications you can set for the ML Engine cluster? (Choose 2)",
        options: [
            "A. workerCount",
            "B. masterCount",
            "C. masterCPU",
            "D. workerType"
        ],
        answer: "AD",
        explanation: "The Custom tier is not a set tier, but rather enables you to use your own cluster specification. When you use this tier, set values to configure your processing cluster according to these guidelines:<br>You must set TrainingInput.masterType to specify the type of machine to use for your master node. This is the only required setting. See the machine types described below.<br>You may set TrainingInput.workerCount to specify the number of workers to use. If you specify one or more workers, you must also set TrainingInput.workerType to specify the type of machine to use for your worker nodes.<br>You may set TrainingInput.parameterServerCount to specify the number of parameter servers to use. If you specify one or more parameter servers, you must also set TrainingInput.parameterServerType to specify the type of machine to use for your parameter servers.<br>From the explanation, specifications can be set from the answers are workerCount & workerType.<br>Source(s):<br>Specifying Machine Types or Scale Tiers: https://cloud.google.com/ml-engine/docs/tensorflow/machine-types"
    },
    {
        // Question 67
        id: 67,
        question: "You launched a Dataproc cluster to perform some Apache Spark jobs. You are looking for a method to securely transfer web traffic data between your machine’s web browser and Dataproc cluster.<br>How can you achieve this?",
        options: [
            "A. FTP connection",
            "B. SSH tunnel",
            "C. VPN connection",
            "D. Incognito mode"
        ],
        answer: "B",
        explanation: "Some of the core open source components included with Google Cloud Dataproc clusters, such as Apache Hadoop and Apache Spark, provide web interfaces. These interfaces can be used to manage and monitor cluster resources and facilities, such as the YARN resource manager, the Hadoop Distributed File System (HDFS), MapReduce, and Spark. Other components or applications that you install on your cluster may also provide web interfaces.<br>It is recommended to create an SSH tunnel for a secure connection between your web browser and Dataproc’s master node. SSH tunnel supports traffic proxying using the SOCKS protocol. To configure your browser to use the proxy, start a new browser session with proxy server parameters.<br>Source(s):<br>Dataproc – Cluster Web Interfaces: https://cloud.google.com/dataproc/docs/concepts/accessing/cluster- web-interfaces#connecting_to_the_web_interfaces"
    },
    {
        // Question 68
        id: 68,
        question: "There is a plan by data team to migrate the data warehouse to BigQuery. After the migration is done, you are tasked to assign each user the right role to access datasets in BigQuery. You have the following teams need to access data warehouse:<br>Data analysts: They need read/write access to data. They should not create or delete datasets.<br>Data engineers: They are admins on the data warehouse. They need full privileges on data sets.<br>Dev team: They need read access only to the datasets. They can list the project’s data sets and tables.<br>How would you assign the roles to each team?",
        options: [
            "A. Assign admin role to data engineer group. Assign owner role to data analyst group. Assign viewer role to dev team group.",
            "B. Assign owner role to data engineer group. Assign editor role to data analyst group. Assign user role to dev team group.",
            "C. Assign admin role to data engineer group. Assign editor role to data analyst group. Assign viewer role to dev team group.",
            "D. Assign owner role to data engineer group. Assign editor role to data analyst group. Assign viewer role to dev team group."
        ],
        answer: "C",
        explanation: "Here is the table of BigQuery roles and each role’s permissions:<br><br><img src='/static/images/dewlq68.jpg'><br><br>From the list, we can assign each group the right role:<br><br>Data Analysts: They need read & write access to tables without permissions to create & delete data sets. Thus, editor role is assigned to this group.<br>Data engineers: It’s stated they will be admins on BigQuery. Admin role should be assigned to this gorup.<br>Dev team: They need read access to data and be able to list tables and datasets. Viewer role should be assigned to this group.<br>Answer A is incorrect: Owner role is too broad for data analysts.<br>Answer B is incorrect: Data engineers need admin role. User role doesn’t allow dev team to get tables data.<br>Answer D is incorrect: As B, data engineers need admin role.<br>Source(s):<br>BigQuery – Access Control: https://cloud.google.com/bigquery/docs/access-control"
    },
    {
        // Question 69
        id: 69,
        question: "Your company uses BigQuery as the main data warehouse. Data warehouse is divided into several datasets based on data origin and profile. Data analysts want to access certain data resides in a dataset considered sensitive and should not be openly available to all users. Security team allows only certain tables with limited columns for data analysts to read from.<br>Which of the following actions will you take?",
        options: [
            "A. Create a new dataset in BigQuery. Create authorized views on tables data analysts want to read from. Grant viewer role to data analysts on new dataset.",
            "B. Create authorized views on tables data analysts want to read from on the same dataset tables reside in. Grant viewer role to marketing team on the views.",
            "C. Grant data analysts viewer role on these specific tables with specifying what columns to be read from.",
            "D. Create a new dataset in BigQuery. Grant viewer role to data analysts on the new dataset. Copy the tables from the current dataset to the new one with only columns allowed."
        ],
        answer: "A",
        explanation: "For BigQuery roles, lowest permission available is dataset level. You CANNOT set permissions on table level.<br>To restrict access to a table, you may use authorized views. An authorized view allows you to share query results with particular users and groups without giving them access to the underlying tables. You can also use the view's SQL query to restrict the columns (fields) the users are able to query.<br>When you create the view, it must be created in a dataset separate from the source data queried by the view. Because you can assign access controls only at the dataset level, if the view is created in the same dataset as the source data, your users would have access to both the view and the data.<br>Answer B is incorrect: Authorized views should be created in a separate dataset from tables. You cannot grant permissions on only authorized views as lowest permission level is data set.<br>Answer C is incorrect: You cannot grant permissions on table level in BigQuery. Lowest level in BigQuery is dataset level.<br>Answer D is incorrect: No need to create tables when you can use authorized views.<br>Source(s):<br>BigQuery – Authorized Views: https://cloud.google.com/bigquery/docs/authorized-views"
    },
    {
        // Question 70
        id: 70,
        question: "You are writing highly-confidential data related to customers’ personally identifiable information (PII). The security team is concerned about how secure the network connection between the instances and Google Storage buckets. Security team proposes to use encryption keys generated by security team.<br>Those keys will be rotated every 30 days for more security.<br>As a data engineer, what should you do to satisfy security team’s requirement?",
        options: [
            "A. Upload encryption key provided by security team to Cloud Key Management Service (KMS) and use the key to encrypt data when writing to Google Storage.",
            "B. Create symmetric keys using Cloud Key Management Service (KMS) and use those to encrypt data when writing to Google Storage. Create new keys every 30 days.",
            "C. Create asymmetric keys using Cloud Key Management Service (KMS) and use those to encrypt data when writing to Google Storage. Create new keys every 30 days.",
            "D. Supply the encryption key provided by security team and reference it as part of the API service calls to encrypt data in Cloud Storage."
        ],
        answer: "D",
        explanation: "Customer-Supplied Encryption Keys (CSEK) are a feature in Google Cloud Storage and Google Compute Engine. If you supply your own encryption keys, Google uses your key to protect the Google- generated keys used to encrypt and decrypt your data.<br>When you use Customer-Supplied Encryption Keys in Cloud Storage, you provide a raw CSEK as part of an API call. This key is transmitted from the Google front end to the storage system’s memory. This key is used as the key encryption key in Google Cloud Storage for your data.<br><br><img src='/static/images/dewlq70.png'><br><br>The raw CSEK is used to unwrap wrapped chunk keys, to create raw chunk keys in memory. These are used to decrypt data chunks stored in the storage systems. These keys are used as the data encryption keys (DEK) in Google Cloud Storage for your data.<br>Answer A is incorrect: Security team does not recommend storing encryption key in the cloud.<br>Answer B & C are incorrect: Security team doesn’t allow using generated keys from KMS.<br>Source(s):<br>Customer-Supplied Encryption Keys: https://cloud.google.com/security/encryption-at-rest/customer- supplied-encryption-keys/"
    },
    {
        // Question 71
        id: 71,
        question: "You have about 20TB of data which is not accessed and the data team decided to archive them in the cloud. The team is looking for a storage solution that is highly available with minimum costs. On the other hand, the data may be accessed a few times a year for reconciliation purposes.<br>Which of the following choices best satisfy data team’s requirements?",
        options: [
            "A. Google Storage Standard.",
            "B. Google Storage Nearline.",
            "C. Google Storage Coldline.",
            "D. Google Storage Archive."
        ],
        answer: "B",
        explanation: "Google Cloud Storage Nearline is a low-cost, highly durable storage service for storing infrequently accessed data. Nearline Storage is ideal for data you plan to read or modify on average once a month or less.<br>Google Cloud Storage Coldline is a very-low-cost, highly durable storage service for data archiving, online backup, and disaster recovery. Coldline Storage is the best choice for data that you plan to access at most once a year, due to its slightly lower availability, 90-day minimum storage duration, costs for data access, and higher per-operation costs.<br>Answer A is incorrect: Google Storage Standard is not a cheap option for storing archive data. There are other options to store archive data cheaper.<br>Answer C is incorrect: Scenario mentions the need to access the data several times a year. Hence, Coldline is not a suitable option because Coldline is to plan archive data accessed at most once a year.<br>Answer D is incorrect: There is no such storage class called 'Archive.'<br>Source(s):<br>Google Storage Classes: https://cloud.google.com/storage/docs/storage-classes"
    },
    {
        // Question 72
        id: 72,
        question: "You have a complex data pipeline which has a combination of shell scripts, python code and spark jobs. These task are scheduled by cron jobs to run. The problem with this approach is, in case of failure, the whole pipeline breaks and failure control with stopping next tasks from running after a certain task fails and re-running the pipeline again is difficult and messy. You want a solution which can manage the pipeline’s different jobs to be failure-resilient, scalable and easy to monitor.<br>What approach is best for this scenario?",
        options: [
            "A. Use Cloud Composer to orchestrate the pipeline workflow.",
            "B. Use Dataproc for Apache Spark jobs and migrate all other tasks to use Apache Spark instead.",
            "C. Use Cloud Scheduler to schedule pipeline’s tasks.",
            "D. Use Dataflow to re-build the data pipeline."
        ],
        answer: "A",
        explanation: "Cloud Composer is a fully managed workflow orchestration service built on Apache Airflow. Cloud composer is built specifically to schedule and monitor workflows and take required actions. You can use Cloud Composer to orchestrate diverse task types, whether they are shell scripts, python code or spark jobs.<br>Answer B is incorrect: Dataproc does not orchestrate workflows and migrating all tasks can be a difficult job.<br>Answer C is incorrect: Using Cloud Scheduler does not solve the core problem which is how to manage the workflow.<br>Answer D is incorrect: Dataflow pipelines are effective for simple and direct workflows which are similar in environment and purpose. This scenario is dealing with a complicated pipeline with various tech and code snippets used.<br>Source(s):<br>Cloud Composer: https://cloud.google.com/composer/"
    },
    {
        // Question 73
        id: 73,
        question: "A social media platform stores various details of their platform users such as session login time, URLs visited, activities on platform and other logs. With GDPR (General Data Protection Regulation) compliance to be officially implemented, the platform now allows users to download their activity logs from their profile settings which they can click a button to call an API to generate a full report.<br>Recently, users are complaining timeouts after 60 seconds of requesting to download their activity logs at peak hours when the platform has the most traffic. They have to try for several minutes or even hours for the API to return their report available for download.<br>How can you solve this issue?",
        options: [
            "A. Increase timeout for API at peak times to 120 seconds. If it keeps failing, try increasing the timeout until the issue is resolved.",
            "B. Build a Dataflow pipeline to generate daily reports of users’ activity logs. Users can download those daily reports whenever they want to.",
            "C. Migrate data source to Cloud Spanner for horizontal scaling to avoid query timeouts.",
            "D. Use Pub/sub to pull the requests for activity logs from users. Send a link to users by their email addresses with a temporary download link for them to access their report."
        ],
        answer: "D",
        explanation: "Cloud Pub/Sub is a service to ingest event streams at any scale. It’s scalable and reliable for stream analytics and event-driven computing systems.<br>Pub/sub is a good product to de-couple a system’s components so they communicate with each other asymmetrically. From the scenario shown here, instead of directly calling the API to export required report which puts great loads on the API and hence the timeouts faced by users. Instead, the platform can “publish” messages to a “topic” related to exporting activity log reports sending the required parameters such as user ID and custom settings such as date range and what data to export. The API can be switched to be a “subscriber” which receives the messages sent and processes each message asymmetrically to generate the report, then sends the download link to the user’s mailbox when ready.<br>Hence, answer D is correct.<br>Answer A is incorrect: Increasing timeout isn’t a scalable solution and it may keep occurring eventually when more and more users join the platform.<br>Answer B is incorect: While this would solve the timeout issues, generating daily reports for users can be costly as more users join, knowing that requesting activity log reports are a non-frequent action and this costs both compute and storage resources. This solution also doesn’t provide flexibility with what parameters the report is generated on such as date range and other custom metrics.<br>Answer C is incorrect: This solution has several issues. First, we’re assuming the data source is a relational database, which can be unlikely since NoSQL databases better perform for massive log input which uses the user ID as a key to reach the data. Second, Cloud Spanner isn’t a cheap solution for a service not frequently used.<br>Source(s):<br>Google Pub/Sub: https://cloud.google.com/pubsub/docs/overview"
    },
    {
        // Question 74
        id: 74,
        question: "You are building a streaming data pipeline for a VOD (Video-on-demand) service company. It receives event data from its player app sending details of what users are watching, video state (play, pause, loading) and other metrics can be derived from the device used such as OS, brand and screen resolution.<br>The event data collected should be analyzed by most recent data for quality check and further action in case of streaming issues. How can you ingest the stream data?",
        options: [
            "A. Use Cloud Pub/Sub to ingest the events and attach a unique ID to every event in the publisher.",
            "B. Use Cloud Pub/Sub to ingest the events and attach timestamp to every event in the publisher.",
            "C. Use Cloud Pub/Sub to ingest the events and store them to BigTable without any enrichment. Pub/Sub publisher automatically adds timestamp to messages before publishing to subscribers.",
            "D. Launch a compute engine and install Apache Kafka to ingest the event stream."
        ],
        answer: "B",
        explanation: "Cloud Pub/Sub is a service to ingest event streams at any scale. It’s scalable and reliable for stream analytics and event-driven computing systems.<br>The scenario requires analyzing most recent data collected from events. Pub/Sub does NOT add timestamp to messages by default. You need to add timestamp to messages in order to fetch the most recent event data. Thus, answer B is correct.<br>Answer A is incorrect: Adding a unique ID to every event does not help analyzing the data.<br>Answer C is incorrect: Enrichment is required for event data. As stated, timestamps should be ingested to every message in the publisher.<br>Answer D is incorrect: There is no need to use Apache Kafka. Cloud Pub/Sub can do the job.<br>Source(s): https://cloud.google.com/pubsub/docs/ordering"
    },
    {
        // Question 75
        id: 75,
        question: "Data analysts are using Google Data Studio to build dashboards reading data from BigQuery as a data source. The CTO wants to minimize the costs of BigQuery queries run by dashboards. You suggested enabling predictive (pre-fetch) caching.<br>Which of the following will minimize the costs?",
        options: [
            "A. Restrict data fetch to be once every 24 hours and make sure Data Studio report has view credentials on the BigQuery dataset.",
            "B. Enable pre-fetch caching for the report and make sure Data Studio report has view credentials on the BigQuery dataset.",
            "C. Enable pre-fetch caching for the report and make sure Data Studio report is an owner on the BigQuery dataset.",
            "D. Restrict data fetch to be once every 24 hours and make sure Data Studio report is an owner on the BigQuery dataset."
        ],
        answer: "C",
        explanation: "The predictive (pre-fetch) cache analyzes the dimensions, metrics, and filter controls contained in the report, and predicts the possible queries. Data Studio then executes those queries in the background and stores the responses in the predictive cache. When a query can't be answered by the responsive cache, Data Studio tries to answer it using this predicted data. The predictive cache is limited in size, so it's possible your report can issue queries not already contained in the cache. If the query can't be answered by the predictive cache, Data Studio requests the data from the underlying data set.<br>Limitation: The predictive (pre-fetch) cache is only active for data sources that use owner's credentials to access the underlying data.<br>Answer A is incorrect: Data Studio caching maximum period is 12 hours.<br>Answer B is incorrect: As stated in the description, owner credentials should be granted on data sets.<br>Answer D is incorrect: Same as A, data fetch caching maximum period is 12 hours.<br>Source(s):<br>Data Studio – Manage Data Freshness: https://support.google.com/datastudio/answer/7020039?hl=en"
    },
    {
        // Question 76
        id: 76,
        question: "You have deployed a Tensorflow machine learning model using Cloud Machine Learning Engine. The model should be able to handle high volume of instances in a job to run complex models. The model should also write the output to Google Storage.<br>Which of the following approaches is recommended?",
        options: [
            "A. Use online prediction when using the model. Batch prediction supports asynchronous requests.",
            "B. Use batch prediction when using the model. Batch prediction supports asynchronous requests.",
            "C. Use batch prediction when using the model to return the results as soon as possible.",
            "D. Use online prediction when using the model to return the results as soon as possible."
        ],
        answer: "B",
        explanation: "<img src='/static/images/dewlq76.jpg'>AI Platform provides two ways to get predictions from trained models: online prediction (sometimes called HTTP prediction), and batch prediction. In both cases, you pass input data to a cloud-hosted machine-learning model and get inferences for each data instance. The differences are shown in the following table:<br>Batch prediction can handle high volume of instances in a job to run complex models. It also writes the output to Google Storage by specified location.<br>Answer A & D are incorrect: Online prediction doesn’t support handling high volume of instances per job and doesn’t write output to Google Storage.<br>Answer C is incorrect: Batch prediction doesn’t return the output as soon as possible, it supports asynchronous requests.<br>Source(s):<br>Online vs. Batch Prediction: https://cloud.google.com/ml-engine/docs/tensorflow/online-vs-batch- prediction"
    },
    {
        // Question 77
        id: 77,
        question: "A facility receives events from sensors return current temperature based on sensor’s location. You are asked to build a pipeline to aggregate the incoming events to get the average temperature every 60 seconds for each region.",
        options: [
            "A. Fixed-time window with duration of 60 seconds.",
            "B. Sliding-time window with duration of 60 seconds.",
            "C. Per-session window with time gap duration of 60 seconds.",
            "D. Single global window with time-based trigger of 60 seconds."
        ],
        answer: "B",
        explanation: "<img src='/static/images/dewlq77.jpg'>A sliding time window uses time intervals in the data stream to define bundles of data. However, with sliding time windowing, the windows overlap. Each window might capture five minutes worth of data, but a new window starts every ten seconds. The frequency with which sliding windows begin is called the period. Therefore, our example would have a window size of five minutes and a period of ten seconds.<br>In this scenario, we want to get the average temperature per region by aggregating all events coming from sensors of that region. Sensor ID can be the key row. Sliding-time window aggregates event data in time window of 5 minutes, with sliding window of 60 seconds.<br>Source(s):<br>Windowing Functions: https://cloud.google.com/dataflow/model/windowing#windowing-functions"
    },
    {
        // Question 78
        id: 78, 
        question: "A gaming app allows up to 32 players to compete in “battle royale” mode in a single gaming session. Recently, players are sending feedback complaining some users are idle and not competing in the session which breaks the experience for them. The development team decided to end the session for players who are idle for more than 60 seconds to solve this problem.<br>Gaming app sends events every second contain player’s state (active, idle, pending) and other details. You want to build a Dataflow pipeline which aggregates these events so idle players can be detected in the time frame specified by development team.<br>Which windowing function you should choose to design the pipeline?",
        options: [
            "A. Fixed-time window with duration of 60 seconds.",
            "B. Sliding-time window with duration of 60 seconds.",
            "C. Per-session window with time gap duration of 60 seconds.",
            "D. Single global window with time-based trigger of 60 seconds."
        ],
        answer: "C",
        explanation: "A session window function defines windows around areas of concentration in the data. Session windowing is useful for data that is irregularly distributed with respect to time; for example, a data stream representing user mouse activity may have long periods of idle time interspersed with high concentrations of clicks. Session windowing groups the high concentrations of data into separate windows and filters out the idle sections of the data stream. Note that session windowing applies on a per-key basis: That is, grouping into sessions only takes into account data that has the same key. Each key in your data collection will therefore be grouped into disjoint windows of differing sizes.<br><br><img src='/static/images/dewlq78.png'><br><br>For this scenario, per-session window is the function to choose to build Dataflow pipeline.<br>Source(s):<br>Windowing Functions: https://cloud.google.com/dataflow/model/windowing#windowing-functions"
    },
    {
        // Question 79
        id: 79,
        question: "Which of the following statements is not true about Dataflow?",
        options: [
            "A. Dataflow supports composite triggers which support both time & data events.",
            "B. Default windowing behavior is fixed-time window.",
            "C. Compute engine instances need dataflow.worker permission to run dataflow pipelines.",
            "D. Dataflow supports both batching & streaming."
        ],
        answer: "B",
        explanation: "By default, all data in a PCollection is assigned to a single global window. If your data set is of a fixed size, you can leave the global window default for your PCollection. If the elements of your PCollection all belong to a single global window, your pipeline will execute much like a batch processing job (as in MapReduce-based processing).<br>Source(s):<br>Windowing Functions: https://cloud.google.com/dataflow/model/windowing#windowing-functions"
    },
    {
        // Question 80
        id: 80,
        question: "You have a Dataflow pipeline which streams data to be stored to BigTable after it has been transformed and enriched. Development team needs to modify the transformation code based on client’s needs. The pipeline is in production which keeps streaming and any interruption to the pipeline may lead to data loss or unexpected output.<br>How can you make sure the pipeline can be stopped without any consequences?",
        options: [
            "A. Turn off Dataflow pipeline with ‘cancel’ option.",
            "B. Create a new Dataflow pipeline with the new transformation code, then switch data stream to the new pipeline.",
            "C. Transfer Dataflow pipeline to write data to Google Storage. Perform the needed changes then transfer pipeline back to write to BigTable and re-process the data written in Google Storage.",
            "D. Turn off Dataflow pipeline with ‘drain’ option."
        ],
        answer: "D",
        explanation: "<img src='/static/images/dewlq80.jpg'>Using the Drain option to stop your job tells the Cloud Dataflow service to finish your job in its current state. Your job will immediately stop ingesting new data from input sources. When all pending processing and write operations are complete, the Cloud Dataflow service will clean up the GCP resources associated with your job.<br>Because Cancel option immediately halts processing, you may lose any 'in-flight' data. 'In-flight' data refers to data that has been read but is still being processed by your pipeline.<br>Answer A is incorrect: Using ‘Cancel’ option will lead to losing in-flight data.<br>Answer B & C are incorrect: Those options are not necessary.<br>Source(s):<br>Dataflow – Stopping a running pipeline: https://cloud.google.com/dataflow/docs/guides/stopping-a- pipeline",
    },
    {
        // Question 81
        id: 81,
        question: "You are using Dataflow SDK to analyze data related to customer segmentation. You need to extract certain fields from the data files to be processed for further transformation.<br>Which operation is used to perform the operation required?",
        options: [
            "A. ParDo",
            "B. PCollection",
            "C. Transform",
            "D. Pipeline"
        ],
        answer: "A",
        explanation: "ParDo is the core parallel processing operation in the Apache Beam SDKs, invoking a user-specified function on each of the elements of the input PCollection. ParDo collects the zero or more output elements into an output PCollection. The ParDo transform processes elements independently and possibly in parallel.<br>In Google Dataflow SDK, ParDo allows for parallel programming. It acts on one item at a time (like a map in MapReduce). ParDo is useful for:<br>Filtering and emitting input.<br>Type conversion.<br>Extracting parts of input and calculating values from different parts of inputs.<br>Source(s):<br>Dataflow - Programming Model for Apache Beam: https://cloud.google.com/dataflow/docs/concepts/beam-programming-model"
    },
    {
        // Question 82
        id: 82,
        question: "An e-wallet company is designing a relational database solution for their e-payment transactions. Database will face high read/write transactions and accessed from different parts of Europe and may be expanded to other continents in the future. The database should be scalable and able to scale out to meet high demands.<br>What is the best approach for this scenario?",
        options: [
            "A. Use Cloud BigTable as a database. For scaling out, monitor CPU utilization and increase nodes when more than 75% of CPU is utilized in a 15-minute timespan.",
            "B. Use Cloud SQL as a database. For scaling out, monitor disk utilization and increase nodes when more than 85% of storage is utilized in a 15-minute timespan.",
            "C. Use Cloud BigTable as a database. For scaling out, monitor memory utilization and increase nodes when more than 80% of memory is utilized in a 15-minute timespan.",
            "D. Use Cloud Spanner as a database. For scaling out, monitor CPU utilization and increase nodes when more than 75% of CPU is utilized in a 15-minute timespan."
        ],
        answer: "D",
        explanation: "Cloud Spanner is a horizontally scalable, strongly consistent, relational database service. it’s built to combine the benefits of relational database structure with non-relational horizontal scale. This delivers high-performance transactions and strong consistency across rows, regions and continents.<br>While Cloud Spanner does not automatically scale the number of nodes, You may set up notifications for Cloud Spanner using Stackdriver monitoring for CPU utilization alerts based on the threshold set. In this scenario, we need to scale out (increase nodes) when we are notified of high usage.<br>Answer A & C are not the right answers: BigTable is not a relational database. It doesn’t mean the scenario’s requirements.<br>Answer B is incorrect: Cloud SQL cannot scale out on the fly and it does not support multi-regional/continental coverage.<br>Source(s):<br>Cloud Spanner: https://cloud.google.com/spanner/ <br>Cloud Spanner scale out: https://cloud.google.com/spanner/docs/instances <br>Stackdriver monitoring: https://cloud.google.com/spanner/docs/monitoring"
    },
    {
        // Question 83
        id: 83,
        question: "An e-payment service generates thousands of gigabytes of logs every month which are streamed to a Dataflow pipeline, transformed and stored in a data warehouse for further analysis.<br>These raw logs are not accessed once transformation is done by Dataflow. CTO suggests log files to be archived after a month of transformation done them to make sure data is not required for debugging. Which of the following storage types are recommended?",
        options: [
            "A. Google Storage Standard",
            "B. Google Storage Nearline",
            "C. Google Storage Coldline",
            "D. BigTable"
        ],
        answer: "C",
        explanation: "Google Cloud Storage Coldline is a very-low-cost, highly durable storage service for data archiving, online backup, and disaster recovery. Coldline Storage is the best choice for data that you plan to access at most once a year, due to its slightly lower availability, 90 day minimum storage duration, costs for data access, and higher per-operation costs.<br>Google Cloud Storage Nearline is a low-cost, highly durable storage service for storing infrequently accessed data. Nearline Storage is ideal for data you plan to read or modify on average once a month or less.<br>Option A is incorrect: Google Storage Standard is not a cheap option for storing archive data. There are other options to store archive data cheaper.<br>Option B is incorrect: The scenario states the raw logs to be archived after processed and kept for a month to ensure data is not required anymore. Data archived will most probably won’t be<br>accessed so Nearline storage is not necesssary.<br>Option D is incorrect: BigTable is not a cheap option to store data.<br>Source(s): Google Storage Classes:<br>https://cloud.google.com/storage/docs/storage-classes"
    },
    {
        // Question 84
        id: 84,
        question: "As a solution for a serverless data warehouse, you decided to use BigQuery to store and query data. You built a Dataflow pipeline to read data from Google Storage and import it to BigQuery. You added a few users to access BigQuery for reporting purposes. You want to monitor the activity on BigQuery by getting details about query count and execution time. You want such metrics to appear on a dashboard to be shared later with other stakeholders. What should you do?",
        options: [
            "A. Build a script to use gcloud command to extract queries execution time and data size scanned every 1 hour. Send the stats to Stackdriver and create a dashboard showing the metrics.",
            "B. Use Stackdriver to create a dashboard and graphs showing query metrics.",
            "C. You need to contact Google Cloud support in order to enable metrics on BigQuery UI.",
            "D. From BigQuery UI, you can view run queries and execution time. You can share it by exporting the stats to a file."
        ],
        answer: "B",
        explanation: "Stackdriver is a tool from Google to monitor and manage services, containers, applications, and infrastructure. Stackdriver aggregates metrics, logs, and events from infrastructure, giving developers and operators a rich set of observable signals that speed root-cause analysis and reduce mean time to resolution (MTTR). Stackdriver doesn’t require extensive integration and it does not lock developers into using a particular cloud provider.<br>One of the resources Stackdriver supports monitoring is BigQuery. Stackdriver provides a wide set of metrics to create charts and dashboards for better monitoring of BigQuery such as query execution time, storage and slots allocated for run queries.<br>From the description, option B is the straightforward and recommended solution.<br>Option A is incorrect: There is no need to send BigQuery metrics to Stackdriver. BigQuery can automatically send metrics to Stackdriver after enabling API.<br>Option C is incorrect: You do not need to contact Google Cloud support to enable metrics sent to Stackdriver. You can enable Stackdriver API if you have the required role(s).<br>Option D is incorrect: Smart predictor does not show you the approximate execution time for the query.<br>Source(s):<br>Stackdriver: https://cloud.google.com/stackdriver/ <br>BigQuery Monitoring Using Stackdriver: https://cloud.google.com/bigquery/docs/monitoring#slots-available"
    },
    {
        // Question 85
        id: 85,
        question: "A MySQL database hosted in Cloud SQL is used in production to store data about the website’s users personal information, website products and user reviews on those products. The data analyst team lead wants to perform analysis on the data in the MySQL database. Data analysts use BigQuery as their data warehouse to perform OLAP queries to be later visualized using Data Studio.<br>How can you import data to BigQuery?",
        options: [
            "A. Create Dataflow pipeline to export data from Cloud SQL to Google Storage in CSV format. Then, import those CSV export files from Google Storage to BigQuery.",
            "B. Export data from Cloud SQL to Google BigTable. Then, import from BigTable instance to BigQuery.",
            "C. Import data directly from Cloud SQL to BigQuery using Cloud Storage Transfer Service.",
            "D. Import data directly from Cloud SQL using BigQuery’s import UI."
        ],
        answer: "A",
        explanation: "Currently, Google Cloud does not support direct data import to BigQuery from Cloud SQL. You need to build a pipeline to import the data to BigQuery from Cloud MySQL database.<br>Answer B is incorrect: There is no need to load into BigTable. BigQuery does not support importing from BigTable anyway.<br>Answer C is incorrect: Cloud Storage Transfer Service does not support importing data from Cloud SQL to BigQuery.<br>Answer D is incorrect: BigQuery import UI doesn’t have an option to import from Cloud SQL.<br>Source(s):<br>Performing ETL from a Relational Database into BigQuery: https://cloud.google.com/solutions/performing-etl-from-relational-database-into-bigquery"
    },
    {
        // Question 86
        id: 86,
        question: "Your team was working on a development BigTable instance for some time experimenting on it to stream event data coming from hundreds of sensors sending events frequently. After development is done, the team lead considered instead of deleting the instance and losing all events collected since building the pipeline, it would be a better idea to use the instance in production with the required changes to ensure high availability and best performance.<br>Which of the following approaches is best to satisfy the team lead’s requirements?",
        options: [
            "A. Export the data from BigTable development instance to Google Storage, launch a new BigTable production instance with SSD storage type, then load the data from Google Storage to the new BigTable instance.",
            "B. Export the data from BigTable development instance to Google Storage, launch a new BigTable production instance with HDD storage type, then load the data from Google Storage to the new BigTable instance.",
            "C. Change BigTable instance type from development to production, scale up number of nodes and ensure the storage type is HDD.",
            "D. Change BigTable instance type from development to production, scale up number of nodes and ensure the storage type is SSD."
        ],
        answer: "D",
        explanation: "If you no longer want to use a development instance for development and testing, you can upgrade it to a production instance at any time. Upgrading a development instance is permanent.<br>A cluster must have enough nodes to support its current workload and the amount of data it stores. Otherwise, the cluster might not be able to handle incoming requests, and latency could go up.<br>SSD is significantly faster and has more predictable performance than HDD. In a Cloud Bigtable cluster, SSD storage delivers 6 ms latencies for both reads and writes for 99% of all requests. By contrast, HDD storage delivers 200 ms read latencies and 50 ms write latencies on the same benchmark.<br>Answer A & B are incorrect: No need to export data from existing instance to a new one. You can upgrade existing instance with keeping data.<br>Answer C is incorrect: HDD is not recommended for optimal performance. SSD should be used.<br>Source(s):<br>BigTable Instances, Clusters & Nodes: https://cloud.google.com/bigtable/docs/instances-clusters-nodes BigTable – SSD vs. HDD: https://cloud.google.com/bigtable/docs/choosing-ssd-hdd"
    },
    {
        // Question 87
        id: 87,
        question: "You have a system which writes its logs to a file. The system writes to a new log file every hour. You want to merge log files every 24 hours to a single file and upload it to a specific bucket in Google Storage. You created a Dataflow pipeline to process the logs files and you want to run this pipeline everyday at 3am.<br>Which of the following is the best approach to schedule this task?",
        options: [
            "A. Use Cloud Scheduler to create a cron job to run the Dataflow pipeline at 3am.",
            "B. Create a Compute Engine VM and create a cron job to run Dataflow pipeline at 3am.",
            "C. Configure Dataflow pipeline as a streaming job to process the data in real time.",
            "D. Use Cloud Functions to run Dataflow pipeline at 3am."
        ],
        answer: "A",
        explanation: "Cloud Scheduler is a fully managed enterprise-grade cron job scheduler. It allows you to schedule virtually any job, including batch, big data jobs, cloud infrastructure operations, and more. You can automate everything, including retries in case of failure to reduce manual toil and intervention. Cloud Scheduler even acts as a single pane of glass, allowing you to manage all your automation tasks from one place.<br>Answer B is incorrect: No need to create a VM when you can use Cloud Scheduler.<br>Answer C is incorrect: This process is a batch job. It is not required to make it a streaming pipeline.<br>Answer D is incorrect: You cannot schedule a Cloud Functions unless you use Cloud Scheduler.<br>Source(s):<br>Cloud Scheduler: https://cloud.google.com/scheduler/"
    },
    {
        // Question 88
        id: 88,
        question: "You have the following BigQuery legacy SQL query:<br>SELECT SUM(amount)<br>FROM TABLE_DATE_RANGE([some-dataset.orders_], TIMESTAMP(‘2017-06-01’), TIMESTAMP(‘2017-09-01’);<br>How can you covert it to standard SQL?",
        options: [
            "A. SELECT SUM(amount)<br>FROM `some-dataset.orders_ *`<br>WHERE TABLE_DATE_RANGE BETWEEN ‘20170601’ AND ‘20170901’;",
            "B. SELECT SUM(amount)<br>FROM `some-dataset.orders_ *`<br>WHERE _TABLE_SUFFIX BETWEEN ‘20170601’ AND ‘20170901’;",
            "C. SELECT SUM(amount)<br>FROM `some-dataset.orders_`<br>WHERE _TABLE_SUFFIX BETWEEN ‘20170601’ AND ‘20170901’;",
            "D. SELECT SUM(amount)<br>FROM `some-dataset.orders_* `<br>WHERE _TABLE_DATE_RANGE BETWEEN ‘20170601’ AND ‘20170901’;"
        ],
        answer: "B",
        explanation: "To restrict the query so that it scans an arbitrary set of tables, use the _TABLE_SUFFIX pseudo column in the WHERE clause. The _TABLE_SUFFIX pseudo column contains the values matched by the table wildcard.<br>TABLE_DATE_RANGE queries daily tables that overlap with the time range between and . This function is a LEGACY SQL function.<br>Answer A is incorrect: TABLE_DATE_RANGE is a legacy SQL function.<br>Answer C is incorrect: To use wildcard table, the asterisk symbol “*” should be used at the end of the wildcard table.<br>Answer D is incorrect: This is no function called “_TABLE_DATE_RANGE” (starts with underscore “_” sign).<br>So, answer B is the accurate standard SQL syntax.<br>Source(s):<br>Bigquery – Querying wildcard tables:https://cloud.google.com/bigquery/docs/querying-wildcard-tables <br>BigQuery Legacy SQL: https://cloud.google.com/bigquery/docs/reference/legacy-sql#table-date-range"
    },
    {
        // Question 89
        id: 89,
        question: "You use BigQuery as the main data warehouse. As you are checking the bill of Google Cloud usage for the past month, you noticed a hike in BigQuery costs. Upon more inspection, you found out it’s due to ad-hoc queries scanning large amounts of data. You want to limit the size of data queries process to control costs and avoid excessive bills. What should you do?",
        options: [
            "A. Set monthly flat-rate pricing for BigQuery.",
            "B. Change to using Google Storage as external table instead of using BigQuery’s storage option.",
            "C. Launch a Cloud SQL instance. Replicate BigQuery datasets to Cloud SQL. Allow users with ad-hoc queries to use Cloud SQL instead.",
            "D. Set custom quotas for each user with access on BigQuery based on their business requirements."
        ],
        answer: "D",
        explanation: "If you have multiple BigQuery projects and users, you can manage costs by requesting a custom quota that specifies a limit on the amount of query data processed per day.<br>Creating a custom quota on query data allows you to control costs at the project-level or at the user-level.<br>Project-level custom quotas limit the aggregate usage of all users in that project.<br>User-level custom quotas are separately applied to each user or service account within a project.<br>In this scenario, the aim is to control data volume quotas. So, answer D is the best approach.<br>Option A is incorrect: Flat-rate can be a possible approach. However, BigQuery does not provide flexible flat-rate pricing and the cheapest is $10,000 for 500 slots, which may not be a desirable option for small-medium businesses.<br>Option B is incorrect: You are charged for the number of bytes processed whether the data is stored in BigQuery or in an external data source such as Cloud Storage, Google Drive, or Cloud Bigtable. Moving data to Google Storage will not save costs when querying data.<br>Option C is incorrect: Replicating data from BigQuery to Cloud SQL is not straightforward. You may need to export data to Cloud Storage, then import data to Cloud SQL. This solution can be more costly in the long run depends on data size since you pay for Google Storage costs as well as choosing the Cloud SQL instance type.<br>Source(s):<br>BigQuery - Creating custom cost controls:<br>https://cloud.google.com/bigquery/docs/custom-quotas#controlling_query_costs_using_bigquery_custom_quotas <br>BigQuery Pricing - Monthly Flat Rate:<br>https://cloud.google.com/bigquery/pricing#monthly-flat-rate"
    },
    {
        // Question 90
        id: 90,
        question: "You are using BigQuery as the data warehouse. Different departments are using BigQuery to read data. Upon checking the billing costs, you notice that there is a spike in running queries on BigQuery despite caching is enabled. You started scanning through the queries run on BigQuery trying to find out if some queries are not cached.<br>Which of the following can be reasons for queries not cached? (Choose 2)",
        options: [
            "A. SELECT queries with asterisk (*).",
            "B. Queries select from authorized views on archive tables.",
            "C. Queries use wildcards.",
            "D. Jobs use destination tables."
        ],
        answer: "CD",
        explanation: "Currently, cached results are not supported for queries against multiple tables using a wildcard even if the “Use Cached Results” option is checked. If you run the same wildcard query multiple times, you are billed for each query.<br>Query results are not cached when a destination table is specified in the job configuration, the GCP Console, the classic web UI, the command line, or the API.<br>Source(s):<br>BigQuery - Wildcards: https://cloud.google.com/bigquery/docs/querying-wildcard-tables BigQuery – Cached Results: https://cloud.google.com/bigquery/docs/cached-results"
    },
    {
        // Question 91
        id: 91,
        question: "Which of the following statements is not true about BigQuery:",
        options: [
            "A. You cannot upload multiple tables at the same time.",
            "B. You cannot upload data in SQL format.",
            "C. Uploading and streaming data are free.",
            "D. You can scan partitioned tables using _PARTITIONTIME."
        ],
        answer: "C",
        explanation: "Streaming pricing<br>Loading data into BigQuery is free, with the exception of a small charge for streamed data.<br>Source(s):<br>BigQuery – Pricing: https://cloud.google.com/bigquery/pricing <br>BigQuery – Loading Data: https://cloud.google.com/bigquery/docs/loading-data"
    },
    {
        // Question 92
        id: 92,
        question: "An e-commerce company uses BigQuery as its main data warehouse. One of the tables stores customers details such as name, address, email and phone number. Data team wants to modify the table’s schema and add a new column called ‘zipcode’ which is previously included in address column. You are asked to modify the table’s schema and do necessary changes. You need to perform the changes with minimal costs. What should you do?",
        options: [
            "A. Add a new column called ‘zipcode’ to customers table. Run an update statement to extract zip code from address column and set it to the new column.",
            "B. Create a view in BigQuery that extracts zip code from address as a new column.",
            "C. Export table data from BigQuery to Google Storage. Use Dataproc to transform data and extract the zip code from addresses and append it as a new column. Create a new table for customers with new column ‘zipcode.’ Import transformed data to new table.",
            "D. Create a Dataflow pipeline to read data from BigQuery, extract zip code from address column, then write data to a newly created table in BigQuery with ‘zipcode’ column."
        ],
        answer: "A",
        explanation: "BigQuery allows partial modification on an existing table’s schema definition. The following actions are allowed:<br>Adding columns to a schema definition.<br>Relaxing a column's mode from REQUIRED to NULLABLE.<br>Answer B is incorrect: BigQuery's views are logical views, not materialized views.<br>Answer C & D are incorrect: Using Dataproc or Dataflow is not a cheap or simple solution comparing to updating the table directly from BigQuery.<br>Source(s):<br>BigQuery – Modifying Table Schemas: https://cloud.google.com/bigquery/docs/managing-table- schemas<br>BigQuery – Introduction to Views: https://cloud.google.com/bigquery/docs/views-intro"
    },
    {
        // Question 93
        id: 93,
        question: "You use BigQuery as your main data warehouse. By time, your tables start to get bigger and selecting from these tables result in scanning many rows which increases the cost of queries running on them. You want to find a way to reduce the costs of queries scanning through your big tables. What should you do? (Choose 2)",
        options: [
            "A. Use LIMIT when running SELECT statements on the tables.",
            "B. Use partitioning to split data into partitions by columns most used for filtering data.",
            "C. Set BigQuery to limit scanning data to certain size.",
            "D. Use sharding to split data into several tables."
        ],
        answer: "BD",
        explanation: "A partitioned table is a special table that is divided into segments, called partitions, that make it easier to manage and query your data. By dividing a large table into smaller partitions, you can improve query performance, and you can control costs by reducing the number of bytes read by a query.<br>There are two types of table partitioning in BigQuery:<br>Tables partitioned by ingestion time: Tables partitioned based on the data's ingestion (load) date or arrival date.<br>Partitioned tables: Tables that are partitioned based on a TIMESTAMP or DATE column.<br>As an alternative to partitioned tables, you can shard tables using a time-based naming approach such as [PREFIX]_YYYYMMDD. This is referred to as creating date-sharded tables.<br>Source(s):<br>BigQuery – Introduction to Partitioned Tables: https://cloud.google.com/bigquery/docs/partitioned- tables#partitioning_versus_sharding"
    },
    {
        // Question 94
        id: 94,
        question: "An air-quality research facility monitors the quality of the air and alerts of possible high air pollution in a region. The facility receives event data from 25,000 sensors every 60 seconds. Event data is then used for time-series analysis per region. Cloud experts suggested using BigTable for storing event data.<br>What will you design the row key for each even in BigTable?",
        options: [
            "A. Use event’s timestamp as row key.",
            "B. Use combination of sensor ID with timestamp as sensorID-timestamp.",
            "C. Use combination of sensor ID with timestamp as timestamp-sensorID.",
            "D. Use sensor ID as row key."
        ],
        answer: "B",
        explanation: "Storing time-series data in Cloud Bigtable is a natural fit. Cloud Bigtable stores data as unstructured columns in rows; each row has a row key, and row keys are sorted lexicographically.<br>For time series, you should generally use tall and narrow tables. This is for two reasons: Storing one event per row makes it easier to run queries against your data. Storing many events per row makes it more likely that the total row size will exceed the recommended maximum (see Rows can be big but are not infinite).<br>When Cloud Bigtable stores rows, it sorts them by row key in lexicographic order. There is effectively a single index per table, which is the row key. Queries that access a single row, or a contiguous range of rows, execute quickly and efficiently. All other queries result in a full table scan, which will be far, far slower. A full table scan is exactly what it sounds like—every row of your table is examined in turn.<br>For Cloud Bigtable, where you could be storing many petabytes of data in a single table, the performance of a full table scan will only get worse as your system grows.<br>Choosing a row key that facilitates common queries is of paramount importance to the overall performance of the system. Enumerate your queries, put them in order of importance, and then design row keys that work for those queries.<br>From the description, you need to combine both sensor ID and timestamp in order to fetch data you want fast. So, answers A & D are incorrect.<br>If you start the row key with timestamp, most recent data will be inserted at the bottom of the table since rows are sorted in lexicographic order. Starting the row key with sensor ID will allow writing all sensor’s events together and allow distributing data among nodes.<br>Source(s):<br>BigTable – Schema Design for Time Series Data: https://cloud.google.com/bigtable/docs/schema- design-time-series"
    },
    {
        // Question 95
        id: 95,
        question: "Your team is planning to perform tests on Cloud BigTable instance to ensure the performance quality of the BigTable instance to be used in production. Which of the following conditions should be met to consider the performance testing valid? (Choose 3)",
        options: [
            "A. Use production instance.",
            "B. Use at least 1TB of data.",
            "C. Use at least 300GB of data.",
            "D. Tests should run for at least 10 minutes.",
            "E. Use development instance.",
            "F. Storage type should be HDD."
        ],
        answer: "ACD",
        explanation: "If you're running a performance test that depends upon Cloud Bigtable, be sure to follow these steps as you plan and execute your test:<br>Use a production instance. A development instance will not give you an accurate sense of how a production instance performs under load.<br>Use at least 300 GB of data. Cloud Bigtable performs best with 1 TB or more of data. However, 300 GB of data is enough to provide reasonable results in a performance test on a 3-node cluster. On larger clusters, use at least 100 GB of data per node.<br>Stay below the recommended storage utilization per node.<br>Before you test, run a heavy pre-test for several minutes. This step gives Cloud Bigtable a chance to balance data across your nodes based on the access patterns it observes.<br>Run your test for at least 10 minutes. This step lets Cloud Bigtable further optimize your data, and it helps ensure that you will test reads from disk as well as cached reads from memory.<br>Source(s):<br>Understanding BigTable Performance: https://cloud.google.com/bigtable/docs/performance"
    },
    {
        // Question 96
        id: 96,
        question: "Your company hosts a gaming app which reaches over 30,000 players in a single minute. The app generates event data including information about players state, score, location coordinates and other stats. You need to find a storage solution which can support high read/write throughput with very low latency which doesn’t exceed 10 milliseconds to ensure a quality performance experience for the players.<br>Which of the following is the best option for this scenario?",
        options: [
            "A. Cloud Spanner",
            "B. BigQuery",
            "C. BigTable",
            "D. Datastore"
        ],
        answer: "C",
        explanation: "Cloud BigTable is a petabyte-scale, fully managed NoSQL database service for large analytical and operational workloads. Under a typical workload, Cloud BigTable delivers highly predictable performance. When everything is running smoothly, a typical workload can achieve the following performance for each node in the Cloud Bigtable cluster, depending on which type of storage the cluster uses:<br><br><img src='/static/images/dewlq96.jpg'><br><br>In general, a cluster's performance increases linearly as you add nodes to the cluster. For example, if you create an SSD cluster with 10 nodes, the cluster can support up to 100,000 rows per second for a typical read-only or write-only workload, with 6 ms latency for each read or write operation.<br>Answer A is incorrect: Cloud Spanner does not guarantee the same performance and low latency as BigTable.<br>Answer B is incorrect: While BigQuery is a potential choice, BigQuery doesn’t provide high throughput and low latency as powerful as BigTable.<br>Answer D is incorrect: Datastore can be a potential choice since it’s a NoSQL database. The issue is, Datastore is not built for storing and reading huge data volumes as in this scenario. Datastore is deisgned for web applications of small scale.<br>Source(s):<br>Understanding BigTable Performance: https://cloud.google.com/bigtable/docs/performance"
    },
    {
        // Question 97
        id: 97,
        question: "The development team decided to use BigTable to write thousands of incoming stream data. Their choice was based on BigTable’s high performance and high throughput and low latency. However, the team is facing less than expected performance from the cluster. You are asked for advice on the reason for BigTable’s instance performance issue.<br>Which of the following can be a reason for the performance issue of BigTable cluster?<br>Choose 2 Options.",
        options: [
            "A. Row key used is increased monotonically.",
            "B. Rows are less than 10MB of size.",
            "C. Total data size is less than 1TB.",
            "D. Cluster is launched in a region different than where users reside."
        ],
        answer: "AC",
        explanation: "The most common issue for time series in Cloud Bigtable is hotspotting. This issue can affect any type of row key that contains a monotonically increasing value. In brief, when a row key for a time series includes a timestamp, all of your writes will target a single node; fill that node; and then move onto the next node in the cluster, resulting in hotspotting. Because Cloud Bigtable stores adjacent row keys on the same server node, all writes will focus only on one node until that node is full, at which point writes will move to the next node in the cluster.<br>BigTable instances are best performed with big size of data (over 1TB). Having data less than 1TB of size will not give the same performance.<br>Answer B is incorrect: You can read and write larger amounts of data per row, but increasing the amount of data per row will also reduce the number of rows per second. So, having rows with small size is better.<br>Answer D is incorrect: While selecting region has impact on network performance, it doesn’t affect BigTable’s performance when reading and writing data.<br>Source(s):<br>Understanding BigTable Performance:<br>https://cloud.google.com/bigtable/docs/performance"
    },
    {
        // Question 98
        id: 98,
        question: "Data team is looking for a database system which is highly available and supports atomic transactions. Database should have a flexible but semi-structured schema and supports querying using SQL-like language. Solution should be fully managed with no planned downtime.<br>Which of the following is the best choice for this scenario?",
        options: [
            "A. Cloud SQL",
            "B. Cloud Spanner",
            "C. BigTable",
            "D. Datastore"
        ],
        answer: "D",
        explanation: "Cloud Datastore is a highly-scalable NoSQL database for your applications. Cloud Datastore automatically handles sharding and replication, providing you with a highly available and durable database that scales automatically to handle your applications' load. Cloud Datastore provides a myriad of capabilities such as ACID transactions, SQL-like queries and indexes.<br>Answer A is incorrect: Cloud SQL is a relational database. The scenario requires a flexible semi- structured schema and relational databases are strictly-structured.<br>Answer B is incorrect: Cloud Spanner is a relational database supports multi-regional and continental scaling-out. The scenario requires a flexible semi-structured schema and relational databases are strictly-structured.<br>Answer C is incorrect: BigTable does not support SQL-like querying<br>Source(s):<br>Cloud Datastore: https://cloud.google.com/datastore/"
    },
    {
        // Question 99
        id: 99,
        question: "You have an existing data pipeline which uses Apache Spark to transform the data to be exported in CSV format, to be later loaded into MySQL database for further analysis. The CTO decides it’s time to migrate the pipeline to Google Cloud. As a data architect, you are tasked to design the new pipeline with minimal changes to the current pipeline architecture for a smoother migration.<br>Which of the following approaches are best suitable for your CTO’s requirement?",
        options: [
            "A. Use Dataproc for data transformation. Use Google Storage for storing data.",
            "B. Use Dataflow for data transformation. Use BigQuery for storing data.",
            "C. Use Dataproc for data transformation. Use BigQuery for storing data.",
            "D. Use Dataflow for data transformation. Use Google Storage for storing data."
        ],
        answer: "C",
        explanation: "For this scenario, it’s recommended to migrate the existing pipeline as-is. So, for transformation, Dataproc should be used to run Apache Spark jobs. Hence, answers B & D are incorrect.<br>For data warehousing, BigQuery is a good alternative to MySQL. Since BigQuery supports SQL- querying and schema is structured. BigQuery can be also used for analysis and reporting integrating it with Dataprep & Data Studio. So, answer C is correct.<br>Source(s):<br>Cloud Dataproc: https://cloud.google.com/dataproc/ <br>Cloud Dataflow: https://cloud.google.com/dataflow/"
    },
    {
        // Question 100
        id: 100,
        question: "A company decided to migrate their on-premise hadoop jobs to Google Cloud. As recommended by Google Cloud engineers, Dataproc is used to run Apache Hive jobs. Data residing in on-premise HDFS has been moved to Google Storage and connector was used for Dataproc to read the data. Upon monitoring the performance of Dataproc clusters running Hive jobs, you noticed the jobs are I/O intensive and use local disk to read/write data. This leads to performance issues. How can you solve this problem?",
        options: [
            "A. Increase persistent disk size for master node.",
            "B. Increase persistent disk size for worker nodes.",
            "C. Increase RAM capacity of Dataproc cluster’s worker nodes.",
            "D. Use local HDFS storage of Dataproc cluster nodes instead of Google Storage."
        ],
        answer: "D",
        explanation: "When you want to move Hadoop & Spark workloads from an on-premises environment to Google Cloud Platform (GCP), It's recommended to use Dataproc to run Apache Spark & Hadoop clusters. Local HDFS storage is a good option if you have workloads that involve heavy I/O. For example, you have a lot of partitioned writes. It is a good option if you also have I/O workloads that are especially sensitive to latency. For example, you require single-digit millisecond latency per storage operation.<br>Option A is incorrect: Increasing disk size for master node will not help with the performance issue.<br>Option B is incorrect: Increasing disk size for worker nodes alone is not enough. You should move data to local HDFS storage of Dataproc. Increasing size may help to increase HDFS storage.<br>Option C is incorrect: Increasing memory will not help fix the issue because the problem is because of intensive disk read/write.<br>Source(s):<br>Migrating Apache Spark Jobs to Cloud Dataproc:<br>https://cloud.google.com/solutions/migration/hadoop/migrating-apache-spark-jobs-to-cloud-dataproc"
    },
    {
        // Question 101
        id: 101,
        question: "Your team decided to use BigTable for storing event data. The engineer responsible of launching and testing the instance has reported a slower performance than expected by Google Cloud documentation. Which of the following could be a factor for the slow performance? (Choose 3)",
        options: [
            "A. The rows in the tables tested contain very few number of cells.",
            "B. The rows in the tables have small data size.",
            "C. The schema is not designed for the instance to evenly read and write data across the tables.",
            "D. The instance uses HDD storage type.",
            "E. The instance was scaled up recently.",
            "F. The instance has too high number of nodes for the data size tested."
        ],
        answer: "CDE",
        explanation: "There are several factors that can cause Cloud Bigtable to perform more slowly than expected:<br>The table's schema is not designed correctly. To get good performance from Cloud BigTable, it's essential to design a schema that makes it possible to distribute reads and writes evenly across each table.<br>The workload isn't appropriate for Cloud BigTable. If you test with a small amount (< 300 GB) of data, or if you test for a very short period of time (seconds rather than minutes or hours), Cloud BigTable won't be able to balance your data in a way that gives you good performance.<br>The rows in your Cloud Bigtable table contain large amounts of data. You can read and write larger amounts of data per row, but increasing the amount of data per row will also reduce the number of rows per second.<br>The rows in your Cloud Bigtable table contain a very large number of cells. It takes time for Cloud Bigtable to process each cell in a row. Also, each cell adds some overhead to the amount of data that's stored in your table and sent over the network.<br>The Cloud Bigtable cluster doesn't have enough nodes. If your Cloud Bigtable cluster is overloaded, adding more nodes can improve performance.<br>The Cloud Bigtable cluster was scaled up or scaled down recently. After you change the number of nodes in a cluster, it can take up to 20 minutes under load before you see an improvement in the cluster's performance.<br>The Cloud Bigtable cluster uses HDD disks. In most cases, your cluster should use SSD disks, which have significantly better performance than HDD disks.<br>The Cloud Bigtable instance is a development instance. Development instance's performance is equivalent to an instance with one single-node cluster, it will not perform as well as a production instance.<br>There are issues with the network connection. Network issues can reduce throughput and cause reads and writes to take longer than usual.<br>Source(s):<br>Understanding BigTable Performance: https://cloud.google.com/bigtable/docs/performance"
    },
    {
        // Question 102
        id: 102,
        question: "An online learning platform wants to generate captions for its videos. The platform offers around 2,500 courses with topics about business, finance, cooking, development & science. The platform allows content with different languages such as French, German, Turkish and Thai. Thus, this can be very difficult for a single team to caption all available courses and they are looking for an approach which helps do such massive job.<br>Which product from Google Cloud will you suggest them to use?",
        options: [
            "A. Cloud Speech-to-Text.",
            "B. Cloud Natural Language.",
            "C. Machine Learning Engine.",
            "D. AutoML Vision API."
        ],
        answer: "A",
        explanation: "Answer A is correct: Cloud Speech-to-Text is a service to generate captions from videos by detecting speakers language and speech.<br>Answer B is incorrect: Cloud natural language service is to derive insights from unstructured text revealing meaning of the documents and categorize articles. It won’t help extracting captions from videos.<br>Answer C is incorrect: Machine Learning Engine is a managed service letting developers and scientists build their own models and run them in production. This means, you have to build your own model to generate text from videos which needs much effort and experience to build such model. So, it’s not a practical solution for this scenario.<br>Answer D is incorrect: AutoML Vision API is a service to recognize and derive insights from images by either using pre-trained models or training a custom model based on a set of photographics.<br>Source(s):<br>Google NLP: https://cloud.google.com/natural-language/ <br>Google Machine Learning Engine: https://cloud.google.com/ml-engine/ <br>Google Vision API: https://cloud.google.com/vision <br>Google Speech-to-Text API: https://cloud.google.com/speech-to-text/"
    },
    {
        // Question 103
        id: 103,
        question: "You need to build a machine learning model to recognize different animals for a pet shop. The purpose is to scan the photos on their twitter page and get stats about what pets people like sharing while tagging the pet shop brand the most. Due to cost constraints, the project should be as cost-effective as possible, and that includes work hours dedicated to the project.<br>Which approach will you consider to build the project?",
        options: [
            "A. Use Cloud ML Engine API and inspect the descriptions returned by the API. Consider the description with highest score.",
            "B. Use Vision API and inspect the descriptions returned by the API. Consider the description with highest score.",
            "C. Use Vision API and inspect the MID values returned by API to recognize the pets in photos.",
            "D. Use Vision API and inspect the descriptions returned by the API. Consider the description with median score."
        ],
        answer: "B",
        explanation: "Google AutoML Vision API automates the training of your own custom machine learning models by simply uploading images and training custom image models with an easy-to-use graphical interface.<br>Google AutoML Vision is recommended in this scenario because you can build an image recognition model quickly with less work time, comparing to building your very own model from scratch.<br>Answer A is incorrect: Any approach other than using AutoML vision API is not recommended.<br>When inspecting returned values from Vision API, here, you need to check the output’s values descriptions to recognize what type of animal recognized by API. Descriptions with highest score should be considered as they have better prediction.<br>Answer C is incorrect: MID values are not useful for this scenario.<br>Answer D is incorrect: API does not provide median scores. It provides a rate how likely the description is accurate.<br>Source(s):<br>Google Vision API – Detect Labels: https://cloud.google.com/vision/docs/labels"
    },
    {
        // Question 104
        id: 104,
        question: "You are working on building your own machine learning model and training it. When you tested the model on a testing set, you realized the error rate is very high and the model’s output only matched 25% of expected output.<br>What is the problem you are facing and how can you fix it?",
        options: [
            "A. The model is underfitting: You need to increase the features and use more training data.",
            "B. The model is underfitting: You need to lower the features and use less training data.",
            "C. The model is overfitting: You need to lower the features and use more training data.",
            "D. The model is overfitting: You need to increase the features and use more training data."
        ],
        answer: "C",
        explanation: "Overfitting happens when a model performs well on a training set, generating only a small error, while giving wrong output for the test set. This happens because the model is only picking up specific features input found in the training set instead of picking out general features of the given training set.<br>The opposite of overfitting is underfitting. Underfitting occurs when there is still room for improvement on the test data. This can happen for a number of reasons: If the model is not powerful enough, is over-regularized, or has simply not been trained long enough. This means the network has not learned the relevant patterns in the training data.<br>To solve overfitting, the following would help improving the model’s quality:<br>Increase the number of examples, the more data a model is trained with, the more use cases the model can be training on and better improves its predictions.<br>Tune hyperparameters which is related to number and size of hidden layers (for neural networks), and regularization, which means using techniques to make your model simpler such as using dropout method to remove neuron networks or adding “penalty” parameters to the cost function.<br>Remove features by removing irrelevant features. Feature engineering is a wide subject and feature selection is a critical part of building and training a model. Some algorithms have built- in feature selection, but in some cases, data scientists need to cherry-pick or manually select or remove features for debugging and finding the best model output.<br>From the brief explanation, to solve the overfitting problem in the scenario, you need to:<br>Increase the training set.<br>Decrease features parameters.<br>Hence, answer C is correct.<br>Answer A & B are incorrect: The problem in this scenario is not underfitting.<br>Answer D is incorrect: You should work on decreasing the features to solve overfitting, not increasing them.<br>Source(s):<br>Overfitting and underfitting: https://www.tensorflow.org/tutorials/keras/overfit_and_underfit"
    },
    {
        // Question 105
        id: 105,
        question: "You are building a machine learning model to solve a binary classification problem. The model is going to predict the likelihood of a customer to be using a fraudulent credit card when purchasing online.<br>Since there is a very small fraction of purchase transactions are proved to be fraudulent, more than 99% of the purchase transactions are valid.<br>You want to make sure the machine learning model is able to identify the fraudulent transactions. What is the technique to examine the effectiveness of the model?",
        options: [
            "A. Gradient Descent",
            "B. Recall",
            "C. Feature engineering",
            "D. Precision"
        ],
        answer: "B",
        explanation: "Precision is the formula to check how accurate the model is when most of the output are positives. In other words, if most of the output is yes.<br>Recall: is the formula to check how accurate the model is when most of the output are negatives. In other words, if most of the output is no.<br>Gradient Descent is an optimization algorithm to find the minimal value of a function. Gradient descent is used to find the minimal minimal RMSE or cost function.<br>Feature Engineering is the process of deciding which data is important for the model.<br>From the description, answers A & C are incorrect. It leaves us with B & D.<br>Since the scenario mentions very little likelihood a transaction can be fraudulent. There are more “no” than “yes” means more negative than positive. Hence, to calculate the effectiveness of the model, you should use recall formula.<br>Source(s):<br>Precision & Recall: https://developers.google.com/machine-learning/crash-course/classification/ precision-and-recall<br>Gradient Descent: https://en.wikipedia.org/wiki/Gradient_descent <br>Feature Engineering: https://cloud.google.com/ml-engine/docs/tensorflow/data-prep"
    },
    {
        // Question 106
        id: 106,
        question: "You are building a machine learning model to solve a classification problem. The model will process the faces of customers entering the store to detect if they are first timers so customer service can provide them special treatment. Based on the data set provided for previous store visitors, about 74% of customers are first timers.<br>What is the formula to be used to calculate how accurate the model predicting new customers is?",
        options: [
            "A. Precision",
            "B. Cost function",
            "C. Recall",
            "D. Variance"
        ],
        answer: "A",
        explanation: "Precision is the formula to check how accurate the model is when most of the output are positives. In other words, if most of the output is yes.<br>Recall: is the formula to check how accurate the model is when most of the output are negatives. In other words, if most of the output is no.<br>Cost function is a measure of how wrong the model is in terms of its ability to estimate the relationship between X and Y. The aim is to find the minimal error to consider the model accurate enough.<br>Variance is the average of the squared differences from the mean.<br>Answer A is incorrect because the aim here is to calculate the accuracy and not the error rate of the model.<br>Answer D is incorrect because variance is about the average squared difference from the mean and is not related to model’s accuracy.<br>In this scenario, it’s stated the majority of training cases are positive since over over 70% of customers are first timers, so, majority of cases are positive.<br>Hence, answer A is the correct answer.<br>Source(s):<br>Precision & Recall: https://developers.google.com/machine-learning/crash-course/classification/ precision-and-recall"
    },
    {
        // Question 107
        id: 107,
        question: "A coach line bus service company wants to predict how many passengers they expect to book for tickets on their buses for the upcoming months. This helps the company to know how many buses they need to be in service for maintenance and fuel and how many drivers to be available. The company has data sets of all booked tickets since its launch in 1968 and it allows private sharing of the data if this helps the prediction process.<br>You will build the machine learning model for the coach line company. Which technique you will use to predict the number of passengers in the next months?",
        options: [
            "A. Regression.",
            "B. Association.",
            "C. Classification.",
            "D. Clustering."
        ],
        answer: "A",
        explanation: "A regression problem is a problem which its output variable is of continuous value. Problems which finds out about variables such as weights, prices or age are considered regression problems.<br>A classification problem is a problem which the output variable is a category. Examples of classification problems are finding a passenger’s nationality, detect if a patient is diagnosed with a disease or if an applicant is qualified for a job interview.<br>Regression and classification are supervised learning problems. It means, the machine learns from past experiences by training it on a labeled data set. A training set is a set of rows with input and output parameters. The machine then learns from the training set and improves its parameters for better detection.<br>Association is a rule-learning technique for discovering interesting relations between variables in large data sets. Example of association rules is discovering regularities between products in large-scale transaction data recorded by point-of-sales for a retail chain store.<br>Clustering is an unsupervised learning method. An unsupervised learning is a method to find references between input data without labeled output. The purpose is to find meaningful structure between the input sets with similar features and group them. Clustering is the method of grouping data points share similarities and separating dissimilar points to other groups. Examples of clustering applications are customer segmentation (new, frequent, loyal, ..), city land value and detecting anomalies in network traffic.<br>From the explanation above, the technique to help solving the scenario is Answer A: Regression."
    },
    {
        // Question 108
        id: 108,
        question: "Which of the following vectors are sparse vectors and used for categorical features:",
        options: [
            "A. [0, 1]",
            "B. [0, 1, 1, 0, 0]",
            "C. [1, 0, 0, 1]",
            "D. [0, 0, 0, 0, 5, 0]"
        ],
        answer: "A",
        explanation: "Sparse vectors are used to represent categorical features when using ‘one-hot’ encoding. They are called ‘sparse’ because they contain many zeros. Sparse vectors have only a single 1.<br>From the answers, only answer A matches the description of sparse vectors.<br>Source(s):<br>One-Hot Encoding: https://en.wikipedia.org/wiki/One-hot"
    },
    {
        // Question 109
        id: 109,
        question: "You are training a Tensorflow deep neural network model which predicts a person’s weight based on their face image. You want to perform hyperparameter tuning on the model for better prediction output.<br>Which of the variables are used for hyperparameter tuning? (Choose 2)",
        options: [
            "A. Sparse vectors",
            "B. Number of nodes in hidden layers",
            "C. Number of hidden layers",
            "D. Weight values"
        ],
        answer: "BC",
        explanation: "hyperparameters are the variables govern the training process itself. For example, part of setting up a deep neural network is deciding how many hidden layers of nodes to use between the input layer and the output layer, and how many nodes each layer should use. These variables are not directly related to the training data. They are configuration variables. Note that parameters change during a training job, while hyperparameters are usually constant during a job.<br>From the description, the right answers are B & C.<br>Answer A is incorrect: Sparse vectors are used for representing categorical features.<br>Answer D is incorrect: Weight values are set when training the model.<br>Source(s):<br>Hyperparameter Tuning: https://cloud.google.com/ml-engine/docs/tensorflow/hyperparameter-tuning- overview"
    },
    {
        // Question 110
        id: 110,
        question: "You are preparing a dataset as a training set for a machine learning model. You have the following columns chosen as features for the model:<br>Zip code<br>Income<br>Age<br>Which feature type each column is:",
        options: [
            "A. 3 continuous.",
            "B. 2 categorical, 1 continuous.",
            "C. 2 continuous, 1 categorical.",
            "D. 3 categorical."
        ],
        answer: "C",
        explanation: "In machine learning, features are two types: Categorical & Continuous.<br>Categorical features are features with finite values. For example: Country, education level and marital status.<br>Continuous features are features with numeric values in continuous range. For example: Income, latitude & longitude and time.<br>For zip code, while it’s represented as numeric values, it’s considered categorical because it represents regions, means, it marks each region with a number."
    },
    {
        // Question 111
        id: 111,
        question: "You need to deploy a machine learning model built by data science team in the firm you work for. As a data engineer, you will be responsible of monitoring the health and traffic of the hosted model on the cloud. Some jobs could fail due to several reasons and you should be able to alert data scientists of such failed jobs.<br>Which of the following approaches is best to implement on Google Cloud?",
        options: [
            "A. Use Cloud Machine Learning Engine to host the model. Use Stackdriver to monitor the status of jobs for ‘failed’ status.",
            "B. Use Google Kubernetes Engine to host the model. Use Stackdriver to monitor the status of jobs for ‘failed’ status.",
            "C. Use AutoML Vision to host the model. Use Stackdriver to monitor the status of jobs for ‘failed’ status.",
            "D. Use Google Kubernetes Engine to host the model. Use Stackdriver to monitor the status of operations for ‘error’ status."
        ],
        answer: "A",
        explanation: "Google Kubernetes Engine is a managed, production-ready environment for deploying containerized applications. It brings our latest innovations in developer productivity, resource efficiency, automated operations, and open source flexibility to accelerate your time to market.<br>Cloud Machine Learning Engine is a managed service that lets developers and data scientists build and run superior machine learning models in production. Cloud ML Engine offers training and prediction services, which can be used together or individually.<br>Google AutoML Vision automates the training of your own custom machine learning models by simply uploading images and training custom image models with an easy-to-use graphical interface.<br>In this scenario, You should use Google Machine Learning Engine to deploy the model to the cloud. So, answers B, C & D are incorrect.<br>Source(s):<br>Google AutoML: https://cloud.google.com/automl/ <br>Google Machine Learning Engine: https://cloud.google.com/ml-engine/ <br>Google Kubernetes Engine: https://cloud.google.com/kubernetes-engine/"
    },
    {
        // Question 112
        id: 112,
        question: "You want to launch a Cloud Machine Learning Engine cluster to deploy a deep neural network model built by Tensorflow by data scientists of your company. Reviewing the standard tiers available by Google ML Engine, you could not find a tier that suits the requirements data scientists need for the cluster. Google allows you to specify custom cluster specification.<br>Which of the following specifications you are allowed to set? (Choose 2)",
        options: [
            "A. workerCount",
            "B. parameterServerCount",
            "C. masterCount",
            "D. workerMemory"
        ],
        answer: "AB",
        explanation: "The Custom tier is not a set tier, but rather enables you to use your own cluster specification. When you use this tier, set values to configure your processing cluster according to these guidelines:<br>* You must set TrainingInput.masterType to specify the type of machine to use for your master node. This is the only required setting. See the machine types described below.<br>* You may set TrainingInput.workerCount to specify the number of workers to use. If you specify one or more workers, you must also set TrainingInput.workerType to specify the type of machine to use for your worker nodes.<br>* You may set TrainingInput.parameterServerCount to specify the number of parameter servers to use. If you specify one or more parameter servers, you must also set TrainingInput.parameterServerType to specify the type of machine to use for your parameter servers.<br>From the explanation, specifications can be set from the answers are workerCount & parameterServerCount.<br>Source(s):<br>Specifying Machine Types or Scale Tiers: https://cloud.google.com/ml-engine/docs/tensorflow/machine-types"
    },
    {
        // Question 113
        id: 113,
        question: "Currently, anyone can access and modify the data sets, as well as creating & deleting data sets. The security team wants to restrict access of users on BigQuery and assign the minimum roles for each team based on their task requirements. You have the following teams:<br>* Data scientists: They should have read & write access to data sets. They may create & delete data sets.<br>* Data analysts: They have read access to data sets only.<br>* Development team: They need to create jobs to run queries for updating the website’s stats and product details.<br>What roles are recommended for each team?",
        options: [
            "A. Assign owner role to data scientists. Assign viewer role to data analysts. Assign user role to development team.",
            "B. Assign admin role to data scientists. Assign viewer role to data analysts. Assign viewer role to development team.",
            "C. Assign owner role to data scientists. Assign viewer role to data analysts. Assign viewer role to development team.",
            "D. Assign admin role to data scientists. Assign viewer role to data analysts. Assign user role to development team."
        ],
        answer: "A",
        explanation: "Here is the table of BigQuery roles and each role’s permissions:<br><br><img src='/static/images/dewlq113.jpg'><br><br>From the table, we can assign each group the right role:<br>Data scientists: They need to read & write to tables as well as creating and deleting datasets. So, owner & admin roles are the required roles. Since it’s best practice to grant the role with least permissions, we use owner role for this group.<br>Data analysts: They need read access to data only. Viewer role is the permission allows them to read data from datasets.<br>Development team: They need to create jobs on BigQuery. From the table, we see that user & jobUser roles may be suitable permissions. However, for developers, jobUser can be too tight for developers since they need to list tables and jobs. The answers list user role as a possible answer so we’ll stick to user role for this group.<br>Answer B is incorrect: admin role is too broad for data scientists. Viewer role doesn’t allow developers to create jobs.<br>Answer C is incorrect: Same as B, viewer role doesn’t allow developers to create jobs.<br>Answer D is incorrect: Same as B, admin role is too broad for data scientists.<br>Source(s):<br>BigQuery – Access Control: https://cloud.google.com/bigquery/docs/access-control"
    },
    {
        // Question 114
        id: 114,
        question: "Marketing team in your company wants to access certain tables in BigQuery. These tables are stored along with other tables considered sensitive and it’s not approved to be accessed by marketing team. You need to restrict marketing team’s role to only read from the tables they are allowed to.<br>Which of the following actions will you take?",
        options: [
            "A. Assign marketing team’s roles as viewers on these specific tables. They won’t be able to select from other tables in the dataset.",
            "B. Create authorized views on tables marketing team wants to read from on the same dataset tables reside in. Grant viewer role to marketing team on the views.",
            "C. Create a new dataset in BigQuery. Grant viewer role to marketing team on the new dataset. Copy the tables from the current dataset to the new one.",
            "D. Create a new dataset in BigQuery. Create authorized views on tables marketing team wants to read from. Grant viewer role to marketing team on new dataset."
        ],
        answer: "D",
        explanation: "For BigQuery roles, lowest permission available is dataset level. You CANNOT set permissions on table level.<br>To restrict access to a table, you may use authorized views. An authorized view allows you to share query results with particular users and groups without giving them access to the underlying tables. You can also use the view's SQL query to restrict the columns (fields) the users are able to query.<br>When you create the view, it must be created in a dataset separate from the source data queried by the view. Because you can assign access controls only at the dataset level, if the view is created in the same dataset as the source data, your users would have access to both the view and the data.<br>Answer A is incorrect: You cannot grant permissions on table level in BigQuery. Lowest level in BigQuery is dataset level.<br>Answer B is incorrect: Authorized views should be created in a separate dataset from tables.<br>Answer C is incorrect: No need to create tables when you can use authorized views.<br>Source(s):<br>BigQuery – Authorized Views: https://cloud.google.com/bigquery/docs/authorized-views"
    },
    {
        // Question 115
        id: 115,
        question: "A Kafka cluster is receiving event data from outsourced sensors. The cluster is installed in a Compute Engine instance and it writes events to Google Storage. Due to the new security rules in the company, data written to Google Storage should be encrypted. Security team wants to be sure encryption key used is provided by them using on-premise vault and no keys generated by third-parties are used.<br>What should you do to follow security team’s rules?",
        options: [
            "A. Reference the encryption key provided by security team when calling API service when writing data to Google Storage to encrypt the data.",
            "B. Store the encryption key provided by security team in Compute Engine instance and reference it when calling API service when writing data to Google Storage to encrypt the data.",
            "C. Store the encryption key provided by security team in Cloud Key Management Service (KMS) and reference it when calling API service when writing data to Google Storage to encrypt the data.",
            "D. Create encryption keys using Cloud Key Management Service (KMS) and reference it when calling API service when writing data to Google Storage to encrypt the data."
        ],
        answer: "A",
        explanation: "Customer-Supplied Encryption Keys (CSEK) are a feature in Google Cloud Storage and Google Compute Engine. If you supply your own encryption keys, Google uses your key to protect the Google- generated keys used to encrypt and decrypt your data.<br>When you use Customer-Supplied Encryption Keys in Cloud Storage, you provide a raw CSEK as part of an API call. This key is transmitted from the Google front end to the storage system’s memory. This key is used as the key encryption key in Google Cloud Storage for your data.<br><br><img src='/static/images/dewlq115.png'><br><br>The raw CSEK is used to unwrap wrapped chunk keys, to create raw chunk keys in memory. These are used to decrypt data chunks stored in the storage systems. These keys are used as the data encryption keys (DEK) in Google Cloud Storage for your data.<br>Answer B & C are incorrect: Security team does not recommend storing encryption key in the cloud and using on-premise safe storage instead.<br>Answer D is incorrect: Security team doesn’t allow using generated keys from KMS.<br>Source(s):<br>Customer-Supplied Encryption Keys: https://cloud.google.com/security/encryption-at-rest/customer- supplied-encryption-keys/"
    },
    {
        // Question 116
        id: 116,
        question: "You have created a new project on Google Cloud and you need to set roles for users on the project. You have the following users:<br>* Developers: They will be able to modify the state of resources. They should not be able to change users roles or set up project billing.<br>* Team lead: Has all developer roles plus able to create and delete resources as well as setting up project billing.<br>* Finance team: They are required to monitor the project costs. They should not be able to view or modify project resources or manipulate user roles.<br>What role each group should be assigned?",
        options: [
            "A. Assign owner role to team lead, editor role to developers and admin role to finance team.",
            "B. Assign owner role to team lead, editor role to developers and viewer role to finance team.",
            "C. Assign owner role to team lead, editor role to developers and billing administrator to finance team.",
            "D. Assign editor role to team lead, viewer role to developers and billing administrator to finance team."
        ],
        answer: "C",
        explanation: "There are three roles that existed prior to the introduction of Cloud IAM: Owner, Editor, and Viewer. These roles are concentric; that is, the Owner role includes the permissions in the Editor role, and the Editor role includes the permissions in the Viewer role.<br>Viewer: Permissions for read-only actions that do not affect state, such as viewing (but not modifying) existing resources or data.<br>Editor: All viewer permissions, plus permissions for actions that modify state, such as changing existing resources.<br>Owner: All editor permissions and permissions to manage roles and permissions for a project and all resources within the project and set up billing for a project.<br>Cloud Billing lets you control which users have administrative and cost viewing permissions for specified resources by setting Cloud Identity and Access Management (Cloud IAM) policies on the resources.<br>Answers A & B are incorrect: Finance team need billing admin role. Any other role is not correct.<br>Answer D is incorrect: Based on scenario’s requirements, team lead needs a broader permission than editor role. Developers also need higher permission level than viewer to modify resources state.<br>Source(s):<br>IAM – Understanding Roles: https://cloud.google.com/iam/docs/understanding-roles#role_types Billing Access Control: https://cloud.google.com/billing/docs/how-to/billing-access"
    },
    {
        // Question 117
        id: 117,
        question: "You receive a daily comma-separated (CSV) file which should be imported to BigQuery. You need to scan the file in case of incomplete or improperly aligned column values which will cause importing to BigQuery fail.<br>What should you do to handle invalid inputs?",
        options: [
            "A. Import data to BigQuery, then run queries to check if data skew exists among table fields.",
            "B. Import file to BigQuery with setting –max_bad_records.",
            "C. Use Google Stackdriver to monitor import status and create an alert for failed imports.",
            "D. Build a Dataflow batch pipeline to scan CSV file, import valid rows to BigQuery and push invalid ones to a dead-letter file on Google Storage for later analysis."
        ],
        answer: "D",
        explanation: "A better way to solve this problem would be to have a dead letter file where all of the failing inputs are written for later analysis and reprocessing. We can use a side output in Dataflow to accomplish this goal.<br>Answer A is incorrect: This won’t avoid the fact data will fail loading into BigQuery.<br>Answer B is incorrect: Setting –max_bad_records option won’t help processing the file, and if number of errors exceed the value set for this option, it will return an error and cause the job to fail.<br>Answer C is incorrect: Stackdriver doesn’t have a native support for detecting BigQuery import failures. Also, this does not help fixing corrupted file.<br>Source(s):<br>Handling Invalid Inputs in Dataflow: https://cloud.google.com/blog/products/gcp/handling-invalid- inputs-in-dataflow<br>BigQuery – Loading CSV Data from Google Storage: https://cloud.google.com/bigquery/docs/loading- data-cloud-storage-csv"
    },
    {
        // Question 118
        id: 118,
        question: "The data analysts in your company want to prepare data sets for reporting to upper management. While the current data pipeline does part of data modeling to the data sets, data analysts still want to perform extra data profiling on data such as detecting duplicates, count null values and other profiling techniques. They ask your advice on what tool to use.<br>Which of the following is recommended?",
        options: [
            "A. Cloud Dataprep",
            "B. Dataproc",
            "C. Cloud Composer",
            "D. Cloud Function"
        ],
        answer: "A",
        explanation: "Cloud Dataprep is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis, reporting, and machine learning.<br>Because Cloud Dataprep is serverless and works at any scale, there is no infrastructure to deploy or manage. Your next ideal data transformation is suggested and predicted with each UI input, so you don’t have to write code.<br>With automatic schema, datatype, possible joins, and anomaly detection, you can skip time-consuming data profiling and focus on data analysis.<br>Answer B is incorrect: Dataproc is a complicated service for data profiling comparing to Dataprep.<br>Answer C & D are incorrect: Cloud Function and Cloud Composer don’t directly help with data modeling and profiling without coding and pipeline design.<br>Source(s):<br>Cloud Dataprep: https://cloud.google.com/dataprep/"
    },
    {
        // Question 119
        id: 119,
        question: "You are in need to restore a snapshot of a compute engine instance you have previously scheduled for regular daily snapshots. Which of the following are the steps you should do to perform the restoration?",
        options: [
            "A. You can simply create a replacement instance directly by selecting the snapshot from the list of snapshots available.",
            "B. You need to create a persistent disk from the snapshot of your choice. Create a new compute engine instance and attach the persistent disk to it.",
            "C. Create a new compute instance with the same exact machine type as the one the snapshot was created from. Create a persistent disk using the snapshot to be restored from. Attach the persistent disk to the compute engine instance.",
            "D. Export snapshot to Google Storage. Create new compute engine instance, then using gsutil tool, copy the snapshot to the instance’s persistent disk to be restored."
        ],
        answer: "A",
        explanation: "Google Cloud supports easy snapshot restoration to a persistent disk as well resotring a book disk snapshot to create a new VM instance. You can simply create a replacement instance directly by selecting the snapshot from the list of snapshots available.<br>Source(s):<br>Restoring and Deleting Persistent Disk Snapshots: https://cloud.google.com/compute/docs/disks/restore-and-delete-snapshots"
    },
    {
        // Question 120
        id: 120,
        question: "Your data team is using BigQuery as their main data warehouse. There is no format security policy implemented to track users activity on the data warehouse. A new security policy to be implemented which states any activity on cloud resources should be tracked and logged and BigQuery is one of these resources.<br>What action should be taken to log data warehouse’s activities?",
        options: [
            "A. Restrict users access on BigQuery’s tables using Identity & Access Management (IAM).",
            "B. You can list all query history from BigQuery UI.",
            "C. Use Google Stackdriver Audit Logs to log and review data warehouse access.",
            "D. Enable caching on BigQuery to allow auditing users activity."
        ],
        answer: "C",
        explanation: "Cloud Audit Logs are a collection of logs provided by Google Cloud Platform that provide insight into operational concerns related to your use of Google Cloud services. BigQuery automatically sends audit logs to Stackdriver Logging.<br>All remaining activities and events are reported as part of the main activity stream. Events such as job insertions and completions are reported in this stream, as are other resource events such as dataset creation. Those are called 'Admin activity.'<br>Answer A is incorrect: You cannot restrict BigQuery access by table level. Lowest level is dataset.<br>Answer B is incorrect: BigQuery UI’s query history has a limit of 1,000 cumulative jobs.<br>Answer D is incorrect: Enabling cache has nothing to do with audit logging in BigQuery.<br>Source(s):<br>Audit Logs: https://cloud.google.com/bigquery/docs/reference/auditlogs/"
    }
];
