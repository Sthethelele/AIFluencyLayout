// Define courses with 3 quizzes per course as an example
const courses = [
    {
        id: 0,
        name: "Course 1: AI Fundamentals",
        videos: [
            { title: "A Brief History of AI", filePath: "Videos/1_00_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Before the digital age, before cassette tapes, and even before the popularity of vinyl records, there was a time when artificial intelligence, known as AI, was born." },
                    { start: "00:06", end: "00:10", text: "Often perceived as a contemporary marvel, AI actually spans more than seventy years." },
                    { start: "00:11", end: "00:16", text: "In 1950, Alan Turing, a pioneer in computing, posed a profound question: 'Can machines think?' This marked the beginning of a new era in technology." },
                    { start: "00:17", end: "00:22", text: "In 1956, the Logic Theorist, considered the first AI program, was developed." },
                    { start: "00:23", end: "00:28", text: "Throughout the 1960s and 70s, we saw a rise in pattern recognition and advanced algorithms, laying the groundwork for future developments in AI." },
                    { start: "00:29", end: "00:34", text: "Fast forward to the late 1990s, the internet led to an explosion of data, providing the raw material for more advanced AI algorithms." },
                    { start: "00:35", end: "00:40", text: "This abundance of data led to a shift from a knowledge-driven to a data-driven approach in machine learning." },
                    { start: "00:41", end: "00:46", text: "The 2000s were a pivotal period that saw the rise of more enriched AI models and complexity, like deep learning." },
                    { start: "00:47", end: "00:52", text: "In the 2010s, we saw AI become a part of everyday life, including the integration of virtual assistants, like Cortana and Siri, into products." },
                    { start: "00:53", end: "00:58", text: "By 2021, generative AI took centre stage." },
                    { start: "00:59", end: "01:04", text: "This form of AI can generate written, visual, and auditory content from historical, learned, and new data." },
                    { start: "01:05", end: "01:10", text: "Generated Pre-trained Transformer, or GPT, is a neural network and machine learning model inspired by the human brain’s functioning." },
                    { start: "01:11", end: "01:16", text: "GPT generates content through natural, conversational language." },
                    { start: "01:17", end: "01:22", text: "DALL·E, an AI model that generates images based on textual descriptions, bridging the gap between language and visual art." },
                    { start: "01:23", end: "01:28", text: "Whisper is an automatic speech recognition system trained on an extensive dataset of multilingual and multitask supervised data collected from the web." },
                    { start: "01:29", end: "01:34", text: "These advancements in AI have opened new possibilities, including Microsoft Copilot, an AI-powered productivity tool designed to enhance your daily life." },
                    { start: "01:35", end: "01:40", text: "It leverages the power of AI to boost productivity, unlock creativity, and enhance understanding through a simple chat experience." },
                    { start: "01:41", end: "01:46", text: "From the spark of curiosity that ignited in Turing’s mind to the innovation of today’s AI tools, we have indeed come a long way." },
                    { start: "01:47", end: "01:52", text: "And this is just the beginning." }
                
                ]
             },
            { title: "What is Artificial Intelligence?", filePath: "videos/1_01_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Artificial intelligence, or AI, has become a buzzword you might have heard recently through social media, in conversations, or even on TV." },
                    { start: "00:06", end: "00:10", text: "In fact, you have been using AI for years and might not even realise it." },
                    { start: "00:11", end: "00:16", text: "At times, AI is portrayed as a force capable of changing the way we live, work, and interact." },
                    { start: "00:17", end: "00:22", text: "But beyond the hype, AI is a tool, one that has been evolving over decades, shaped by the contributions of countless individuals across various fields." },
                    { start: "00:23", end: "00:28", text: "AI is the ability of a computer system to learn from past data and errors, enabling it to make increasingly accurate predictions for future behaviour." },
                    { start: "00:29", end: "00:34", text: "This encompasses a broad range of activities, such as problem-solving, speech recognition, learning, and decision-making." },
                    { start: "00:35", end: "00:40", text: "At its core, AI is the intelligence demonstrated by software or machines in performing tasks that typically require human intelligence." },
                    { start: "00:41", end: "00:46", text: "These tasks can include recognising patterns, solving problems, or making decisions." },
                    { start: "00:47", end: "00:52", text: "For example, when you interact with Siri on your mobile phone, it is not exhibiting intelligence in the same way a human would." },
                    { start: "00:53", end: "00:58", text: "Rather, humans have programmed it to respond to certain prompts and execute functions, such as providing the latest weather update in your area or letting you know your local news." },
                    { start: "00:59", end: "01:04", text: "Consider a robot playing chess with a human. We observe it making strategic moves, but does that mean it is 'intelligent' in the human sense? Well, the answer is no." },
                    { start: "01:05", end: "01:10", text: "The robot is merely following algorithms and strategies it has been programmed with, and it learns from past games through machine learning." },
                    { start: "01:11", end: "01:16", text: "Back in 1950, Alan Turing asked the question: 'How can we determine if a machine is intelligent or not?'" },
                    { start: "01:17", end: "01:22", text: "To answer this question, he created the famous Turing Test, in which a human questioner would interact with either a human respondent or a computer." },
                    { start: "01:23", end: "01:28", text: "The purpose of the test was not to see if the answer was correct, but to evaluate whether the respondent was a machine or a human." },
                    { start: "01:29", end: "01:34", text: "AI has advanced significantly over the years and is increasingly present in our daily lives." },
                    { start: "01:35", end: "01:40", text: "Take for instance your interaction with social media apps, like Instagram. The app uses machine learning to determine the content to show you next based on your recent activity." },
                    { start: "01:41", end: "01:46", text: "Even though AI is all around us, it can be portrayed inaccurately, a common occurrence in Hollywood films." },
                    { start: "01:47", end: "01:52", text: "AI does not have consciousness, emotions, or the ability to understand context in the same way humans do." },
                    { start: "01:53", end: "01:58", text: "It is a tool created and controlled by humans, and its capabilities are limited to what it has been programmed to do." }
                ]
             },
            { title: "Knowledge vs Intelligence", filePath: "videos/1_02_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Continuing with the question, 'Can a machine ever truly be considered intelligent?' In 1980, John Searle, an American philosopher, created a test to answer this question." },
                    { start: "00:06", end: "00:11", text: "This test is called the 'Chinese Room Argument'." },
                    { start: "00:12", end: "00:17", text: "Imagine you know how to speak Mandarin, but your friend does not." },
                    { start: "00:18", end: "00:23", text: "Your friend enters a room filled with symbols and a rulebook." },
                    { start: "00:24", end: "00:29", text: "The rulebook states: 'When you see this symbol, answer with that symbol'." },
                    { start: "00:30", end: "00:35", text: "You are outside the room, sending your friend a message in Mandarin." },
                    { start: "00:36", end: "00:41", text: "Your friend, inside the room, does not understand Mandarin, but follows the rulebook." },
                    { start: "00:42", end: "00:47", text: "When you receive their response, you may think your friend understands Mandarin, but in reality, they are just following a set of rules without understanding the language." },
                    { start: "00:48", end: "00:53", text: "This test is intended to show that knowledge and intelligence are two very different things." },
                    { start: "00:54", end: "00:59", text: "When it comes to AI, a machine may not know Mandarin, but it knows how to recognise the pattern and answer with a message." },
                    { start: "01:00", end: "01:05", text: "Perhaps this analogy with Mandarin is not part of your daily routine, but interacting with AI virtual assistants like Siri might be." },
                    { start: "01:06", end: "01:11", text: "These systems convert our language into something they can recognise." },
                    { start: "01:12", end: "01:17", text: "They are constantly searching for matches in their databases, but they don’t truly comprehend our language." },
                    { start: "01:18", end: "01:23", text: "Imagine you are not feeling well, and you arrive at a doctor’s office for a visit." },
                    { start: "01:24", end: "01:29", text: "You will go through a series of questions asked by nurses, ’How long have you been feeling like this?’ 'What is your pain like, on a scale from 0 to 10?’" },
                    { start: "01:30", end: "01:35", text: "It is a repetitive process that takes up time and resources." },
                    { start: "01:36", end: "01:41", text: "Now, imagine an AI system asks all these questions." },
                    { start: "01:42", end: "01:47", text: "It swiftly analyses your responses, takes your vital signs, and any other relevant information." },
                    { start: "01:48", end: "01:53", text: "By the time you meet with the doctor, the system has already generated a preliminary diagnosis based on the patterns it identified." },
                    { start: "01:54", end: "01:59", text: "Knowledge is about understanding the world around us, while intelligence is about applying that knowledge in new and innovative ways." },
                    { start: "02:00", end: "02:05", text: "But what fuels this programming? What allows AI to recognise patterns, make predictions, and learn from past experiences? The answer is data." }
                ]
             },
            { title: "Data Everywhere", filePath: "videos/1_03_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Have you ever wondered why data collecting is so important in today’s world and what it can be used for?" },
                    { start: "00:06", end: "00:11", text: "Well, data is the raw material AI systems use to analyse and make predictions, and you probably produce way more data than you realise, even just through your mobile phone." },
                    { start: "00:12", end: "00:17", text: "Back in the 1990s, the rise of the internet marked a significant leap in access to data and the use of AI." },
                    { start: "00:18", end: "00:23", text: "Fast forward to the present, we have no shortage of data fuelling analyses and personal pattern recognition processes." },
                    { start: "00:24", end: "00:29", text: "Just imagine how much data is being created while you watch this video." },
                    { start: "00:30", end: "00:35", text: "Maybe you are sending a text message to a friend. At the same time, someone next to you might be on a call." },
                    { start: "00:36", end: "00:41", text: "Somebody else has just posted a photo on their social media page while another has started a new video series that piqued their interest on a streaming app." },
                    { start: "00:42", end: "00:47", text: "Data is constantly being generated with each passing second." },
                    { start: "00:48", end: "00:53", text: "Yet this raw data requires careful refinement." },
                    { start: "00:54", end: "00:59", text: "Data needs to be refined because the quality of the dataset used to train algorithms have a direct influence on the accuracy of the AI model." },
                    { start: "01:00", end: "01:05", text: "Consider a music streaming service. It uses the data from your listening habits to recommend new music that you might like." },
                    { start: "01:06", end: "01:11", text: "And that is what we use machine learning for, to analyse and learn from the data." },
                    { start: "01:12", end: "01:17", text: "Once we have this information, we can use it to train AI models, improve products and services, make predictions, and even uncover new insights that were previously hidden." },
                    { start: "01:18", end: "01:23", text: "So, the next time you use your mobile phone, remember that every action you take, every piece of data you generate, contributes to this vast, interconnected web of information." }
                ]
             },
            { title: "Pattern Recognition", filePath: "videos/1_04_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Data is constantly being created and refined to train AI models." },
                    { start: "00:06", end: "00:11", text: "But what exactly are these models looking for in the data? Patterns are identifiable repetitive behaviours." },
                    { start: "00:12", end: "00:17", text: "AI models are particularly good at recognising these patterns, mainly because they have access to a large volume of data." },
                    { start: "00:18", end: "00:23", text: "Let’s consider LinkedIn as an example. Have you ever noticed how LinkedIn suggests people you might know or jobs that you might be interested in?" },
                    { start: "00:24", end: "00:29", text: "It is not just based on your connections or job search history, but also on the behaviours of people all around the world who have similar connections or job interests." },
                    { start: "00:30", end: "00:35", text: "What is really interesting is platforms like LinkedIn may look for patterns not only within your professional network and job preferences, but also in relation to the specific times you are active on the platform." },
                    { start: "00:36", end: "00:41", text: "For example, many people tend to browse apps during their lunch breaks or after work hours, so apps may suggest new connections or posts at those times too." },
                    { start: "00:42", end: "00:47", text: "This pattern identification does not just occur on platforms like LinkedIn, but with many companies across many apps and platforms." },
                    { start: "00:48", end: "00:53", text: "Imagine the benefits of understanding what users really want or even creating new consumption trends based on the market." },
                    { start: "00:54", end: "00:59", text: "This understanding allows companies to customise their services for each user, thereby enhancing the user experience and boosting satisfaction." },
                    { start: "01:00", end: "01:05", text: "It is about using data to meet the needs of the user in the most effective way possible." },
                    { start: "01:06", end: "01:11", text: "Think about the World Cup. What are potentially the best-selling products before the tournament?" },
                    { start: "01:12", end: "01:17", text: "You might be thinking team shirts." },
                    { start: "01:18", end: "01:23", text: "Recognising this trend of team shirt consumption can provide a unique competitive edge for companies." },
                    { start: "01:24", end: "01:29", text: "It could even help in the new development of products or features." },
                    { start: "01:30", end: "01:35", text: "Every click, every like, every search - these are all pieces of data." },
                    { start: "01:36", end: "01:41", text: "AI models process this vast amount of data to notice patterns." },
                    { start: "01:42", end: "01:47", text: "These patterns help the AI model tailor your experience, making it more relevant and engaging." },
                    { start: "01:48", end: "01:53", text: "It is like having a personal assistant who knows exactly what you need, even before you do!" },
                    { start: "01:54", end: "01:59", text: "But how does an AI model learn to recognise these patterns? Well, it does so through machine learning." }
                ]
             },
            { title: "Machine Learning", filePath: "videos/1_05_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "You might have heard the terms 'machine learning' and 'AI' used interchangeably, and you may be wondering, 'What is the difference?'" },
                    { start: "00:06", end: "00:11", text: "Well, there is a difference, and it is important to understand how they are different." },
                    { start: "00:12", end: "00:17", text: "Artificial Intelligence refers to the intelligence exhibited by software and machines." },
                    { start: "00:18", end: "00:23", text: "Machine learning, on the other hand, is a subset of AI." },
                    { start: "00:24", end: "00:29", text: "This means that while all machine learning is AI, not all AI involves machine learning." },
                    { start: "00:30", end: "00:35", text: "Machine learning is a data science technique that allows computers to use existing data to forecast future behaviours, outcomes and trends." },
                    { start: "00:36", end: "00:41", text: "By using machine learning, computers learn without being explicitly programmed." },
                    { start: "00:42", end: "00:47", text: "It is also the process by which machines learn from data and improve their performance over time." },
                    { start: "00:48", end: "00:53", text: "It uses different types of techniques such as supervised learning, unsupervised learning, and reinforcement learning." },
                    { start: "00:54", end: "00:59", text: "The term 'Machine Learning' was introduced by Arthur Samuel in 1959." },
                    { start: "01:00", end: "01:05", text: "Samuel, an American pioneer in the field of computer gaming and AI, created a program that played draughts against itself." },
                    { start: "01:06", end: "01:11", text: "The machine analysed the game through repetitive plays, identifying strategies to win and avoid losses." },
                    { start: "01:12", end: "01:17", text: "Through playing the game and learning what to do to win, it began to detect recurring patterns and would increasingly follow a pattern." },
                    { start: "01:18", end: "01:23", text: "To achieve this, Samuel had to use mathematics." },
                    { start: "01:24", end: "01:29", text: "Concepts such as linear algebra, calculus, probability, and statistics play a crucial role in understanding how machine learning algorithms learn from data and make predictions." },
                    { start: "01:30", end: "01:35", text: "These mathematical concepts help in optimising the performance of the model, understanding the relationships within the data, and making accurate predictions." },
                    { start: "01:36", end: "01:41", text: "This draughts game is a prime example of a machine learning program." },
                    { start: "01:42", end: "01:47", text: "It was learning from its experiences, replicating successful results in other games, and refining its performance over time." },
                    { start: "01:48", end: "01:53", text: "Need further clarity? Let’s consider the analogy of learning to ride a bicycle." },
                    { start: "01:54", end: "01:59", text: "When you first learn to ride a bicycle, you might have started with training wheels." },
                    { start: "02:00", end: "02:05", text: "These training wheels are like the initial data set that we feed into the machine learning model." },
                    { start: "02:06", end: "02:11", text: "They provide the basic guidance and stability that the model needs to start learning." },
                    { start: "02:12", end: "02:17", text: "As you practise more and more, you start to understand how to balance, when to pedal, and how to steer." },
                    { start: "02:18", end: "02:23", text: "This is like how a machine learning model begins to recognise patterns and relationships in the data during the training process." },
                    { start: "02:24", end: "02:29", text: "Eventually, the training wheels come off." },
                    { start: "02:30", end: "02:35", text: "Now, you are not just riding the same bike in the same way. You are adapting to different situations - maybe you are riding on a hilly path or navigating through a crowded park." },
                    { start: "02:36", end: "02:41", text: "Similarly, a machine learning model uses the patterns it has learned to adapt to new data and make accurate predictions or perform tasks it was designed for." },
                    { start: "02:42", end: "02:47", text: "Just like how you can ride different bicycles after you have learned the skill, a machine learning model can apply its learning to different but related problems." },
                    { start: "02:48", end: "02:53", text: "The fundamental concept of machine learning is when a model learns from data, identifies patterns, and uses these patterns to make predictions or decisions." },
                    { start: "02:54", end: "02:59", text: "Just like Samuel’s draughts program, machine learning models improve their performance over time through continuous learning and adaptation." },
                    { start: "03:00", end: "03:05", text: "So, remember, all machine learning is AI, but not all AI is machine learning, and machine learning is broken into different types such as supervised, unsupervised, and reinforcement learning." }
                ]
             },
            { title: "Types of Machine Learning", filePath: "videos/1_06_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Ever wondered how you learned to ride a bike or play an instrument?" },
                    { start: "00:06", end: "00:11", text: "It is all about learning from experience, correct? Well, machines can do that, too!" },
                    { start: "00:12", end: "00:17", text: "They can learn in three main ways: supervised learning, unsupervised learning and reinforcement learning." },
                    { start: "00:18", end: "00:23", text: "Let’s break it down each with a simple analogy: learning to play football." },
                    { start: "00:24", end: "00:29", text: "In the first scenario, you have a trainer who supervises you and teaches you all the rules." },
                    { start: "00:30", end: "00:35", text: "They carefully explain that when the ball enters the goal, you earn a point, and when the ball goes out of play over the sideline, it must be thrown in by hand." },
                    { start: "00:36", end: "00:41", text: "They explain all the rules, how many players there are, how long the game lasts, and so on." },
                    { start: "00:42", end: "00:47", text: "In this case, you have a person supervising you and teaching you all the rules of the game." },
                    { start: "00:48", end: "00:53", text: "This is like supervised learning." },
                    { start: "00:54", end: "00:59", text: "In the second scenario, you are on your own." },
                    { start: "01:00", end: "01:05", text: "You start attending games every Thursday and Sunday. Initially, you are puzzled." },
                    { start: "01:06", end: "01:11", text: "Why are players using their hands from the sidelines in a game primarily played with feet?" },
                    { start: "01:12", end: "01:17", text: "Why is the crowd cheering when the ball hits the net, and why do they groan when it does not?" },
                    { start: "01:18", end: "01:23", text: "But as you keep watching, you start recognising patterns and understanding the game’s dynamics." },
                    { start: "01:24", end: "01:29", text: "This is like unsupervised learning." },
                    { start: "01:30", end: "01:35", text: "Now, let’s consider a third scenario, which is like reinforcement learning." },
                    { start: "01:36", end: "01:41", text: "Imagine you are practising penalty kicks." },
                    { start: "01:42", end: "01:47", text: "Each time you score a goal, you feel a sense of achievement, which is a positive reward." },
                    { start: "01:48", end: "01:53", text: "Each time you miss, you feel disappointment, which is a negative reward." },
                    { start: "01:54", end: "01:59", text: "Over time, by trying different ways of kicking the ball and learning from the rewards, you improve your ability to score penalty kicks." },
                    { start: "02:00", end: "02:05", text: "So, remember, all machine learning is AI, but not all AI involves machine learning." },
                    { start: "02:06", end: "02:11", text: "Machine learning can be broken down into these types: supervised, unsupervised, and reinforcement learning." },
                    { start: "02:12", end: "02:17", text: "But we can go even deeper." },
                    { start: "02:18", end: "02:23", text: "There are advanced forms of machine learning that mimic the human brain’s own method of learning." },
                    { start: "02:24", end: "02:29", text: "They take the concepts of supervised, unsupervised, and reinforcement learning and apply them on a much larger scale." },
                    { start: "02:30", end: "02:35", text: "This is called deep learning." },
                    { start: "02:36", end: "02:41", text: "Deep learning is a subfield of machine learning inspired by the structure and function of the brain called artificial neural networks." },
                    { start: "02:42", end: "02:47", text: "Just as neurons in the brain are connected to form a vast network, deep learning uses artificial neural networks with several layers - hence the term ‘deep’." },
                    { start: "02:48", end: "02:53", text: "These networks can learn and make decisions on their own. Intriguing, isn’t it?" }
                ]
             },
            { title: "Deep Learning", filePath: "videos/1_07_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Imagine you are standing at the edge of a data ocean, an ocean that is growing every second with waves of information from all around the world." },
                    { start: "00:06", end: "00:11", text: "Machine learning is a data science technique that allows computers to use existing data to forecast future behaviours, outcomes and trends." },
                    { start: "00:12", end: "00:17", text: "Traditional machine learning models are like small boats, they can only handle so much before they start to sink." },
                    { start: "00:18", end: "00:23", text: "But what if we had a bigger boat, like a ship? Well, that is deep learning." },
                    { start: "00:24", end: "00:29", text: "Deep Learning is a subfield of machine learning concerned with algorithms inspired by the structure and function of the brain." },
                    { start: "00:30", end: "00:35", text: "Deep Learning is our powerful ship, designed to navigate the vast ocean of data." },
                    { start: "00:36", end: "00:41", text: "It is inspired by the most complex system we know - the human brain." },
                    { start: "00:42", end: "00:47", text: "Just as our brain consists of billions of interconnected neurons working together to make sense of the world around us, deep learning uses neural networks to learn from data and make informed predictions." },
                    { start: "00:48", end: "00:53", text: "Have you ever wondered how the human brain works? How do we learn?" },
                    { start: "00:54", end: "00:59", text: "Think back to when you were a child. You probably played games that involved image recognition at school." },
                    { start: "01:00", end: "01:05", text: "Remember those cards? You would decide if it was a dog or a cat, and your teacher would confirm." },
                    { start: "01:06", end: "01:11", text: "Learning happened through repetition and feedback." },
                    { start: "01:12", end: "01:17", text: "This is similar to how a computer learns. The neural network makes assumptions and can be, let’s say, 70% certain that the image is correct or not." },
                    { start: "01:18", end: "01:23", text: "Instead of guessing, it adjusts its parameters and retrains over time." },
                    { start: "01:24", end: "01:29", text: "So, why does this matter? Well, the more high-quality data a computer has to train on, the more accurate it will be at recognising images." },
                    { start: "01:30", end: "01:35", text: "This is why the topic of data volume is so important." },
                    { start: "01:36", end: "01:41", text: "Now, let’s think about cooking. When you start learning, you begin with simple recipes, like frying an egg or cooking rice." },
                    { start: "01:42", end: "01:47", text: "Each time you cook, you learn something new - how high to turn the heat, how long to cook the eggs, how much water you should put in your rice." },
                    { start: "01:48", end: "01:53", text: "Over time, you become more proficient, and you can cook these dishes without even thinking about it." },
                    { start: "01:54", end: "01:59", text: "This is like how traditional machine learning works." },
                    { start: "02:00", end: "02:05", text: "But what if you want to learn to cook a complex dish, like fried chicken?" },
                    { start: "02:06", end: "02:11", text: "There are so many variables to consider - how you bread the chicken, what temperature you fry it and what sort of oil you use." },
                    { start: "02:12", end: "02:17", text: "It is not enough to just practise; you need to understand how all these factors interact." },
                    { start: "02:18", end: "02:23", text: "This is where deep learning comes in." },
                    { start: "02:24", end: "02:29", text: "Deep learning, like frying chicken, involves a lot of trial and error." },
                    { start: "02:30", end: "02:35", text: "The neural network makes an assumption (or a guess), checks how close it was to the right answer, and then adjusts its parameters for the next guess." },
                    { start: "02:36", end: "02:41", text: "This process is repeated over and over again, each time getting closer to the correct answer." },
                    { start: "02:42", end: "02:47", text: "Just like having more recipes can enhance your cooking skills, the more data the computer has to train on, the better it will be at making accurate predictions." },
                    { start: "02:48", end: "02:53", text: "And as a child learns to recognise images from animal cards, a computer can learn to generate human language." },
                    { start: "02:54", end: "02:59", text: "Natural language processing is an application of AI which enables machines to both process and comprehend human language in the way it is written." },
                    { start: "03:00", end: "03:05", text: "Another branch of AI is natural language processing, or NLP, which uses similar principles as deep learning but focuses on language." },
                    { start: "03:06", end: "03:11", text: "The more textual data a computer learns from, the more proficient it becomes at producing human-like language." }
                ]
             },
            { title: "Natural Language Processing (NLP)", filePath: "videos/1_08_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Did you know that every time you ask your phone about the weather or when autocorrect saves you from sending a text full of typos, you are interacting with a branch of AI called natural language processing, or NLP?" },
                    { start: "00:06", end: "00:11", text: "Graphics appear around the letters 'NLP'. NLP enables machines to both process and comprehend human language in the way it is written." },
                    { start: "00:12", end: "00:17", text: "NLP can read, decipher, understand and make sense of human language." },
                    { start: "00:18", end: "00:23", text: "It does this through various methods such as text analysis, translation, sentiment analysis, and speech recognition." },
                    { start: "00:24", end: "00:29", text: "For example, think about the last time you used a search engine like Bing to find the lyrics of your favourite song." },
                    { start: "00:30", end: "00:35", text: "You typed in the song name and lyrics, and just like that, Bing showed you exactly what you were looking for." },
                    { start: "00:36", end: "00:41", text: "But how did it know you wanted the lyrics and not the music video or information about the singer?" },
                    { start: "00:42", end: "00:47", text: "That is NLP at work! NLP acts like a translator between us and our devices." },
                    { start: "00:48", end: "00:53", text: "It helps our devices understand not just the words we say, but also what we mean." },
                    { start: "00:54", end: "00:59", text: "So, whether you are searching for song lyrics, asking your phone about the weather, or translating a sentence into a different language, NLP is there, making it feel like you are chatting with a person." },
                    { start: "01:00", end: "01:05", text: "Colourful waves come out of a tablet that a man works on." },
                    { start: "01:06", end: "01:11", text: "When we talk about different branches of AI like NLP, we can sort them based on the kind of problems they solve." },
                    { start: "01:12", end: "01:17", text: "Some AI algorithms are great at recognising images, some are experts at understanding language, and others are pros at predicting trends." },
                    { start: "01:18", end: "01:23", text: "So next time you use your phone or computer, remember AI is working behind the scenes making you more connected than ever before." }
                ]
             },
            { title: "AI Algorithms", filePath: "videos/1_09_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Ever wondered how your email knows what is junk mail and what is not?" },
                    { start: "00:06", end: "00:11", text: "Or how does your music app always hit the right note with its recommendations?" },
                    { start: "00:12", end: "00:17", text: "That happens thanks to something called AI algorithms." },
                    { start: "00:18", end: "00:23", text: "AI algorithms are step-by-step instructions given to a computer to solve specific problems or perform tasks." },
                    { start: "00:24", end: "00:29", text: "Imagine these algorithms as a set of instructions that guide a computer to solve a problem, much like a recipe guiding you to bake a cake." },
                    { start: "00:30", end: "00:35", text: "Machine learning, a subset of AI, encompasses deep learning as one of its own subsets." },
                    { start: "00:36", end: "00:41", text: "These subsets represent different methodologies through which a computer system can learn from data to solve problems." },
                    { start: "00:42", end: "00:47", text: "Within these, there are different learning methods like supervised learning, unsupervised learning and reinforcement learning." },
                    { start: "00:48", end: "00:53", text: "And each one of these methods uses a specific set of instructions, or algorithms, which guides the computer on how to solve a problem." },
                    { start: "00:54", end: "00:59", text: "And depending on the problem, the algorithm might be quite different." },
                    { start: "01:00", end: "01:05", text: "There are a few main types of these algorithms. Imagine you are sifting through your emails." },
                    { start: "01:06", end: "01:11", text: "Some are important, others... not so much." },
                    { start: "01:12", end: "01:17", text: "How does your email service know which ones to put in your inbox and which ones to label as spam?" },
                    { start: "01:18", end: "01:23", text: "That is the work of a type of algorithm called classification. It is like a detective, sorting each email into spam or not spam." },
                    { start: "01:24", end: "01:29", text: "Now, let’s say you are house hunting. Ever wondered how real estate websites predict the price of a house?" },
                    { start: "01:30", end: "01:35", text: "They use a type of algorithm called regression. It is like a fortune teller, predicting the future based on information like size, location, and other factors." },
                    { start: "01:36", end: "01:41", text: "Ever noticed how your favourite music app always knows just the right song to recommend?" },
                    { start: "01:42", end: "01:47", text: "That is clustering at work. It is like a party planner, grouping together songs you like so it can suggest similar ones." },
                    { start: "01:48", end: "01:53", text: "And when you are hungry and waiting for your food delivery, an optimisation algorithm is finding the quickest route to get your food to you." },
                    { start: "01:54", end: "01:59", text: "It is like a navigator, always searching for the best solution." },
                    { start: "02:00", end: "02:05", text: "Data scientists use these and other types of algorithms to make sense of the world around us." },
                    { start: "02:06", end: "02:11", text: "They are like the secret superheroes of the digital age, using their powers to make our lives easier and more convenient." },
                    { start: "02:12", end: "02:17", text: "And the best part? These algorithms are getting more advanced every day, learning from the vast amounts of data we generate." }
                ]
             },
            { title: "AI in Action", filePath: "videos/1_10_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Data is constantly being created and refined to train AI models." },
                    { start: "00:06", end: "00:11", text: "But what exactly are these models looking for in the data?" },
                    { start: "00:12", end: "00:17", text: "Patterns are identifiable repetitive behaviours." },
                    { start: "00:18", end: "00:23", text: "AI models are particularly good at recognising these patterns, mainly because they have access to a large volume of data." },
                    { start: "00:24", end: "00:29", text: "Let’s consider LinkedIn as an example. Have you ever noticed how LinkedIn suggests people you might know or jobs that you might be interested in?" },
                    { start: "00:30", end: "00:35", text: "It is not just based on your connections or job search history, but also on the behaviours of people all around the world who have similar connections or job interests." },
                    { start: "00:36", end: "00:41", text: "What is really interesting is platforms like LinkedIn may look for patterns not only within your professional network and job preferences, but also in relation to the specific times you are active on the platform." },
                    { start: "00:42", end: "00:47", text: "For example, many people tend to browse apps during their lunch breaks or after work hours, so apps may suggest new connections or posts at those times too." },
                    { start: "00:48", end: "00:53", text: "This pattern identification does not just occur on platforms like LinkedIn, but with many companies across many apps and platforms." },
                    { start: "00:54", end: "00:59", text: "Imagine the benefits of understanding what users really want or even creating new consumption trends based on the market." },
                    { start: "01:00", end: "01:05", text: "This understanding allows companies to customise their services for each user, thereby enhancing the user experience and boosting satisfaction." },
                    { start: "01:06", end: "01:11", text: "It is about using data to meet the needs of the user in the most effective way possible." },
                    { start: "01:12", end: "01:17", text: "Think about the World Cup. What are potentially the best-selling products before the tournament?" },
                    { start: "01:18", end: "01:23", text: "You might be thinking team shirts." },
                    { start: "01:24", end: "01:29", text: "Recognising this trend of team shirt consumption can provide a unique competitive edge for companies." },
                    { start: "01:30", end: "01:35", text: "It could even help in the new development of products or features." },
                    { start: "01:36", end: "01:41", text: "Every click, every like, every search - these are all pieces of data." },
                    { start: "01:42", end: "01:47", text: "AI models process this vast amount of data to notice patterns." },
                    { start: "01:48", end: "01:53", text: "These patterns help the AI model tailor your experience, making it more relevant and engaging." },
                    { start: "01:54", end: "01:59", text: "It is like having a personal assistant who knows exactly what you need, even before you do!" },
                    { start: "02:00", end: "02:05", text: "But how does an AI model learn to recognise these patterns?" },
                    { start: "02:06", end: "02:11", text: "Well, it does so through machine learning." }
                ]
             }
        ],
        quizzes: [
            {
                video_title: "A Brief History of AI",
                question: "In what year did the progress of AI that can create Microsoft Copilot technology occur?",
                options: { correct: "2021", incorrect: ["1950", "1990s", "2000s"] },
                explanations: {
                    correct: "In 2021, generative artificial intelligence (AI) took centre stage. This type of AI can create written, visual and audio content, generating material from historical data, learned data, and new data...",
                    incorrect: {
                        "1950": "AI has been around since before the start of the digital era. Specifically, in 1950, Alan Turing, a computing pioneer, posed a question: 'Can machines think?'",
                        "1990s": "In the late 1990s, the internet caused data explosion by providing material for more advanced AI algorithms...",
                        "2000s": "In the 2000s, there was a significant development with the emergence of richer and more complex AI models, such as deep learning."
                    }
                }
            },
            {
                video_title: "What is Artificial Intelligence?",
                question: "Which statement is correct regarding Artificial Intelligence?",
                options: { correct: "AI does not have consciousness, emotions, or the ability to understand context in the same way as humans.", incorrect: ["AI cannot perform tasks such as pattern recognition, problem-solving or decision-making.", "AI does not learn from past data and mistakes to make predictions of future behaviour that are increasingly accurate.", "AI cannot provide the latest updates on local weather and news in an area."] },
                explanations: {
                    correct: "AI can mimic certain aspects of human intelligence, but AI operates in a very different way from human intelligence...",
                    incorrect: [
                        "AI can follow pre-programmed algorithms and strategies or use machine learning to recognise patterns, solve problems, and make decisions.",
                        "The definition of AI is the ability of a computer system to learn from past data and mistakes, enabling the system to make increasingly accurate predictions of future behaviour...",
                        "The primary source of AI intelligence is Data. Therefore, AI can easily provide the latest updates on local weather and news in an area."
                    ]
                }
            },
            {
                video_title: "Knowledge vs Intelligence",
                question: "What enables AI to recognise patterns, make predictions, and learn from past experiences?",
                options: { correct: "Data", incorrect: ["Numbers", "Text", "Emotion"] },
                explanations: {
                    correct: "The available data becomes the main source that can be used by AI to recognise patterns, make predictions, and learn from past experiences...",
                    incorrect: [
                        "Numbers are one form of data that can be used as AI source or material to run its activities, but not the only one tool.",
                        "Text is one form of data that can be used as AI source or material to run its activities, but not the only one tool.",
                        "AI is unable to recognise emotions so emotions can't be used as AI source or material to run its activities."
                    ]
                }
            },
            {
                video_title: "Data Everywhere",
                question: "Machine learning can be used for several purposes, including....",
                options: { correct: "training AI models and making predictions", incorrect: ["improving products and services, and blocking new hidden insights", "preventing inaccurate data predictions and improving products and services", "training and adapting AI models"] },
                explanations: {
                    correct: "Machine learning can be used for several purposes, including: training AI models, improving products and services, making predictions, and uncovering new insights that were previously hidden.",
                    incorrect: [
                        "One of the benefits of machine learning is can be used to uncover new insights that were previously hidden; not cover the new insights.",
                        "One of the benefits of machine learning is can be used to make predictions; not prevent the predictions.",
                        "One of the benefits of machine learning is can be used to train AI models; rather than adapting them."
                    ]
                }
            },
            {
                video_title: "Pattern Recognition",
                question: "What is one of the benefits of understanding target user?",
                options: { correct: "Improving the user satisfaction.", incorrect: ["Curating the user experience.", "User can customise the service according to the company's preferences.", "Meeting the company's needs quickly."] },
                explanations: {
                    correct: "The company need to understand target users in order to customise their services for each users, enhance the user experiences, and improve the satisfaction.",
                    incorrect: [
                        "One of the benefits of understanding target users is to enhance the user experience; not to curate the user experience which may limit their experience.",
                        "Understanding target users help the company to customise the services it offers to the user's needs; rather than the users are customising themselves to the company's services.",
                        "Understanding target users becomes the most effective way; not the quickest way."
                    ]
                }
            },
            {
                video_title: "Machine Learning",
                question: "From the following statements, which one is correct regarding Machine Learning?",
                options: { correct: "Machine Learning is a process where machines learn from data and improve their performance over time.", incorrect: ["Machine Learning is an essential system that is always used and forms the basis in AI.", "Machine Learning is a standalone system that can learn and make decisions without training data/pre-processing.", "Complex Machine Learning models can work without supervision and guidance from humans."] },
                explanations: {
                    correct: "One of the hallmarks of Machine Learning is its ability to 'learn' from data and improve performance over time based on experience.",
                    incorrect: [
                        "Machine Learning is a subcategory of AI. All Machine Learning is AI, but not all AI utilise Machine Learning.",
                        "Machine Learning algorithms require training data to learn patterns and make predictions or decisions, and pre-processing data is an essential step...",
                        "Being overly complicated or complex can lead to overfitting. Machine Learning models need to be monitored and managed continually after being trained..."
                    ]
                }
            },
            {
                video_title: "Types of Machine Learning",
                question: "The type of Machine Learning that performs automatic trial and error decision-making to maximise the performance of its algorithm is...",
                options: { correct: "Reinforcement Learning", incorrect: ["Supervised Learning", "Unsupervised Learning", "Deep Learning"] },
                explanations: {
                    correct: "The machine interacts with its environment and receives rewards or punishments (known as 'reinforcement') based on the actions it takes...",
                    incorrect: [
                        "The machine is given 'training' data which has already been labelled with 'answers', and it learns how to reach these answers.",
                        "This type of learning involves training the model with unlabelled data and allowing the computer to independently identify the emerging patterns.",
                        "Deep Learning is not a type of learning, but rather a type of model structure used in supervised, unsupervised or reinforcement learning."
                    ]
                }
            },
            {
                video_title: "Deep Learning",
                question: "How does the volume of data a computer has affect the performance of AI?",
                options: { correct: "The more data there is, the better AI performance.", incorrect: ["The less data there is, the more accurate AI predictions will be.", "The more data there is, the faster the AI becomes.", "Data volume has no effect on AI performance."] },
                explanations: {
                    correct: "With more data, the algorithm has more information to learn from, which usually leads to more accurate or reliable results.",
                    incorrect: [
                        "Less data tends to result in less accurate models because the system doesn't have enough data variation or patterns to learn from...",
                        "AI's ability to process data quickly is usually tied to computing capacity, not data volume...",
                        "Data volume has a significant impact on the performance of AI."
                    ]
                }
            },
            {
                video_title: "Natural Language Processing (NLP)",
                question: "What is the process of computer analysis in processing and understanding human language through text called?",
                options: { correct: "Text Analysis", incorrect: ["Image Analysis", "Sentiment Analysis", "Speech Recognition"] },
                explanations: {
                    correct: "The computerised process of processing and understanding human language through text automatically, this is one method in natural language processing that focuses on text.",
                    incorrect: [
                        "Natural language processing is artificial intelligence that focuses on the interaction between computers and natural human language, such as speech, text and sentiment, so image analysis is not included...",
                        "The computerised process of identifying and evaluating opinions or sentiments contained in text, whether positive, negative or neutral, is one of the methods in natural language processing.",
                        "The computerised process of processing and understanding human language spoken or input in the form of sound, this is one of the methods in natural language processing."
                    ]
                }
            },
            {
                video_title: "AI Algorithms",
                question: "What is the algorithm that can classify every incoming email as spam or not?",
                options: { correct: "Classification Algorithm", incorrect: ["Regulation Algorithm", "Clustering Algorithms", "Optimisation Algorithms"] },
                explanations: {
                    correct: "This algorithm is like a detective that classifies each email as spam or not.",
                    incorrect: [
                        "These algorithms are like fortune tellers that predict the future based on information, such as size, location and other factors.",
                        "This algorithm is like a party organiser that groups the songs you like so that it can suggest similar songs.",
                        "This algorithm is like a navigator, always looking for the route with the best solution."
                    ]
                }
            },
            {
                video_title: "AI in Action",
                question: "An example of implementing the Internet of Things (IoT) in the household is?",
                options: { correct: "Utilisation of sensors on the fridge to monitor the contents of the cupboard", incorrect: ["Using a self-driving car", "Indoor lights that can be turned on and off with a light switch", "Use CCTV cameras that have a large memory"] },
                explanations: {
                    correct: "The use of sensors in the fridge that know exactly when you are low on milk and send you a reminder to buy it on the way home are benefits of using the internet of things (IoT) in the household sphere.",
                    incorrect: [
                        "Self-driving cars are a benefit of using the internet of things (IoT) in the transport sector.",
                        "The use of indoor lights that can be controlled by a light switch is still a conventional method...",
                        "Using CCTV cameras with large storage capacities is still considered a conventional method..."
                    ]
                }
            }
        ]
    },
    {
        id: 1,
        name: "Course 2: Generative AI",
        videos: [
            { title: "What is Generative AI?", filePath: "videos/2_11_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Imagine you are trying to write a heartfelt birthday card," },
                    { start: "00:06", end: "00:11", text: "but the right words escape you." },
                    { start: "00:12", end: "00:17", text: "Then, an AI companion offers creative suggestions, and suddenly, the perfect message flows onto the card." },
                    { start: "00:18", end: "00:23", text: "This is the power of generative AI. It can transform our approach to creativity and productivity." },
                    { start: "00:24", end: "00:29", text: "Starting at its history, generative AI has its roots in early AI research and mathematical explorations, including the creation of chatbots in the 1960s" },
                    { start: "00:30", end: "00:35", text: "and the introduction of Generative Adversarial Networks, or GANs, in the 2010s." },
                    { start: "00:36", end: "00:41", text: "Fast forward to recent developments, Generative Pre-trained Transformers, or GPTs, have significantly advanced natural language processing and generation capabilities." },
                    { start: "00:42", end: "00:47", text: "These networks have transformed the field, enabling the creation of images, videos, texts, and audio." },
                    { start: "00:48", end: "00:53", text: "In today’s world, machines are not just tools, but key players in the creative process, marking a significant shift in our approach to productivity." },
                    { start: "00:54", end: "00:59", text: "This technological advancement allows us to focus on what we do best:" },
                    { start: "01:00", end: "01:05", text: "envisioning, innovating, setting goals, and pursuing our dreams." },
                    { start: "01:06", end: "01:11", text: "So, you might wonder, what exactly is generative AI?" },
                    { start: "01:12", end: "01:17", text: "Generative AI is a type of artificial intelligence that is trained on data to generate new content." },
                    { start: "01:18", end: "01:23", text: "By identifying patterns found in data, generative AI can produce entirely new and original creations, mirroring the intricate complexity of human imagination." },
                    { start: "01:24", end: "01:29", text: "But how is this possible? This is achieved through machine learning models that have been trained on extensive amounts of data." },
                    { start: "01:30", end: "01:35", text: "These models can understand complex patterns within the data." },
                    { start: "01:36", end: "01:41", text: "Once trained, they can generate new content that mirrors the structure and style of the training data yet it is entirely original." },
                    { start: "01:42", end: "01:47", text: "Now, why is this important? Imagine a world where every creative thought could be explored," },
                    { start: "01:48", end: "01:53", text: "where each ‘what if’ is answered with numerous possibilities, and your repetitive tasks are handled by an AI tool." },
                    { start: "01:54", end: "01:59", text: "Generative AI can make this a reality." },
                    { start: "02:00", end: "02:05", text: "As we embrace this new era of AI, we find ourselves not limited by the constraints of time or resources," },
                    { start: "02:06", end: "02:11", text: "but empowered to dream bigger, innovate faster, and reach further." },
                    { start: "02:12", end: "02:17", text: "The essence of generative AI lies in its ability to learn from patterns, crafting narratives and solutions that resonate on a personal level yet have the power to inspire on a global scale." },
                    { start: "02:18", end: "02:23", text: "So, ask yourself: How will you harness the power of generative AI to redefine the boundaries of your imagination?" },
                    { start: "02:24", end: "02:29", text: "The canvas is vast, the palette is endless, and the next masterpiece of innovation awaits your touch." }
                ]
             },
            { title: "What is Generative AI Model?", filePath: "2_12_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Artificial intelligence can be designed to perform specific tasks." },
                    { start: "00:06", end: "00:11", text: "This includes everything from self-driving cars and weather forecasting to virtual assistants." },
                    { start: "00:12", end: "00:17", text: "AI models are like the brains of the AI systems." },
                    { start: "00:18", end: "00:23", text: "These models are mathematical structures that learn patterns from data using algorithms." },
                    { start: "00:24", end: "00:29", text: "Interestingly, there are different types of AI models, and their capabilities vary." },
                    { start: "00:30", end: "00:35", text: "Some AI models are designed to classify or identify information based on what they have been trained on." },
                    { start: "00:36", end: "00:41", text: "These models are often used in applications like image recognition or spam detection." },
                    { start: "00:42", end: "00:47", text: "On the other hand, generative AI models specialise in creating new content, ranging from written text and visual artwork to musical melodies." },
                    { start: "00:48", end: "00:53", text: "The Generative Pre-Trained Transformer, or GPT model, is one such example." },
                    { start: "00:54", end: "00:59", text: "GPT models can understand context and make predictions, which is why they are used in applications like text completion, translation, and even coding assistance." },
                    { start: "01:00", end: "01:05", text: "The way we use a generative AI model depends entirely on our technical knowledge." },
                    { start: "01:06", end: "01:11", text: "Let’s use an analogy of gardening to illustrate this:" },
                    { start: "01:12", end: "01:17", text: "Scenario one - The landscape designer: Just as a landscape designer uses their extensive knowledge of gardening to plan and cultivate a garden from the ground up," },
                    { start: "01:18", end: "01:23", text: "a team of tech experts like software engineers can create a generative AI model, customising it for complex tasks." },
                    { start: "01:24", end: "01:29", text: "Scenario two - The home gardener: A home gardener might use a mix of seed packets and young plants to cultivate a garden, following some guidance but also experimenting." },
                    { start: "01:30", end: "01:35", text: "Similarly, someone with basic tech knowledge might use pre-existing models from open-source repositories like GitHub and tweak them to suit their project or personal needs." },
                    { start: "01:36", end: "01:41", text: "Scenario three - The indoor plant enthusiast: Someone who starts with a simple indoor plant kit that comes with instructions for easy maintenance" },
                    { start: "01:42", end: "01:47", text: "is like a person who wants to simply use a generative AI tool or service." },
                    { start: "01:48", end: "01:53", text: "They can easily access online services such as Microsoft Copilot, without needing in-depth technical expertise." },
                    { start: "01:54", end: "01:59", text: "However, basic understanding of the technology can enhance the user’s experience." },
                    { start: "02:00", end: "02:05", text: "In all these scenarios, the level of control you want over the results from the generative AI model depends on you." },
                    { start: "02:06", end: "02:11", text: "But certainly, in all these cases, we will have a beautiful garden and a greater understanding of generative AI models." },
                    { start: "02:12", end: "02:17", text: "Regardless of your degree of technical expertise, the landscape of generative AI continues to grow." }
                ]
             },
            { title: "AI Linguistics", filePath: "videos/2_13_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Have you ever wondered how your mobile phone understands what you are saying?" },
                    { start: "00:06", end: "00:11", text: "Or how can it suggest words while you are typing a message?" },
                    { start: "00:12", end: "00:17", text: "That is all thanks to some clever technology behind some interesting acronyms." },
                    { start: "00:18", end: "00:23", text: "Natural Language Processing, or NLP, is a large branch of AI that empowers computers to understand and react to human language." },
                    { start: "00:24", end: "00:29", text: "It is like sorting through a huge library of books — categorising them, summarising their content, and knowing exactly where to find the information you need." },
                    { start: "00:30", end: "00:35", text: "NLP involves several tasks such as translation, sentiment analysis, speech recognition and topic segmentation." },
                    { start: "00:36", end: "00:41", text: "A subfield of NLP is Natural Language Generation, or NLG." },
                    { start: "00:42", end: "00:47", text: "This specialised branch of AI gives computers the ability to craft text that is not only understandable but also contextually relevant." },
                    { start: "00:48", end: "00:53", text: "It is the driving force behind the creation of various text content." },
                    { start: "00:54", end: "00:59", text: "Imagine a journalist who writes articles on many topics." },
                    { start: "01:00", end: "01:05", text: "They collect information, organise their thoughts, and then write a story." },
                    { start: "01:06", end: "01:11", text: "NLG operates in a similar fashion, but it is a system that processes data and weaves it into a narrative, be it a financial summary, a weather forecast, or a product description." },
                    { start: "01:12", end: "01:17", text: "Advancing further, we encounter Large Language Models, or LLMs, which represent a more sophisticated use of AI in language." },
                    { start: "01:18", end: "01:23", text: "Trained in text collections, LLMs can perform complex tasks requiring contextual understanding, such as holding conversations or providing answers to inquiries." },
                    { start: "01:24", end: "01:29", text: "For instance, imagine a well-travelled individual who can recount tales and converse in various languages." },
                    { start: "01:30", end: "01:35", text: "An LLM also has an extensive array of texts and can discuss a multitude of topics, giving the impression of conversing with a seasoned traveller." },
                    { start: "01:36", end: "01:41", text: "While NLG focuses on generating new text from structured data, LLMs are designed to produce text that is meaningful and contextually fitting." },
                    { start: "01:42", end: "01:47", text: "This distinction highlights the impressive abilities of large language models, which go beyond the typical functions of natural language generation." },
                    { start: "01:48", end: "01:53", text: "Now you might be wondering how these technologies are applied in the real world today." },
                    { start: "01:54", end: "01:59", text: "Microsoft Copilot for instance, harnesses both NLG and LLM technologies to offer users a range of assistance, from summarising information to providing coding support." },
                    { start: "02:00", end: "02:05", text: "Similarly, GitHub Copilot is an AI-powered tool that enhances developers’ productivity by suggesting relevant code snippets for the task at hand." },
                    { start: "02:06", end: "02:11", text: "However, it is crucial to remember that these are tools designed to assist us." },
                    { start: "02:12", end: "02:17", text: "And as with any tool, they must be used responsibly." }
                ]
             },
            { title: "Visualization with AI - From Text to Images", filePath: "videos/2_14_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Let's be honest, not all of us have the skill for visual arts, but that should not limit our creativity." },
                    { start: "00:06", end: "00:11", text: "For example, imagine you are organising a neighbourhood food drive and you have received permission to display posters in local supermarkets and community centres." },
                    { start: "00:12", end: "00:17", text: "You are aiming to create a poster that effectively communicates the purpose of the food drive, but you are struggling to create illustrations for your poster." },
                    { start: "00:18", end: "00:23", text: "Well, this is where a text-to-image generator can help bridge the gap." },
                    { start: "00:24", end: "00:29", text: "These generators utilise advanced algorithms to interpret your text prompt to create an image." },
                    { start: "00:30", end: "00:35", text: "DALL•E, an AI model developed by OpenAI, is an example of this technology." },
                    { start: "00:36", end: "00:41", text: "It can generate detailed images from simple descriptions, effectively translating words into visual representations." },
                    { start: "00:42", end: "00:47", text: "This AI model is also integrated into Microsoft Designer, which is a feature within Image Creator in Microsoft Copilot." },
                    { start: "00:48", end: "00:53", text: "By inputting your description, Microsoft Designer leverages DALL•E to turn your conceptual ideas into a virtual reality." },
                    { start: "00:54", end: "00:59", text: "Let’s see how this is done." },
                    { start: "01:00", end: "01:05", text: "After navigating to the Microsoft Copilot website, you will find three conversational styles: ‘more creative’, ‘more balanced’, and ‘more precise’." },
                    { start: "01:06", end: "01:11", text: "For image creation, you will want to select the ‘more creative’ style." },
                    { start: "01:12", end: "01:17", text: "Let’s say you want to create an image to add in a poster for a food donation event." },
                    { start: "01:18", end: "01:23", text: "You could input a description like: ‘Create a cartoon image of a diverse group of people donating food to a community’." },
                    { start: "01:24", end: "01:29", text: "It is important to remember to tell Microsoft Copilot exactly what you want it to create." },
                    { start: "01:30", end: "01:35", text: "Always start with a sentence stem like, ‘create an image of…’ Otherwise, it might not realise that you want an image instead of a text response!" },
                    { start: "01:36", end: "01:41", text: "After entering your description, simply click the ‘Generate’ arrow." },
                    { start: "01:42", end: "01:47", text: "Microsoft Copilot will then process your input and, within a short time, provide a visual representation of your description." },
                    { start: "01:48", end: "01:53", text: "This image can serve as a source of inspiration or a starting point for further designs." },
                    { start: "01:54", end: "01:59", text: "Remember, the more detailed and descriptive your prompt, the more accurate the generated image will be." },
                    { start: "02:00", end: "02:05", text: "So, don’t hesitate to add more specifics about the image you want to create." },
                    { start: "02:06", end: "02:11", text: "Let’s say, the image and it is not quite what you want. You want an image with a certain background." },
                    { start: "02:12", end: "02:17", text: "You can ask Microsoft Copilot to edit your image. Let’s try." },
                    { start: "02:18", end: "02:23", text: "‘Add a city background’. As you can see, Microsoft Copilot creates an image to match the edited description." },
                    { start: "02:24", end: "02:29", text: "Generative AI has practical applications that span from product design to artistic creation, and its potential is expanding daily." },
                    { start: "02:30", end: "02:35", text: "Whether you are remodelling your home or in need of illustrative materials for your latest project, AI generators stand ready to assist in bringing visuals to life." },
                    { start: "02:36", end: "02:41", text: "So, the next time you are in need of an image, remember that the power of AI is just a description away." }
                ]
             },
            { title: "AI Companion in Content Creation", filePath: "videos/2_15_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Generative AI is changing the way we interact with digital content." },
                    { start: "00:06", end: "00:11", text: "It is a fusion of art and science, where algorithms and data collaborate to create." },
                    { start: "00:12", end: "00:17", text: "There are several types of generative AI. One is text-based generative AI." },
                    { start: "00:18", end: "00:23", text: "This technology uses advanced AI models to generate coherent and contextually relevant text-based responses." },
                    { start: "00:24", end: "00:29", text: "It is like having a virtual companion at your fingertips, capable of assisting you in composing emails, articles, or even finding the best restaurants in your area." },
                    { start: "00:30", end: "00:35", text: "You can create text-based responses with Microsoft Copilot." },
                    { start: "00:36", end: "00:41", text: "Let’s say you want to find ways to give back to your community." },
                    { start: "00:42", end: "00:47", text: "You love volunteering; especially helping others." },
                    { start: "00:48", end: "00:53", text: "You search the web but are overwhelmed by the amount of available information." },
                    { start: "00:54", end: "00:59", text: "So, you visit Microsoft Copilot to help speed up the search process." },
                    { start: "01:00", end: "01:05", text: "You ask Microsoft Copilot to find you five non-profit organisations that support people who are blind or with low vision in your city." },
                    { start: "01:06", end: "01:11", text: "And you now have a solid list of nonprofit organisations you can reach out to who offer volunteering opportunities." },
                    { start: "01:12", end: "01:17", text: "Now that you have found an ideal non-profit, you want to write an email introducing yourself to the nonprofit and asking how to become a volunteer." },
                    { start: "01:18", end: "01:23", text: "Microsoft Copilot can help with that too!" },
                    { start: "01:24", end: "01:29", text: "You type, ‘I want to write an email introducing myself to the non-profit and I would like to ask them about their volunteer process. Could you help me craft this email?’" },
                    { start: "01:30", end: "01:35", text: "Just like that, Copilot assists with a draft email for you to edit and revise, saving you time to focus on other things." },
                    { start: "01:36", end: "01:41", text: "Another type of generative AI is text-to-image." },
                    { start: "01:42", end: "01:47", text: "Imagine describing a scene through text and having AI bring it to life visually." },
                    { start: "01:48", end: "01:53", text: "This type of AI interprets text descriptions to create images making it an invaluable tool for everyday imagination." },
                    { start: "01:54", end: "01:59", text: "For example, you are creating a birthday invitation for your child’s upcoming fifth birthday." },
                    { start: "02:00", end: "02:05", text: "When you ask your child, ‘What kind of party theme do you want?’ they respond with, ‘rainbow giraffes!’" },
                    { start: "02:06", end: "02:11", text: "It is not quite the answer you were looking for as you know it is going to be difficult finding rainbow giraffe-themed birthday decorations, but you can work with it." },
                    { start: "02:12", end: "02:17", text: "You go to the ‘Creative Style’ in Microsoft Copilot and type, ‘Create an image of a rainbow giraffe with the number five’." },
                    { start: "02:18", end: "02:23", text: "And just like that, you have an image for your child’s 5th birthday invitation." },
                    { start: "02:24", end: "02:29", text: "Then there’s audio generative AI." },
                    { start: "02:30", end: "02:35", text: "This form of AI can compose music or generate realistic sound effects." },
                    { start: "02:36", end: "02:41", text: "It can even replicate human voices for podcasts or virtual assistants, all from a set of parameters or a piece of text." },
                    { start: "02:42", end: "02:47", text: "For instance, emerging apps enable users to record a sample clip of their own voice." },
                    { start: "02:48", end: "02:53", text: "By uploading this clip to the model, the system can accurately replicate their voice, allowing for the creation of extended audio segments or even entire songs." },
                    { start: "02:54", end: "02:59", text: "Imagine a personalised karaoke app where you sing a short snippet of your favourite song." },
                    { start: "03:00", end: "03:05", text: "The app’s AI model then generates a full-length version of the song, complete with your unique vocal style." },
                    { start: "03:06", end: "03:11", text: "Finally, we have video generative AI." },
                    { start: "03:12", end: "03:17", text: "This technology can create video content by learning from existing footage." },
                    { start: "03:18", end: "03:23", text: "It can animate characters, replicate environments, and even generate educational tutorials." },
                    { start: "03:24", end: "03:29", text: "Suppose you have a video from your childhood." },
                    { start: "03:30", end: "03:35", text: "The video was transferred from an old videotape to an .mp4 format, but the video quality is lacking." },
                    { start: "03:36", end: "03:41", text: "With generative AI, that video can be remastered in no time so you can continue to share memories with loved ones." },
                    { start: "03:42", end: "03:47", text: "Generative AI is transforming the way we create and interact with content." },
                    { start: "03:48", end: "03:53", text: "From text to visuals, and audio to video, the possibilities are truly endless." }
                ]
             },
            { title: "New Opportunities with Generative AI", filePath: "videos/2_16_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Throughout history, technological advancements have continually transformed the workforce creating new opportunities and even new roles." },
                    { start: "00:06", end: "00:11", text: "For example, consider the historical transition from horse-drawn carriages to cars." },
                    { start: "00:12", end: "00:17", text: "Today, AI serves as the latest catalyst for change." },
                    { start: "00:18", end: "00:23", text: "Generative AI is forging new avenues in creativity, problem-solving, empathy, and leadership—domains where human capabilities excel, and machines fall short." },
                    { start: "00:24", end: "00:29", text: "Our labour market, historically riddled with inefficiencies and inequalities, is on the cusp of an AI-driven revolution." },
                    { start: "00:30", end: "00:35", text: "This transformation holds the potential to rectify disparities and redefine the structure of economic opportunity." },
                    { start: "00:36", end: "00:41", text: "So, how is AI creating more opportunities? Let’s look:" },
                    { start: "00:42", end: "00:47", text: "AI acts like a compass for your career, guiding you through the job market’s twists and turns." },
                    { start: "00:48", end: "00:53", text: "You can use it as a tool to analyse available jobs and the skills they require." },
                    { start: "00:54", end: "00:59", text: "Then you can figure out what you should learn next." },
                    { start: "01:00", end: "01:05", text: "For example, let’s say you are a software developer." },
                    { start: "01:06", end: "01:11", text: "You have been in your role for five years, and you are starting to feel it is time for a career change." },
                    { start: "01:12", end: "01:17", text: "You have always been interested in becoming a manager, but you are not sure what skills are needed to transition to a managerial role." },
                    { start: "01:18", end: "01:23", text: "So, you open Microsoft Copilot, and you type, ‘I am a software developer and I want to become a manager." },
                    { start: "01:24", end: "01:29", text: "What skills do I need?’" },
                    { start: "01:30", end: "01:35", text: "You look at the list of skills and you realise you don’t have much experience in project management, and this is a skill you want to work on." },
                    { start: "01:36", end: "01:41", text: "So, you ask Microsoft Copilot, ‘What trainings are available on Microsoft or LinkedIn over building project management skills?’" },
                    { start: "01:42", end: "01:47", text: "Microsoft Copilot gives you a list of training courses to choose from with links to the training." },
                    { start: "01:48", end: "01:53", text: "From there, you are ready to learn new skills for your potential new career path." },
                    { start: "01:54", end: "01:59", text: "This is a game-changer because it makes this kind of advice accessible to everyone, any time." },
                    { start: "02:00", end: "02:05", text: "This tool enables you to interact with AI about your career path, providing answers and resources more quickly." },
                    { start: "02:06", end: "02:11", text: "It is all about ensuring you have the right tools in your kit to build the career you want." },
                    { start: "02:12", end: "02:17", text: "AI is not just a tool for automation; it is a platform for innovation and opportunity." },
                    { start: "02:18", end: "02:23", text: "It is transforming the way we learn by providing personalised educational experiences and access to information on a scale never seen before." },
                    { start: "02:24", end: "02:29", text: "With AI, learning becomes more interactive, adaptive, and tailored to individual needs and interests." },
                    { start: "02:30", end: "02:35", text: "As we embrace the concept of lifelong learning, AI opens new avenues for personal and professional growth." },
                    { start: "02:36", end: "02:41", text: "It can identify gaps in our knowledge and suggest resources to fill them." },
                    { start: "02:42", end: "02:47", text: "It can connect us with experts and mentors worldwide, and even help us discover new passions and career paths." },
                    { start: "02:48", end: "02:53", text: "For individuals who have always had to adapt and learn to overcome challenges, AI is a powerful ally." },
                    { start: "02:54", end: "02:59", text: "It levels the playing field by giving everyone access to the same high-quality resources and opportunities, regardless of background or circumstances." },
                    { start: "03:00", end: "03:05", text: "In this era of constant change, AI ensures that our journey of learning is not just a path we follow but a road we pave for ourselves," },
                    { start: "03:06", end: "03:11", text: "leading to a future where every individual has the chance to reach their full potential." }
                ]
             }
        ],
        quizzes: [
            {
                video_title: "What is Generative AI?",
                question: "What is generative AI?",
                options: { correct: "A type of artificial intelligence that is trained with data to generate new content.", incorrect: ["A type of artificial intelligence that is modified using existing technology to achieve the expected target.", "A type of artificial intelligence that is built using old data to provide new data.", "A type of artificial intelligence that is collaborated with additional data to generate new data."] },
                explanations: {
                    correct: "Generative AI is a type of artificial intelligence that is trained with data to generate new content...",
                    incorrect: [
                        "Generative AI is a type of artificial intelligence that is trained, not modified...",
                        "Generative AI is a type of artificial intelligence that is trained, not built...",
                        "Generative AI is a type of artificial intelligence that is trained, not collaborated..."
                    ]
                }
            },
            {
                video_title: "What is Generative AI Model?",
                question: "One example of a generative AI model is....",
                options: { correct: "Generative pre-trained transformer", incorrect: ["Generative post-trained transformer", "Generative pre-translated transformer", "Generative post-translated transformer"] },
                explanations: {
                    correct: "Generative AI models are designed to generate new content. Generative AI models are pre-trained using large amounts of text data...",
                    incorrect: [
                        "Generative AI models are designed to generate new content. Generative AI models are pre-trained, not post-trained...",
                        "Generative AI models are designed to generate new content. Pre-trained generative AI models using large amounts of text data; not pre-translated...",
                        "Generative AI models are designed to generate new content. Pre-trained generative AI models using large amounts of text data; not pre-translated..."
                    ]
                }
            },
            {
                video_title: "AI Linguistics",
                question: "NLP tasks are indicated by number....",
                options: { correct: "2 and 5", incorrect: ["1 and 3", "3 and 4", "4 and 5"] },
                explanations: {
                    correct: "NLP includes several tasks, such as translation, sentiment analysis, speech recognition, and topic segmentation.",
                    incorrect: [
                        "NLP includes several tasks, such as translation, sentiment analysis, speech recognition, and topic segmentation; instead of topic fragmentation and data classification.",
                        "NLP includes several tasks, such as translation, sentiment analysis, speech recognition, and topic segmentation; instead of data classification.",
                        "NLP includes several tasks, such as translation, sentiment analysis, speech recognition, and topic segmentation; instead of segment analysis."
                    ]
                }
            },
            {
                video_title: "Visualization with AI - From Text to Images",
                question: "What is DALL·E used for?",
                options: { correct: "Produce detailed images from simple descriptions and effectively translate words into visual representations.", incorrect: ["Produce simple images from simple descriptions and effectively translate words into visual representations.", "Produce simple images from detailed descriptions and effectively translate words into visual representations.", "Produce detailed images from detailed descriptions and effectively translate words into visual representations."] },
                explanations: {
                    correct: "DALL·E is an AI model that is developed by OpenAI to produce detailed images from a simple description...",
                    incorrect: [
                        "DALL·E is an AI model developed by OpenAI to produce detailed images from a simple description...; instead of produce simple images from a simple description...",
                        "DALL·E is an AI model developed by OpenAI to produce detailed images from a simple description...; instead of produce simple images from a detailed description...",
                        "DALL·E is an AI model developed by OpenAI to produce detailed images from a simple description...; instead of produce detailed images from a detailed description..."
                    ]
                }
            },
            {
                video_title: "AI Companion in Content Creation",
                question: "What system can be used to draft an email that can be edited and revised?",
                options: { correct: "Large language model", incorrect: ["Length language model", "Long learning model", "Literation learning model"] },
                explanations: {
                    correct: "Text-based generative AI uses large language models (LLM) to produce coherent and contextually relevant text-based responses...",
                    incorrect: [
                        "Text-based generative AI uses large language models (LLM), not a length language model...",
                        "Text-based generative AI uses large language models (LLM), not a long learning model...",
                        "Text-based generative AI uses large language models (LLM), not a literation language model..."
                    ]
                }
            },
            {
                video_title: "New Opportunities with Generative AI",
                question: "New opportunities that are created by generative AI are indicated by number....",
                options: { correct: "1 and 3", incorrect: ["1 and 2", "2 and 3", "2 and 4"] },
                explanations: {
                    correct: "Generative AI opens up new opportunities with creativity, problem solving, empathy, and leadership.",
                    incorrect: [
                        "Generative AI opens up new opportunities with creativity, problem solving, empathy, and leadership; instead of creativity and formulation of problems.",
                        "Generative AI opens up new opportunities with creativity, problem solving, empathy, and leadership; instead of formulation of problems and empathy.",
                        "Generative AI opens up new opportunities with creativity, problem solving, empathy, and leadership; instead of the formulation of problems and leadership."
                    ]
                }
            }
        ]
    },
    {
        id: 2,
        name: "Course 3: Search Technology",
        videos: [
            { title: "The Evolution of Search", filePath: "videos/3_17_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Before the Internet, when someone had a question, they could not simply turn to their mobile phone or computer for an answer." },
                    { start: "00:06", end: "00:11", text: "Instead, they had to search through physical books to find reliable information." },
                    { start: "00:12", end: "00:17", text: "This task could take hours, depending on how close the local library was or whether the person had access to books at home." },
                    { start: "00:18", end: "00:23", text: "Nowadays, we can access information within seconds." },
                    { start: "00:24", end: "00:29", text: "And that is all thanks to the evolution of search." },
                    { start: "00:30", end: "00:35", text: "Let's go back to the 1970s." },
                    { start: "00:36", end: "00:41", text: "Microsoft began with a vision to put a computer on every desk and in every home." },
                    { start: "00:42", end: "00:47", text: "This was the start of personal computing, setting the stage for the future of search." },
                    { start: "00:48", end: "00:53", text: "Two decades later, the Microsoft Network MSN emerged, signalling a new digital era." },
                    { start: "00:54", end: "00:59", text: "Then, in 1996, a significant breakthrough occurred with the launch of Windows NT 4.0, which introduced the Indexing Service." },
                    { start: "01:00", end: "01:05", text: "This innovation allows for indexing of web content and text searches through Internet Information Services, or IIS servers." },
                    { start: "01:06", end: "01:11", text: "IIS servers are flexible, secure and manageable web servers for hosting a variety of web content." },
                    { start: "01:12", end: "01:17", text: "This marked a big step towards a more efficient search experience." },
                    { start: "01:18", end: "01:23", text: "In the early 2000s, MSN Search started using its own search algorithms, and by 2004 it began displaying its own search results." },
                    { start: "01:24", end: "01:29", text: "The pace of progress quickened, and in 2009, Microsoft unveiled Bing, a search engine." },
                    { start: "01:30", end: "01:35", text: "It was designed to empower users to not only find, but also comprehend information from the web." },
                    { start: "01:36", end: "01:41", text: "Searching on Bing is straightforward." },
                    { start: "01:42", end: "01:47", text: "You simply type a query and Bing searches the web for matching results, presenting them in an instant." },
                    { start: "01:48", end: "01:53", text: "For example, open Microsoft Edge, navigate to bing.com and ask: 'How is the weather in New York City today?'" },
                    { start: "01:54", end: "01:59", text: "Bing promptly retrieves the answer." },
                    { start: "02:00", end: "02:05", text: "Today, Bing has some new features." },
                    { start: "02:06", end: "02:11", text: "For example, at the end of a weather report, you might notice options to ask follow up questions like 'How humid is it?' or 'What is the chance of rain?'" },
                    { start: "02:12", end: "02:17", text: "By selecting one of these questions, you will transition to the Microsoft Copilot experience, previously known as Bing Chat." },
                    { start: "02:18", end: "02:23", text: "‘The chance of rain in New York City today is 2 percent. It is mostly sunny with a high of 27.7 degrees Celsius and a low of 21.1 degrees Celsius.’" },
                    { start: "02:24", end: "02:29", text: "‘If you are planning any outdoor activities, it looks like a great day!’" },
                    { start: "02:30", end: "02:35", text: "During this transition, you are witnessing the reinvention of search." },
                    { start: "02:36", end: "02:41", text: "Did you spot the new icon next to your query? That is the icon for Copilot." },
                    { start: "02:42", end: "02:47", text: "A simple click on this icon will transport you to the Microsoft Copilot interface." },
                    { start: "02:48", end: "02:53", text: "‘The current weather in New York City is sunny with a temperature of 28.8 degrees Celsius.’" },
                    { start: "02:54", end: "02:59", text: "‘The high temperature for tomorrow is expected to be 29.4 degrees Celsius and the low temperature will be around 21.6 degrees Celsius.’" },
                    { start: "03:00", end: "03:05", text: "‘Keep in mind that there is an air quality alert in effect until 11 p.m. today due to elevated pollution levels.’" },
                    { start: "03:06", end: "03:11", text: "‘If you are sensitive to pollutants, consider limiting outdoor activity. For more details, you can check the forecast here.’" },
                    { start: "03:12", end: "03:17", text: "Microsoft Copilot is more than a search engine, it is a reasoning engine." },
                    { start: "03:18", end: "03:23", text: "It provides search results, comprehensive answers, and an innovative chat experience, all designed to deliver the answers you need more swiftly." },
                    { start: "03:24", end: "03:29", text: "From encyclopedias to a generative AI powered experience like Copilot, the journey of search is a testament to human innovation and our quest for knowledge." },
                    { start: "03:30", end: "03:35", text: "And if you are wondering how this differs from the past, consider the distinction between a search engine and a reasoning engine." },
                    { start: "03:36", end: "03:41", text: "The former finds information and the latter understands and interprets information, paving the way for a more intelligent and interactive future of search." }
                ]
             },
            { title: "How Does A Search Engine Work", filePath: "videos/3_18_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Search engines have become a part of our daily lives, helping us find information from simple facts to detailed research." },
                    { start: "00:06", end: "00:11", text: "They also allow us to stay informed on the latest news, indulge in online shopping, or even help us plan a trip by providing keywords and straightforward queries." },
                    { start: "00:12", end: "00:17", text: "There is a world of information at your fingertips, but what really goes on behind the scenes?" },
                    { start: "00:18", end: "00:23", text: "It all starts with three fundamental tasks, crawling, indexing and ranking." },
                    { start: "00:24", end: "00:29", text: "The first task is crawling." },
                    { start: "00:30", end: "00:35", text: "Search engines deploy programs known as crawlers or web spiders to find new or updated web pages." },
                    { start: "00:36", end: "00:41", text: "These crawlers explore the web by following links from one page to another, discovering new or updated pages to add to the search index." },
                    { start: "00:42", end: "00:47", text: "The second task is indexing." },
                    { start: "00:48", end: "00:53", text: "Once the content is found, it is time for indexing." },
                    { start: "00:54", end: "00:59", text: "Here, the data found is catalogued in a massive database called the search index." },
                    { start: "01:00", end: "01:05", text: "Like a librarian organising books on shelves, the third task is ranking." },
                    { start: "01:06", end: "01:11", text: "When you ask a question, the search engine sifts through the indexed content, prioritising pages to ensure you get the most relevant answers." },
                    { start: "01:12", end: "01:17", text: "This involves complex algorithms that consider factors such as the frequency and location of keywords within the web page, the overall quality of the content and the analysis of the link." },
                    { start: "01:18", end: "01:23", text: "Let's put this into perspective." },
                    { start: "01:24", end: "01:29", text: "Say you are searching for Italian restaurants in your city." },
                    { start: "01:30", end: "01:35", text: "The search engine springs into action, suggesting a list of websites." },
                    { start: "01:36", end: "01:41", text: "This selection is not random, it is the results of precise ranking, where each page's relevance is assessed based on your search." },
                    { start: "01:42", end: "01:47", text: "From the moment you type in your query to how quickly the results appear, you are seeing the seamless dance of crawling, indexing and ranking." },
                    { start: "01:48", end: "01:53", text: "It is a journey that brings knowledge to your fingertips, all in the blink of an eye." }
                ]
             },
            { title: "Reasoning Engines", filePath: "videos/3_19_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Most of us are familiar with search engines like Bing." },
                    { start: "00:06", end: "00:11", text: "We type in a query and instantly we are presented with a list of web pages that might have the answer we are looking for." },
                    { start: "00:12", end: "00:17", text: "But there is also another type of engine that works differently than a search engine, called the reasoning engine." },
                    { start: "00:18", end: "00:23", text: "A reasoning engine is a system that applies logic and inference to draw conclusions, make decisions, summarise information, or solve problems based on data and knowledge." },
                    { start: "00:24", end: "00:29", text: "Reasoning engines offer more elaborate responses compared to traditional search engines." },
                    { start: "00:30", end: "00:35", text: "They can assist with tasks like writing parts of a grant proposal, providing ideas for a project, researching a topic, or analysing data in a file." },
                    { start: "00:36", end: "00:41", text: "They can even generate images from text descriptions." },
                    { start: "00:42", end: "00:47", text: "So how does a reasoning engine work? A reasoning engine starts with a foundation of knowledge." },
                    { start: "00:48", end: "00:53", text: "It is fed a variety of data, from text to code, and it might even absorb information across the web." },
                    { start: "00:54", end: "00:59", text: "This is considered the pre training phase, where the engine learns language patterns, grammar and facts." },
                    { start: "01:00", end: "01:05", text: "During the next phase, the engine relies on the guidance of human supervisors to steer its learning journey." },
                    { start: "01:06", end: "01:11", text: "These supervisors guide the engine through the complexities of language, ensuring it understands not just the what, but the why behind the words." },
                    { start: "01:12", end: "01:17", text: "When you ask a question, the reasoning engine springs to life." },
                    { start: "01:18", end: "01:23", text: "It sifts through its learned knowledge, weighing words and considering context." },
                    { start: "01:24", end: "01:29", text: "It is not just about finding an answer, but it is about creating an answer that is informative, relevant and engaging." },
                    { start: "01:30", end: "01:35", text: "The journey also does not have to end with one query or response." },
                    { start: "01:36", end: "01:41", text: "With every interaction, the reasoning engine learns and adapts to answer your question based on the prompt you give it." },
                    { start: "01:42", end: "01:47", text: "It is a continuous cycle of learning and evolving, striving to understand and communicate more effectively." },
                    { start: "01:48", end: "01:53", text: "As we continue to explore and innovate, reasoning engine experiences like Microsoft Copilot are opening new possibilities for user creativity in generating text, images and other media." },
                    { start: "01:54", end: "01:59", text: "They are not just changing the way we search for information, but also how we interact, learn and create in the digital world." }
                ]
             },
            { title: "A New Way to Search: Microsoft Copilot", filePath: "videos/3_20_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Microsoft Copilot is changing the way we interact with digital information, transforming the traditional search experience into a comprehensive one." },
                    { start: "00:06", end: "00:11", text: "Copilot combines the power of a large language model with the vast knowledge of the internet." },
                    { start: "00:12", end: "00:17", text: "This method, called retrieval-augmented generation, ensures you receive the best assistance while searching." },
                    { start: "00:18", end: "00:23", text: "As an AI-powered companion, it adapts to your needs, enabling you to work smarter and build faster." },
                    { start: "00:24", end: "00:29", text: "Curious about how Microsoft Copilot can elevate your search experience? Let’s look at what it can do." },
                    { start: "00:30", end: "00:35", text: "Microsoft Copilot goes beyond keyword matching to understand the context and intent behind your queries." },
                    { start: "00:36", end: "00:41", text: "This means it can provide results that are not just relevant but tailored to the specific task at hand." },
                    { start: "00:42", end: "00:47", text: "For example, it can help you plan a trip." },
                    { start: "00:48", end: "00:53", text: "I am going to type: I am planning a trip to Japan next spring. What should I know about spring in Japan before my visit?" },
                    { start: "00:54", end: "00:59", text: "It looks like I might luck out and see the cherry blooms during my trip!" },
                    { start: "01:00", end: "01:05", text: "Spring in Japan is famous for its cherry blossom season. It is a great time to visit parks and temples and take part in Hanami festivals." },
                    { start: "01:06", end: "01:11", text: "Make sure to check the local bloom forecasts, as the timing can vary each year." },
                    { start: "01:12", end: "01:17", text: "Leveraging advanced AI models, Microsoft Copilot delivers results that are correct and directly related to your search, ensuring that you get the information you need without the noise." },
                    { start: "01:18", end: "01:23", text: "For example, let’s say you are considering adding solar panels to your home, but you want to know about the latest research on solar energy efficiency." },
                    { start: "01:24", end: "01:29", text: "You can type a prompt like: What is the latest research on solar energy efficiency?" },
                    { start: "01:30", end: "01:35", text: "And as you see, Copilot provides the latest on solar energy efficiency." },
                    { start: "01:36", end: "01:41", text: "Recent studies have show that perovskite solar cells are achieving efficiencies above 25%, making them a promising technology for future panels." },
                    { start: "01:42", end: "01:47", text: "Information is not only accurate but also presented in a way that is easy to understand and act upon." },
                    { start: "01:48", end: "01:53", text: "Whether it is data from a spreadsheet or a summary of a long document, Copilot organises it in a visually appealing and logical format." },
                    { start: "01:54", end: "01:59", text: "For instance, after a sales meeting, Copilot can summarise your meeting notes for you." },
                    { start: "02:00", end: "02:05", text: "Let’s say you have some disorganised notes and could use some help." },
                    { start: "02:06", end: "02:11", text: "Provide Copilot with your notes, and type a response like: 'Summarise the key points shared from the Sales meeting on 13 July.’" },
                    { start: "02:12", end: "02:17", text: "And just like that, your notes are organised and can be clearly communicated." },
                    { start: "02:18", end: "02:23", text: "Sales Meeting Summary - 13 July. Q1 revenue: Increased by 15%. New clients: 25 acquired. Next quarter goals: Expand into the European market." },
                    { start: "02:24", end: "02:29", text: "Need a poem, a story or even a snippet of code? Microsoft Copilot can generate these from a simple prompt." },
                    { start: "02:30", end: "02:35", text: "Let’s say you need some help with coding." },
                    { start: "02:36", end: "02:41", text: "You need to create a function to generate a Fibonacci sequence in Python." },
                    { start: "02:42", end: "02:47", text: "You can ask Copilot: 'Create a function to generate a Fibonacci sequence in Python.'" },
                    { start: "02:48", end: "02:53", text: "Copilot will then provide you with the code." },
                    { start: "02:54", end: "02:59", text: "If you have existing content that needs refining, Copilot can help rewrite, improve or optimise it, making sure your message is clear and impactful." },
                    { start: "03:00", end: "03:05", text: "Let’s say you are experiencing writer’s block, and you need some help on making a sentence more impactful." },
                    { start: "03:06", end: "03:11", text: "Go to Copilot and type, Transform the sentence: 'Our company sells good products.’ into a more impactful statement." },
                    { start: "03:12", end: "03:17", text: "Copilot then provides you with a more impactful statement:" },
                    { start: "03:18", end: "03:23", text: "‘Our company excels in delivering exceptional products that surpass customer expectations.’" },
                    { start: "03:24", end: "03:29", text: "Copilot can condense large volumes of information into concise summaries, saving you time and helping you quickly grasp the key takeaways from documents, emails and more." },
                    { start: "03:30", end: "03:35", text: "When presented with a research paper, Copilot can provide a summary highlighting the main points, such as the impact of climate change on agriculture and the need for sustainable practices." },
                    { start: "03:36", end: "03:41", text: "For example, you provide Copilot with the given research paper, and then ask Copilot to Provide a concise summary highlighting the main points related to the impact of climate change on agriculture and the need for sustainable practices." },
                    { start: "03:42", end: "03:47", text: "It will summarise the information helping you find the information you are looking for more quickly." },
                    { start: "03:48", end: "03:53", text: "‘Climate change significantly affects agriculture, necessitating sustainable practices. Key points include changing weather patterns, water scarcity, crop yield fluctuations and the importance of resilient farming methods.’" },
                    { start: "03:54", end: "03:59", text: "From simple factual queries to complex problem-solving, Copilot can provide clear, accurate answers, helping you make informed decisions faster." },
                    { start: "04:00", end: "04:05", text: "Maybe you recently witnessed a solar eclipse, and you are now curious about the speed of light." },
                    { start: "04:06", end: "04:11", text: "You can ask Copilot: 'How long does it take for light from the sun to reach Earth?'" },
                    { start: "04:12", end: "04:17", text: "‘The light from the sun takes approximately 8 minutes and 20 seconds to reach Earth.’" },
                    { start: "04:18", end: "04:23", text: "Copilot can assist with a range of problems, offering solutions that are logical and based on the latest information available." },
                    { start: "04:24", end: "04:29", text: "Let’s say you recently opened your own business and you are curious how to engage visitors to your website." },
                    { start: "04:30", end: "04:35", text: "You could type a prompt like: I am looking to increase traffic to my website. Could you provide some strategies for achieving this?" },
                    { start: "04:36", end: "04:41", text: "'To increase traffic to your website, consider the following strategies: Regularly publish articles, videos or other engaging content." },
                    { start: "04:42", end: "04:47", text: "Use social media platforms to market your business and drive traffic to your website." },
                    { start: "04:48", end: "04:53", text: "Analyze your website's analytics to understand visitor behavior and optimize their experience.'" },
                    { start: "04:54", end: "04:59", text: "If you are unsure about how to access or interpret your website’s analytics, Copilot can assist you with this too." },
                    { start: "05:00", end: "05:05", text: "For instance, you might follow up with a question like this: 'I have built my website using Power Pages." },
                    { start: "05:06", end: "05:11", text: "How can I access the website’s analytics and what data points should I be focusing on?'" },
                    { start: "05:12", end: "05:17", text: "Copilot will provide you with step-by-step instructions and data points to focus on." },
                    { start: "05:18", end: "05:23", text: "Copilot is not limited to text." },
                    { start: "05:24", end: "05:29", text: "It can also create and analyse images, provide insights and generate visual content aligning with your goals." },
                    { start: "05:30", end: "05:35", text: "Let’s say you want some architectural inspirations for a new art project over cityscapes." },
                    { start: "05:36", end: "05:41", text: "You want to paint a modern building in the middle of a cityscape, but also want it situated near the water with mountains like Vancouver, Canada." },
                    { start: "05:42", end: "05:47", text: "Before starting your painting, you can ask Copilot to help you plan this vision:" },
                    { start: "05:48", end: "05:53", text: "'Provide guidance on how to paint a cityscape with a modernist building that embodies 20th-century architecture." },
                    { start: "05:54", end: "05:59", text: "The building should feature abstract forms and make use of reinforced concrete." },
                    { start: "06:00", end: "06:05", text: "The design should favour free-flowing curves over straight lines, giving the building a sculptural quality." },
                    { start: "06:06", end: "06:11", text: "I’d like the cityscape to be situated on the water with mountains, like Vancouver, Canada.'" },
                    { start: "06:12", end: "06:17", text: "Copilot then provides some written ideas to help you paint your cityscape." },
                    { start: "06:18", end: "06:23", text: "'1. Sketch: Outline the modernist building with curves. 2. Underpaint: Apply neutral tones for depth." },
                    { start: "06:24", end: "06:29", text: "3. Texture: Use a palette knife for concrete effect. 4. Details: Add fine architectural features." },
                    { start: "06:30", end: "06:35", text: "5. Landscape: Paint the city, water and mountains with broad strokes. 6. Refine: Enhance details and contrasts." },
                    { start: "06:36", end: "06:41", text: "Focus on capturing the modernist style's essence through abstract forms and structural flow.'" },
                    { start: "06:42", end: "06:47", text: "This is helpful, but you also want to see this visually." },
                    { start: "06:48", end: "06:53", text: "So, you ask Copilot in creative style: 'Create a cityscape with a modernist building that embodies 20th-century architecture." },
                    { start: "06:54", end: "06:59", text: "The building should feature abstract forms and make use of reinforced concrete." },
                    { start: "07:00", end: "07:05", text: "The design should favour free-flowing curves over straight lines, giving the building a sculptural quality." },
                    { start: "07:06", end: "07:11", text: "I’d like the cityscape to be situated on the water with mountains, like Vancouver, Canada.'" },
                    { start: "07:12", end: "07:17", text: "As you see, Copilot produced a few examples to help me in my creative process." },
                    { start: "07:18", end: "07:23", text: "These examples display how Microsoft Copilot can assist you in various scenarios, providing tailored, and creative solutions to enhance your productivity and jump start your creative process." },
                    { start: "07:24", end: "07:29", text: "Whether you are drafting an email, creating a design or analysing data, Microsoft Copilot is there to supercharge your efforts, making every task easier and more efficient." },
                    { start: "07:30", end: "07:35", text: "It is an AI-powered companion that adapts to your needs, helping you work smarter and build faster." }
                ]
             },
            { title: "Prompt Engineering", filePath: "videos/3_21_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "The way we interact with AI has transformed." },
                    { start: "00:06", end: "00:11", text: "We have moved beyond simple commands and queries to a more sophisticated method of communication known as prompt engineering." },
                    { start: "00:12", end: "00:17", text: "Prompt engineering is the art of crafting prompts that guides an LLM-based generative AI to produce a desired response." },
                    { start: "00:18", end: "00:23", text: "A prompt is the input you give to a generative AI experience, like Microsoft Copilot, telling it what you want it to do and how." },
                    { start: "00:24", end: "00:29", text: "It consists of two main components: Instruction and context." },
                    { start: "00:30", end: "00:35", text: "The instruction is the written part of the prompt that states the task and the objective." },
                    { start: "00:36", end: "00:41", text: "It should be clear and specific, so Copilot knows exactly what you expect from it." },
                    { start: "00:42", end: "00:47", text: "The context provides information for the response such as the intended audience and the desired tone." },
                    { start: "00:48", end: "00:53", text: "It should be relevant and appropriate, so it can tailor its response to your needs." },
                    { start: "00:54", end: "00:59", text: "Once a prompt is submitted, Copilot reads text in chunks called tokens, which can be as short as a single character or a word." },
                    { start: "01:00", end: "01:05", text: "This is important because every model has a limit on the amount of text it can process at once." },
                    { start: "01:06", end: "01:11", text: "This is why it is important to keep our prompts concise and to the point." },
                    { start: "01:12", end: "01:17", text: "Let’s look at this using Microsoft Copilot." },
                    { start: "01:18", end: "01:23", text: "Step 1: Understanding the Prompt." },
                    { start: "01:24", end: "01:29", text: "A prompt is your direct line of communication with Copilot." },
                    { start: "01:30", end: "01:35", text: "It is how you instruct it to assist you in your tasks." },
                    { start: "01:36", end: "01:41", text: "A well-constructed prompt consists of two essential elements: the instruction and the context." },
                    { start: "01:42", end: "01:47", text: "Instruction: This is what you're asking Copilot to do. It should be concise and explicit." },
                    { start: "01:48", end: "01:53", text: "For instance, 'Draft an email to a client,' or 'Generate a project management plan.'" },
                    { start: "01:54", end: "01:59", text: "Context: This gives Copilot the necessary background to customize its response to your needs." },
                    { start: "02:00", end: "02:05", text: "It includes details like the target audience, desired tone, level of detail and any specific guidelines or limitations." },
                    { start: "02:06", end: "02:11", text: "Step 2: Crafting Your Prompt." },
                    { start: "02:12", end: "02:17", text: "When you are prepared to engage with Copilot, launch the webpage and select the appropriate style for your task." },
                    { start: "02:18", end: "02:23", text: "‘Please create a comprehensive, professional guide for adult learners on how to effectively network in their industry, with a focus on digital platforms.’" },
                    { start: "02:24", end: "02:29", text: "Breaking down the example." },
                    { start: "02:30", end: "02:35", text: "Instruction: 'Create a comprehensive, professional guide'." },
                    { start: "02:36", end: "02:41", text: "Context: 'for adult learners on how to effectively network in their industry, with a focus on digital platforms'" },
                    { start: "02:42", end: "02:47", text: "Step 3: Submitting the Prompt." },
                    { start: "02:48", end: "02:53", text: "After crafting your prompt, submit it." },
                    { start: "02:54", end: "02:59", text: "Copilot will then dissect the instruction and context into tokens and produce a response grounded in its interpretation." },
                    { start: "03:00", end: "03:05", text: "Tokens are the segments of text that the model uses to comprehend and formulate responses." },
                    { start: "03:06", end: "03:11", text: "They can be complete words or fragments of words." },
                    { start: "03:12", end: "03:17", text: "For example, 'network' is one token, while 'networking' may be divided into 'network' and 'ing' based on the model's tokenisation method." },
                    { start: "03:18", end: "03:23", text: "Step 4: Reviewing the response or output." },
                    { start: "03:24", end: "03:29", text: "Once Copilot delivers its output, examine it to verify it aligns with your objectives." },
                    { start: "03:30", end: "03:35", text: "If it does not quite hit the mark, you can refine your prompt and resubmit it to achieve a more precise outcome." },
                    { start: "03:36", end: "03:41", text: "This process helps you collaborate more effectively over time." },
                    { start: "03:42", end: "03:47", text: "As we advance in LLM-based generative AI, the art of prompt engineering becomes increasingly important." },
                    { start: "03:48", end: "03:53", text: "It is not just about asking, but how we ask it." },
                    { start: "03:54", end: "03:59", text: "By understanding and effectively using prompts, we can harness the full potential of generative AI experiences like Microsoft Copilot." },
                    { start: "04:00", end: "04:05", text: "The key to a successful interaction lies in the clarity of your instruction and the relevance of your context." }
                ]
             },
            { title: "Best Practices in Prompting", filePath: "videos/3_22_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Refining your prompt crafting skills can enhance your effectiveness with Microsoft Copilot." },
                    { start: "00:06", end: "00:11", text: "It all starts with a clear objective." },
                    { start: "00:12", end: "00:17", text: "Then followed by providing the necessary context, setting expectations for the desired response and following best practices." },
                    { start: "00:18", end: "00:23", text: "So, you might be wondering, what are the best practices when writing a prompt?" },
                    { start: "00:24", end: "00:29", text: "First, be specific." },
                    { start: "00:30", end: "00:35", text: "The more details you offer, the better Copilot can tailor its service to your needs." },
                    { start: "00:36", end: "00:41", text: "For instance, if you are requesting an image of a dragon, don't just type 'Create a dragon' but describe its colour, size and the environment it inhabits." },
                    { start: "00:42", end: "00:47", text: "Is it perched atop a mountain at sunset?" },
                    { start: "00:48", end: "00:53", text: "Each detail contributes to a more accurate and vivid creation." },
                    { start: "00:54", end: "00:59", text: "Choose your style." },
                    { start: "01:00", end: "01:05", text: "Copilot offers three distinct styles to cater to your needs: 'more creative', 'more precise', and 'more balanced'." },
                    { start: "01:06", end: "01:11", text: "If you are writing a science fiction story, opt for 'more creative'." },
                    { start: "01:12", end: "01:17", text: "For factual information, 'more precise' will serve you well." },
                    { start: "01:18", end: "01:23", text: "And for a mix of both, 'more balanced' offers the perfect harmony." },
                    { start: "01:24", end: "01:29", text: "Prioritise accuracy." },
                    { start: "01:30", end: "01:35", text: "When precision is important make sure to guide Copilot with clear and concise prompts." },
                    { start: "01:36", end: "01:41", text: "Whether it is summarising a specific article or explaining a complex concept, the right prompt ensures an accurate response." },
                    { start: "01:42", end: "01:47", text: "Customise your experience." },
                    { start: "01:48", end: "01:53", text: "Copilot is versatile, catering to both novices and experts alike." },
                    { start: "01:54", end: "01:59", text: "Frame your questions to suit your level of understanding, from simple explanations to tackling advanced topics." },
                    { start: "02:00", end: "02:05", text: "Switching topics." },
                    { start: "02:06", end: "02:11", text: "If you are changing the subject, simply select 'New Topic' in Copilot." },
                    { start: "02:12", end: "02:17", text: "This feature gives Copilot a new start, keeping your conversations focused and free from confusion." },
                    { start: "02:18", end: "02:23", text: "Control the length." },
                    { start: "02:24", end: "02:29", text: "You have the power to set the length of Copilot's responses." },
                    { start: "02:30", end: "02:35", text: "If you require more information, just prompt Copilot to elaborate." },
                    { start: "02:36", end: "02:41", text: "Embrace variety." },
                    { start: "02:42", end: "02:47", text: "Copilot is not limited to text." },
                    { start: "02:48", end: "02:53", text: "It can present information in tables, outlines, and even diagrams, enriching your experience with a visual dimension that goes beyond mere words." },
                    { start: "02:54", end: "02:59", text: "Let’s see how this works." },
                    { start: "03:00", end: "03:05", text: "Let’s say you want to send out an email to your team about a project update." },
                    { start: "03:06", end: "03:11", text: "You are running short on time and could really use some assistance with crafting a draft email." },
                    { start: "03:12", end: "03:17", text: "So, you open Microsoft Copilot to help you with this." },
                    { start: "03:18", end: "03:23", text: "You decide to select the 'precise' style because you want Copilot to be factual and precise." },
                    { start: "03:24", end: "03:29", text: "You also want the email to be shorter with simpler sentences that avoid unnecessary details." },
                    { start: "03:30", end: "03:35", text: "You then craft a clear and specific prompt." },
                    { start: "03:36", end: "03:41", text: "'Compose a concise, professional and appreciative email to my team." },
                    { start: "03:42", end: "03:47", text: "The email should celebrate our completion of the design phase, announce the transition to the development phase of our mobile app project and encourage continued hard work." },
                    { start: "03:48", end: "03:53", text: "Please keep it to the point.'" },
                    { start: "03:54", end: "03:59", text: "In just a few seconds, you can have a draft email ready to send to your team." },
                    { start: "04:00", end: "04:05", text: "This not only saves you time during a busy day, but also allows you to focus on other important tasks." },
                    { start: "04:06", end: "04:11", text: "Remember, effective prompting is rooted in the clarity and specificity of your questions as well as the thoughtful construction of your requests." },
                    { start: "04:12", end: "04:17", text: "With these best practices, you will harness the full potential of Microsoft Copilot, making every interaction more productive and enjoyable." }
                ]
             },
            { title: "Critical Thinking", filePath: "videos/3_23_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Imagine you are writing an article or creating a project, and you have Microsoft Copilot at your fingertips to help you through this process." },
                    { start: "00:06", end: "00:11", text: "It is convenient and helpful." },
                    { start: "00:12", end: "00:17", text: "But it is critical to pause and ponder: How do you move through Copilot’s suggestions to find the gems of truth and relevance?" },
                    { start: "00:18", end: "00:23", text: "Well, through critical thinking." },
                    { start: "00:24", end: "00:29", text: "Critical thinking is the art of analysing and evaluating information to make better decisions." },
                    { start: "00:30", end: "00:35", text: "Whether it is reading the news, shopping online, or using Copilot, critical thinking helps us navigate the flood of information." },
                    { start: "00:36", end: "00:41", text: "Even with a well-crafted prompt, it is important to critically assess the response from Copilot." },
                    { start: "00:42", end: "00:47", text: "AI is as good as the data it is trained on." },
                    { start: "00:48", end: "00:53", text: "While AI does discriminate, algorithmic bias can inadvertently lead to an imperfect response." },
                    { start: "00:54", end: "00:59", text: "Using critical thinking skills can help you spot any inaccuracies in the response and improve the content Copilot generates." },
                    { start: "01:00", end: "01:05", text: "Let’s explore some practical tips on how to use critical thinking skills while using Copilot." },
                    { start: "01:06", end: "01:11", text: "Accuracy is vital." },
                    { start: "01:12", end: "01:17", text: "Always verify the facts and sources that Copilot cites." },
                    { start: "01:18", end: "01:23", text: "To ensure the information shared from Copilot is reliable and accurate, you can review the sources at the end of response." },
                    { start: "01:24", end: "01:29", text: "If sources are not provided, feel free to request them from Copilot following its initial reply to your query." },
                    { start: "01:30", end: "01:35", text: "Let’s look at an example." },
                    { start: "01:36", end: "01:41", text: "‘Provide a comprehensive summary of the most recent advancements in sustainability, focusing on innovative practices, emerging technologies, and research findings that are shaping the future of sustainable development.’" },
                    { start: "01:42", end: "01:47", text: "As you can see, Copilot provided us with the latest on this topic and a ‘learn more’ section which provides where this information is sourced." },
                    { start: "01:48", end: "01:53", text: "You can also request that Copilot retrieves information exclusively from certain sources." },
                    { start: "01:54", end: "01:59", text: "For instance, if you prefer sources with domains ending in .org or .edu for their educational or organizational credibility, you can specify this requirement when asking Copilot for information." },
                    { start: "02:00", end: "02:05", text: "‘Only source information for this query from .org sites.’" },
                    { start: "02:06", end: "02:11", text: "Copilot went back and only referenced information from domains ending in .org." },
                    { start: "02:12", end: "02:17", text: "By selecting the provided links, you can access the original sources to further explore the content." },
                    { start: "02:18", end: "02:23", text: "Curiosity leads to clarity." },
                    { start: "02:24", end: "02:29", text: "Question the purpose, audience, and reliability of the content." },
                    { start: "02:30", end: "02:35", text: "Purpose: What is the main goal of this content? What message is the content trying to convey?" },
                    { start: "02:36", end: "02:41", text: "Is the content intended to inform, persuade, entertain or sell?" },
                    { start: "02:42", end: "02:47", text: "Audience: Who is the intended audience for this content?" },
                    { start: "02:48", end: "02:53", text: "How does the content address the needs or interests of its audience? Is the language and tone appropriate for the target audience?" },
                    { start: "02:54", end: "02:59", text: "Reliability: What are the sources of the information presented in the content? Are the sources credible?" },
                    { start: "03:00", end: "03:05", text: "Is there evidence of bias or conflict of interest in the content?" },
                    { start: "03:06", end: "03:11", text: "It is through questioning that we deepen our understanding and are able to critically comprehend the information further." },
                    { start: "03:12", end: "03:17", text: "Diversity in perspectives enriches our insights." },
                    { start: "03:18", end: "03:23", text: "It is also important to compare the responses from Copilot to similar prompt entries to ensure consistency and relevance." },
                    { start: "03:24", end: "03:29", text: "Ethical use is non-negotiable." },
                    { start: "03:30", end: "03:35", text: "Make sure to follow content policies to use AI tools ethically and safely." },
                    { start: "03:36", end: "03:41", text: "Lastly, stay informed." },
                    { start: "03:42", end: "03:47", text: "Laws and regulations evolve, and so should our practices in AI content creation." },
                    { start: "03:48", end: "03:53", text: "Crafting an effective prompt is just the beginning; we must also critically evaluate the response from any generative AI experience, like Copilot." },
                    { start: "03:54", end: "03:59", text: "By doing so, we can ensure that the content we create and share is accurate, fair and responsible." }
                ]
             }
        ],
        quizzes: [
            {
                video_title: "The Evolution of Search",
                question: "What can the Indexing Service innovation by Windows NT 4.0 do?",
                options: { correct: "Web content indexing and text search through the Internet Information Service server.", incorrect: ["Text content indexing and web search through the Internet Information Service server.", "Video content indexing and image search through the Internet Information Service server.", "Image content indexing and video search through the Internet Information Service server."] },
                explanations: {
                    correct: "In 1996, a major breakthrough occurred with the launch of Windows NT 4.0 which introduced the Indexing Service...",
                    incorrect: [
                        "In 1996, a major breakthrough occurred with the launch of Windows NT 4.0 which introduced the Indexing Service...",
                        "In 1996, a major breakthrough occurred with the launch of Windows NT 4.0 which introduced the Indexing Service...",
                        "In 1996, a major breakthrough occurred with the launch of Windows NT 4.0 which introduced the Indexing Service..."
                    ]
                }
            },
            {
                video_title: "How Does A Search Engine Work",
                question: "What can a search engine do in performing its task as a crawler?",
                options: { correct: "Browsing the web by following links from one page to another, and finding new or updated pages to add to the search index.", incorrect: ["Filtering indexed content by prioritising web pages to ensure users receive the most relevant answers.", "Creating a catalogue of data in a very large database.", "Considering various factors such as the frequency and location of keywords on a web page, overall content quality, and links analysis."] },
                explanations: {
                    correct: "A search engine has three basic tasks: crawling, indexing, and ranking. In performing the task of crawling...",
                    incorrect: [
                        "A search engine has three basic tasks: crawling, indexing, and ranking. One of these tasks is filtering the indexed content...",
                        "A search engine has three basic tasks: crawling, indexing, and ranking. One of these tasks is creating a catalogue of data...",
                        "A search engine has three basic tasks: crawling, indexing, and ranking. One of these tasks is to consider various factors..."
                    ]
                }
            },
            {
                video_title: "Reasoning Engines",
                question: "What is the foundation of the reasoning engine?",
                options: { correct: "Knowledge", incorrect: ["Basic skills", "Technology", "Human"] },
                explanations: {
                    correct: "A reasoning engine starts with a knowledge base that feeds various types of data, ranging from text to code...",
                    incorrect: [
                        "A reasoning engine starts with a knowledge base, instead of abstract basic skills.",
                        "A reasoning engine is an innovation in the form of technology, but it starts with a knowledge base, instead of technology itself.",
                        "A reasoning engine is a tool for humans to use to perform their tasks, but it still starts with a knowledge base, instead of technology itself."
                    ]
                }
            },
            {
                video_title: "A New Way to Search: Microsoft Copilot",
                question: "The method used by Microsoft Copilot is....",
                options: { correct: "retrieval-augmented generation", incorrect: ["loss generation", "isolated generation", "self-contained generation"] },
                explanations: {
                    correct: "Copilot combines the power of a large language model with the vast knowledge on the Internet. This method is called retrieval-augmented generation (RAG)...",
                    incorrect: [
                        "Copilot combines the power of a large language model with the vast knowledge on the Internet. This method is called retrieval-augmented generation (RAG)...",
                        "Copilot combines the power of a large language model with the vast knowledge on the Internet. This method is called retrieval-augmented generation (RAG)...",
                        "Copilot combines the power of a large language model with the vast knowledge on the Internet. This method is called retrieval-augmented generation (RAG)..."
                    ]
                }
            },
            {
                video_title: "Prompt Engineering",
                question: "The prompt given when using Microsoft Copilot is....",
                options: { correct: "instruction and context", incorrect: ["instruction and appeal", "appeal and context", "context and topic"] },
                explanations: {
                    correct: "A prompt is the input given to a generative AI experience, such as Microsoft Copilot, that tells it what to do...",
                    incorrect: [
                        "A prompt is the input given to a generative AI experience, such as Microsoft Copilot, that tells it what to do and how to do it. Appeals are not the main component of instructions.",
                        "A prompt is the input given to a generative AI experience, such as Microsoft Copilot, that tells it what to do and how to do it. Appeals are not the main component of instructions.",
                        "A prompt is the input given to a generative AI experience, such as Microsoft Copilot, that tells it what to do and how to do it. Topics are not the main component of instructions."
                    ]
                }
            },
            {
                video_title: "Best Practices in Prompting",
                question: "The best practices when writing commands in Microsoft Copilot are indicated by number....",
                options: { correct: "1 and 4", incorrect: ["2 and 3", "2 and 4", "3 and 4"] },
                explanations: {
                    correct: "The best practices when writing commands in Microsoft Copilot are: 1. Make things more specific. 2. Choose a style that suits your needs...",
                    incorrect: [
                        "Some best practices when writing commands in Microsoft Copilot are to prioritise accuracy to direct Copilot with a clear and concise commands, not speed...",
                        "Some best practices when writing commands in Microsoft Copilot are to prioritise accuracy to direct Copilot using clear and concise commands rather than speed...",
                        "Some best practices when writing commands in Microsoft Copilot are to make things more specific, not general, and choose a style that suits your needs."
                    ]
                }
            },
            {
                video_title: "Critical Thinking",
                question: "How to navigate the suggestions through Copilot to find the core of truth and relevance?",
                options: { correct: "Critical thinking", incorrect: ["Systematic thinking", "Optimistic thinking", "Dynamic thinking"] },
                explanations: {
                    correct: "Critical thinking is the art of analysing and evaluating information to make better decisions...",
                    incorrect: [
                        "Critical thinking helps Copilot users to analyse and evaluate information, while systematic thinking only helps to sequence the activities or ideas to be done...",
                        "Critical thinking helps Copilot users to analyse and evaluate information, while optimistic thinking supports mental and physical health...",
                        "Critical thinking helps Copilot users to analyse and evaluate information, while dynamic thinking encourages users to keep developing ideas or thoughts..."
                    ]
                }
            }
        ]
    },
    {
        id: 3,
        name: "Course 4: Responsible AI",
        videos: [
            { title: "Using AI Responsibility: Best Practices", filePath: "videos/4_24_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "As AI becomes more integrated into our lives, it is important to ask how can we ensure it is used responsibly?" },
                    { start: "00:06", end: "00:11", text: "Let's explore." },
                    { start: "00:12", end: "00:17", text: "Understanding AI is the first step." },
                    { start: "00:18", end: "00:23", text: "It is not just a buzzword, it is a tool with broad capabilities and understanding the basics is important." },
                    { start: "00:24", end: "00:29", text: "Staying informed about the latest advancements and ethical discussions in AI is essential." },
                    { start: "00:30", end: "00:35", text: "This knowledge is key to leveraging AI responsibly." },
                    { start: "00:36", end: "00:41", text: "AI, like us, can have blind spots." },
                    { start: "00:42", end: "00:47", text: "It can reflect societal biases present in the data it learns from." },
                    { start: "00:48", end: "00:53", text: "By actively seeking unbiased information and understanding how AI uses data, navigating these blind spots becomes easier." },
                    { start: "00:54", end: "00:59", text: "This approach can also help reduce machine learning bias." },
                    { start: "01:00", end: "01:05", text: "Safety always comes first." },
                    { start: "01:06", end: "01:11", text: "Your data is precious and you should know how it is used by AI systems." },
                    { start: "01:12", end: "01:17", text: "Choose services that value user privacy." },
                    { start: "01:18", end: "01:23", text: "The best AI systems prioritise security and transparency." },
                    { start: "01:24", end: "01:29", text: "Microsoft takes extra measures to ensure your data is secure and protected." },
                    { start: "01:30", end: "01:35", text: "For example, at the end of a chat session in Copilot, prompts and responses are discarded." },
                    { start: "01:36", end: "01:41", text: "Your organisation's data is also not shared with third parties without your permission." },
                    { start: "01:42", end: "01:47", text: "After all, your personal data should remain personal." },
                    { start: "01:48", end: "01:53", text: "When it comes to AI generated content, it is essential not to accept it at face value." },
                    { start: "01:54", end: "01:59", text: "Always make a point to cross verify information from a variety of sources and engage your critical thinking skills." },
                    { start: "02:00", end: "02:05", text: "Critical thinking can help evaluate and refine AI generated content." },
                    { start: "02:06", end: "02:11", text: "You can do this by verifying facts and sources, understanding the content's goals and target audience, and considering a range of viewpoints." },
                    { start: "02:12", end: "02:17", text: "It is also important to ensure that the AI tool or service you are using has clear policies and guidelines for secure usage." },
                    { start: "02:18", end: "02:23", text: "After all, a well-informed user is the best defense against misinformation." },
                    { start: "02:24", end: "02:29", text: "AI can be a force for good." },
                    { start: "02:30", end: "02:35", text: "It can aid us in health care, education and even environmental conservation." },
                    { start: "02:36", end: "02:41", text: "Microsoft's AI for Good initiative is designed to equip individuals and organisations globally with the ability to address humanitarian challenges and foster a world that is more sustainable and inclusive." },
                    { start: "02:42", end: "02:47", text: "For instance, consider AI for Good Lab." },
                    { start: "02:48", end: "02:53", text: "It is leveraging AI to identify communities around the globe in need of extra support, especially those at risk from natural disasters like floods or earthquakes." },
                    { start: "02:54", end: "02:59", text: "Pinpointing where these communities are located allows for quick deployment of vital resources to help secure their well-being." },
                    { start: "03:00", end: "03:05", text: "Meanwhile, in partnership with Microsoft, Fred Hutch Cancer Centre has tapped into AI's potential to develop Quit Bot." },
                    { start: "03:06", end: "03:11", text: "This chatbot offers personalised assistance to individuals determined to quit smoking." },
                    { start: "03:12", end: "03:17", text: "AI should be a tool for good actions, never a means to spread misinformation or cause harm." },
                    { start: "03:18", end: "03:23", text: "So what else can you do?" },
                    { start: "03:24", end: "03:29", text: "Join the conversation." },
                    { start: "03:30", end: "03:35", text: "Start discussions in your community and workplace." },
                    { start: "03:36", end: "03:41", text: "Enquire about responsible use policies when using AI services." },
                    { start: "03:42", end: "03:47", text: "Encourage people to think about how AI will be used and to take steps to prevent misuse." },
                    { start: "03:48", end: "03:53", text: "By joining these conversations, you can help ensure AI is used responsibly." },
                    { start: "03:54", end: "03:59", text: "Together, we can shape the future of AI." },
                    { start: "04:00", end: "04:05", text: "Let's make sure it's a future we can all be proud of." }
                ]
             },
            { title: "Principles of Responsible AI", filePath: "videos/4_25_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "AI is all around us." },
                    { start: "00:06", end: "00:11", text: "It is there when you ask a voice assistant to play your favourite song, or when a chatbot helps you with a customer service inquiry." },
                    { start: "00:12", end: "00:17", text: "It is guiding you home on your navigation app, and it is even working behind the scenes when your email filters out spam." },
                    { start: "00:18", end: "00:23", text: "But have you ever wondered about the principles that guide the creation of these AI systems?" },
                    { start: "00:24", end: "00:29", text: "How do we ensure they are reliable, fair and respectful of our privacy?" },
                    { start: "00:30", end: "00:35", text: "The journey to responsible AI begins with trust, a trust that is built on six core principles: accountability, inclusiveness, reliability and safety, fairness, transparency, and privacy and security." },
                    { start: "00:36", end: "00:41", text: "Accountability is not just about creating AI systems, it is about taking responsibility for their impact." },
                    { start: "00:42", end: "00:47", text: "Clear roles and responsibilities are defined within development teams and across organisations." },
                    { start: "00:48", end: "00:53", text: "Inclusiveness is about designing AI solutions with everyone in mind, ensuring that the benefits of AI are accessible to all." },
                    { start: "00:54", end: "00:59", text: "Reliability and safety are achieved through rigorous testing, validation and continuous monitoring." },
                    { start: "01:00", end: "01:05", text: "Safety measures include fail safes, error handling and protection against attacks." },
                    { start: "01:06", end: "01:11", text: "Fairness is about treating all individuals equitably." },
                    { start: "01:12", end: "01:17", text: "Regular assessments ensure that AI systems do not favour any particular group based on race, gender, or other characteristics." },
                    { start: "01:18", end: "01:23", text: "Transparency is key to fostering trust." },
                    { start: "01:24", end: "01:29", text: "It allows users to understand AI decisions and outcomes." },
                    { start: "01:30", end: "01:35", text: "Privacy and security are about respecting and protecting user data." },
                    { start: "01:36", end: "01:41", text: "Only necessary data is collected and users have control over their data." },
                    { start: "01:42", end: "01:47", text: "Security measures are in place to safeguard against unauthorised access and breaches." },
                    { start: "01:48", end: "01:53", text: "Numerous tools and resources are available to aid in the development, deployment and advancement of AI." },
                    { start: "01:54", end: "01:59", text: "These resources and tools can guide developers through the responsible evolution of AI technologies." },
                    { start: "02:00", end: "02:05", text: "They can assist with everything from identifying mistakes and assessing fairness, to exploring data and understanding the AI's decision making process." },
                    { start: "02:06", end: "02:11", text: "This ensures that the AI systems are reliable, fair and transparent." },
                    { start: "02:12", end: "02:17", text: "One example that embodies these responsible AI practices is Microsoft Copilot." },
                    { start: "02:18", end: "02:23", text: "It prioritises user data privacy and puts your data under your control." },
                    { start: "02:24", end: "02:29", text: "It provides context aware suggestions, allowing users to understand how it arrived at a recommendation." },
                    { start: "02:30", end: "02:35", text: "It aims to assist all users equally and undergoes rigorous testing to maintain reliability and safety." },
                    { start: "02:36", end: "02:41", text: "The approach to developing AI is dynamic, not static." },
                    { start: "02:42", end: "02:47", text: "Continuous learning from experiences, user feedback and advancements in the field are integral to improving AI systems and practices." },
                    { start: "02:48", end: "02:53", text: "Collaboration and open dialogue with various stakeholders, including users, partners, policymakers and the broader public are needed." },
                    { start: "02:54", end: "02:59", text: "Compliance with all relevant laws and regulations related to AI is a commitment, along with advocacy for thoughtful and informed AI policies that balance innovation with the protection of users." },
                    { start: "03:00", end: "03:05", text: "Developing responsible AI is a process that places high importance on six key principles accountability, inclusiveness, reliability and safety, fairness, transparency, and privacy and security." },
                    { start: "03:06", end: "03:11", text: "The goal of these principles is to create AI systems that not only benefit society, but also respect individual rights and values." }
                ]
             },
            { title: "Deepfakes and Copyright", filePath: "videos/4_26_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Imagine you are scrolling through your mobile phone, and you come across a video of a famous person saying something controversial." },
                    { start: "00:06", end: "00:11", text: "You are taken aback, but then you remember - it could be a deepfake." },
                    { start: "00:12", end: "00:17", text: "A deepfake is a fraudulent piece of content - typically audio or video - that has been manipulated or created using artificial intelligence." },
                    { start: "00:18", end: "00:23", text: "Deepfakes use advanced AI techniques to replace a real person's voice, image, or both with eerily similar artificial likenesses." },
                    { start: "00:24", end: "00:29", text: "This technology has made it increasingly challenging to discern if something you see or hear on the internet is real." },
                    { start: "00:30", end: "00:35", text: "Deepfakes are frequently used to spread disinformation and can be used in scams, election manipulation, social engineering attacks and other kinds of fraud." },
                    { start: "00:36", end: "00:41", text: "Recognising the urgent need to combat deepfakes, the tech sector, including companies involved in AI model creation and consumer services like Microsoft, is taking action." },
                    { start: "00:42", end: "00:47", text: "These efforts have evolved over time, transitioning from implementing anti-counterfeiting features to advancing digital protection technologies." },
                    { start: "00:48", end: "00:53", text: "Here is what the tech sector is doing: 1. Building a safe environment:" },
                    { start: "00:54", end: "00:59", text: "Safety measures are being put in place to make sure everything runs smoothly and safely." },
                    { start: "01:00", end: "01:05", text: "This includes things like constant check-ups, blocking bad behaviour and quick action against those who misuse the system." },
                    { start: "01:06", end: "01:11", text: "2. Content credentials:" },
                    { start: "01:12", end: "01:17", text: "To fight against fake videos, images, or audio, special marks or icons are being added to AI-created content." },
                    { start: "01:18", end: "01:23", text: "This helps determine where the content came from and its history." },
                    { start: "01:24", end: "01:29", text: "3. Keeping services safe:" },
                    { start: "01:30", end: "01:35", text: "Efforts are being made to spot and remove harmful and misleading content from online platforms." },
                    { start: "01:36", end: "01:41", text: "This helps keep the online space safe and respectful for everyone." },
                    { start: "01:42", end: "01:47", text: "4. Working together:" },
                    { start: "01:48", end: "01:53", text: "In the same way that collaboration is key to achieving shared goals, when individuals in the tech industry, organisations dedicated to societal welfare, and government entities come together, they can collectively contribute to creating a more secure online environment." },
                    { start: "01:54", end: "01:59", text: "This unified approach can lead to innovative solutions and stronger safeguards for everyone in the digital space." },
                    { start: "02:00", end: "02:05", text: "5. Updating laws for new challenges:" },
                    { start: "02:06", end: "02:11", text: "As new challenges arise, efforts are being made to develop new laws and initiatives to protect people from misuse." },
                    { start: "02:12", end: "02:17", text: "6. Educating the public:" },
                    { start: "02:18", end: "02:23", text: "It’s important for everyone to be well-informed." },
                    { start: "02:24", end: "02:29", text: "Initiatives are underway to empower people to discern authentic content from fake content." },
                    { start: "02:30", end: "02:35", text: "This includes the development of new tools and educational programmes for the public." },
                    { start: "02:36", end: "02:41", text: "These strategies aim to make things more transparent and help society be more resilient against deepfakes." },
                    { start: "02:42", end: "02:47", text: "While deepfakes pose ethical and security concerns due to their potential misuse in spreading misinformation and impersonation, AI technology is also making strides in detecting deepfakes with high accuracy." },
                    { start: "02:48", end: "02:53", text: "This leads us to another significant topic - the rise and awareness of AI-generated content." },
                    { start: "02:54", end: "02:59", text: "Copyright is a legal concept that grants creators and authors of original work exclusive rights to its use and distribution, ensuring they receive recognition and financial benefit from their creations." },
                    { start: "03:00", end: "03:05", text: "But what happens when the creator is an AI service or tool?" },
                    { start: "03:06", end: "03:11", text: "Knowing that copyright is an important issue to address for AI-generated content, initiatives such as the Microsoft Copilot Copyright Commitment were created to extend existing intellectual property security support to commercial Copilot services." },
                    { start: "03:12", end: "03:17", text: "This commitment addresses potential IP infringement liability that could arise from the use of the output of Microsoft’s Copilots and Azure OpenAI Service." },
                    { start: "03:18", end: "03:23", text: "To further build trust in AI-generated content, Microsoft has developed content credentials." },
                    { start: "03:24", end: "03:29", text: "This feature uses cryptographic methods to add an invisible digital watermark to all AI-generated images in Bing, including the time and date it was originally created." },
                    { start: "03:30", end: "03:35", text: "This helps determine where the content comes from and gives those who create and share content better tools to decide what to trust." },
                    { start: "03:36", end: "03:41", text: "Taking this step is key to making sure we use AI technology in a way that's safe and responsible." },
                    { start: "03:42", end: "03:47", text: "It is important to stay informed." },
                    { start: "03:48", end: "03:53", text: "Remember, not everything you see or hear may be the truth, so when it comes to AI-generated content, it is important to know your rights and the measures in place to protect them." }
                ]
             },
            { title: "Human-AI Interaction and Global Implications", filePath: "videos/4_27_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "AI is transforming industries by facilitating decisions based on data, streamlining processes through automation and fostering new innovations." },
                    { start: "00:06", end: "00:11", text: "It is contributing to a more inclusive society, for example helping individuals with low vision interpret images and supporting farmers in their efforts to feed the world sustainably." },
                    { start: "00:12", end: "00:17", text: "And while AI brings a lot of advantages, it is essential to ensure that interactions between humans and AI are conducted responsibly, and with the well-being of all in mind." },
                    { start: "00:18", end: "00:23", text: "Let’s dive into some key considerations on this topic: First: data." },
                    { start: "00:24", end: "00:29", text: "Data is the foundation of AI development, providing the insights needed for continual improvement." },
                    { start: "00:30", end: "00:35", text: "Yet, it is important to balance the need for data with the protection of individual privacy rights." },
                    { start: "00:36", end: "00:41", text: "Next: algorithmic bias." },
                    { start: "00:42", end: "00:47", text: "Much like a mirror, AI systems can unintentionally reflect societal biases." },
                    { start: "00:48", end: "00:53", text: "For instance, a loan approval system might reproduce historical biases, approving loans only for certain groups." },
                    { start: "00:54", end: "00:59", text: "To combat this, AI developers need to work on ways to detect bias in AI systems." },
                    { start: "01:00", end: "01:05", text: "Then: transparency." },
                    { start: "01:06", end: "01:11", text: "The decision-making processes of AI must be transparent." },
                    { start: "01:12", end: "01:17", text: "It is important for users to comprehend the rationale behind an AI system's conclusions fostering trust and accountability." },
                    { start: "01:18", end: "01:23", text: "We also face the question of legal liability." },
                    { start: "01:24", end: "01:29", text: "Who is responsible for the AI decisions?" },
                    { start: "01:30", end: "01:35", text: "Is it the developer, the user, or the AI itself?" },
                    { start: "01:36", end: "01:41", text: "These are complex considerations that we must address as we continue to innovate in the field of AI." },
                    { start: "01:42", end: "01:47", text: "Striking a balance between innovation and accountability is essential." },
                    { start: "01:48", end: "01:53", text: "This balance will help us harness the power of AI responsibly, shaping a future that aligns with our shared values and aspirations." },
                    { start: "01:54", end: "01:59", text: "As we look to the future, here are some recommendations to maximise the benefits of AI." },
                    { start: "02:00", end: "02:05", text: "First, we should encourage data sharing while safeguarding privacy." },
                    { start: "02:06", end: "02:11", text: "This balance is important for improving AI systems without compromising individual rights." },
                    { start: "02:12", end: "02:17", text: "Second, we should invest in AI research." },
                    { start: "02:18", end: "02:23", text: "This will fuel innovation and ensure that the benefits of AI are accessible to all." },
                    { start: "02:24", end: "02:29", text: "Third, we must promote digital education and workforce development." },
                    { start: "02:30", end: "02:35", text: "As AI transforms the job market, we need to equip people with the skills to thrive in this new landscape." },
                    { start: "02:36", end: "02:41", text: "Fourth, we should encourage organisations and communities to establish an AI advisory committee." },
                    { start: "02:42", end: "02:47", text: "This committee can provide oversight, insights and guidance about developing and deploying AI systems." },
                    { start: "02:48", end: "02:53", text: "Fifth, we must engage with government officials." },
                    { start: "02:54", end: "02:59", text: "They play a crucial role in shaping policies that affect the use of AI in our communities." },
                    { start: "03:00", end: "03:05", text: "Lastly, we should regulate AI based on broad principles." },
                    { start: "03:06", end: "03:11", text: "This approach allows for flexibility as AI technologies evolve, while ensuring that we uphold our shared values and principles." },
                    { start: "03:12", end: "03:17", text: "And all these efforts lie in how we design the interaction between humans and AI." },
                    { start: "03:18", end: "03:23", text: "So, what is being done now to ensure that interactions between humans and AI are conducted ethically, responsibly and with the well-being of all in mind?" },
                    { start: "03:24", end: "03:29", text: "Microsoft has taken several steps to ensure that AI systems are used responsibly, such as creating guidelines known as the Responsible AI Standard." },
                    { start: "03:30", end: "03:35", text: "This standard ensures that AI systems are fair, safe, respect privacy, are inclusive and transparent." },
                    { start: "03:36", end: "03:41", text: "It also ensures that these systems can be held accountable for their actions." },
                    { start: "03:42", end: "03:47", text: "To predict and reduce any unfair impacts from AI systems, a method called measurement modelling is used." },
                    { start: "03:48", end: "03:53", text: "This helps in identifying potential issues before they become a problem." },
                    { start: "03:54", end: "03:59", text: "Understanding how an AI makes decisions can be complex." },
                    { start: "04:00", end: "04:05", text: "Companies are developing tools to detect societal bias in AI algorithms." },
                    { start: "04:06", end: "04:11", text: "These tools will alert us if an AI system might be unfairly favouring certain groups over others." },
                    { start: "04:12", end: "04:17", text: "Microsoft has established a set of principles for Human-AI Interaction." },
                    { start: "04:18", end: "04:23", text: "These principles serve as guidelines for how AI systems should act in various situations, including their initial interaction with humans, during regular usage, and even when mistakes happen." },
                    { start: "04:24", end: "04:29", text: "The decisions made in Human-AI Interaction are intertwined with global outcomes." },
                    { start: "04:30", end: "04:35", text: "The goal is to create AI that not only performs efficiently but also upholds our collective values and positively impacts our global society." },
                    { start: "04:36", end: "04:41", text: "As we continue to develop and use AI, it is important to remember that responsible AI practices pave the way for a more promising and equitable future for everyone." },
                    { start: "04:42", end: "04:47", text: "This approach ensures that AI remains a beneficial and trusted technology in our interconnected world." }
                ]
             }
        ],
        quizzes: [
            {
                video_title: "Using AI Responsibility: Best Practices",
                question: "What does Microsoft implement to ensure data security and protection?",
                options: { correct: "Delete commands and responses at the end of a chat session in Copilot.", incorrect: ["Give a social perspective bias to the data it studies.", "Refer to a source when providing information search results.", "Have policies and guidelines for safe use."] },
                explanations: {
                    correct: "Microsoft understands and guarantees data privacy, so it takes additional steps to ensure data security and protection...",
                    incorrect: [
                        "The first step to ensuring responsible AI is to understand AI...",
                        "Microsoft understands and guarantees data privacy, so it takes additional steps to ensure data security and protection...",
                        "AI users need to verify facts and sources, understand the purpose and target audience of the content..."
                    ]
                }
            },
            {
                video_title: "Principles of Responsible AI",
                question: "Which are the principles of responsible AI?",
                options: { correct: "3 and 4", incorrect: ["4 and 6", "1 and 2", "5 and 6"] },
                explanations: {
                    correct: "Key principles of responsible AI: (1) Accountability (2) Inclusivity (3) Reliability and protection (4) Fairness (5) Transparency (6) Privacy and security",
                    incorrect: [
                        "Anonymity and exclusivity are not key principles of responsible AI, as accountability and inclusivity should be.",
                        "AI is not just about protection and fairness, but reliability and protection, as well as fairness.",
                        "Publicity is not a key principle of responsible AI, as it should be based on privacy and security."
                    ]
                }
            },
            {
                video_title: "Deepfakes and Copyright",
                question: "What methods can be applied to provide reliable content?",
                options: { correct: "Adding special marks or icons to AI-generated content.", incorrect: ["Blocking bad behaviour by AI users.", "Developing new tools and educational programmes that are accessible to the public.", "Removing erroneous and unhelpful AI content."] },
                explanations: {
                    correct: "Providing reliable content is one of the things the tech sector is doing to combat deepfakes...",
                    incorrect: [
                        "Creating a safe environment is one of the things the tech sector is doing to combat deepfakes...",
                        "Educating the public is one of the things the tech sector is doing to combat deepfakes...",
                        "Keeping services secure is one of the things the tech sector is doing to combat deepfakes..."
                    ]
                }
            },
            {
                video_title: "Human-AI Interaction and Global Implications",
                question: "Preparing people with the appropriate skills to thrive in new environments is one way to strive for privacy-preserving data-sharing practices, is to....",
                options: { correct: "conduct digital education and workforce development", incorrect: ["strive for data-sharing practices that maintain privacy", "support organisational and community efforts for the establishment of AI advisory committees", "cooperate with government officials"] },
                explanations: {
                    correct: "Conducting digital education and workforce development is one way to strive for privacy-preserving data sharing practices...",
                    incorrect: [
                        "Striving for privacy-preserving data-sharing practices is one way to strive for privacy-preserving data-sharing practices...",
                        "Supporting the efforts of organisations and communities to establish AI advisory committees is one way to strive for privacy-preserving data-sharing practices...",
                        "Working with government officials is one way to strive for privacy-preserving data-sharing practices..."
                    ]
                }
            }
        ]
    },
    {
        id: 4,
        name: "Course 5: Microsoft Copilot",
        videos: [
            { title: "What is Microsoft Copilot", filePath: "videos/5_28_AIfluency_en-GB.mp4",
               transcript: [
                { start: "00:00", end: "00:05", text: "You might have recently heard the buzz about Microsoft Copilot." },
                { start: "00:06", end: "00:11", text: "Maybe through the media, during a conversation, or even at your workplace and you might be wondering, 'what exactly is Microsoft Copilot?'" },
                { start: "00:12", end: "00:17", text: "Let’s dive in! Microsoft Copilot is your AI companion, assisting you in your day-to-day activities." },
                { start: "00:18", end: "00:23", text: "Think of it as your trusty sidekick, enhancing productivity, sparking creativity and simplifying tasks." },
                { start: "00:24", end: "00:29", text: "It’s a versatile tool that adapts to your needs." },
                { start: "00:30", end: "00:35", text: "Whether you are drafting an email, coding a new feature, creating content, or even learning something new, it is there to assist." },
                { start: "00:36", end: "00:41", text: "With its advanced AI capabilities, Copilot is designed to understand context, provide relevant information and offer suggestions that are tailored just for you." },
                { start: "00:42", end: "00:47", text: "For example, it can help create and edit documents, emails and presentations." },
                { start: "00:48", end: "00:53", text: "It can even suggest content improvements, correct grammatical errors and streamline your writing process, saving you time." },
                { start: "00:54", end: "00:59", text: "Curious about a topic? Copilot is like having an encyclopedia at your fingertips." },
                { start: "01:00", end: "01:05", text: "Ask about historical events, scientific concepts, or even trivia and Copilot will provide relevant information quickly." },
                { start: "01:06", end: "01:11", text: "Need some help on how to manage your daily schedule or ideas on how to start a new creative project?" },
                { start: "01:12", end: "01:17", text: "Copilot can help with this too!" },
                { start: "01:18", end: "01:23", text: "Copilot can also breakdown ideas or concepts into more understandable pieces." },
                { start: "01:24", end: "01:29", text: "Whether it is legal jargon, medical terminology or technical details, Copilot can simplify it for you." },
                { start: "01:30", end: "01:35", text: "And the best part? Microsoft Copilot is available for you to use today." },
                { start: "01:36", end: "01:41", text: "So, let’s look at how you can get started in Copilot." },
                { start: "01:42", end: "01:47", text: "The first step is to open your preferred web browser." },
                { start: "01:48", end: "01:53", text: "Once your web browser is open, type the following into the address bar: https://copilot.microsoft.com/ and then click 'Enter'." },
                { start: "01:54", end: "01:59", text: "This will take you directly to the interface where you can begin your Copilot journey." },
                { start: "02:00", end: "02:05", text: "You can also access Copilot through Bing." },
                { start: "02:06", end: "02:11", text: "Let’s try! Type https://www.bing.com/ into the address bar and click 'Enter.'" },
                { start: "02:12", end: "02:17", text: "Once the page is loaded, look for the Copilot icon." },
                { start: "02:18", end: "02:23", text: "The icon should be near the search bar. Clicking on the icon will direct you to Copilot." },
                { start: "02:24", end: "02:29", text: "Another way to navigate to Copilot is through Microsoft Edge." },
                { start: "02:30", end: "02:35", text: "To do this, open your Edge browser." },
                { start: "02:36", end: "02:41", text: "Once opened, look at the top right corner of the browser window for the Copilot icon. It will be green and blue." },
                { start: "02:42", end: "02:47", text: "Clicking on the icon will grant you access to Copilot’s features within Edge." },
                { start: "02:48", end: "02:53", text: "Here, you can access Copilot in Edge features like asking questions related to the webpage’s content or asking Copilot to summarise the information on the page." },
                { start: "02:54", end: "02:59", text: "Copilot can also organise your open tabs for a more efficient browsing experience and help compare products listed on the page to help you decide the best option for you." },
                { start: "03:00", end: "03:05", text: "If you have a Copilot Pro subscription, access to Copilot extends beyond the basic features." },
                { start: "03:06", end: "03:11", text: "With a subscription, you can use Copilot in select Microsoft 365 applications and get responses faster during peak times." },
                { start: "03:12", end: "03:17", text: "For businesses, Copilot is also integrated in platforms like Dynamic 365 too." },
                { start: "03:18", end: "03:23", text: "Copilot can assist with things like data analysis, app development, workflow automation." },
                { start: "03:24", end: "03:29", text: "It is all about sparking creativity and boosting productivity with Copilot by your side." },
                { start: "03:30", end: "03:35", text: "Imagine an environment where the boundaries of innovation are constantly being expanded." },
                { start: "03:36", end: "03:41", text: "With Copilot, you are not just completing tasks, you are redefining the way you work, unleashing a new wave of creative potential." }
                ]
             },
            { title: "Navigating Copilot: Set Up and Account Types", filePath: "videos/5_29_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Your experience with Microsoft Copilot is not a one-size-fits-all." },
                    { start: "00:06", end: "00:11", text: "Whether you are using a personal account or a work or school account, Copilot adapts to provide an experience that is just right for your needs." },
                    { start: "00:12", end: "00:17", text: "It is compatible with any operating system and browser." },
                    { start: "00:18", end: "00:23", text: "You can also access Copilot by downloading the Microsoft Copilot app to your phone." },
                    { start: "00:24", end: "00:29", text: "To access Copilot from your computer, open a browser and go to https://copilot.microsoft.com/" },
                    { start: "00:30", end: "00:35", text: "You can use a limited version of Copilot without a Microsoft account." },
                    { start: "00:36", end: "00:41", text: "However, logging into a Microsoft account using the Edge browser provides the best experience." },
                    { start: "00:42", end: "00:47", text: "This allows for extended conversations with Copilot." },
                    { start: "00:48", end: "00:53", text: "It also enables the ability to save your conversation history and perform searches and summaries of webpages you are viewing." },
                    { start: "00:54", end: "00:59", text: "Are you ready to start your Copilot journey? Let’s get started." },
                    { start: "01:00", end: "01:05", text: "First, navigate to the Microsoft Copilot." },
                    { start: "01:06", end: "01:11", text: "To sign in, locate the 'sign in' option at the top right corner." },
                    { start: "01:12", end: "01:17", text: "Now, you will see two options: One for signing into your business or school account and another for your personal account." },
                    { start: "01:18", end: "01:23", text: "A personal account provides a free basic option for personal tasks." },
                    { start: "01:24", end: "01:29", text: "When you are signed into a personal account, you can add plugins to enhance your experience." },
                    { start: "01:30", end: "01:35", text: "If you don't have a personal account, you can create one for free to access Copilot." },
                    { start: "01:36", end: "01:41", text: "A work or school account is provided by your employer or school for professional use." },
                    { start: "01:42", end: "01:47", text: "Signing in with a work or school account ensures your organisation’s data is protected." },
                    { start: "01:48", end: "01:53", text: "If you are using Copilot for work or school-related tasks, you will sign in with this option." },
                    { start: "01:54", end: "01:59", text: "This requires you to sign in with your work or school email." },
                    { start: "02:00", end: "02:05", text: "If your organisation grants you Copilot privileges, you can also use Copilot in your M365 applications." },
                    { start: "02:06", end: "02:11", text: "If you don’t have an account, and need to make one, click on 'create one' and follow the steps provided." },
                    { start: "02:12", end: "02:17", text: "Once you have signed in, be it for work, school, or personal interests, you will unlock access to extended conversations and additional features." },
                    { start: "02:18", end: "02:23", text: "Now that you have an account, let’s explore the interface." },
                    { start: "02:24", end: "02:29", text: "When you scroll down, Copilot offers three distinct conversation styles, creative, balanced and precise." },
                    { start: "02:30", end: "02:35", text: "When you scroll over them, you will see the description for each." },
                    { start: "02:36", end: "02:41", text: "They also switch colours to help you keep track of which style you are using." },
                    { start: "02:42", end: "02:47", text: "You can also add images to your conversation with Copilot." },
                    { start: "02:48", end: "02:53", text: "This can be useful if you want to ask questions about an image, or if you want Copilot to generate content based on an image." },
                    { start: "02:54", end: "02:59", text: "To add an image, click on the ‘Add Image’ icon." },
                    { start: "03:00", end: "03:05", text: "Once you have selected your image, it will appear on screen and Copilot will be able to analyse it and respond accordingly." },
                    { start: "03:06", end: "03:11", text: "Adding files works similarly to adding images." },
                    { start: "03:12", end: "03:17", text: "You might want to add a file if you want Copilot to analyse the file’s content, or if you want to ask questions about the file." },
                    { start: "03:18", end: "03:23", text: "To add a file, click on the ‘Add File’ icon, represented by a paperclip." },
                    { start: "03:24", end: "03:29", text: "Once you have selected your file, it will be uploaded, and Copilot will be able to access its content." },
                    { start: "03:30", end: "03:35", text: "The ‘Recent Conversations’ section shows your past interactions with Copilot." },
                    { start: "03:36", end: "03:41", text: "This can be useful if you want to refer to previous questions or responses." },
                    { start: "03:42", end: "03:47", text: "‘The Notebook’ feature is designed to handle extensive conversations and tasks." },
                    { start: "03:48", end: "03:53", text: "You can write up to 18,000 characters in a single notebook which gives you plenty of space to ask complex questions, request detailed explanations, or even draft lengthy documents with the help of Copilot." },
                    { start: "03:54", end: "03:59", text: "Now, you are all set to dive into the Copilot experience." },
                    { start: "04:00", end: "04:05", text: "Are you ready to explore, learn and create in ways you have never imagined before?" }
                ]
             },
            { title: "Language and Accessibility Support in Copilot", filePath: "videos/5_30_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Microsoft Copilot is a multilingual AI companion designed to break down language barriers and make access to information easier across the globe." },
                    { start: "00:06", end: "00:11", text: "It currently supports an experience in several languages including Simplified Chinese, English, French, German, Italian, Japanese, Brazilian Portuguese and Spanish." },
                    { start: "00:12", end: "00:17", text: "If you encounter an error message indicating that a language isn’t supported while using Copilot, it may come as a surprise," },
                    { start: "00:18", end: "00:23", text: "particularly if Bing is available in your language." },
                    { start: "00:24", end: "00:29", text: "This can happen because language support for Copilot does not extend as far as Bing’s language support quite yet." },
                    { start: "00:30", end: "00:35", text: "To adjust language settings in Microsoft Copilot, click the icon with three horizontal lines at the top right corner and select 'Settings’." },
                    { start: "00:36", end: "00:41", text: "In the settings menu, navigate to 'language' to set your preferred language for Bing." },
                    { start: "00:42", end: "00:47", text: "Here you can also set the language you want Copilot to use for search results and responses." },
                    { start: "00:48", end: "00:53", text: "It is important to note that Copilot currently only accepts prompts in the languages previously mentioned." },
                    { start: "00:54", end: "00:59", text: "If you submit a prompt in an unsupported language, Copilot will notify you with an error message." },
                    { start: "01:00", end: "01:05", text: "Aside from languages, Copilot was also built with accessibility in mind." },
                    { start: "01:06", end: "01:11", text: "Copilot voice is a feature that brings ease and efficiency to your conversations." },
                    { start: "01:12", end: "01:17", text: "It is perfect for those moments when typing is not the best option, or for users who find speech more accessible than text." },
                    { start: "01:18", end: "01:23", text: "So, let’s look at how to access Copilot voice." },
                    { start: "01:24", end: "01:29", text: "First, open Copilot on your device. Then, click the microphone icon and speak into your device." },
                    { start: "01:30", end: "01:35", text: "Copilot will then listen and respond, all in real-time." },
                    { start: "01:36", end: "01:41", text: "Copilot read aloud is another accessibility feature that enhances your experience by reading responses aloud." },
                    { start: "01:42", end: "01:47", text: "Here is how you can use the read aloud feature in Copilot." },
                    { start: "01:48", end: "01:53", text: "With Copilot open, send an inquiry either through voice or text." },
                    { start: "01:54", end: "01:59", text: "For example, you can ask Copilot to translate 'Hello, how are you?' into Brazilian Portuguese." },
                    { start: "02:00", end: "02:05", text: "Once Copilot provides a response, look for the read aloud icon, which is represented by a speaker image." },
                    { start: "02:06", end: "02:11", text: "Click on this icon, and Copilot will read aloud its response." },
                    { start: "02:12", end: "02:17", text: "Visual search is another feature that empowers you to explore and understand the world around you." },
                    { start: "02:18", end: "02:23", text: "Whether you are curious about a mysterious plant in your garden or the species of a bird perched outside your window, visual search is there to assist." },
                    { start: "02:24", end: "02:29", text: "With a simple image, Copilot becomes your guide, transforming images into knowledge." },
                    { start: "02:30", end: "02:35", text: "Here is how it works." },
                    { start: "02:36", end: "02:41", text: "With Copilot open on your device, tap the camera icon and either upload an image or snap a new one." },
                    { start: "02:42", end: "02:47", text: "Next, click the speech bubble to start a conversation about your image." },
                    { start: "02:48", end: "02:53", text: "Once you have finished, click the submit icon." },
                    { start: "02:54", end: "02:59", text: "Copilot then analyses the image and provides insights based on your enquiry." },
                    { start: "03:00", end: "03:05", text: "These features help pave the way to a future where knowledge knows no bounds, and learning is within everyone’s reach." }
                ]
             },
            { title: "Tips for Engaging Conversations with Copilot", filePath: "videos/5_31_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Microsoft Copilot is more than just a tool—it’s a conversational partner powered by advanced AI." },
                    { start: "00:06", end: "00:11", text: "To get the most out of it, knowing how to engage effectively is key." },
                    { start: "00:12", end: "00:17", text: "Let’s dive into some tips to make your conversations with Copilot as productive and engaging as possible." },
                    { start: "00:18", end: "00:23", text: "Tip one: Be clear and specific with your prompts." },
                    { start: "00:24", end: "00:29", text: "Instead of asking, 'Tell me about history,' try 'Provide a summary of the Industrial Revolution in three sentences.'" },
                    { start: "00:30", end: "00:35", text: "The more precise you are, the more tailored and useful Copilot’s response will be." },
                    { start: "00:36", end: "00:41", text: "Tip two: Use follow-up questions to dig deeper." },
                    { start: "00:42", end: "00:47", text: "After an initial response, ask something like, 'Can you explain the impact of steam engines from that summary?'" },
                    { start: "00:48", end: "00:53", text: "This builds on the conversation and keeps it flowing." },
                    { start: "00:54", end: "00:59", text: "Tip three: Experiment with conversation styles." },
                    { start: "01:00", end: "01:05", text: "Copilot offers three styles—Creative, Balanced, and Precise." },
                    { start: "01:06", end: "01:11", text: "For brainstorming, choose Creative; for factual answers, go with Precise; and for a mix, select Balanced." },
                    { start: "01:12", end: "01:17", text: "Try asking the same question in different styles to see how responses vary." },
                    { start: "01:18", end: "01:23", text: "Tip four: Provide context for better results." },
                    { start: "01:24", end: "01:29", text: "If you say, 'Draft an email,' add details like, 'to my boss about a missed deadline, in a professional tone.'" },
                    { start: "01:30", end: "01:35", text: "Context helps Copilot deliver exactly what you need." },
                    { start: "01:36", end: "01:41", text: "Tip five: Use Copilot iteratively." },
                    { start: "01:42", end: "01:47", text: "Start with a broad question, like 'Suggest a marketing plan,' then refine it with, 'Now focus on social media strategies.'" },
                    { start: "01:48", end: "01:53", text: "This back-and-forth hones the output step-by-step." },
                    { start: "01:54", end: "01:59", text: "Tip six: Leverage uploads for richer interactions." },
                    { start: "02:00", end: "02:05", text: "Upload a document and ask, 'Summarise this report,' or an image and say, 'Describe what’s in this picture.'" },
                    { start: "02:06", end: "02:11", text: "This makes Copilot a dynamic partner for analysing content." },
                    { start: "02:12", end: "02:17", text: "Tip seven: Keep it conversational." },
                    { start: "02:18", end: "02:23", text: "Treat Copilot like a colleague—phrase prompts naturally, like, 'Hey, can you help me brainstorm some gift ideas?'" },
                    { start: "02:24", end: "02:29", text: "A relaxed tone often yields engaging responses." },
                    { start: "02:30", end: "02:35", text: "Tip eight: Explore its limits creatively." },
                    { start: "02:36", end: "02:41", text: "Ask fun questions like, 'Write a short sci-fi story about a robot chef,' to spark inspiration and see what Copilot can do." },
                    { start: "02:42", end: "02:47", text: "With these tips, your conversations with Copilot can be both productive and enjoyable." },
                    { start: "02:48", end: "02:53", text: "It’s all about crafting the right prompts and building a dialogue that works for you." }
                ]
             },
            { title: "Explore GPTs and Plugins in Copilot", filePath: "videos/5_32_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "GPTs and plugins are features in Microsoft Copilot." },
                    { start: "00:06", end: "00:11", text: "Copilot GPTs are custom versions of Copilot tailored to a specific purpose." },
                    { start: "00:12", end: "00:17", text: "Whereas plugins are applications that allow Copilot to connect with other services that specialise in specific tasks such as finding a flight or creating a song." },
                    { start: "00:18", end: "00:23", text: "To start, let’s take a closer look at what GPTs are and the different Copilot GPTs." },
                    { start: "00:24", end: "00:29", text: "Generative Pre-trained Transformers or, GPTs, are advanced AI models that have greatly changed how we understand and use AI." },
                    { start: "00:30", end: "00:35", text: "Once trained, these models can interpret and generate language." },
                    { start: "00:36", end: "00:41", text: "The 'G' in GPT emphasises their ability to generate original content." },
                    { start: "00:42", end: "00:47", text: "The 'P' in GPT stands for pre-training, a shift from problem-specific models to those fine-tuned for various applications such as predicting the next word in a sentence." },
                    { start: "00:48", end: "00:53", text: "The 'T' stands for 'transformer', an architecture that enables large-scale language models to handle extensive datasets and create levels of complexity and ability that we have not seen before." },
                    { start: "00:54", end: "00:59", text: "Copilot is powered by a variant of the GPT model, and different versions are available." },
                    { start: "01:00", end: "01:05", text: "These versions, known as Copilot GPTs, are customised to assist you in specific tasks." },
                    { start: "01:06", end: "01:11", text: "When you visit the Microsoft Copilot website and sign into your personal account, look at the top right of the screen you will see the word ‘Chats’." },
                    { start: "01:12", end: "01:17", text: "Below this word, is a list of all the GPTs available for you to use today." },
                    { start: "01:18", end: "01:23", text: "The first one is Copilot. This is the general version that can assist with a wide range of topics." },
                    { start: "01:24", end: "01:29", text: "Next one down is designer. This version can help you with design-related tasks like creating an image." },
                    { start: "01:30", end: "01:35", text: "Then you have vacation planner. This version can assist with planning holidays, providing destination ideas, flight prices and more." },
                    { start: "01:36", end: "01:41", text: "There is also cooking assistant. Cooking assistant can help you with cooking-related tasks, such as generating dinner ideas or finding recipes." },
                    { start: "01:42", end: "01:47", text: "And the last one is fitness trainer. This version can assist with fitness-related tasks, such as generating personalised workout plans or providing fitness tips." },
                    { start: "01:48", end: "01:53", text: "Now that we have explored the various GPTs, let’s use the cooking assistant as an example." },
                    { start: "01:54", end: "01:59", text: "To access cooking assistant, click on ‘Cooking assistant’ and Copilot will change to this GPT." },
                    { start: "02:00", end: "02:05", text: "At the top, you will find sample prompts for guidance, or you can enter your own prompt like 'Ingredients and instructions to make vegetarian bibimbap.'" },
                    { start: "02:06", end: "02:11", text: "The assistant will then provide a list of ingredients and cooking steps." },
                    { start: "02:12", end: "02:17", text: "For better readability, you can request the ingredients to be formatted into a table." },
                    { start: "02:18", end: "02:23", text: "Another feature available in Copilot are plugins." },
                    { start: "02:24", end: "02:29", text: "Copilot plugins are extensions that enhance the capabilities of Microsoft Copilot by connecting it to external services." },
                    { start: "02:30", end: "02:35", text: "These plugins allow Copilot to perform a wider range of actions and retrieve real-time information from third-party sources." },
                    { start: "02:36", end: "02:41", text: "To access the available plugins in Copilot, click on the word ‘Plugins’ located at the top right corner." },
                    { start: "02:42", end: "02:47", text: "You will find a list of available plugins that you can choose from." },
                    { start: "02:48", end: "02:53", text: "Let’s try the Suno plugin. Suno allows you to create a song with lyrics right in Copilot." },
                    { start: "02:54", end: "02:59", text: "To create a song, simply type a prompt about your song." },
                    { start: "03:00", end: "03:05", text: "With Copilot GPTs and plugins, you can make your experience with Copilot more personal." }
                ]
             },
            { title: "Bring Your Ideas to Life with Copilot", filePath: "videos/5_33_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Have you ever had a brilliant idea but felt overwhelmed about where to start? Copilot can help with this." },
                    { start: "00:06", end: "00:11", text: "Copilot combines the power of a large language model with the vast knowledge of the internet." },
                    { start: "00:12", end: "00:17", text: "The large language model that powers Copilot provides responses based on its training data, and the search plugin in Copilot pulls in current and updated information from the web." },
                    { start: "00:18", end: "00:23", text: "This method, called retrieval-augmented generation, ensures you receive the best assistance to turn your idea into reality." },
                    { start: "00:24", end: "00:29", text: "For Copilot to access information from the web, make sure to turn on the search plugin." },
                    { start: "00:30", end: "00:35", text: "To turn on the search plugin, click on plugins on the top right and toggle it on." },
                    { start: "00:36", end: "00:41", text: "Once on, you will experience a more comprehensive experience that brings in real-time information from the web." },
                    { start: "00:42", end: "00:47", text: "If you are on a work or school account, the plugin is already active." },
                    { start: "00:48", end: "00:53", text: "To effectively harness the capabilities of Copilot, clear communication is essential." },
                    { start: "00:54", end: "00:59", text: "Begin by sharing your objective, offering relevant background information and outlining your expectations." },
                    { start: "01:00", end: "01:05", text: "Whether you are seeking an in-depth exploration or just a starting point for an idea, Copilot is designed to accommodate your specific needs." },
                    { start: "01:06", end: "01:11", text: "Let’s say you have come up with an idea for a new app but you are unsure how to develop it or make a business plan for it." },
                    { start: "01:12", end: "01:17", text: "Copilot can help." },
                    { start: "01:18", end: "01:23", text: "If you give Copilot a prompt like: 'I have an idea for a fitness app for people with a busy schedule.'" },
                    { start: "01:24", end: "01:29", text: "The app's features include personalised workout plans, food diary and suggestions, and virtual training." },
                    { start: "01:30", end: "01:35", text: "The target audience is individuals aged 25-65 who value health but have limited time and access to a gym." },
                    { start: "01:36", end: "01:41", text: "The app aims to solve the problem of fitting regular exercise into busy schedule." },
                    { start: "01:42", end: "01:47", text: "Can you suggest current market trends that could influence the app's development?'" },
                    { start: "01:48", end: "01:53", text: "Once you have this answer, Copilot can even help you start a business plan." },
                    { start: "01:54", end: "01:59", text: "An example prompt could be: 'I am in the process of developing a fitness app for people with a busy schedule.'" },
                    { start: "02:00", end: "02:05", text: "I need assistance in crafting a business plan." },
                    { start: "02:06", end: "02:11", text: "Could you provide me with templates or examples of business plans for fitness startups?" },
                    { start: "02:12", end: "02:17", text: "Additionally, I would like to develop a plan that highlights the app's potential for adaptability in the global market." },
                    { start: "02:18", end: "02:23", text: "How should I structure this plan?'" },
                    { start: "02:24", end: "02:29", text: "Maybe you need a creative spark for the apps’ interface." },
                    { start: "02:30", end: "02:35", text: "You can ask Copilot something like: 'I am working on a fitness app for busy professionals and want to ensure the interface promotes a sense of calm, inspiration and focus.'" },
                    { start: "02:36", end: "02:41", text: "Could you suggest some modern design principles that could be applied to this basic mockup for the app’s main screen?'" },
                    { start: "02:42", end: "02:47", text: "If you need help with coding the app or need strategies to market your new app, Copilot can assist with that too." },
                    { start: "02:48", end: "02:53", text: "With Copilot your idea is just a prompt away from reality." }
                ]
             },
            { title: "Time Management Assistance with Copilot", filePath: "videos/5_34_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Do you ever feel like there just are not enough hours in the day to get everything done?" },
                    { start: "00:06", end: "00:11", text: "Between looming deadlines, endless meetings, and an inbox that never seems to empty, managing your time can feel overwhelming." },
                    { start: "00:12", end: "00:17", text: "That is where Microsoft Copilot comes in, your AI-powered assistant designed to help you take control of your schedule and boost your productivity." },
                    { start: "00:18", end: "00:23", text: "Copilot can assist with everything from prioritising tasks to scheduling your day." },
                    { start: "00:24", end: "00:29", text: "Let’s explore how Copilot can transform the way you manage your time." },
                    { start: "00:30", end: "00:35", text: "Imagine you are juggling multiple responsibilities: a project deadline, a team meeting, and a personal errand all in one day." },
                    { start: "00:36", end: "00:41", text: "You could ask Copilot: 'Help me create a daily schedule based on these tasks: finish a project by 3 PM, attend a team meeting from 10 to 11 AM, and run an errand at 1 PM.'" },
                    { start: "00:42", end: "00:47", text: "Copilot will suggest a structured timeline, factoring in your priorities and even adding buffer time for flexibility." },
                    { start: "00:48", end: "00:53", text: "Need to prioritise your to-do list?" },
                    { start: "00:54", end: "00:59", text: "Simply provide Copilot with your tasks and ask: 'Rank these tasks by urgency: respond to client emails, prepare a presentation, and review a report.'" },
                    { start: "01:00", end: "01:05", text: "Copilot will analyse the list and offer a prioritised order, perhaps suggesting you tackle urgent emails first, followed by the presentation, and then the report." },
                    { start: "01:06", end: "01:11", text: "If you’re unsure how long a task might take, Copilot can estimate that too." },
                    { start: "01:12", end: "01:17", text: "Ask: 'How much time should I allocate to draft a 10-slide presentation?' and Copilot might recommend two hours, based on typical productivity benchmarks." },
                    { start: "01:18", end: "01:23", text: "Copilot can even break down complex projects into manageable steps." },
                    { start: "01:24", end: "01:29", text: "For example, say: 'Break down my project of creating a marketing campaign into actionable steps with time estimates.'" },
                    { start: "01:30", end: "01:35", text: "Copilot could suggest steps like research (1 hour), brainstorming (30 minutes), drafting (2 hours), and review (1 hour), giving you a clear roadmap." },
                    { start: "01:36", end: "01:41", text: "Struggling to stay focused? Copilot can recommend time management techniques tailored to your needs." },
                    { start: "01:42", end: "01:47", text: "Ask: 'Suggest a time management method for someone who gets distracted easily,' and it might propose the Pomodoro Technique—25 minutes of focused work followed by a 5-minute break." },
                    { start: "01:48", end: "01:53", text: "Copilot can even set up a schedule for you using this method." },
                    { start: "01:54", end: "01:59", text: "For instance: 'Create a Pomodoro schedule for my 4-hour workday,' and Copilot will map out your intervals." },
                    { start: "02:00", end: "02:05", text: "Need a reminder to take breaks?" },
                    { start: "02:06", end: "02:11", text: "Copilot can draft reminders for you to integrate into your calendar—say, a 10-minute stretch every two hours." },
                    { start: "02:12", end: "02:17", text: "If you’re managing a team, Copilot can help coordinate schedules too." },
                    { start: "02:18", end: "02:23", text: "Ask: 'Propose a meeting schedule for a team of five across two time zones for a 30-minute sync,' and Copilot will find a suitable time slot." },
                    { start: "02:24", end: "02:29", text: "Copilot also shines at summarising lengthy meetings or emails to save you time." },
                    { start: "02:30", end: "02:35", text: "Upload your notes and say: 'Summarise this hour-long meeting in three sentences,' and Copilot will distill the key points." },
                    { start: "02:36", end: "02:41", text: "With Copilot, time management becomes less about stress and more about strategy." },
                    { start: "02:42", end: "02:47", text: "It’s like having a personal assistant who’s always ready to help you make the most of every minute." }
                ]
             },
            { title: "Elevate Your Job Search with Copilot", filePath: "videos/5_35_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "In today's job market, having additional support can make a big difference." },
                    { start: "00:06", end: "00:11", text: "Microsoft Copilot is your dedicated AI companion to give you that extra support." },
                    { start: "00:12", end: "00:17", text: "It can offer personal assistance throughout your job-seeking journey." },
                    { start: "00:18", end: "00:23", text: "Whether you are looking for your first job or an experienced professional, Copilot can help you navigate the complexities of finding the right job with confidence and ease." },
                    { start: "00:24", end: "00:29", text: "To help jump start your job search, you can ask Copilot to create a job search strategy." },
                    { start: "00:30", end: "00:35", text: "'Help me create a concise job search strategy that includes online applications and networking.'" },
                    { start: "00:36", end: "00:41", text: "Copilot will provide actionable steps tailored to your needs, such as networking, utilising online job boards, engaging with recruiters, and more." },
                    { start: "00:42", end: "00:47", text: "Now that you have a job search strategy, maybe you are ready to update your CV and reach out to your network." },
                    { start: "00:48", end: "00:53", text: "You can ask Copilot: 'Draft a short networking email for my LinkedIn contacts and suggest a professional Microsoft CV template.'" },
                    { start: "00:54", end: "00:59", text: "Copilot will create a draft networking email for you to edit and send to contacts." },
                    { start: "01:00", end: "01:05", text: "It will also suggest free CV templates for your use." },
                    { start: "01:06", end: "01:11", text: "A standout CV and cover letter are important." },
                    { start: "01:12", end: "01:17", text: "Once you’ve selected a CV template, you can use Copilot to tailor your CV to a specific job." },
                    { start: "01:18", end: "01:23", text: "Simply provide the details from the job description along with your relevant experience, and Copilot will guide you in optimising your CV accordingly." },
                    { start: "01:24", end: "01:29", text: "For example, you can ask: 'Review my draft CV and cover letter for a marketing manager role and suggest improvements'." },
                    { start: "01:30", end: "01:35", text: "Copilot can provide feedback or help enhance them to align with the job." },
                    { start: "01:36", end: "01:41", text: "Copilot can also guide you through online job boards like LinkedIn." },
                    { start: "01:42", end: "01:47", text: "You can request: 'Provide guidance on how I can find instructional design roles on LinkedIn.'" },
                    { start: "01:48", end: "01:53", text: "Recruiters are a vital part of the job market." },
                    { start: "01:54", end: "01:59", text: "To communicate effectively with them, you can ask: 'Help me prepare a short, impactful introduction highlighting my skills and experience.'" },
                    { start: "02:00", end: "02:05", text: "Copilot can ensure your qualifications and experience are presented in the best light." },
                    { start: "02:06", end: "02:11", text: "Preparing for interviews can be nerve-wracking. Copilot acts as a mock interview trainer." },
                    { start: "02:12", end: "02:17", text: "As an example, you can practice by asking something like 'I have a 6th grade math teacher interview next week. Can we conduct a mock interview for practice?'" },
                    { start: "02:18", end: "02:23", text: "Copilot will offer tips on answering common questions and provides feedback on your responses, such as helping you eliminate filler words like 'um' and 'like' from your answer." },
                    { start: "02:24", end: "02:29", text: "If you are considering a career change, Copilot can suggest new paths based on your interests, strengths and passions." },
                    { start: "02:30", end: "02:35", text: "'Copilot, I am contemplating a career change. Given my customer service experience and interest in technology, suggest suitable career paths.'" },
                    { start: "02:36", end: "02:41", text: "Or maybe you decided you want to be a graphic designer but unsure what skills you need to make that a reality." },
                    { start: "02:42", end: "02:47", text: "To research this desired career path, you can ask Copilot: 'What are the skills needed for an entry level graphic design position?'" },
                    { start: "02:48", end: "02:53", text: "Copilot can transform your job search." },
                    { start: "02:54", end: "02:59", text: "From crafting a strategy to preparing for interviews, Copilot is there every step of the way." },
                    { start: "03:00", end: "03:05", text: "It’s not just about finding a job, it is about finding the right job for you." }
                ]
             },
            { title: "Skill Development with Copilot", filePath: "videos/5_36_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Microsoft Copilot is your dedicated partner in enhancing your skills and advancing your career." },
                    { start: "00:06", end: "00:11", text: "Whether you are a beginner programmer or a seasoned baker, Copilot is equipped to support your growth." },
                    { start: "00:12", end: "00:17", text: "To kickstart your skill enhancement with Copilot, you might begin by asking Copilot to create a skill development plan for the skill you want to develop." },
                    { start: "00:18", end: "00:23", text: "For example: 'Create a comprehensive skill development plan that includes both theoretical learning and practical application for go-to-market strategies'" },
                    { start: "00:24", end: "00:29", text: "Copilot will create a step-by-step plan tailored to your career goals." },
                    { start: "00:30", end: "00:35", text: "Suppose you are eager to improve your coding abilities." },
                    { start: "00:36", end: "00:41", text: "You could say: 'Construct a daily beginner coding challenge schedule for me and recommend resources for best practices in software development.'" },
                    { start: "00:42", end: "00:47", text: "Copilot will not only schedule daily challenges to sharpen your skills but also point you towards valuable resources to keep you at the cutting edge of software development practices." },
                    { start: "00:48", end: "00:53", text: "When it comes to practical application, Copilot is like a mentor." },
                    { start: "00:54", end: "00:59", text: "If you are working on a project and need guidance, you might ask: 'Assist me in refining this code for data analysis and suggest ways to optimise its performance.'" },
                    { start: "01:00", end: "01:05", text: "Copilot will review your code, offer improvements, and teach you optimisation techniques that you can apply to future projects." },
                    { start: "01:06", end: "01:11", text: "Networking is crucial in any field." },
                    { start: "01:12", end: "01:17", text: "To effectively connect with peers, you might request: 'Compose a professional message for networking on LinkedIn with employees from wholesale food distributor companies.'" },
                    { start: "01:18", end: "01:23", text: "Copilot can craft messages that resonate with your network and advise on how to engage with relevant industry groups, opening doors to new opportunities and collaborations." },
                    { start: "01:24", end: "01:29", text: "For those moments when you are preparing for a big presentation or meeting, Copilot serves as your rehearsal partner." },
                    { start: "01:30", end: "01:35", text: "You could practice by asking: 'Analyse my presentation and give constructive feedback and provide practice questions that the audience may ask.'" },
                    { start: "01:36", end: "01:41", text: "Copilot will provide constructive feedback on your content, helping you communicate your ideas clearly and confidently and provide practice questions that could be asked after the presentation." },
                    { start: "01:42", end: "01:47", text: "If you are considering a shift in your career path, Copilot can provide new paths that align with your skills and interests." },
                    { start: "01:48", end: "01:53", text: "You might explore by asking: 'I am considering a career shift towards UX design.'" },
                    { start: "01:54", end: "01:59", text: "Based on my background in mechanical engineering and team leadership, what career options should I consider and what skills should I develop?'" },
                    { start: "02:00", end: "02:05", text: "Or perhaps you are fascinated by data science and wish to understand what it takes to break into the field." },
                    { start: "02:06", end: "02:11", text: "To investigate this career path further, you could enquire: 'What foundational skills are essential for an aspiring data scientist, and which certifications are most recognised in the industry?'" },
                    { start: "02:12", end: "02:17", text: "Or maybe you want to learn how to play the guitar or be able to run a marathon within a year." },
                    { start: "02:18", end: "02:23", text: "Copilot can help you with that too." },
                    { start: "02:24", end: "02:29", text: "With Copilot by your side, your journey towards skill mastery and career advancement is closer than you think." },
                    { start: "02:30", end: "02:35", text: "It is not just about learning new skills, it is about developing and applying them to achieve your professional and personal goals." }
                ]
             },
            { title: "Image Analysis and Reporting with Copilot", filePath: "videos/5_37_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Did you know Copilot’s capabilities go beyond answering your queries through text? It can also analyse images and documents!" },
                    { start: "00:06", end: "00:11", text: "Copilot uses advanced AI algorithms to interpret the content of an image." },
                    { start: "00:12", end: "00:17", text: "It can recognise various elements in an image, such as objects and text." },
                    { start: "00:18", end: "00:23", text: "It does this by breaking down the image into identifiable features and comparing them to a database of known elements to provide a description." },
                    { start: "00:24", end: "00:29", text: "Let’s look at how to do this." },
                    { start: "00:30", end: "00:35", text: "To upload an image for analysis, first open the Copilot interface and make sure you are signed into your account." },
                    { start: "00:36", end: "00:41", text: "Then, look for the upload button or the image icon, typically located by the text field." },
                    { start: "00:42", end: "00:47", text: "Once found, click on the button, and a dialog box will appear asking you to pick a file from your computer or phone." },
                    { start: "00:48", end: "00:53", text: "After, choose the image you wish to analyse and confirm the upload." },
                    { start: "00:54", end: "00:59", text: "Once the image is uploaded, Copilot will automatically begin the analysis process." },
                    { start: "01:00", end: "01:05", text: "Imagine you are an estate agent who wants to quickly catalogue the features of a property." },
                    { start: "01:06", end: "01:11", text: "You could upload images of the house, and Copilot could identify and list elements like hardwood floors, granite countertops, or stainless steel appliances, helping you create a detailed listing faster." },
                    { start: "01:12", end: "01:17", text: "Copilot can also help you understand data in a spreadsheet by analysing the structure and relationships between cells." },
                    { start: "01:18", end: "01:23", text: "It can perform tasks like summarising data, identifying trends or even generating insights based on the content." },
                    { start: "01:24", end: "01:29", text: "Consider a scenario where you are a sales manager looking to understand quarterly sales figures." },
                    { start: "01:30", end: "01:35", text: "By uploading the sales data spreadsheet, Copilot could provide a summary of top-performing products, highlight sales trends, and even predict future sales patterns." },
                    { start: "01:36", end: "01:41", text: "For document analysis, such as an Excel spreadsheet, the process is similar:" },
                    { start: "01:42", end: "01:47", text: "Access your Copilot interface. Then, click on the upload button or the document icon." },
                    { start: "01:48", end: "01:53", text: "Select the Excel file you need to analyse from your device." },
                    { start: "01:54", end: "01:59", text: "Confirm the upload, and Copilot will start processing the spreadsheet." },
                    { start: "02:00", end: "02:05", text: "With the Copilot app, you can snap a photo in a moment and Copilot will analyse it on the spot." },
                    { start: "02:06", end: "02:11", text: "Stumbled upon a stunning building and curious about its history? Or maybe you have spotted a rare bird on a walk." },
                    { start: "02:12", end: "02:17", text: "Snap a picture, and let Copilot enlighten you with the information you are curious about." }
                ]
             },
            { title: "Workplace Support with Copilot", filePath: "videos/5_38_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "You are at your desk, the clock is ticking away, and your to-do list appears to be growing by the minute." },
                    { start: "00:06", end: "00:11", text: "We have all been there, yes? As you search through a vast sea of data, you are on the hunt for that elusive golden nugget of information." },
                    { start: "00:12", end: "00:17", text: "Just when you think you have hit the jackpot, you face the next task of composing an email to convey this discovery, all while your inbox is flooded with an unending stream of new messages, requests and emails." },
                    { start: "00:18", end: "00:23", text: "Enter Microsoft Copilot - consider it your personal productivity AI companion." },
                    { start: "00:24", end: "00:29", text: "It is not just about locating the needle of information in a haystack, it is about magnetically drawing the entire sewing kit to you within seconds." },
                    { start: "00:30", end: "00:35", text: "Copilot is designed to help you quickly find the answers you are looking for and presents them in a concise, easy-to-understand summary using natural language." },
                    { start: "00:36", end: "00:41", text: "This means you get the information you need without the clutter, making it easier to understand and use." },
                    { start: "00:42", end: "00:47", text: "Let's look at a few scenarios where Copilot can be your workplace AI companion champ." },
                    { start: "00:48", end: "00:53", text: "Document decoding. Faced with a dense document that seems more cryptic than hieroglyphics?" },
                    { start: "00:54", end: "00:59", text: "Provide Copilot with the document and request: 'Explain this document in three sentences.'" },
                    { start: "01:00", end: "01:05", text: "Watch as it transforms a complex document into a concise summary." },
                    { start: "01:06", end: "01:11", text: "Email drafts." },
                    { start: "01:12", end: "01:17", text: "Ready to celebrate your team’s hard work? Ask Copilot to 'Write an email congratulating my team on the end of the fiscal year.'" },
                    { start: "01:18", end: "01:23", text: "Of course you can elaborate further in your prompt by adding in a few of the highlights from the year." },
                    { start: "01:24", end: "01:29", text: "Copilot will then generate a draft, which you can personalise further." },
                    { start: "01:30", end: "01:35", text: "Idea generator." },
                    { start: "01:36", end: "01:41", text: "Let's say you are a compliance officer puzzled over protocols, a prompt like: 'Suggest ways to define compliance protocol in my company’ can offer you a jumpstart on best practices." },
                    { start: "01:42", end: "01:47", text: "Business proposal." },
                    { start: "01:48", end: "01:53", text: "Need to craft a proposal for a children’s art supply company? Request Copilot to 'Draft a business proposal for a company that makes art supplies for kids.'" },
                    { start: "01:54", end: "01:59", text: "This will aid you in initiating a persuasive pitch that’s bound to make an impression." },
                    { start: "02:00", end: "02:05", text: "Product brainstorming." },
                    { start: "02:06", end: "02:11", text: "Dreaming up the next innovation in toasters? Ask: 'Suggest a list of product names for a state-of-the-art toaster that is energy-efficient and stylish' and Copilot will generate a list of potential names." },
                    { start: "02:12", end: "02:17", text: "Meeting summaries." },
                    { start: "02:18", end: "02:23", text: "Overwhelmed with notes after an intense meeting? Provide Copilot with your meeting notes and ask it to 'Summarise and organise these meeting notes', turning chaos into clarity." },
                    { start: "02:24", end: "02:29", text: "Creativity companion." },
                    { start: "02:30", end: "02:35", text: "If you’re planning a storyboard for an animated series and need design inspiration for a dragon, you can ask Copilot: 'Generate storyboard images for the dragon scene in my script.'" },
                    { start: "02:36", end: "02:41", text: "By supplying the script, Copilot can help bring your narrative to life visually." },
                    { start: "02:42", end: "02:47", text: "Perhaps you are an event planner tasked with creating a set menu for a major international event." },
                    { start: "02:48", end: "02:53", text: "You could ask Copilot to 'Develop an intricate five-course meal that represents different parts of the world.'" },
                    { start: "02:54", end: "02:59", text: "Or, if you are an educator seeking assistance with structuring a book report for students, simply request: 'Create an outline students can use for a book report.’" },
                    { start: "03:00", end: "03:05", text: "With Copilot, the possibilities are limitless." },
                    { start: "03:06", end: "03:11", text: "All it takes is a well-crafted prompt, a dash of creativity, and clear communication of your needs, allowing Copilot to help you tick items off your to-do list." }
                ]
             },
            { title: "Workplace Support with Copilot", filePath: "videos/5_39_AIfluency_en-GB.mp4" }
        ],
        quizzes: [
            {
                video_title: "What is Microsoft Copilot",
                question: "Which of these can Microsoft Copilot do?",
                options: { correct: "2 and 4", incorrect: ["1 and 3", "1 and 5", "3 and 5"] },
                explanations: {
                    correct: "Things that Microsoft Copilot can do: 2. Provides relevant information, 4. Create and edit documents, e-mails and presentations...",
                    incorrect: [
                        "Microsoft Copilot can do several things, including understanding context and correcting grammar...",
                        "Microsoft Copilot can do several things, including understanding context and suggesting improvements...",
                        "Microsoft Copilot can do several things, including making specific suggestions and correcting grammar..."
                    ]
                }
            },
            {
                video_title: "Navigating Copilot: Set Up and Account Types",
                question: "What applications can users use to access Copilot to maximise their organisation's Copilot privileges?",
                options: { correct: "Microsoft 365", incorrect: ["Microsoft Outlook", "Microsoft Teams", "Microsoft Azure"] },
                explanations: {
                    correct: "If a user has Copilot privileges from their organisation, they can use that account to access Copilot in Microsoft 365 applications.",
                    incorrect: [
                        "Microsoft Outlook is used to send and receive e-mail messages, manage calendars, store contact names and numbers, and track tasks.",
                        "Microsoft Teams is used for hybrid work collaboration to keep users and their teams informed, organised and connected in one place.",
                        "Microsoft Azure is used for computing services consisting of virtual machines, cloud services, service fabrics and functions."
                    ]
                }
            },
            {
                video_title: "Language and Accessibility Support in Copilot",
                question: "Microsoft Copilot supports a comprehensive experience in several languages, including....",
                options: { correct: "Portuguese (Brazil) and Italian", incorrect: ["Japan and Arabia", "Tagalog and Isan", "Inggris and Kintaq"] },
                explanations: {
                    correct: "Microsoft Copilot supports a comprehensive experience in several languages, namely Simplified Chinese, English, French, German, Italian, Japanese, Portuguese (Brazilian) and Spanish.",
                    incorrect: [
                        "Arabic cannot be used in Microsoft Copilot yet...",
                        "Tagalog and Isan cannot be used in Microsoft Copilot yet...",
                        "Kintaq cannot be used in Microsoft Copilot yet..."
                    ]
                }
            },
            {
                video_title: "Tips for Engaging Conversations with Copilot",
                question: "What styles can be used to achieve harmony between informative content and creative expression?",
                options: { correct: "Balanced", incorrect: ["Precision", "Creative", "Imaginative"] },
                explanations: {
                    correct: "There are three different styles that can be selected in the use of Microsoft Copilot, namely creative, precise and balanced...",
                    incorrect: [
                        "There are three different styles that can be selected in the use of Microsoft Copilot, namely creative, precise and balanced. The precision style is used to get clear and accurate information...",
                        "There are three different styles that can be selected in the use of Microsoft Copilot, namely creative, precise and balanced. The creative style helps to create ideas...",
                        "There are three different styles that can be selected in the use of Microsoft Copilot, namely creative, precise and balanced. Meanwhile, the imaginative style is not included..."
                    ]
                }
            },
            {
                video_title: "Explore GPTs and Plugins in Copilot",
                question: "What does the plugin do to Copilot?",
                options: { correct: "Assist Copilot to connect with third-party services.", incorrect: ["Assist Copilot to cut off access with third-party services.", "Assist Copilot to develop third-party service features.", "Helps Copilot to simplify third-party service features."] },
                explanations: {
                    correct: "Plugins allow Copilot to connect with third-party services...",
                    incorrect: [
                        "Plugins allow Copilot to perform a wider range of actions and retrieve information directly from third-party sources; rather than cutting off access...",
                        "Plugins allow Copilot to perform a wider range of actions and retrieve information directly from third-party sources; rather than developing features...",
                        "Plugins allow Copilot to perform a wider range of actions and retrieve information directly from third-party sources; rather than simplifying the features..."
                    ]
                }
            },
            {
                video_title: "Bring Your Ideas to Life with Copilot",
                question: "What ways should Copilot users go about achieving the idea?",
                options: { correct: "Determine advice and provide context", incorrect: ["Limiting context and limiting suggestions", "Set expectations for help and limit other users' suggestions", "Determine suggestions and develop expectations"] },
                explanations: {
                    correct: "To achieve the idea in Copilot, users need to define goals, provide context and set expectations for the assistance they want from Copilot.",
                    incorrect: [
                        "To achieve the idea in Copilot, users need to define goals, provide context and set expectations for the help they want from Copilot; rather than limiting context and limiting suggestions.",
                        "To achieve the idea in Copilot, users need to define goals, provide context, and set expectations for the help they want from Copilot; not set expectations for help and limit other users' suggestions.",
                        "To achieve the idea in Copilot, users need to define goals, provide context and set expectations for the assistance desired from Copilot, rather than specifying suggestions and developing expectations."
                    ]
                }
            },
            {
                video_title: "Time Management Assistance with Copilot",
                question: "Which is Copilot's way of managing time effectively?",
                options: { correct: "3 and 4", incorrect: ["1 and 3", "1 and 4", "2 and 3"] },
                explanations: {
                    correct: "There are several ways Copilot manages time effectively, namely optimising work and personal schedules and doing project planning...",
                    incorrect: [
                        "There are several ways Copilot manages time effectively, namely optimising work and personal schedules and doing project planning; not prioritising work and optimising work and personal schedules.",
                        "There are several ways Copilot manages time effectively, namely optimising work and personal schedules; not prioritising work, and doing project planning.",
                        "There are a number of ways Copilot effectively manages time, namely optimising work and personal schedules; not eliminating non-urgent to-do lists."
                    ]
                }
            },
            {
                video_title: "Elevate Your Job Search with Copilot",
                question: "What can Copilot do to help users expand their professional network?",
                options: { correct: "Create a networking e-mail and send it to contacts, then suggest a free CV template from Microsoft Create to attach to the user's e-mail.", incorrect: ["Guide users to find jobs with the role of several job search websites such as LinkedIn and Indeed.", "Provide feedback or help improve the user's documents to suit the job they are applying for.", "Provide advice on answering common questions and provide feedback on user answers."] },
                explanations: {
                    correct: "To assist users in expanding professional networks, users can create commands to Copilot and Copilot creates networking e-mails and sends them to contacts...",
                    incorrect: [
                        "Copilot can guide users to find jobs with the role of multiple job search websites such as LinkedIn and Indeed...",
                        "For the need to review draft CVs and cover letters, Copilot can provide feedback or help fine-tune the user's documents...",
                        "To assist users in practising for interviews, by providing advice on answering common questions and providing feedback on user answers."
                    ]
                }
            },
            {
                video_title: "Skill Development with Copilot",
                question: "The prompt ‘Help me improve this Python script for data analysis and provide suggestions on how to optimise its performance.’ can be used for....",
                options: { correct: "work on the project and if the user needs help", incorrect: ["connect effectively with networks in any field", "assist users in preparing for presentations or large meetings", "assist users in providing new pathways that match their skills and interests"] },
                explanations: {
                    correct: "To work on the project and if the user needs help, then the prompt that can be given for Copilot is: 'Help me improve this Python script for data analysis and give me advice on how to optimise its performance.'",
                    incorrect: [
                        "To effectively connect with networks in any field, the prompt that can be given to Copilot is: 'Create a professional message for networking on LinkedIn...'",
                        "To assist the user in preparing for a presentation or large meeting, the prompt that can be given to Copilot is: 'Analyse my presentation, then provide constructive feedback...'",
                        "To help users find a new path that aligns with their skills and interests, the prompt that can be given to Copilot is: 'I am considering a career shift towards UX design...'"
                    ]
                }
            },
            {
                video_title: "Image Analysis and Reporting with Copilot",
                question: "What can Copilot do to help users understand data in spreadsheets?",
                options: { correct: "Analyse the structure and relationships between cells.", incorrect: ["Provide a summary of the product being analysed in the spreadsheet.", "Identify and list the elements in the spreadsheet.", "Outline the structure and relationships between cells."] },
                explanations: {
                    correct: "Copilot can help users to understand the data in the spreadsheet by analysing the structure and relationship between cells.",
                    incorrect: [
                        "Copilot uploads a spreadsheet of sales data to help users to provide a summary of the products being analysed in the spreadsheet.",
                        "Copilot identifies and lists elements in spreadsheets by quickly creating property features.",
                        "Copilot can help users to understand the data in the spreadsheet by analysing the structure and relationship between cells; instead of sketching the structure and relationship between cells."
                    ]
                }
            },
            {
                video_title: "Workplace Support with Copilot",
                question: "Copilot can help users at work as a superior AI companion. For that, the prompt ‘Create a storyboard for the dragon scene in my script.’ is used to run the scenario....",
                options: { correct: "Copilot becomes a companion for creativity", incorrect: ["Copilot becomes a product discussion tool", "Copilot generates ideas", "Copilot draws up a business proposal"] },
                explanations: {
                    correct: "Copilot can assist users at work as a superior AI companion. For that, the prompt 'Create a storyboard for the dragon scene in my script.' was used to run the scenario of Copilot being a creativity companion.",
                    incorrect: [
                        "Copilot can assist users at work as a superior AI companion. To that end, the prompt 'Suggest a list of product names for a cutting-edge toaster...' was used...",
                        "Copilot can assist users at work as a superior AI companion. For that, the prompt 'Give me advice on how to establish security protocols in my company.' was used...",
                        "Copilot can assist users at work as a superior AI companion. For that, the prompt 'Make a business proposal for a company that makes children's art supplies.' was used..."
                    ]
                }
            }
        ]
    },
    {
        id: 5,
        name: "Course 6: AI and Accessibility",
        videos: [
            { title: "Empowering Everyone: AI and Accessibility", filePath: "videos/6_40_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Envision a world where technology serves as a bridge to endless opportunities." },
                    { start: "00:06", end: "00:11", text: "A world where every individual, no matter their abilities, can harness the power of technology to learn, work and connect with others." },
                    { start: "00:12", end: "00:17", text: "This vision is becoming a reality, thanks to recent advancements in AI." },
                    { start: "00:18", end: "00:23", text: "Through the principles of universal design, AI is actively redefining our digital landscape, making it more inclusive and empowering for everyone." },
                    { start: "00:24", end: "00:29", text: "How is it doing this? AI is reducing the floor and raising the ceiling of what we can achieve with computers." },
                    { start: "00:30", end: "00:35", text: "It is creating new user interfaces and platforms that are more intuitive and adaptable, making technology more accessible." },
                    { start: "00:36", end: "00:41", text: "Let’s look at a few examples." },
                    { start: "00:42", end: "00:47", text: "The Hexis-Antara project in India is enhancing braille literacy." },
                    { start: "00:48", end: "00:53", text: "It involves a device which converts content into braille on demand, making educational content more accessible to learners who are blind or have low vision." },
                    { start: "00:54", end: "00:59", text: "Mentra is a neurodiversity employment network dedicated to improving employment opportunities for neurodivergent individuals." },
                    { start: "01:00", end: "01:05", text: "It uses AI to match individual’s unique strengths with rewarding careers, contributing to more diverse and productive work environments." },
                    { start: "01:06", end: "01:11", text: "The DAISY Consortium is developing an AI app to convert books for use on various devices, typically in the hands of people with disabilities, including basic phones, braille displays, and solar-powered audio players." },
                    { start: "01:12", end: "01:17", text: "This will also make books more accessible, especially in low-resourced parts of the world." },
                    { start: "01:18", end: "01:23", text: "The Northwest Evaluation Association is making maths assessments more accessible for students with vision disabilities." },
                    { start: "01:24", end: "01:29", text: "This project aims to address unmet accommodation needs that can exclude students from higher-level maths and STEM careers." },
                    { start: "01:30", end: "01:35", text: "The Rijksmuseum, in partnership with the blind and low vision community, is making art more accessible through detailed text descriptions all powered by Azure AI Computer Vision and Azure OpenAI." },
                    { start: "01:36", end: "01:41", text: "The project uses Azure AI computer vision to analyse artwork and generate descriptions." },
                    { start: "01:42", end: "01:47", text: "These descriptions are then processed by Azure OpenAI which uses advanced language models to generate human-like text that can be read aloud or translated into braille." },
                    { start: "01:48", end: "01:53", text: "By focusing on universally inclusive designs and leveraging the power of AI, a more equitable world is being created where technology serves as a bridge, rather than a barrier, for individuals with disabilities." },
                    { start: "01:54", end: "01:59", text: "Accessibility is not just a feature—it is a fundamental human right, and generative AI is playing a pivotal role in making this right universally attainable." }
                ]
             },
            { title: "Impact of AI in Job Roles", filePath: "videos/6_41_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "As AI evolves, it is not just changing how we do things, it is also creating entirely new roles and processes that did not exist before." },
                    { start: "00:06", end: "00:11", text: "What does this mean for us?" },
                    { start: "00:12", end: "00:17", text: "It means we need to be agile learners, ready to adapt." },
                    { start: "00:18", end: "00:23", text: "Whether it is upskilling to master new techniques or gaining new skill sets to adapt to the new landscape." },
                    { start: "00:24", end: "00:29", text: "This is already happening! AI is making waves in finance, healthcare, manufacturing and beyond." },
                    { start: "00:30", end: "00:35", text: "In finance, AI is assisting with fraud detection, risk management and improving client experiences." },
                    { start: "00:36", end: "00:41", text: "Take Microsoft's Copilot for Finance, for instance." },
                    { start: "00:42", end: "00:47", text: "It assists in automating tasks and uncovering insights within Microsoft 365, bridging the gap with systems like Dynamics 365 and SAP." },
                    { start: "00:48", end: "00:53", text: "This not only saves time but also allows finance teams to focus on strategic work that drives growth." },
                    { start: "00:54", end: "00:59", text: "Switching gears to healthcare, AI steps in as a trusted companion." },
                    { start: "01:00", end: "01:05", text: "It is streamlining systems, managing costs and supercharging patient services." },
                    { start: "01:06", end: "01:11", text: "For example, AI is assisting in diagnostics, making medical tests more precise, especially for those who need it most." },
                    { start: "01:12", end: "01:17", text: "It is even detecting conditions like depression through speech patterns." },
                    { start: "01:18", end: "01:23", text: "In the energy sector, AI is a force driving us towards a greener future." },
                    { start: "01:24", end: "01:29", text: "Wind farms equipped with AI sensors can predict wind patterns and adjust the turbine angles to capture maximum wind energy, increasing efficiency but also extending the life span of the turbines." },
                    { start: "01:30", end: "01:35", text: "And in manufacturing, AI systems can analyse data from machinery to predict when a part might fail." },
                    { start: "01:36", end: "01:41", text: "This allows for maintenance to be scheduled before a breakdown, minimising downtime and saving costs." },
                    { start: "01:42", end: "01:47", text: "AI can also help forecast product demand, helping keep the right amount of stock on hand." },
                    { start: "01:48", end: "01:53", text: "This reduces storage costs and ensures products are available when customers need them." },
                    { start: "01:54", end: "01:59", text: "AI can also aid in predicting when drills or other machinery might malfunction." },
                    { start: "02:00", end: "02:05", text: "This allows for repairs or part replacements to happen before a mishap disrupts operations that could lead to environmental or human harm." },
                    { start: "02:06", end: "02:11", text: "Now, imagine walking into a store where everything is personalised for you." },
                    { start: "02:12", end: "02:17", text: "That is what AI is doing in retail." },
                    { start: "02:18", end: "02:23", text: "It is transforming the shopping experience by personalising the shopper’s journey and enhancing the experiences of the sales associates." },
                    { start: "02:24", end: "02:29", text: "In the public sector, AI is the bridge between governments and citizens, tackling societal challenges with initiatives like Microsoft’s AI for Good." },
                    { start: "02:30", end: "02:35", text: "By promoting the responsible use of AI in government, we can enhance citizen services, support public sector workers with new tools and improve connections." },
                    { start: "02:36", end: "02:41", text: "When it comes to the agricultural sector, AI is a farmer’s trusted companion." },
                    { start: "02:42", end: "02:47", text: "Project FarmVibes is a prime example of an initiative that is turning data into insights, from soil sensors to satellites helping farmers optimise their farming practices." },
                    { start: "02:48", end: "02:53", text: "As these examples show, AI is not just reshaping sectors, it is enhancing the very fabric of our jobs in a way that empowers us more." }
                ]
             },
            { title: "AI as an Ally for Humanitarian Action", filePath: "videos/6_42_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "In a world increasingly defined by rapid change and complex challenges, the need for effective humanitarian action is more critical than ever." },
                    { start: "00:06", end: "00:11", text: "At the forefront of this pursuit is artificial intelligence, offering innovative solutions to aid those in need." },
                    { start: "00:12", end: "00:17", text: "Annually, natural disasters impact the lives of over 350 million individuals." },
                    { start: "00:18", end: "00:23", text: "The growing frequency and intensity of these events strain our capacity to respond with the necessary speed and appropriateness." },
                    { start: "00:24", end: "00:29", text: "However, AI has the potential to change this process by forecasting disasters before they strike, transforming our approach from reactive to proactive." },
                    { start: "00:30", end: "00:35", text: "This proactive approach is made possible by leveraging machine learning and high-resolution satellite imagery." },
                    { start: "00:36", end: "00:41", text: "For example, Microsoft’s AI for Good Lab, in collaboration with the Netherlands Red Cross, has successfully developed a convolutional neural network model that harnesses satellite imagery to enhance disaster relief efforts." },
                    { start: "00:42", end: "00:47", text: "The destruction wrought by natural disasters often leaves homes in ruins, disproportionately affecting those with the least means to recover." },
                    { start: "00:48", end: "00:53", text: "In response, AI is being harnessed to assess the vulnerability of individual homes and communities to natural disasters, focusing on construction as a key determinant of risk." },
                    { start: "00:54", end: "00:59", text: "By leveraging this data and recognising the unique impacts of various natural disasters on housing, AI is enhancing the predictive capabilities of organisations like SEEDS." },
                    { start: "01:00", end: "01:05", text: "In collaboration with communities affected by disasters, SEEDS focuses on nurturing long-term resilience." },
                    { start: "01:06", end: "01:11", text: "Together with Microsoft and Gramener, SEEDS has created an AI model that sifts through extensive data to pinpoint local risk factors." },
                    { start: "01:12", end: "01:17", text: "This united effort is streamlining disaster management strategies, easing the burdens on those most vulnerable." },
                    { start: "01:18", end: "01:23", text: "Another critical humanitarian concern involves the displacement of individuals." },
                    { start: "01:24", end: "01:29", text: "With millions worldwide facing displacement, it is crucial to optimise the distribution of resources." },
                    { start: "01:30", end: "01:35", text: "AI plays a critical role in ensuring the efficient delivery of resources and services to refugees, ensuring assistance reaches the most vulnerable among us." },
                    { start: "01:36", end: "01:41", text: "For example, in a collaboration with the Norwegian Refugee Council, NetHope and University College Dublin, Microsoft has developed an AI-powered chatbot designed to connect displaced youth with free, high-quality educational resources." },
                    { start: "01:42", end: "01:47", text: "As we look to the future, the call to action is clear." },
                    { start: "01:48", end: "01:53", text: "With the power of AI in our hands, we have better tools to address the world’s most pressing problems, and with these tools we can work together for a better tomorrow." }
                ]
             },
            { title: "Inclusive AI with Microsoft Copilot", filePath: "videos/6_43_AIfluency_en-GB.mp4",
                transcript: [
                    { start: "00:00", end: "00:05", text: "Microsoft Copilot is changing the way we approach everyday tasks, making them more accessible to everyone." },
                    { start: "00:06", end: "00:11", text: "By reducing the time and effort required for various activities, Copilot empowers individuals – including those with disabilities – to invest more time in their passions and interests." },
                    { start: "00:12", end: "00:17", text: "How does Microsoft Copilot assist with this?" },
                    { start: "00:18", end: "00:23", text: "Examples include reducing barriers, providing writing assistance and summarising information in seconds." },
                    { start: "00:24", end: "00:29", text: "Let’s look at a few examples: Reducing barriers." },
                    { start: "00:30", end: "00:35", text: "For individuals with physical disabilities, the act of typing can present significant obstacles." },
                    { start: "00:36", end: "00:41", text: "Microsoft Copilot is designed to alleviate these challenges." },
                    { start: "00:42", end: "00:47", text: "With its ability to generate comprehensive text from a brief description, Copilot drastically minimises the need for extensive typing." },
                    { start: "00:48", end: "00:53", text: "Individuals can also leverage voice commands to interact with and receive information from Copilot, further enhancing its accessibility." },
                    { start: "00:54", end: "00:59", text: "Through the microphone and voice access built in Copilot, someone could say a prompt like: 'Provide a draft email to a client asking them for the latest timeline on the redesign project. Let them know the first milestone must be completed by 4 April.'" },
                    { start: "01:00", end: "01:05", text: "Writing assistance." },
                    { start: "01:06", end: "01:11", text: "Copilot excels in providing writing assistance, offering complete sentence suggestions that aid in drafting emails and other forms of communication." },
                    { start: "01:12", end: "01:17", text: "This feature is invaluable for individuals with dyslexia or other learning disabilities, as it makes written communication more approachable and less daunting." },
                    { start: "01:18", end: "01:23", text: "For example, someone might type: 'Compose a draft for a product marketing job cover letter.'" },
                    { start: "01:24", end: "01:29", text: "Please maintain a professional yet conversational tone, highlighting my educational background and work experience." },
                    { start: "01:30", end: "01:35", text: "Web navigation." },
                    { start: "01:36", end: "01:41", text: "Navigating the web is made simpler with Copilot’s ability to provide descriptions and summaries of online content." },
                    { start: "01:42", end: "01:47", text: "This is particularly beneficial for individuals who are blind or have low vision, as it grants them access to information that was previously difficult to obtain." },
                    { start: "01:48", end: "01:53", text: "A user might request: 'Summarise the most recent advancements in AI development over the past month.'" },
                    { start: "01:54", end: "01:59", text: "To fully leverage Copilot’s potential, the best approach is to start using it and share your feedback to Copilot." },
                    { start: "02:00", end: "02:05", text: "This practice not only enhances your experience but also contributes to narrowing the disability divide." },
                    { start: "02:06", end: "02:11", text: "Copilot is not just a tool, it is a step towards an inclusive future where technology serves as a bridge to a world of possibilities." }
                ]
             }
        ],
        quizzes: [
            {
                video_title: "Empowering Everyone: AI and Accessibility",
                question: "What is an association working with the blind and low vision community that strives to make artworks more accessible through detailed text descriptions, and is fully supported by Azure AI Computer Vision and Azure OpenAI?",
                options: { correct: "Rijksmuseum", incorrect: ["Northwest Evaluation Association", "DAISY Consortium", "AI for Earth"] },
                explanations: {
                    correct: "Rijksmuseum is an association that works closely with the blind and low vision community...",
                    incorrect: [
                        "Northwest Evaluation Association is an association that is working to make math assessment more accessible...",
                        "DAISY Consortium is an association that is developing AI applications that convert books...",
                        "AI for Earth is an initiative from Microsoft that works with various organisations..."
                    ]
                }
            },
            {
                video_title: "Impact of AI in Job Roles",
                question: "The benefits of promoting responsible use of AI in government are indicated by the number....",
                options: { correct: "1, 2, and 3", incorrect: ["1 and 2", "1 and 3", "2 and 3"] },
                explanations: {
                    correct: "Improving services for citizens and supporting civil servants with new tools are benefits of promoting the responsible use of AI in government...",
                    incorrect: [
                        "Improving services for citizens and enhancing connections are benefits of promoting the responsible use of AI in government...",
                        "Supporting civil servants with new tools and improving connections are benefits of promoting the responsible use of AI in government...",
                        "Supporting civil servants with new tools and improving connections are benefits of promoting the responsible use of AI in government..."
                    ]
                }
            },
            {
                video_title: "AI as an Ally for Humanitarian Action",
                question: "What organisations are working with Microsoft and Gramener to create AI models that sift through large amounts of data to find local risk factors?",
                options: { correct: "SEEDS", incorrect: ["NetHope", "Northwest Evaluation Association", "Rijksmuseum"] },
                explanations: {
                    correct: "Working with disaster-affected communities, SEEDS (Sustainable Environment and Ecological Development Society) is a non-profit organisation focused on maintaining long-term resilience...",
                    incorrect: [
                        "NetHope is one of Microsoft's collaborations with the Norwegian Refugee Council and University College Dublin...",
                        "Northwest Evaluation Association is an association that is working to make math assessment more accessible...",
                        "Rijksmuseum is an association that works closely with the blind and low vision community..."
                    ]
                }
            },
            {
                video_title: "Inclusive AI with Microsoft Copilot",
                question: "Besides navigating the web to summarise information quickly, what are other examples of Copilot's empowerment of individuals including people with disabilities?",
                options: { correct: "Reducing the barrier factor and helps in writing.", incorrect: ["Limiting the barrier factor and streamlining the writing style.", "Developing a summary of information and assist in writing.", "Developing a summary of the information and limit the barrier factors."] },
                explanations: {
                    correct: "Copilot empowers individuals including people with disabilities to spend more time in developing their passions and interests...",
                    incorrect: [
                        "Copilot empowers individuals including people with disabilities to spend more time in developing their passions and interests...",
                        "Copilot empowers individuals including people with disabilities to spend more time in developing their passions and interests...",
                        "Copilot empowers individuals including people with disabilities to spend more time in developing their passions and interests..."
                    ]
                }
            }
        ]
    }
];

