export function PrivacyPolicy() {
  const policyItems = [
    "WHAT INFORMATION DO WE COLLECT?",
    "HOW DO WE USE YOUR INFORMATION?",
    "WILL YOUR INFORMATION BE SHARED WITH ANYONE?",
    "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    "HOW LONG DO WE KEEP YOUR INFORMATION?",
    "HOW DO WE KEEP YOUR INFORMATION SAFE?",
    "WHAT ARE YOUR PRIVACY RIGHTS?",
    "CONTROLS FOR DO-NOT-TRACK FEATURES",
    "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    "DO WE MAKE UPDATES TO THIS NOTICE?",
    "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
    "HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?",
  ];
  return (
    <main className="w-full">
      {/* Privacy Policy Content */}
      <div className="max-w-3xl lg:max-w-7xl 2xl:max-w-7xl text-sm mx-auto px-2 md:px-6 py-12 relative">
        <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2">
          <span className="xl:absolute -left-7">/ 01</span>
          <span className="mx-2">/</span>
          <span className="text-lg font-semibold">Legal page</span>
        </div>
        <div className="mb-8 flex justify-between flex-col md:flex-row items-center">
          <h1 className="text-2xl md:text-5xl font-semibold text-[#003262] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#4B5563] text-sm">
            Last updated January 01, 2021
          </p>
        </div>
        <div className="prose text-gray-700 leading-relaxed space-y-8 border-l border-[#65A30D] px-2 md:px-4">
          {/* para no 1 */}
          <div>
            <p>
              Thank you for choosing to be part of our community at Infinity
              Mesh d.o.o ("Company", "we", "us", "our"). We are committed to
              protecting your personal information and your right to privacy. If
              you have any questions or concerns about this privacy notice, or
              our practices with regards to your personal information, please
              contact us at hello@infinitymesh.com.
            </p>
            <br />
            <br />
            <p>
              When you visit our website http://www.infinitymesh.com (the
              "Website"), and more generally, use any of our services (the
              "Services", which include the Website), we appreciate that you are
              trusting us with your personal information. We take your privacy
              very seriously. In this privacy notice, we seek to explain to you
              in the clearest way possible what information we collect, how we
              use it and what rights you have in relation to it. We hope you
              take some time to read through it carefully, as it is important.
              If there are any terms in this privacy notice that you do not
              agree with, please discontinue use of our Services immediately
            </p>
            <br />
            <br />
            <p>
              This privacy notice applies to all information collected through
              our Services (which, as described above, includes our Website), as
              well as, any related services, sales, marketing or events
            </p>
            <br />
            <br />
            <p>
              Please read this privacy notice carefully as it will help you
              understand what we do with the information that we collect.
            </p>
          </div>
          {/* para no 2 */}
          <div>
            <h1 className="text-2xl font-semibold">TABLE OF CONTENTS</h1>
            <div className="max-w-3xl p-6 bg-white rounded-lg">
              <ol className="list-decimal list-inside space-y-2">
                {policyItems.map((item, index) => (
                  <li key={index} className="text-gray-800">
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* para no 3 */}
          <div className=" p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              1. WHAT INFORMATION DO WE COLLECT?
            </h1>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                Personal information you disclose to us.
              </h2>
              <p className="text-gray-600 italic mb-4">
                In Short: We collect personal information that you provide to
                us.
              </p>

              <p className="text-gray-700 mb-4">
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Website (such as by posting messages in our
                online forums or entering competitions, contents or giveaways)
                or otherwise when you contact us.
              </p>

              <p className="text-gray-700 mb-4">
                The personal information that we collect depends on the context
                of your interactions with us and the Website, the choices you
                make and the products and features you use. The personal
                information we collect may include the following: Personal
                information Provided by You. We collect including addresses;
                names; phone numbers; email addresses; and other similar
                information. All personal information that you provide to us
                must be true, complete and accurate, and you must notify us of
                any changes to such personal information.
              </p>

              <h3 className="text-md font-bold text-gray-800 mb-3">
                Information automatically collected.
              </h3>
              <p className="text-gray-600 italic mb-4">
                In Short: Some information — such as your Internet Protocol (IP)
                address and/or browser and device characteristics — is collected
                automatically when you visit our Website.
              </p>

              <p className="text-gray-700 mb-4">
                We automatically collect certain information when you visit, use
                or navigate the Website. This information does not reveal your
                specific identity (like your name or contact information) but
                may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Website and
                other technical information. This information is primarily
                needed to maintain the security and operation of the Website,
                and for our internal analytics and reporting purposes. This many
                business, we also collect information through cookies and
                similar technologies. You can find out more about this in our
                Cookie Notice:{" "}
                <a
                  href="http://www.nillitymedia.com/cookie-policy/"
                  className="text-blue-600 hover:underline"
                >
                  http://www.nillitymedia.com/cookie-policy/
                </a>
                .
              </p>

              <p className="text-gray-700 mb-2">
                The information we collect includes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Log and Usage Data.</span> Log
                  and usage data is service-related, diagnostic, usage and
                  performance information our servers automatically collect when
                  you access or use our Website and which we record in log
                  files. Depending on how you interact with us, this log data
                  may include your IP address, device information, browser type
                  and settings and information about your server. In the Website
                  (such as the discipline stamp associated with your usage,
                  pages and files viewed, searches and other actions you take
                  such as which features you use), device event information
                  (such as system activity, error reports (sometimes called
                  'brain dumps') and hardware settings).
                </li>
                <li>
                  <span className="font-semibold">Device Data.</span> We collect
                  device data such as information about your computer, phone,
                  tablet or other device you use to access the Website.
                  Depending on the device used, you will need to map include
                  information such as your IP address (or proxy server), device
                  and application identification numbers, location, browser
                  type, hardware model internet service provider and mobile
                  carrier, operating system and system configuration
                  information.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                Information collected from other sources
              </h2>
              <p className="text-gray-600 italic mb-4">
                In Short: We may collect limited data from public databases,
                marketing partners, and other outside sources.
              </p>

              <p className="text-gray-700">
                In order to enhance our ability to provide relevant marketing,
                offers and services to you and update our records, we may obtain
                information about you from other sources, such as public
                databases, joint marketing partners, affiliate programs, data
                providers, as well as from other third parties. This information
                includes mailing addresses, job titles, email addresses, phone
                numbers, intent data (or user behavior data), Internet Protocol
                (IP) addresses, social media profiles, social media URLs and
                custom profiles, for purposes of targeted advertising and event
                promotion.
              </p>
            </div>
          </div>
          {/* para no 4 */}
          <div className=" p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              2. HOW DO WE USE YOUR INFORMATION?
            </h1>

            <div className="mb-6">
              <p className="text-gray-600 italic mb-4">
                In Short: We process your information for purposes based on
                legitimate business interests, the fulfillment of our contract
                with you, compliance with our legal obligations, and/or your
                consent.
              </p>

              <p className="text-gray-700 mb-4">
                We use personal information collected via our Website for a
                variety of business purposes described below. We process your
                personal information for these purposes in reliance on our
                legitimate business interests, in order to enter into or perform
                a contract with you, with your consent, and/or for compliance
                with our legal obligations. We indicate the specific processing
                grounds we rely on next to each purpose listed below.
              </p>

              <p className="text-gray-700 mb-4 font-medium">
                We use the information we collect or receive:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">
                    To send administrative information to you.
                  </span>{" "}
                  We may use your personal information to send you product,
                  service and new feature information and/or information about
                  changes to our terms, conditions, and policies.
                </li>
                <li>
                  <span className="font-semibold">
                    To protect our Services.
                  </span>{" "}
                  We may use your information as part of our efforts to keep our
                  Website safe and secure (for example, for fraud monitoring and
                  prevention).
                </li>
                <li>
                  <span className="font-semibold">
                    To enforce our terms, conditions and policies
                  </span>{" "}
                  for business purposes, to comply with legal and regulatory
                  requirements or in connection with our contract.
                </li>
                <li>
                  <span className="font-semibold">
                    To respond to legal requests and prevent harm.
                  </span>{" "}
                  If we receive a subpoena or other legal request, we may need
                  to inspect the data we hold to determine how to respond.
                </li>
                <li>
                  <span className="font-semibold">
                    Fulfill and manage your orders.
                  </span>{" "}
                  We may use your information to fulfill and manage your orders,
                  payments, returns, and exchanges made through the Website.
                </li>
                <li>
                  <span className="font-semibold">
                    Administer prize draws and competitions.
                  </span>{" "}
                  We may use your information to administer prize draws and
                  competitions when you elect to participate in our
                  competitions.
                </li>
                <li>
                  <span className="font-semibold">
                    To deliver and facilitate delivery of services to the user.
                  </span>{" "}
                  We may use your information to provide you with the requested
                  service.
                </li>
                <li>
                  <span className="font-semibold">
                    To respond to user inquiries/offer support to users.
                  </span>{" "}
                  We may use your information to respond to your inquiries and
                  solve any potential issues you might have with the use of our
                  Services.
                </li>
                <li>
                  <span className="font-semibold">
                    To send you marketing and promotional communications.
                  </span>{" "}
                  We and/or our third-party marketing partners may use the
                  personal information you send to us for our marketing
                  purposes, if this is in accordance with your marketing
                  preferences. For example, when expressing an interest in
                  obtaining information about us or our Website, subscribing to
                  marketing or otherwise contacting us, we will collect personal
                  information from you. You can opt-out of our marketing emails
                  at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS?" section).
                </li>
                <li>
                  <span className="font-semibold">
                    Deliver targeted advertising to you.
                  </span>{" "}
                  We may use your information to develop and display
                  personalized content and advertising (and work with third
                  parties who do so) tailored to your interests and/or location
                  and to measure its effectiveness. For more information see our
                  Cookie Notice:
                  <a
                    href="http://www.infinitymesh.com/cookie-policy/"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    http://www.infinitymesh.com/cookie-policy/
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
          {/* para no 5 */}
          <div className="p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </h1>

            <div className="mb-6">
              <p className="text-gray-600 italic mb-4">
                In Short: We only share information with your consent, to comply
                with laws, to provide you with services, to protect your rights,
                or to fulfill business obligations.
              </p>

              <p className="text-gray-700 mb-4">
                We may process or share your data that we hold based on the
                following legal basis:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                <li>
                  <span className="font-semibold">Consent:</span> We may process
                  your data if you have given us specific consent to use your
                  personal information for a specific purpose.
                </li>
                <li>
                  <span className="font-semibold">Legitimate Interests:</span>{" "}
                  We may process your data when it is reasonably necessary to
                  achieve our legitimate business interests.
                </li>
                <li>
                  <span className="font-semibold">
                    Performance of a Contract:
                  </span>{" "}
                  Where we have entered into a contract with you, we may process
                  your personal information to fulfil the terms of our contract.
                </li>
                <li>
                  <span className="font-semibold">Legal Obligations:</span> We
                  may disclose your information where we are legally required to
                  do so in order to comply with applicable law, governmental
                  requests, a judicial proceeding, court order, or legal
                  process, such as in response to a court order or a subpoena
                  (including in response to public authorities to meet national
                  security or law enforcement requirements).
                </li>
                <li>
                  <span className="font-semibold">Vital Interests:</span> We may
                  disclose your information where we believe it is necessary to
                  investigate, prevent, or take action regarding potential
                  violations of our policies, suspected fraud, situations
                  involving potential threats to the safety of any person and
                  illegal activities, or as evidence in litigation in which we
                  are involved.
                </li>
              </ul>

              <p className="text-gray-700 mb-4 font-medium">
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">Business Transfers:</span> We
                  may share or transfer your information in connection with, or
                  during negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business
                  to another company.
                </li>
                <li>
                  <span className="font-semibold">Affiliates:</span> We may
                  share your information with our affiliates, in which case we
                  will require those affiliates to honor this privacy notice.
                  Affiliates include our parent company and any subsidiaries,
                  joint venture partners or other companies that we control or
                  that are under common control with us.
                </li>
                <li>
                  <span className="font-semibold">Business Partners:</span> We
                  may share your information with our business partners to offer
                  you certain products, services or promotions.
                </li>
              </ul>
            </div>
          </div>
          {/* 6,7,8 para no 3 */}
          <div className=" p-6 bg-white rounded-lg space-y-8">
            {/* Section 4: Cookies */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </h1>

              <div className="mb-6">
                <p className="text-gray-600 italic mb-4">
                  In Short: We may use cookies and other tracking technologies
                  to collect and store your information.
                </p>

                <p className="text-gray-700">
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to access or store information. Specific
                  information about how we use such technologies and how you can
                  refuse certain cookies is set out in our Cookie Notice:{" "}
                  <a
                    href="http://www.hffnltymedia.com/cookie-policy/"
                    className="text-blue-600 hover:underline"
                  >
                    http://www.hffnltymedia.com/cookie-policy/
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Section 5: Data Retention */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h1>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting or other legal requirements). No
                  purpose in this notice will require us keeping your personal
                  information for longer than 6 months.
                </p>

                <p className="text-gray-700">
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information, or if this is not possible (for example,
                  because your personal information has been stored in backup
                  archives), then we will securely store your personal
                  information and isolate it from any further processing until
                  deletion is possible.
                </p>
              </div>
            </div>

            {/* Section 6: Information Security */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                6. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </h1>

              <div className="mb-6">
                <p className="text-gray-600 italic mb-4">
                  In Short: We aim to protect your personal information through
                  a system of organizational and technical security measures.
                </p>

                <p className="text-gray-700 mb-4">
                  We have implemented appropriate technical and organizational
                  security measures designed to protect the security of any
                  personal information we process.
                </p>

                <p className="text-gray-700">
                  However, despite our safeguards and efforts to secure your
                  information, no electronic transmission over the Internet or
                  information storage technology can be guaranteed to be 100%
                  secure, so we cannot promise or guarantee that hackers,
                  cybercriminals, or other unauthorized third parties will not
                  be able to defeat our security, and improperly collect,
                  access, steal, or modify your information. Although we will do
                  our best to protect your personal information, transmission of
                  personal information to and from our Website is at your own
                  risk. You should only access the Website within a secure
                  environment.
                </p>
              </div>
            </div>
          </div>
          {/* 9, 10, 11 para no 4 */}
          <div className="p-6 bg-white rounded-lg space-y-8">
            {/* Section 7: Privacy Rights */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                7. WHAT ARE YOUR PRIVACY RIGHTS?
              </h1>

              <div className="mb-6">
                <p className="text-gray-600 italic mb-4">
                  In Short: In some regions, such as the European Economic Area
                  (EEA) and United Kingdom (UK), you have rights that allow you
                  greater access to and control over your personal information.
                  You may review, change, or terminate your account at any time.
                </p>

                <p className="text-gray-700 mb-4">
                  In some regions (like the EEA and UK), you have certain rights
                  under applicable data protection laws. These may include the
                  right (i) to request access and obtain a copy of your personal
                  information, (ii) to request rectification or erasure; (iii)
                  to restrict the processing of your personal information; and
                  (iv) if applicable, to data portability. In certain
                  circumstances, you may also have the right to object to the
                  processing of your personal information. To make such a
                  request, please use the contact details provided below. We
                  will consider and act upon any request in accordance with
                  applicable data protection laws.
                </p>

                <p className="text-gray-700 mb-4">
                  If we are relying on your consent to process your personal
                  information, you have the right to withdraw your consent at
                  any time. Please note however that this will not affect the
                  lawfulness of the processing before its withdrawal, nor will
                  it affect the processing of your personal information
                  conducted in reliance on lawful processing grounds other than
                  consent.
                </p>

                <p className="text-gray-700 mb-4">
                  If you are a resident in the EEA or UK and you believe we are
                  unlawfully processing your personal information, you also have
                  the right to complain to your local data protection
                  supervisory authority. You can find their contact details
                  here:{" "}
                  <a
                    href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                    className="text-blue-600 hover:underline"
                  >
                    http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                  </a>
                  . If you are a resident in Switzerland, the contact details
                  for the data protection authorities are available here:{" "}
                  <a
                    href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.edoeb.admin.ch/edoeb/en/home.html
                  </a>
                  .
                </p>

                <p className="text-gray-700">
                  Cookies and similar technologies: Most Web browsers are set to
                  accept cookies by default. If you prefer, you can usually
                  choose to set your browser to remove cookies and to reject
                  cookies. If you choose to remove cookies or reject cookies,
                  this could affect certain features or services of our Website.
                  To opt-out of interest-based advertising by advertisers visit{" "}
                  <a
                    href="http://www.aboutads.info/choices"
                    className="text-blue-600 hover:underline"
                  >
                    http://www.aboutads.info/choices
                  </a>
                  . For further information, please see our Cookie Notice:{" "}
                  <a
                    href="https://www.lifinitymesh.com/cookie-policy/"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.lifinitymesh.com/cookie-policy/
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Section 8: Do Not Track */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                8. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h1>

              <div className="mb-6">
                <p className="text-gray-700">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track ("DNT") feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized.
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  privacy notice.
                </p>
              </div>
            </div>
          </div>
          {/* Section 9: California Rights */}
          <div className="p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              5. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h1>

            <div className="mb-6">
              <p className="text-gray-600 italic mb-4">
                In Short: Yes, if you are a resident of California, you are
                granted specific rights regarding access to your personal
                information.
              </p>

              <p className="text-gray-700 mb-4">
                California Civil Code Section 1798.83, known as the "Shine the
                Light" law, permits our users who are California residents to
                request and obtain from us, once a year and free of charge,
                information about categories of personal information we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mb-4 mt-6">
                CCPA Privacy Categories
              </h2>

              <p className="text-gray-700 mb-4">
                The California Code of Regulations defines a "resident" as:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  Every individual who is in the State for other than a
                  temporary or transitory purpose
                </li>
                <li>
                  Every individual who is domiciled in the State who is outside
                  the State for a temporary or transitory purpose
                </li>
              </ol>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-[#84CC16] mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left border-b border-[#84CC16]">
                        Category
                      </th>
                      <th className="px-4 py-2 text-left border-b border-[#84CC16]">
                        Examples
                      </th>
                      <th className="px-4 py-2 text-left border-b border-[#84CC16]">
                        Collected
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        A. Identifiers
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Contact details, real name, postal address, telephone
                        number, email address, online identifier, IP address
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        YES
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        B. Personal Information categories
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Name, contact information, education, employment,
                        employment history, financial information
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        YES
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        C. Protected classification characteristics
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Age, gender, race, religion
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        NO
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        D. Commercial information
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Transaction history, purchase records, financial details
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        NO
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        E. Biometric information
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Fingerprints, facial recognition
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        NO
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        F. Internet activity
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Browsing history, search history, online behavior
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        YES
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        G. Geolocation data
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Device location
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        YES
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        H. Sensory data
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Audio, video, images
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        NO
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        I. Professional information
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Employment history, salary, qualifications
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        YES
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        J. Education information
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Student records, directory information
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        NO
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        K. Inferences
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16]">
                        Profiles reflecting preferences, characteristics
                      </td>
                      <td className="px-4 py-2 border-b border-[#84CC16] text-center">
                        NO
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                If you are a California resident and would like to make a
                request under the CCPA, please submit your request in writing to
                us using the contact information provided below.
              </p>

              <p className="text-gray-700">
                If you are under 18 years of age, resident in California, and
                have a registered account with our services, you have the right
                to request removal of unwanted data that you publicly post. To
                request removal, please contact us using the contact information
                below, including the email address associated with your account
                and a statement that you reside in California. We will ensure
                the data is not publicly displayed, but please be aware it may
                not be completely removed from all our systems (e.g., backups).
              </p>
            </div>
          </div>
          {/* Section 10 */}
          <div className="px-6 bg-white rounded-lg space-y-2">
            {/* Data Collection Context Section */}
            <div>
              <p className="text-gray-700 mb-4">
                We may also collect other personal information outside of these
                categories in instances where you interact with us in-person,
                online, or by phone or mail in the context of:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>
                  Facilitation in the delivery of our Services and to respond to
                  your inquiries.
                </li>
              </ul>
            </div>

            {/* Information Use and Sharing Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                How do we use and share your personal information?
              </h2>

              <p className="text-gray-700 mb-4">
                More information about our data collection and sharing practices
                can be found in this privacy notice and our Cookie Notice:{" "}
                <a
                  href="http://www.infinitymeets.com/cookie-policy/"
                  className="text-blue-600 hover:underline"
                >
                  http://www.infinitymeets.com/cookie-policy/
                </a>
                . You may contact us by email at{" "}
                <a
                  href="mailto:privacy@meet.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@meet.com
                </a>
                , or by referring to the contact details at the bottom of this
                document.
              </p>

              <p className="text-gray-700">
                If you are using an authorized agent to exercise your right to
                opt-out we may deny a request if the authorized agent does not
                submit proof that they have been validly authorized to act on
                your behalf.
              </p>
            </div>

            {/* Information Sharing Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Will your information be shared with anyone else?
              </h2>

              <p className="text-gray-700 mb-4">
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Each service provider is a for-profit entity
                that processes the information on our behalf.
              </p>

              <p className="text-gray-700 mb-4">
                We may use personal information for our own business purposes,
                such as for undertaking internal research for technological
                development and demonstration. This is not considered to be
                "selling" of your personal data.
              </p>

              <p className="text-gray-700">
                Infinity Meets has not disclosed or sold any personal
                information to third parties for a business or commercial
                purpose in the preceding 12 months. Infinity Meets will not sell
                personal information in the future belonging to website
                visitors, users and other consumers.
              </p>
            </div>

            {/* Privacy Rights Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Your rights with respect to your personal data
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Right to request deletion of the data - Request to delete
                </h3>
                <p className="text-gray-700">
                  You can ask for the deletion of your personal information. If
                  you ask us to delete your personal information, we will
                  respect your request and delete your personal information,
                  subject to certain exceptions provided by law, such as (but
                  not limited to) the exercise by another consumer of his or her
                  right to free speech, our compliance requirements resulting
                  from a legal obligation or any proceeding that may be required
                  to protect against illegal activities.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Right to be informed - Request to know
                </h3>
                <p className="text-gray-700 mb-2">
                  Depending on the circumstances, you have a right to know:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>whether we collect and use your personal information;</li>
                  <li>
                    the categories of personal information that we collect;
                  </li>
                  <li>
                    the purposes for which the collected personal information is
                    used;
                  </li>
                  <li>
                    whether we sell your personal information to third parties;
                  </li>
                  <li>
                    the categories of personal information that we sold or
                    disclosed for a business purpose;
                  </li>
                  <li>
                    the categories of third parties to whom the personal
                    information was sold or disclosed for a business purpose;
                    and
                  </li>
                  <li>
                    the business or commercial purpose for collecting or selling
                    personal information.
                  </li>
                </ul>
                <p className="text-gray-700 mt-2">
                  In accordance with applicable law, we are not obligated to
                  provide or delete consumer information that is de-identified
                  in response to a consumer request or to re-identify individual
                  data to verify a consumer request.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Right to Non-Discrimination for the Exercise of a Consumer's
                  Privacy Rights
                </h3>
                <p className="text-gray-700">
                  We will not discriminate against you if you exercise your
                  privacy rights.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg">
              {/* Verification Process Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Verification process
                </h2>

                <p className="text-gray-700 mb-4">
                  Upon receiving your request, we will need to verify your
                  identity to determine you are the same person about whom we
                  have the information in our system. These verification efforts
                  require us to ask you to provide information so that we can
                  match it with information you have previously provided us.
                </p>

                <p className="text-gray-700 mb-4">
                  For instance, depending on the type of request you submit, we
                  may ask you to provide certain information so that we can
                  match the information you provide with the information we
                  already have on file, or we may contact you through a
                  communication method (e.g., phone or email) that you have
                  previously provided to us. We may also use other verification
                  methods as the circumstances dictate.
                </p>

                <p className="text-gray-700">
                  We will only use personal information provided in your request
                  to verify your identity or authority to make the request. To
                  the extent possible, we will avoid requesting additional
                  information from you for the purposes of verification. If,
                  however, we cannot verify your identity from the information
                  already maintained by us, we may request that you provide
                  additional information for the purposes of verifying your
                  identity, and for security or fraud prevention purposes. We
                  will delete such additionally provided information as soon as
                  we finish verifying you.
                </p>
              </div>

              {/* Other Privacy Rights Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Other privacy rights
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li>
                    You may object to the processing of your personal data
                  </li>
                  <li>
                    You may request correction of your personal data if it is
                    incorrect or no longer relevant, or ask to restrict the
                    processing of the data
                  </li>
                  <li>
                    You can designate an authorized agent to make a request
                    under the CCPA on your behalf. We may deny a request from an
                    authorized agent that does not submit proof that they have
                    been validly authorized to act on your behalf in accordance
                    with the CCPA.
                  </li>
                  <li>
                    You may request to opt-out from the selling of your personal
                    information to third parties. Upon receiving a request to
                    opt-out, we will act upon the request as soon as feasibly
                    possible, but no later than 15 days from the date of the
                    request submission.
                  </li>
                </ul>

                <p className="text-gray-700 mb-4">
                  To exercise these rights, you can contact us by email at{" "}
                  <a
                    href="mailto:privacy@infinitymain.com"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@infinitymain.com
                  </a>
                  , or by referring to the contact details at the bottom of this
                  document.
                </p>

                <p className="text-gray-700">
                  If you have a complaint about how we handle your data, we
                  would like to hear from you.
                </p>
              </div>
            </div>
          </div>
          {/* Section 11 */}
          <div className="p-6 bg-white rounded-lg space-y-8">
            {/* Section 10: Updates */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                10. DO WE MAKE UPDATES TO THIS NOTICE?
              </h1>

              <div className="mb-6">
                <p className="text-gray-600 italic mb-4">
                  In Short: Yes, we will update this notice as necessary to stay
                  compliant with relevant laws.
                </p>

                <p className="text-gray-700">
                  We may update this privacy notice from time to time. The
                  updated version will be indicated by an updated "Revised" date
                  and the updated version will be effective as soon as it is
                  accessible. If we make material changes to this privacy
                  notice, we may notify you either by prominently posting a
                  notice of such changes or by directly sending you a
                  notification. We encourage you to review this privacy notice
                  frequently to be informed of how we are protecting your
                  information.
                </p>
              </div>
            </div>

            {/* Section 11: Contact */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h1>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                  <a
                    href="mailto:privacy@infinitymech.com"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@infinitymech.com
                  </a>{" "}
                  or by post to:
                </p>

                <address className="text-gray-700 not-italic">
                  Infinity Mech 6.2-9
                  <br />
                  Retior 7A, Zinka ed Boven b.b.
                  <br />
                  7000G Sanjayro, Bosnia and Herzegovina
                </address>
              </div>
            </div>

            {/* Section 12: Data Management */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </h1>

              <div className="mb-6">
                <p className="text-gray-700">
                  Based on the applicable laws of your country, you may have the
                  right to request access to the personal information we collect
                  from you, change that information, or delete it in some
                  circumstances. To request to review, update, or delete your
                  personal information, please visit:{" "}
                  <a
                    href="https://www.infinitymech.com/contact/"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.infinitymech.com/contact/
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
