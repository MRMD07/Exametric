import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";


export default function Nmtc(){
    return(
        <>
            <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.default",
                color: "text.primary",
            }}
            >
                    {/* Navbar */}
                <Navbar/>

                    {/* Main Content */}
                <SubjectPageLayout 
                    title="National Mathematics Talent Contest (NMTC)"
                    guide="
<p><strong>NMTC GUIDE IS WRITTEN BY AHMED RAZA</strong></p>
<p><em>Note: The guide has been reviewed by the Deputy Leader of Switzerland, Tanish Patel, and the Deputy Leader of Algeria, Maya Chouikrat.</em></p>
<p>Also note that this page exists to guide you from having no experience to being able to get selected for IMO. However, to aim for a medal, you will need to go beyond this guide and work out what works best for you.</p>

<h2>The Stages of the Contest</h2>

<h3>Stage 1</h3>
<p>You have an aggregate percentage of 60% or more in the core subjects (in the latest examination) for which the contest operates. This stage automatically completes if the registration process is successful.</p>

<h3>Stage 2</h3>
<p>Once you've registered for Mathematics (and receive a confirmation on their site), you participate in the screening test. The screening test is generally held around March for the competition next year. For example, the screening test for IMO 2024 was held in March 2023. You can tackle this test to a decent extent via the OL & AL syllabus of Mathematics. However, I would recommend extending your studies beyond these syllabi as they are not an accurate representation of the Olympiad Mathematics.</p>

<h3>Stage 3</h3>
<p>Around 1000-1500 students participate in each subject's screening test, and around 50 of them get shortlisted for each subject's contest's third stage: the camp. Due to the recent financial condition of the country and the covid situation, there has been a varying amount of one-week 'training' camp, both online and physical, allowing you to 'feel' the rigor and essence of Olympiad Mathematics. Each camp generally consists of an exam at the end of the week which is used in shortlisting the number of contestants remaining. This test is as long as the actual Olympiad test. This process repeats until only 6 participants are remaining.</p>

<p><strong>Two things to look out for:</strong></p>
<ul>
    <li>You have to be less than 20 years of age on 30th June of the competition. (Therefore, for example, to participate in IMO 2025, you have to be less than 20 years old on 30th June 2025)</li>
    <li>Current students of 9th, 10th, 11th (Matric/O-Level) or FSC-1/AS can register for it, but A2 students can also register if they are eligible according to (i) and take a gap year.</li>
</ul>
<p><a href='#'>Click here to access their website</a></p>

<hr>

<h2>The Guide</h2>
<p>Before reading any further, you should know that Olympiad Mathematics is generally broken down into the following subjects:</p>
<ul>
    <li>Geometry</li>
    <li>Algebra</li>
    <li>Number Theory</li>
    <li>Combinatorics</li>
</ul>

<p>Please note that proof writing is a very important skill in Olympiad Mathematics and as such it is important to be able to write precise and accurate proofs. All of the questions in the IMO will require you to either prove a statement given in the problem, or give an answer to a question in the problem by proving your answer completely.</p>
<p>Also note that any books recommended in this article are books I have come across on my own and there certainly may be better books out there. For a bigger list of recommendations of books, you can check that out at the AoPS (Art of Problem Solving) website. The website is the biggest online forum for Mathematics and you will find a lot of help from the website when you are preparing for the IMO journey.</p>

<p>O Level Mathematics, along with basic knowledge of Olympiad Mathematics is sufficient for the screening test. To get introduced to the field of Olympiad Mathematics, I recommend you to refer to the AoPS books, preferably in this order:</p>

<p><strong>Introductory Books:</strong> To start with, use these introductory subject-specific books. It is highly likely that you will be familiar with most of the content in these books. However, there might be topics new to you, or topics you are not fluent in. Getting fluency in such content is extremely important before going any further so that while doing an advanced problem, it is not the introductory content that causes you to get stuck.</p>
<ul>
    <li>Art of Problem Solving - Introduction to Algebra</li>
    <li>Art of Problem Solving - Introduction to Counting and Probability</li>
    <li>Art of Problem Solving - Introduction to Geometry</li>
    <li>Art of Problem Solving - Introduction to Number Theory</li>
</ul>