// Function to shuffle options
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create WebVTT content from transcript
function createWebVTT(transcript, videoId) {
    let vtt = "WEBVTT\n\n";
    transcript.forEach((entry, index) => {
        vtt += `${index + 1}\n`;
        vtt += `${entry.start}.000 --> ${entry.end}.000\n`;
        vtt += `${entry.text}\n\n`;
    });
    const blob = new Blob([vtt], { type: 'text/vtt' });
    return URL.createObjectURL(blob);
}

// Function to display content for a course
function displayCourseContent(courseId) {
    const course = courses.find(c => c.id === courseId);
    const contentDiv = document.getElementById(`content${courseId}`);
    contentDiv.innerHTML = '';

    course.videos.forEach((video, index) => {
        const pairDiv = document.createElement('div');
        pairDiv.className = 'video-quiz-pair';

        // Video
        const videoTitle = document.createElement('h3');
        videoTitle.textContent = video.title;
        const videoElement = document.createElement('video');
        videoElement.id = `video-${courseId}-${index}`;
        videoElement.src = video.filePath;
        videoElement.controls = true;
        pairDiv.appendChild(videoTitle);
        pairDiv.appendChild(videoElement);

        // Transcript as captions only
        if (video.transcript) {
            const track = document.createElement('track');
            track.kind = 'captions';
            track.label = 'English';
            track.srclang = 'en';
            track.src = createWebVTT(video.transcript, `${courseId}-${index}`);
            track.default = true; // Captions are on by default
            videoElement.appendChild(track);
        }

        // Quiz (if exists)
        const quiz = course.quizzes.find(q => q.video_title === video.title);
        if (quiz) {
            const quizDiv = document.createElement('div');
            quizDiv.className = 'quiz';
            const quizTitle = document.createElement('h3');
            quizTitle.textContent = `Quiz: ${video.title}`;
            const quizForm = document.createElement('form');
            const options = shuffle([quiz.options.correct, ...quiz.options.incorrect]);
            options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `quiz-${courseId}-${index}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(` ${option}`));
                quizForm.appendChild(label);
                quizForm.appendChild(document.createElement('br'));
            });
            const submitButton = document.createElement('button');
            submitButton.type = 'button';
            submitButton.textContent = 'Submit';
            submitButton.className = 'btn btn-secondary mt-2';
            const resultDiv = document.createElement('div');
            resultDiv.className = 'quiz-result';
            quizForm.appendChild(submitButton);
            quizDiv.appendChild(quizTitle);
            quizDiv.appendChild(quizForm);
            quizDiv.appendChild(resultDiv);
            pairDiv.appendChild(quizDiv);

            submitButton.addEventListener('click', () => {
                const selected = quizForm.querySelector('input:checked');
                if (selected) {
                    const isCorrect = selected.value === quiz.options.correct;
                    resultDiv.textContent = isCorrect
                        ? `Correct! ${quiz.explanations.correct}`
                        : `Incorrect. ${quiz.explanations.incorrect[selected.value] || 'Try again!'}`;
                    resultDiv.style.color = isCorrect ? 'green' : 'red';
                } else {
                    resultDiv.textContent = 'Please select an option.';
                    resultDiv.style.color = 'orange';
                }
            });
        }

        contentDiv.appendChild(pairDiv);
    });
}

// Navigation handling
document.querySelectorAll('.dropdown-item[data-course]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const courseId = parseInt(link.getAttribute('data-course'));
        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
        document.getElementById(`course${courseId}`).classList.remove('hidden');
        displayCourseContent(courseId);
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');
        if (sectionId.startsWith('course')) {
            const courseId = parseInt(sectionId.replace('course', ''));
            displayCourseContent(courseId);
        }
    });
});

document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', () => {
        const nextCourse = parseInt(button.getAttribute('data-next'));
        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
        document.getElementById(`course${nextCourse}`).classList.remove('hidden');
        displayCourseContent(nextCourse);
    });
});

// Initial display
document.getElementById('home').classList.remove('hidden');