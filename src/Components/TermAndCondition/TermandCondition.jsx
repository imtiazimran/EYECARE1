/* eslint-disable react-refresh/only-export-components */
import "./Pages.css";
// import ShopNavigation from "../Components/shopnv";
// import ShopNavigation from "../shopnv";
import ShopNavigation from "../Shopnav/shopnv";
// import { Footer } from "../Components/footer";
// import Footer from "../Components/footer";
// import Footer from "../footer";
import Footer from "../Footer/footer";
import Accordian from "./Accordian";
// import Navbar from "../Components/Navbar";
// import Navbar from "../Navbar";
import Navbar from "../Header/Navbar";

const TERMANDCONDITION = () => {
  return (
    <>
      <div>
        <Navbar />
        <ShopNavigation />
        <div>
          <h1 className=" text-center termsAndCondition">
            Terms & Conditions{" "}
          </h1>
          <ol className="   m-[3vw]">
            <li className="  mt-[3vh]">
              {" "}
              <b> {`1. Acceptance of Terms : `} </b>
              {`By accessing or using the EyeCare website, mobile application, or services (hereinafter referred to as "the Service"), you agree to comply with and be bound by these Terms and Conditions.`}
            </li>
            <li className=" mt-[3vh]">
              <b> {`2. Privacy Policy: `} </b>
              {`Our Privacy Policy, available separately on our app &website, outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in the Privacy Policy.`}
            </li>
            <li className=" mt-[3vh]">
              <b> {`3.Order Placement:`} </b>
              {`  All orders placed through the EyeCare platform are subject to acceptance and availability. EyeCare reserves the right to refuse, cancel, or limit any order without liability. You agree to provide accurate and complete information when placing an order.`}
            </li>
            <li className="mt-[3vh]">
              <b> {` 4. Pricing and Payments:`} </b>
              {`
           Prices for eyewear products and services are subject to change without notice. Payment is required at the time of purchase. We accept various payment methods, which are specified on our platform. Any additional fees, such as taxes or shipping charges, will be clearly indicated during the checkout process`}
            </li>
            <li className="mt-[3vh]">
              <b> {`5. Shipping and Delivery:`} </b>
              {`  We make every effort to ensure prompt delivery; however, delivery times may vary based on location, product availability, and other factors. Risk of loss and title for items purchased pass to you upon delivery to the carrier.`}
            </li>
            <li className="mt-[3vh]">
              <b> {` 6.Returns and Exchanges:`} </b>
              {` Please refer to our Returns and Exchanges Policy, available on our website, for information on returns, exchanges, and warranty claims.`}
            </li>
            <li className="mt-[3vh]">
              <b> {`  7.Intellectual Property:`} </b>
              {` All content and materials on the EyeCare platform, including but not limited to logos, text, graphics, images, and software, are protected by intellectual property laws and are the property of EyeCare or its licensors`}
            </li>
          </ol>
        </div>
        <hr className=" bg-black h-1  mt-[3vh]" />
        <div>
          <h1 className="  text-center termsAndCondition mt-[5vh]">
            {" "}
            Privacy Policy{" "}
          </h1>
          <ol className=" m-[3vw]">
            <li className="mt-[3vh]">
              {" "}
              <b> {`1. Information Collection: `} </b>
              {` We collect necessary information during registration and usage to provide our services effectively. This may include personal details, academic information, and usage data.`}
            </li>
            <li className="mt-[3vh]">
              <b> {`2.Usage of Information: `} </b>
              {` Your data is used to personalize your learning experience, offer relevant content, and improve our services. We do not share your personal information with third parties without your consent.`}
            </li>
            <li className="mt-[3vh]">
              <b> {`3 .Data Security:`} </b>
              {` We implement industry-standard security measures to protect your data from unauthorized access or misuse.`}
            </li>
            <li className="mt-[3vh]">
              <b> {` 4.Cookies and Tracking:`} </b>
              {`
          Cookies and Tracking: We may use cookies and tracking technologies to enhance your experience and gather non-personal data for analysis.`}
            </li>
            <li className="mt-[3vh]">
              <b> {`5.  Communication:`} </b>
              {`  Communication: We may contact you for updates, offers, and relevant information. You can opt out of such communication at any time. `}
            </li>
            <li className="mt-[3vh]">
              <b> {` 6.Third-Party Links:`} </b>
              {`  Third-Party Links: Our app may contain links to third-party websites. We are not responsible for their privacy practices.`}
            </li>
            <li className="mt-[3vh]">
              <b> {`  7.Children's Privacy:`} </b>
              {`Children's Privacy: Our services are intended for users above the age of 13. We do not knowingly collect information from children without parental consent.`}
            </li>
            <li className="mt-[3vh]">
              <b> {` 8. Changes to Privacy Policy:`} </b>
              {`Changes to Privacy Policy: We may update this policy periodically. Continued use of our app signifies your acceptance of these changes.`}
            </li>
          </ol>
        </div>
        <div>
          <hr className=" bg-black h-1  mt-[3vh]" />
          <h1 className=" text-center termsAndCondition">FAQ</h1>
          <Accordian />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default TERMANDCONDITION;