<p>Once the basics are cleared, the following introductory books can be followed. Some of the content in them might be overlapping, that’s up to the reader to differentiate. These books cover all the four subjects of Olympiad Mathematics.</p>
<ul>
    <li>Art of Problem Solving - Volume 1: the Basics</li>
    <li>Art of Problem Solving - Volume 2: and Beyond</li>
</ul>

<p>Once you’re done with the introductory matter, the next step is to increase the difficulty. The following books will help you strengthen yourself in the respective subjects as they will teach you about the subjects in much more detail and introduce many new techniques:</p>
<ul>
    <li>Art of Problem Solving - Intermediate Algebra</li>
    <li>Art of Problem Solving - Intermediate Counting and Probability</li>
</ul>

<p>Once you are done with these books, you will have a solid base in each of the 4 subjects and you can move on to specialize in each of the subjects separately. However, it is important to note that this pathway may not be the best path out there for strengthening your bases, nor is a specific pathway best for all individuals. Depending on your existing level of expertise, a different route may work out better for you. In the end, you will often find yourself using multiple books at a time, picking up specific content from each book. If you are not an absolute beginner, you may also refer to these books:</p>
<ul>
    <li>The Art and Craft of Problem Solving</li>
    <li>Mathematical Olympiad Series: A First Step to Mathematical Olympiad Problems</li>
    <li>A Second Step to Mathematical Olympiad Problems</li>
    <li>Other Books in the Series (Recommended purely on the basis of the other two books and they might or might not be good)</li>
</ul>

<p>These books will cover a lot of basic ideas in Olympiad Mathematics; however, they might contain topics not relevant to the screening tests. It is important to understand that the preparation for the screening test and the actual Olympiad Mathematics may differ vastly because the screening test is more focused on the school side of Mathematics to be able to shortlist students more appropriately because of the fact that Olympiad Mathematics is foreign to most people.</p>

<p>If you develop a solid grip on Olympiad Mathematics (by this I mean, you are even able to do some IMO questions), I would advise you to pay a visit to <strong>Olympiad Training for Individual Study (OTIS)</strong>. It is an online program for training for Olympiad Mathematics, and financial aid is available if it is an issue for you financially.</p>

<p>It is also important to note that, if you seriously want to get into the IMO team, or better yet, an IMO medal, you need to start dedicating multiple hours a day daily till the actual competition. This does not mean that you need to make Olympiad Mathematics your personality. It goes without saying that your best chances are if you work in moderation.</p>

<p>Before reading the specifics of each subject, it might be beneficial to be aware of what to expect when studying them. The following unofficial syllabus will be able to help with that: <a href='#'>Unofficial Syllabus in math olympiads</a>.</p>

<h3>Geometry</h3>
<p>For Geometry, the following book would be enough for pretty much anything you will need to know for Olympiad Mathematics. The first four chapters cover everything that might be tested on the initial screening test and any subsequent selection test, though not sufficient enough for IMO:</p>
<ul>
    <li>Euclidean Geometry in Mathematical Olympiads</li>
