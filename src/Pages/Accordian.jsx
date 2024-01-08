/* eslint-disable react-refresh/only-export-components */
import { MYACCORDIAN } from "./myAccordian";

const Accordian = () => {
  const Question = [
    {
      id: 1,
      question: `Q. How do I place an order for eyewear on EyeCare.com? `,
      answer: `A. Placing an order is easy. Simply browse our collection, select your desired eyewear, and add it to your cart. Proceed to checkout, provide your shipping and payment information, and confirm your order. You'll receive an order confirmation email once your purchase is complete.`,
    },
    {
      id: 2,
      question: `Q. How do I know if a particular style of eyeglasses will suit my face shape? `,
      answer: `A. Placing an order is easy. Simply browse our collection, select your desired eyewear, and add it to your cart. Proceed to checkout, provide your shipping and payment information, and confirm your order. You'll receive an order confirmation email once your purchase is complete.`,
    },
    {
      id: 3,
      question: `Q. Can I order prescription eyeglasses on EyeCare.com?`,
      answer: `A. Placing an order is easy. Simply browse our collection, select your desired eyewear, and add it to your cart. Proceed to checkout, provide your shipping and payment information, and confirm your order. You'll receive an order confirmation email once your purchase is complete.`,
    },
    {
      id: 4,
      question: `Q. How do I know if a particular style of eyeglasses will suit my face shape? `,
      answer: `A. Placing an order is easy. Simply browse our collection, select your desired eyewear, and add it to your cart. Proceed to checkout, provide your shipping and payment information, and confirm your order. You'll receive an order confirmation email once your purchase is complete.`,
    },
    {
      id: 5,
      question: `Q. What types of lenses do you offer? `,
      answer: `A. Placing an order is easy. Simply browse our collection, select your desired eyewear, and add it to your cart. Proceed to checkout, provide your shipping and payment information, and confirm your order. You'll receive an order confirmation email once your purchase is complete.`,
    },
    {
      id: 6,
      question: ` Q . Do you offer returns and exchanges?`,
      answer: `A. Placing an order is easy. Simply browse our collection, select your desired eyewear, and add it to your cart. Proceed to checkout, provide your shipping and payment information, and confirm your order. You'll receive an order confirmation email once your purchase is complete.`,
    },
  ];
  return (
    <div className="  h-auto ">
      {Question.map((data) => (
        <MYACCORDIAN
          key={data.id}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </div>
  );
};

export default Accordian;
