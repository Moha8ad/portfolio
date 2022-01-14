const QUOTES_DATA =  [
                            {
                                   quote:  "People don't realize how much they are in the grip of ideas. We live among ideas much more than we live in nature.",
                                   author:  "Saul Bellow", 
                                   quoteId: 0, authorId: 0
                            },
                            {
                                   quote:  "Life isn’t about getting and having, it’s about giving and being.",
                                   author:  "Kevin Kruse", 
                                   quoteId: 1, authorId: 1 
                            },
                            {
                                   quote:  "Whatever the mind of man can conceive and believe, it can achieve.",
                                   author: "Napoleon Hill", 
                                   quoteId: 2, authorId: 2 
                            },
                            {       
                                   quote: "Strive not to be a success, but rather to be of value.",
                                   author: "Albert Einstein", 
                                   quoteId: 3, authorId: 3 
                            },
                            {
                                   quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
                                   author: "Robert Frost", 
                                   quoteId: 4, authorId: 4 
                            },
                            {
                                   quote: "I attribute my success to this:  I never gave or took any excuse.",
                                   author: "Florence Nightingale", 
                                   quoteId: 5, authorId: 5 
                            },
                            {
                                   quote: "You miss 100% of the shots you don’t take.",
                                   author: "Wayne Gretzky", 
                                   quoteId: 6, authorId: 6 
                            },
                            {
                                   quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
                                   author: "Michael Jordan", 
                                   quoteId: 7, authorId: 7 
                            },
                            {
                                   quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
                                   author: "Amelia Earhart", 
                                   quoteId: 8, authorId: 8 
                            },
                            {
                                   quote: "Every strike brings me closer to the next home run.",
                                   author: "Babe Ruth", 
                                   quoteId: 9, authorId: 9 
                            },
                            {
                                   quote: "Definiteness of purpose is the starting point of all achievement.",
                                   author: "W. Clement Stone", 
                                   quoteId: 10, authorId: 10 
                            },
                            {
                                   quote: "We must balance conspicuous consumption with conscious capitalism.",
                                   author: "Kevin Kruse", 
                                   quoteId: 11, authorId: 1 
                            },
                            {
                                   quote: "Life is what happens to you while you’re busy making other plans.",
                                   author: "John Lennon", 
                                   quoteId: 12, authorId: 12 
                            },
                            {
                                   quote: "We become what we think about.",
                                   author: "Earl Nightingale", 
                                   quoteId: 13, authorId: 13 
                            },
                            {
                                   quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
                                   author: "Mark Twain", 
                                   quoteId: 14, authorId: 14 
                            },
                            {
                                   quote: "Life is 150% what happens to me and 90% of how I react to it.",
                                   author: "Charles Swindoll", 
                                   quoteId: 15, authorId: 15 
                            },
                            {
                                   quote: "The most common way people give up their power is by thinking they don’t have any.",
                                   author: "Alice Walker", 
                                   quoteId: 16, authorId: 16 
                            },
                            {
                                   quote: "The mind is everything. What you think you become.",
                                   author: "Buddha", 
                                   quoteId: 17, authorId: 17 
                            },
                            {
                                   quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
                                   author: "Chinese Proverb", 
                                   quoteId: 18, authorId: 18 
                            },
                            {
                                   quote: "An unexamined life is not worth living.",
                                   author: "Socrates", 
                                   quoteId: 19, authorId: 19 
                            },
                            {
                                   quote: "Eighty percent of success is showing up.",
                                   author: "Woody Allen", 
                                   quoteId: 20, authorId: 20 
                            },
                            {
                                   quote: "Your time is limited, so don’t waste it living someone else’s life.",
                                   author: "Steve Jobs", 
                                   quoteId: 21, authorId: 21 
                            },
                            {
                                   quote: "Winning isn’t everything, but wanting to win is.",
                                   author: "Vince Lombardi", 
                                   quoteId: 22, authorId: 22 
                            },
                            {
                                   quote: "I am not a product of my circumstances. I am a product of my decisions.",
                                   author: "Stephen Covey", 
                                   quoteId: 23, authorId: 23
                            },
                            {
                                   quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
                                   author: "Pablo Picasso", 
                                   quoteId: 24, authorId: 24
                            },
                            {
                                   quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
                                   author: "Christopher Columbus", 
                                   quoteId: 25, authorId: 25 
                            },
                            {
                                   quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                                   author: "Maya Angelou", 
                                   quoteId: 26, authorId: 26 
                            },
                            {
                                   quote: "Either you run the day, or the day runs you.",
                                   author: "Jim Rohn", 
                                   quoteId: 27, authorId: 27 
                            },
                            {
                                   quote: "Whether you think you can or you think you can’t, you’re right.",
                                   author: "Henry Ford", 
                                   quoteId: 28, authorId: 28 
                            },
                            {
                                   quote: "The two most important days in your life are the day you are born and the day you find out why.",
                                   author: "Mark Twain", 
                                   quoteId: 29, authorId: 14 
                            },
                            {
                                   quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
                                   author: "Johann Wolfgang von Goethe", 
                                   quoteId: 30, authorId: 30 
                            },
                            {
                                   quote: "The best revenge is massive success.",
                                   author: "Frank Sinatra", 
                                   quoteId: 31, authorId: 31 
                            },
                            {
                                   quote: "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
                                   author: "Zig Ziglar", 
                                   quoteId: 32, authorId: 32 
                            },
                            {
                                   quote: "Life shrinks or expands in proportion to one’s courage.",
                                   author: "Anais Nin", 
                                   quoteId: 33, authorId: 33 
                            },
                            {
                                   quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
                                   author: "Vincent Van Gogh", 
                                   quoteId: 34, authorId: 34 
                            },
                            {
                                   quote: "There is only one way to avoid criticism:  do nothing, say nothing, and be nothing.",
                                   author: "Aristotle", 
                                   quoteId: 35, authorId: 35 
                            },
                            {
                                   quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
                                   author: "Jesus", 
                                   quoteId: 36, authorId: 36 
                            },
                            {
                                   quote: "The only person you are destined to become is the person you decide to be.",
                                   author: "Ralph Waldo Emerson", 
                                   quoteId: 37, authorId: 37 
                            },
                            {
                                   quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
                                   author: "Henry David Thoreau", 
                                   quoteId: 38, authorId: 38 
                            },
                            {
                                   quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
                                   author: "Erma Bombeck", 
                                   quoteId: 39, authorId: 39
                            },
                            {
                                   quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
                                   author: "Booker T. Washington", 
                                   quoteId: 40, authorId: 40 
                            },
                            {
                                   quote: "Certain things catch your eye, but pursue only those that capture the heart.",
                                   author: " Ancient Indian Proverb", 
                                   quoteId: 41, authorId: 41
                            },
                            {
                                   quote: "Believe you can and you’re halfway there.",
                                   author: "Theodore Roosevelt", 
                                   quoteId: 42, authorId: 42 
                            },
                            {
                                   quote: "Everything you’ve ever wanted is on the other side of fear.",
                                   author: "George Addair", 
                                   quoteId: 43, authorId: 43 
                            },
                            {
                                   quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
                                   author: "Plato", 
                                   quoteId: 44, authorId: 44 
                            },
                            {
                                   quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
                                   author: "Maimonides", 
                                   quoteId: 45, authorId: 45 
                            },
                            {
                                   quote: "Start where you are. Use what you have.  Do what you can.",
                                   author: "Arthur Ashe", 
                                   quoteId: 46, authorId: 46 
                            },
                            {
                                   quote: "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
                                   author: "John Lennon", 
                                   quoteId: 47, authorId: 12 
                            },
                            {
                                   quote: "Fall seven times and stand up eight.",
                                   author: "Japanese Proverb", 
                                   quoteId: 48, authorId: 48 
                            },
                            {
                                   quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
                                   author: "Helen Keller", 
                                   quoteId: 49, authorId: 49 
                            },
                            {
                                   quote: "Everything has beauty, but not everyone can see.",
                                   author: "Confucius", 
                                   quoteId: 50, authorId: 50
                            },
                            {
                                   quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
                                   author: "Anne Frank", 
                                   quoteId: 51, authorId: 51 
                            },
                            {
                                   quote: "When I let go of what I am, I become what I might be.",
                                   author: "Lao Tzu", 
                                   quoteId: 52, authorId: 52 
                            },
                            {
                                   quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
                                   author: "Maya Angelou", 
                                   quoteId: 53, authorId: 26
                            },
                            {
                                   quote: "Happiness is not something readymade.  It comes from your own actions.",
                                   author: "Dalai Lama", 
                                   quoteId: 54, authorId: 54
                            },
                            {
                                   quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
                                   author: "Sheryl Sandberg", 
                                   quoteId: 55, authorId: 55
                            },
                            {
                                   quote: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
                                   author: "Aristotle", 
                                   quoteId: 56, authorId: 35
                            },
                            {
                                   quote: "If the wind will not serve, take to the oars.",
                                   author: "Latin Proverb", 
                                   quoteId: 57, authorId: 57
                            },
                            {
                                   quote: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
                                   author: "Unknown", 
                                   quoteId: 58, authorId: 0 
                            },
                            {
                                   quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
                                   author: "Marie Curie", 
                                   quoteId: 59, authorId: 59
                            },
                            {
                                   quote: "Too many of us are not living our dreams because we are living our fears.",
                                   author: "Les Brown", 
                                   quoteId: 60, authorId: 60
                            },
                            {
                                   quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
                                   author: "Joshua J. Marine", 
                                   quoteId: 61, authorId: 61 
                            },
                            {
                                   quote: "If you want to lift yourself up, lift up someone else.",
                                   author: "Booker T. Washington", 
                                   quoteId: 62, authorId: 40
                            },
                            {
                                   quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
                                   author: "Leonardo da Vinci", 
                                   quoteId: 63, authorId: 63 
                            },
                            {
                                   quote: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
                                   author: "Jamie Paolinetti", 
                                   quoteId: 64, authorId: 64
                            },
                            {
                                   quote: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
                                   author: "Erica Jong", 
                                   quoteId: 65, authorId: 65
                            },
                            {
                                   quote: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
                                   author: "Bob Dylan", 
                                   quoteId: 66, authorId: 66
                            },
                            {
                                   quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
                                   author: "Benjamin Franklin", 
                                   quoteId: 67, authorId: 67
                            },
                            {
                                   quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
                                   author: "Bill Cosby", 
                                   quoteId: 68, authorId: 68
                            },
                            {
                                   quote: "A person who never made a mistake never tried anything new.",
                                   author: " Albert Einstein", 
                                   quoteId: 69, authorId: 3
                            },
                            {
                                   quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
                                   author: "Chinese Proverb", 
                                   quoteId: 70, authorId: 18
                            },
                            {
                                   quote: "There are no traffic jams along the extra mile.",
                                   author: "Roger Staubach", 
                                   quoteId: 71, authorId: 71 
                            },
                            {
                                   quote: "It is never too late to be what you might have been.",
                                   author: "George Eliot", 
                                   quoteId: 72, authorId: 72 
                            },
                            {
                                   quote: "You become what you believe.",
                                   author: "Oprah Winfrey", 
                                   quoteId: 73, authorId: 73
                            },
                            {
                                   quote: "I would rather die of passion than of boredom.",
                                   author: "Vincent van Gogh", 
                                   quoteId: 74, authorId: 34
                            },
                            {
                                   quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
                                   author: "Unknown", 
                                   quoteId: 75, authorId: 0
                            },
                            {
                                   quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
                                   author: "Ann Landers", 
                                   quoteId: 76, authorId: 76
                            },
                            {
                                   quote: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
                                   author: "Abigail Van Buren", 
                                   quoteId: 77, authorId: 77
                            },
                            {
                                   quote: "Build your own dreams, or someone else will hire you to build theirs.",
                                   author: "Farrah Gray", 
                                   quoteId: 78, authorId: 78
                            },
                            {
                                   quote: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
                                   author: "Jesse Owens", 
                                   quoteId: 79, authorId: 79
                            },
                            {
                                   quote: "Education costs money.  But then so does ignorance.",
                                   author: "Sir Claus Moser", 
                                   quoteId: 80, authorId: 80
                            },
                            {
                                   quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
                                   author: "Rosa Parks", 
                                   quoteId: 81, authorId: 81 
                            },
                            {
                                   quote: "It does not matter how slowly you go as long as you do not stop.",
                                   author: "Confucius", 
                                   quoteId: 82, authorId: 50 
                            },
                            {
                                   quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
                                   author: "Oprah Winfrey", 
                                   quoteId: 83, authorId: 73
                            },
                            {
                                   quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
                                   author: "Dalai Lama", 
                                   quoteId: 84, authorId: 54
                            },
                            {
                                   quote: "You can’t use up creativity.  The more you use, the more you have.",
                                   author: "Maya Angelou", 
                                   quoteId: 85, authorId: 26
                            },
                            {
                                   quote: "Dream big and dare to fail.",
                                   author: "Norman Vaughan", 
                                   quoteId: 86, authorId: 86
                            },
                            {
                                   quote: "Our lives begin to end the day we become silent about things that matter.",
                                   author: "Martin Luther King Jr.", 
                                   quoteId: 87, authorId: 87
                            },
                            {
                                   quote: "Do what you can, where you are, with what you have.",
                                   author: "Teddy Roosevelt", 
                                   quoteId: 88, authorId: 42
                            },
                            {
                                   quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
                                   author: "Tony Robbins", 
                                   quoteId: 89, authorId: 89
                            },
                            {
                                   quote: "Dreaming, after all, is a form of planning.",
                                   author: "Gloria Steinem", 
                                   quoteId: 90, authorId: 90
                            },
                            {
                                   quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
                                   author: "Mae Jemison", 
                                   quoteId: 91, authorId: 91
                            },
                            {
                                   quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
                                   author: "Beverly Sills", 
                                   quoteId: 92, authorId: 92
                            },
                            {
                                   quote: "Remember no one can make you feel inferior without your consent.",
                                   author: "Eleanor Roosevelt", 
                                   quoteId: 93, authorId: 93
                            },
                            {
                                   quote: "Life is what we make it, always has been, always will be.",
                                   author: "Grandma Moses", 
                                   quoteId: 94, authorId: 94
                            },
                            {
                                   quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
                                   author: "Ayn Rand", 
                                   quoteId: 95, authorId: 95
                            },
                            {
                                   quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
                                   author: "Henry Ford", 
                                   quoteId: 96, authorId: 28
                            },
                            {
                                   quote: "It’s not the years in your life that count. It’s the life in your years.",
                                   author: "Abraham Lincoln", 
                                   quoteId: 97, authorId: 97
                            },
                            {
                                   quote: "Change your thoughts and you change your world.",
                                   author: "Norman Vincent Peale", 
                                   quoteId: 98, authorId: 34
                            },
                            {
                                   quote: "Either write something worth reading or do something worth writing.",
                                   author: "Benjamin Franklin", 
                                   quoteId: 99, authorId: 67
                            },
                            {
                                   quote: "Nothing is impossible, the word itself says, “I’m possible!”",
                                   author: "Audrey Hepburn", 
                                   quoteId: 100, authorId: 100
                            },
                            {
                                   quote: "The only way to do great work is to love what you do.",
                                   author: "Steve Jobs", 
                                   quoteId: 101, authorId: 21 
                            },
                            {
                                   quote: "If you can dream it, you can achieve it.",
                                   author: "Zig Ziglar",
                                   quoteId: 102, authorId: 32
                            }
                     ]
                     
export default QUOTES_DATA;