</ul>
<p>However, do note that the above book might be challenging initially. Though being challenged is pretty normal and helpful in Olympiad Mathematics, you might want to be sure this is not because your base in geometry is flawed. Geometry is hackable in the sense that it will probably never require knowledge foreign to you if you’re well versed with the knowledge in the above book (Unless it's a Problem 3 or 6). As such, this is also the subject that is focused on the most in Pakistan and the most tested upon. However, Geometry, like every other subject, requires a lot of practice, and it would be a good advice to follow this book by completing all the challenges and by following along the book with a notebook and pencil in hand to take notes. Moreover, it is commonly misinterpreted in Pakistan that it being hackable makes it easier than other subjects and hence students spend more time studying it. That is not the case, and is subjective on an individual basis.</p>

<h3>Number Theory</h3>
<p>There is a high chance that if you’re reading this article, you plan to do something involving Mathematics in University. In that case, you’re likely to study Number Theory a lot. As such, when you are studying Number Theory, you are not just studying for the Olympiad but something you’re going to likely be involved with in the future. For this reason, you can often find University lectures from universities on the Internet which may turn out to be extremely helpful. One way to find these lectures is by typing “pdf:{some number theory topic} {university name, you can leave it blank}” so for example “pdf:gcd and lcm MIT” or “pdf:Quadratic Residue”.</p>
<p>Some books I have been recommended a lot by others are:</p>
<ul>
    <li>Modern Olympiad Number Theory by Aditya Khurmi</li>
    <li>NUMBER THEORY Structures, Examples, and Problems</li>
    <li>An Introduction to Diophantine Equations</li>
    <li>104 Number Theory Problems</li>
</ul>

<h3>Combinatorics</h3>
<p>Similar to Number Theory, Combinatorics is a field you will encounter a lot in your university life. Even more than Number Theory! If you choose to pursue something related to Computer Science you’re likely going to learn the same things in University because Combinatorics is used a lot in Algorithms and other places. Combinatorics is a subject you need to study extensively, arguably even more than for IMO, for IOI, the CS equivalent for IMO. Therefore just like Number Theory, University lectures online are going to come to help a lot when you are preparing for IMO.</p>
<p>Some of the recommended resources are:</p>
<ul>
    <li>Olympiad Combinatorics</li>
    <li>A Path to Combinatorics for Undergraduates</li>
    <li>102 Combinatorial Problems (Just for Problems relating to Combinatorics)</li>
    <li>And a lot of University Lectures notes</li>
</ul>
<p>Combinatorics, in my personal opinion, is the subject that requires the most brain activity and even with very little subjective knowledge, you can crack difficult problems if you think long enough. In IMO 2022, I cracked Problem 1, which was arguably easy, after 4 hours of playing with pens, pencils and erasers and shuffling them according to the given prompt.</p>

<h3>Algebra</h3>
<p>Algebra in Olympiad Mathematics is very loosely divided into 3 different chapters:</p>
<ul>
    <li>Functional Equations (FE)</li>
    <li>Inequalities and Equations</li>
    <li>Polynomials</li>
</ul>
<p>The best FE resource I’ve come across is the little fermat playlist. This playlist covers most of the techniques used in FE and explains each question clearly. Another good resource for Algebra overall are the OTIS Excerpts. Inequalities and Functional Equation is covered extensively in these notes. You may use the handouts “Basic of Olympiad Inequalities” and “Olympiad Inequalities” for Inequalities. For Inequalities, you may also refer to the book “Advanced Olympiad Inequalities”. For Polynomials, you can read the book “117 Polynomial Problems”.</p>

<h3>General</h3>
<p>This section contains websites, handouts, and books which are not focused towards a specific subject but focus on multiple subjects or Olympiad Mathematics as a whole.</p>
<ul>
    <li>Yufei Zhao Handouts</li>
    <li>Evan Chen Handouts</li>
    <li>IMOmath.com</li>
    <li>OTIS Excerpt</li>
    <li>Problem-Solving Strategies</li>
    <li>AoPS Forum</li>
    <li>The IMO Compendium</li>
</ul>
<p>And other resources, many of which you can find listed here. Remember that the resources can only help so much, and ultimately it’s your effort in the end which will lead you to a medal in IMO. Don’t cheat yourself in regards to preparation and give it its desired time.</p>

<hr>

<h2>The Contents of the Screening Test</h2>
<p>The generic layout of the Mathematics section is similar to the other subjects however there is some pattern to it.</p>
<p>The MCQ Section is there mostly to test your academic knowledge. It is of 50 marks. Having a strong grasp over Additional Mathematics (or A Level Mathematics) would allow you to correct answer most of the MCQs. However a few questions might include topic foreign to Additional Mathematics (and A Level Mathematics). This may include famous sequences and functions specific to this field. Besides this, elementary knowledge regarding topics exclusive to Olympiad Mathematics might be tested. The initial cutdown is based on the number of MCQs correct and the Subjective part is assessed of the students who manage to clear the initial shortlisting. The initial shortlist is around 100-200 students.</p>
<p>The Subject Section is more focused on topics specific to Olympiad Mathematics. It is of 25 marks with no fixed number of questions. According to the trend, the most common tested subject is Geometry followed by Algebra (mostly involving manipulation of numbers). The initial chapters in Euclidean Geometry for Mathematical Olympiads will be enough for the Geometry questions.</p>
<p>At this point I am assuming that you have at least covered AoPS Introductory Books and have revised OL & AS Mathematics (and OL Additional Mathematics). The reason for AS Mathematics being a necessity is two-fold: it provides you a head start for your A Levels whilst polishing your fundamentals. I would emphasize covering OL & AS before starting AoPS. If you haven't completed any of these, continue in a linear fashion: OL, AS, AoPS.</p>
<p>Regardless of the fact that matric education is not fully polished, 9th, 10th, 11th FSC Mathematics books for preparation of screening test should also suffice. The content in these books is better than the O & A Level syllabus and extends to the AoPS books mentioned above. During the screening test, focus mostly on the MCQs but do give at least 90 minutes to the descriptive question (or less depending on the difficulty of the questions).</p>
<p>If you have been shortlisted in the top 50 category, congratulations! If not, then do not worry, it is just the beginning of a journey and overburdening yourself with negative thoughts will only hamper your progress.</p>
<p>If you have cleared the screening test, it is time to move on to the books. I would recommend starting a subject and then rotating it every week or two. Eventually, there may be a subject specific camp, in which case you should just study that subject until the camp concludes, because the shortlisting will depend on the expertise on that specific subject. Do not leave any subject untouched for long as you will start getting rusty and will waste precious time getting back to the expertise you were previously on. When solving any problem, remember to not look at the official solution until you complete it. If you reach a dead-end and are unable to make any progress for over half an hour, leave that question and come back to it a few days later. If even after doing that multiple times, you cannot figure out the question, look at a solution one by one, and try to solve it with just the hints. This is my advice because when you solve a question by yourself, you knew how to build up that thought process and how you found out vital points. As soon as you peaked at the solution, you will be unable to think of another solution and you will learn nearly nothing since every other question in Olympiad Mathematics is meant to be unique.</p>
<p>From this point forward, it is important to self-study 100% of the syllabus. You will be given assignments during the camp. Completing these assignments will help you develop your skills in those specific chapters and you'll get used to solving 'proper' problems in case you were still out of practice.</p>
<p>I would advise you to not rely on the camps. This is because the camps are designed keeping absolute beginners in mind, and if you are aiming for a place in the IMO team, the content there will mostly be easy for you. In a situation where you discovered about the preparation of IMO later, don’t fret and just note the topics discussed in class and spend hours on them by yourself after you are done with classes each day.</p>
<p>Eventually you will have a lot on your plate: university applications, college applications, extracurriculars, personal commitments, and so on. However, even two to three hours a day (when the camp is not taking place) would suffice. The key is to develop persistence and creative thinking. Unnecessarily overloading yourself with content won't do anything except tire you prematurely.</p>

<hr>

<h2>The Exam Format</h2>
<p>The selection tests at the end of the camp in Pakistan will mostly follow this pattern:</p>
<ul>
    <li>4.5 Hours Exam</li>
    <li>4 Problems</li>
    <li>The Problems may or may not be in order of difficulty. This will probably be informed to you beforehand.</li>
</ul>

<p>However, the format of IMO is a standard format for the more famous Mathematical Olympiads. The format is as follows:</p>
<ul>
    <li>4.5 Hours Exam each on 2 different days</li>
    <li>3 Questions on each day</li>
    <li>Problem 1, 2, 3 on Day 1</li>
    <li>Problem 4, 5, 6 on Day 2</li>
    <li>It is believed that at least one question from each subject is in the test</li>
    <li>Problem 1 and 4 are roughly similar in difficulty, 2 and 5 are roughly similar in difficulty, and 3 and 6 are roughly similar in difficulty</li>
    <li>Problem 1 and 4 are the least difficult normally, while Problem 3 and 6 are the most difficult</li>
    <li>Each question has a total of 7 marks, totaling up to 42 marks for the 6 questions</li>
    <li>The scoring of each question is done according to the official marking scheme. Each question is broken down into different steps, and each key step has its marks. A solution gets a 7 if there are no issues in it, including any loose assumptions made. For this reason, it is ideal to state any obvious assumption you make in the solution, and try to prove every claim even if it looks obvious.</li>
</ul>

<p><strong>Awards:</strong></p>
<ul>
    <li>There are 4 main awards: The Honourable Mention, Bronze Medal, Silver Medal, Gold Medal</li>
    <li>All contestants can win at most 1 of these awards</li>
    <li>The Honourable Mention is awarded if any of your solutions got full marks (7 out of 7) but you did not win any medal</li>
    <li>The Gold Medal is roughly awarded to the top 8% scoring participants</li>
    <li>The Silver Medal is roughly awarded to the next 12% top scoring participants</li>
    <li>The Bronze Medal is roughly awarded to the next 20% top scoring participants</li>
    <li>In this manner, roughly 40% of participants receive a medal</li>
    <li>The cutoff marks (minimum marks) for each medal is jointly decided by the leaders of every nation present at the IMO.</li>
</ul>

<p><strong>Secondary Awards:</strong></p>
<ul>
    <li>There are 2 secondary awards: Maryam Mirzakhani Award, Perfect Score</li>
    <li>A contestant can win a main award, and both of these at the same time. There is a limit to the number of awards.</li>
    <li>Maryam Mirzakhani is awarded to the best scoring female contestant in every region. These regions include Australasia (Oceania and Southeast Asia), Asia, Africa, Europe, America (South and North America).</li>
    <li>Perfect Score, as the name says, is the award for the contestants who score 7/7 on all 6 questions. Each year, generally less than 6 contestants around the world (half of which are from China) win this award.</li>
</ul>

<hr>

<h2>The IMO Experience</h2>
<p>If you made it to the team, CONGRATULATIONS! You have come a long way and it is time to take one final breath, look back, and be proud of yourself. The next goal will be the most intense.</p>
<p>PIEAS organizes a 3 week camp that allows you to familiarize yourself with the team and gain further experience in Olympiad Mathematics.</p>
<p>I know it seems a lot, but if you get very close to the ideal goal, be proud of yourself - you've worked extremely hard!</p>
<p>Ideally, you should be done with preparatory material prior to this camp. These three weeks (and preferably since the start of May), you should spend most of your time dedicated to Olympiad Mathematics doing numerous mock sessions (Imitating the IMO experience) and contest problems. These contests may include but are not limited to:</p>
<ul>
    <li>International Mathematical Olympiad (IMO)</li>
    <li>European Girls' Mathematical Olympiad (EGMO)</li>
    <li>Tournament of the Towns</li>
    <li>Asian Pacific Mathematics Olympiad (APMO)</li>
    <li>Balkan Mathematical Olympiad</li>
    <li>Baltic Way</li>
    <li>Pan African Mathematics Olympiads</li>
    <li>William Lowell Putnam Mathematical Competition</li>
    <li>And Other National Mathematics Olympiad and TSTs (Team Selection Tests)</li>
</ul>
<p>In the final stretch, do as many problems as possible. One possible and most likely issue you’ll face is your O/A Level. First of all, if you made it to the team, it is highly likely that your school work is not very challenging for you, and you can get an A* with significantly less preparation than others. As such, the Olympiad Mathematics should not come to a total halt during your examinations but instead keep at least 8-10 hours a week for Olympiad Mathematics. As soon as you receive the notification of you being selected, make it your mission to dedicate at least 4-5 hours a day or if studying daily is very challenging, at least 30-40 hours a week for IMO. Here’s a secret. The more you study, the more problems you do, the better you are likely to score! Surprising, right?</p>
<p>Besides just studying, spend your time in the three week camp socializing and building bonds with your team. Trust me when I tell you this is very important. This is a friend group which may last forever. And besides friendship, having a good chemistry might also positively affect your score in IMO.</p>
<p>After exiting the room after the second day of exam, leave the exam and thoughts related to it inside the room. It is very possible that you did not do as good as you had hoped for. The worst thought you can have at that moment is that you failed your country. You made your place fair and square and you have nothing left to prove to anyone. Your score should not affect you. Obviously such a scenario will hurt, and that is normal human behavior. Learning to come to terms with those feelings is important.</p>

<h3>Redoing the IMO</h3>
<p>I have gone through some previous results of the Olympiad (Team Pakistan), and realized that most of them improved their scores and even won a medal after redoing IMO. This means, if you qualify once and are unable to win anything, you can have another go at it! Of course you need to be eligible to participate which is why starting early is beneficial.</p>

<hr>

<h2>Guide to IPhO through NSTC</h2>
<p><em>Note: All the resources mentioned are linked at the end</em></p>
<p>This guide was written by Daniyal Shahzad (IPhO ‘25), and reviewed by Osman Siddique (IPhO ‘21, ‘22 Bronze & HM) & Talha Ashraf (IPhO ‘24 Bronze). It is meant to serve as a comprehensive (ideally exhaustive) guide on the entire International Physics Olympiad (IPhO) process in Pakistan. If you have any questions or want to suggest improvements, you can email me at: daniyal.shahzad2006@gmail.com</p>

<h3>Stages of the Selection Process</h3>
<h4>Stage 0:</h4>
<p>You must have an aggregate percentage of 60% or higher in your latest examination before the screening test. For O/A Levels, the IBCC equivalent percentage is used. Moreover, you must be under 20 years of age on June 30th of the competition year. Current students of Matric/O-Level and FSC-1/AS can register. FSC-2 & A2 students who intend to take a gap year can also register as long as they meet the age requirements.</p>

<h4>Stage 1: Screening Test (March-July)</h4>
<p>If you qualify, you can register for the screening test and select Physics as your subject. The screening test is usually held between March and July each year and screens potential candidates for the following year’s competition.</p>

<h4>Stage 2: 1st Training Camp (August-September)</h4>
<p>The top 50 scorers in the screening test are invited to a week-long training and screening camp at PIEAS (Pakistan Institute of Engineering & Applied Sciences) University. This camp usually takes place at the end of September. At the end, there is a theoretical test, usually based on the content taught during the camp.</p>

<h4>Stage 3: 2nd Training Camp (January-February)</h4>
<p>The top ~15 scorers in the first training camp are invited to the second training camp at PIEAS. At the end, there is a theoretical test to select and finalize the final five for Pakistan’s IPhO team. This may be followed by an extended camp in June after CAIE/Board exams to train the final five for the IPhO in July.</p>

<h3>Preparation Guide</h3>
<p>It is a good idea to quickly review your school Physics syllabus. If you are a 9th or 10th grader (O-Level/Matric), you should go over the A-Level/FSC syllabus. The screening test consists of 20 MCQs from General Science, 50 MCQs from Physics, and usually 3 long descriptive questions. The test is worth 100 marks, with each correct MCQ answer awarding 1 mark, and 1/3 of a mark being deducted for an incorrect MCQ answer. The descriptive questions carry a total of 30 marks.</p>

<p>If you have a strong grasp of high school physics, you are in a good position to start the famous <em>Physics by Halliday, Resnick & Krane (5th ed.)</em> (HRK). This book uses calculus; however, you can learn it in parallel. If you have no exposure to calculus, a good place to start is MIT OCW’s 18.01 course. The most important portion of HRK for the screening test is Mechanics (Chapters 1 to 16). For later camps, the Electricity & Magnetism portion (Chapters 25 to 37) is important and is commonly tested.</p>

<p>By far, the best resource for IPhO preparation is Kevin Zhou’s handouts. They cover almost all the techniques required for IPhO and often go beyond it. The Mechanics, Electricity & Magnetism, and Thermodynamics handouts are the most important.</p>

<h3>Problem Solving Habits & Tips</h3>
<ul>
    <li><strong>Solve problems at the right level:</strong> The problems you solve should regularly challenge you, but also not be out of reach.</li>
    <li><strong>DO NOT look at the solution too early:</strong> Try at least a couple of different approaches and really think hard about the problem.</li>
    <li><strong>Be relentless when solving problems:</strong> Exhaust every approach you can think of.</li>
    <li><strong>Problem-solving should be a constant part of your preparation:</strong> Do not postpone it until after you’ve learned all the theory.</li>
    <li><strong>Draw labelled diagrams whenever appropriate:</strong> For mechanics problems, be sure to label the forces.</li>
    <li><strong>Consider special or limiting cases:</strong> See what happens when a particular quantity becomes extremely small or very large.</li>
    <li><strong>Check dimensions/units:</strong> Dimensional analysis is a great tool to quickly recheck your answer.</li>
</ul>

<h3>Other guides/resources</h3>
<ul>
    <li>A less detailed but great guide by Humayl Aslam (IPhO ‘21) and the IPhO ‘21 team: guide to IPhO through NPTC</li>
    <li>A short guide for the initial screening test by Osman Siddique (IPhO ‘21): NPTC Screening Test Short Prep Guide</li>
    <li>Kevin Zhou (USA Team Coach) has written a great guide for starting your IPhO prep: <a href='<https://knzhou.github.io/writing/Advice.pdf>'>Advice PDF</a></li>
</ul>

<h3>Resource Bank</h3>
<ul>
    <li><a href='<https://drive.google.com/drive/u/1/folders/10h6RwSopzdbV2UviovnaimqmlgZ9SJNc>'>Drive with useful resources</a></li>
    <li><a href='<https://drive.google.com/drive/u/1/folders/1X96nTrTsou9V-QP1kPlAPYLWHO0GBGgE>'>NSTC Past exams</a></li>
    <li><a href='<https://knzhou.github.io/>'>Kevin Zhou Handouts</a></li>
    <li><a href='<https://www.ioc.ee/~kalda/ipho/>'>Kalda Handouts</a></li>
    <li><a href='<https://physoly.tech/kalda/>'>Kalda Solutions</a></li>
    <li><a href='<https://www.aapt.org/Common2022/pastexams.cfm>'>USAPhO past exams</a></li>
    <li><a href='<https://ipho.olimpicos.net/>'>IPhO past exams</a></li>
    <li><a href='<https://eupho.olimpicos.net/>'>EuPhO past exams</a></li>
    <li><a href='<https://apho.olimpicos.net/>'>APhO past exams</a></li>
    <li><a href='<https://ocw.mit.edu/>'>MIT OCW</a></li>
    <li><a href='<https://www.youtube.com/watch?v=KOKnWaLiL8w&list=PLFE3074A4CB751B2B>'>YouTube Playlist 1</a></li>
    <li><a href='<https://www.youtube.com/watch?v=NK-BxowMIfg&list=PLD07B2225BB40E582>'>YouTube Playlist 2</a></li>
</ul>

<hr>

<h2>NBTC & IBO: The Ultimate Guide</h2>
<h3>What are NBTC and IBO?</h3>
<ul>
    <li><strong>NBTC (National Biology Talent Contest):</strong> An annual competition organized by the STEM Careers Programme to scout Pakistan's brightest biology students.</li>
    <li><strong>IBO (International Biology Olympiad):</strong> The world’s largest biology competition for high school students. Each year, participating countries send four winners from their national olympiads (NBTC in Pakistan) to compete globally.</li>
</ul>

<h3>The Selection Journey</h3>
<ul>
    <li><strong>Screening Test:</strong> The first step is passing the nationwide screening test.</li>
    <li><strong>Training Camps:</strong> The top 50 students are invited to the National Institute for Biotechnology and Genetic Engineering (NIBGE) in Faisalabad for training and selection camps.</li>
    <li><strong>Final Selection:</strong> Based on performance in these camps (which include theory and practical rounds), the final 4 students are chosen to represent Pakistan at the IBO.</li>
</ul>

<table border='1' cellpadding='8' cellspacing='0'>
    <thead>
        <tr>
            <th>Section</th>
            <th>Content</th>
            <th>Questions</th>
            <th>Marks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Part I</td>
            <td>General Science (Bio/CS, Chem, Maths, Phys)</td>
            <td>20 MCQs</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Part II</td>
            <td>Principal Subject (Biology)</td>
            <td>50 MCQs</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Part III</td>
            <td>Subjective/Descriptive Portion</td>
            <td>5-6 Questions</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
<p><em>⚠️ Negative Marking: In Parts I and II, each correct answer earns 1 mark, while 1/3 mark is deducted for each incorrect MCQ.</em></p>

<h3>Preparation & Curriculum Mapping</h3>
<p>Some books: <a href='<https://drive.google.com/drive/folders/1745To0zPDw1Pb4KiBGzjIZxO0Z7UFzTk>'>Link to Drive</a></p>
<p>Good luck for the exam!</p>

<hr>

<h2>GUIDE FOR NCTC</h2>
<p>This guide is written by Abdul Rafay (Bronze Medal IChO'24, H.M IChO'23) and reviewed by the IChO 2024 and 2025 Team. It is meant to guide you through the selection process for the International Chemistry Olympiad team in Pakistan and help you achieve at least a bronze medal. As always, if you have any questions or want to suggest an improvement, please feel free to reach out to me through my email abdulrafay4585@gmail.com or LinkedIn.</p>

<h3>Stages of the Selection Process:</h3>

<h4>Stage 1 - National Science Talent Contest (June-July):</h4>
<p>The National Science Talent Contest (NSTC) is a screening test to screen potential candidates for the International Olympiads of the following year. To participate in this screening test, you must be under 20 years of age on June 30th of the competition year. You must be a student of Matric/O’level or FSC-1/AS and must not be attending university at the time of the Olympiad. FSC-2 & A2 students who intend to take a gap year can also register for NSTC as long as they meet the age requirements.</p>

<h4>Stage 2 - 1st Training Camp (September- October):</h4>
<p>Each year, around the top 50 performing students in NSTC qualify for the National Chemistry Talent Contest (NCTC) and are invited to a fully funded trip to the PIEAS, Islamabad. This training camp is usually a week long, and at the end of it, there is a theoretical test.</p>

<h4>Stage 3 - 2nd Training Camp (November- February):</h4>
<p>The second training camp is usually divided into two parts: the online camp over Zoom from November to mid-February, followed by the physical camp in Karachi at the end of February. The combined results from both online and physical phases are used to select the Top 4 students to represent Pakistan in the International Chemistry Olympiad.</p>

<h4>Stage 4: 3rd Training camp (April- July)</h4>
<p>The final 4 students are then called for a month-long physical training camp in Karachi.</p>

<h3>Preparation Guide for National Science Talent Contest:</h3>
<p>The chemistry portion of the National Science Talent Contest is based on the FSc/Inter chemistry textbooks. For students of O-level or Grade 9/10, it is advisable to go over the A-level and FSc chemistry textbooks when preparing for the competition.</p>

<h4>Exam Structure:</h4>
<p>The screening test is divided into three sections:</p>
<ul>
    <li>Section A: 20 MCQs from General Science</li>
    <li>Section B: 50 MCQs from Chemistry</li>
    <li>Section C: 3 long descriptive questions</li>
</ul>

<h4>Marking:</h4>
<p>The test is worth 100 marks, with each correct MCQ answer awarding 1 mark, and 1/3 of a mark being deducted for an incorrect MCQ answer. The descriptive questions carry a total of 30 marks.</p>

<h4>Resources</h4>
<ul>
    <li>The NSTC past papers are available here: NSTC-19 Papers</li>
    <li>US National Chemistry Olympiad (USNCO) State-round past papers*</li>
    <li>Australian National Chemistry Olympiad (AChO)*</li>
    <li><em>*Both of these are about the same difficulty level as the NSTC test</em></li>
</ul>

<h3>Preparation Guide for 1st National Chemistry Talent Contest:</h3>
<p>The main aim of the first training camp of NCTC is to screen students with a strong grasp of high school chemistry concepts for the later stages. Focus on solidifying the chemistry basics from the Federal Board Chemistry books. Since the grand test is based on the content delivered during the lecture, you can easily qualify for the second training camp by simply focusing on the classes, provided that your grasp of basic chemistry concepts is strong.</p>

<h3>Preparation Guide for 2nd National Chemistry Talent Contest (How to make the Pakistan National Team for IChO):</h3>
<p>The online phase of the second training camp will start soon after the first camp is over. Technically, Olympiad Chemistry is split into four different streams: Organic Chemistry, Physical Chemistry, Analytical Chemistry, and Inorganic Chemistry. If you are from A levels, then you will especially be challenged by organic chemistry, as it will take a significant amount of effort to get the basics right. The weekly tests of the second camp may examine stuff that is not covered in the classes to prepare students for the IChO.</p>
<p>The key to success in the second camp is CONSISTENCY. If you manage to focus on the weekly online classes for a period of three to four months, take the time out for test preparation, and do well in the tests—all while juggling your school studies and uni applications—there is a high chance you may make it to the Top 4.</p>

<h4>Additional Resources:</h4>
<ul>
    <li><a href='<https://drive.google.com/drive/folders/1sCxZnxY9KuXTyEEzchQ6v0Pl6JKsXumu>'>Past IChO exams and useful olympiad chemistry books by Ali Abdullah (IChO 2025)</a></li>
</ul>"
                    resources={[
                        { label: "Past Papers", content: "/nmtc/past-papers" },
                        { label: "Syllabus", content: "/nmtc/syllabus" },
                        { label: "Registration", content: "/nmtc/registration" },
                    ]}
                />

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}