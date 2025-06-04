import { useLocation, useNavigate } from "react-router-dom";
import AnimatedButton2 from "../general-components/animated-button2";
import BlogSidebar from "./artcile-poster";
import MobileBlogSidebar from "./article-poster-mobile";

export default function BlogPost() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const navigate = useNavigate();
  return (
    <div className=" bg-white pt-28 lg:pt-32 xl:pt-40 pb-8 md:pb-20">
      {/* Main Content */}
      <main className="w-[90%] 2xl:max-w-9xl mx-auto">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#65A30D] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 01
          </div>
          <div className="lg:col-span-11">
            <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-xl md:text-2xl">
              <span className="block lg:hidden">/ 01</span>

              <span>/</span>
              <span>Articles</span>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-5xl font-semibold text-[#003262] mb-6 leading-tight max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto py-4 md:py-6">
              {params.get("title") ||
                "How to Build an Enterprise Game Platform for Millions of Players(1/3)"}
            </h1>
          </div>
        </div>

        <div className="">
          <img
            src="/png/blog.png"
            alt="3D isometric gaming platform with controllers and neon lighting"
            className="w-full h-[400px] rounded-[20px] md:h-auto object-cover"
          />
        </div>

        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#65A30D] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
          </div>
          <div className="lg:col-span-11 mt-8 md:mt-10">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="prose w-full lg:w-[85%] text-sm md:text-xl">
                <p className="text-[#0060BA] leading-relaxed font-semibold mb-6">
                  If you're wondering what knowledge is used to support millions
                  of concurrent users with multiplayer games, you're in the
                  right place. This session is the first part of a three-part
                  series where we'll explore the technical challenges,
                  architectural patterns, and frameworks, and go different
                  routing models to support such complexity.
                </p>

                <p className="text-[#0060BA] font-semibold leading-relaxed mb-6">
                  We want to show you how to deploy to scale thousands and up to
                  millions of players simultaneously. We'll cover the
                  infrastructure, the technology stack, and the primary goal of
                  achieving supporting millions of concurrent users.
                </p>

                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  Motivation
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The main motivation for the series of articles is to help
                  other engineers teach and learn about actor-model programming,
                  and to quickly meet incredible performance utilizing this
                  technology.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  There aren't enough articles on this topic in the current
                  content landscape, especially ones that discuss Microsoft
                  Orleans, which has emerged as the framework of choice for
                  implementing an actor programming model, which is a second
                  motivator that prompted me to share our experience.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Two years ago,{" "}
                  <a
                    href="https://www.linkedin.com/in/johnkattenhorn"
                    className="text-[#0060BA] underline"
                  >
                     John Kattenhorn
                  </a>{" "}
                  , CTO from our sister company {" "}
                  <a
                    href="https://www.applicita.com/"
                    className="text-[#0060BA] underline"
                  >
                    Applicita LTD
                  </a>{" "}
                   contacted me and asked if we could help a team of engineers
                  working on an exciting project. I began analyzing various
                  parameters such as code, architecture, and used technologies
                  to become familiar with the project. I quickly realized that
                  this project was different in terms of domain aspects, and it
                  was a difference in comparison that my team and I have been
                  recently working on, like projects where the primary goal was
                  to solve complex business problems in various domains where
                  they are typically labeled as enterprise software. This
                  project was about a simple mobile game called Roshambo, also
                  known as Rock, Paper, Scissors.
                </p>

                {/* Heading 2 */}
                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  How Rock Paper Scissors works?
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I believe most of you discovered this game as kids, but for
                  some of you who are not so familiar with the rules of the
                  game, let me explain it in the following few sentences.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Rock Paper Scissors (also known as Rochambeau, roshambo, or
                  ro-sham-bo) is a two-person hand game in which each player
                  forms one of three shapes with an outstretched hand at the
                  same time. These are the shapes "rock" (closed fist), "paper"
                  (flat hand), and "scissors" (a fist with the index finger and
                  middle finger extended, forming a V). It is a simultaneous,
                  zero-sum game with only two outcomes: a draw or a win for one
                  player and a loss for the other. A player who chooses rock
                  will beat another who chooses scissors but will lose to one
                  who chooses paper; a play of paper will lose to a play of
                  scissors. If both players select the same shape, the game is
                  considered tied and is usually replayed to break the tie
                </p>

                <img src="/png/blog2.png" alt="" />

                {/* Heading 3 */}
                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  Early days
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Because we had a few weeks to do our research, we began
                  focusing on specific issues in terms of gameplay very quickly.
                  To respond to questions as soon as possible, such as:
                </p>

                <ul className="list-disc pl-6">
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What should the domain look like?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    Due to the fact that we initially identified a scalability
                    issue - we applied a microservice architecture and began
                    asking questions about the bounding context and
                    responsibilities of each service?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    How can we conduct large-scale gameplay testing?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What is a cost-effective alternative to costly HTTP
                    requests? We knew Websockets were a good choice, but we
                    weren't certain Azure SignalR was a good fit for such a
                    large scale.
                  </li>
                </ul>
                <p>
                  Throughout the analysis, we created numerous process flow
                  diagrams to demonstrate that we comprehend the entire process
                  from beginning to end.
                </p>
                <img src="/png/blog3.png" alt="" />

                {/* Heading 4 */}
                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  Early days
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Because we had a few weeks to do our research, we began
                  focusing on specific issues in terms of gameplay very quickly.
                  To respond to questions as soon as possible, such as:
                </p>

                <ul className="list-disc pl-6">
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What should the domain look like?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    Due to the fact that we initially identified a scalability
                    issue - we applied a microservice architecture and began
                    asking questions about the bounding context and
                    responsibilities of each service?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    How can we conduct large-scale gameplay testing?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What is a cost-effective alternative to costly HTTP
                    requests? We knew Websockets were a good choice, but we
                    weren't certain Azure SignalR was a good fit for such a
                    large scale.
                  </li>
                </ul>
                <p>
                  Throughout the analysis, we created numerous process flow
                  diagrams to demonstrate that we comprehend the entire process
                  from beginning to end.
                </p>
                <div className="justify-between hidden md:flex ">
                  <AnimatedButton2
                    buttonText="All Articles"
                    orderIcon="order-1"
                    orderText="order-2"
                    handleClick={() => navigate("/articles-list")}
                  />

                  <AnimatedButton2
                    buttonText="Next Article"
                    orderIcon="order-2"
                    orderText="order-1"
                    handleClick={() => navigate("/article-details/02")}
                  />
                </div>
              </div>

              <div className="hidden md:block">
                <BlogSidebar />
              </div>
              <div className="md:hidden">
                <MobileBlogSidebar />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto"></div>
      </main>
    </div>
  );
}
