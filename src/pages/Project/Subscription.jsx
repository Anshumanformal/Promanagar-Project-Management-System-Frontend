
import { useSelector } from 'react-redux';
import SubscriptionCard from './SubscriptionCard';

const paidPlan = [
  "Add unlimited projects",
  "Access to live chat",
  "Add unlimited team members",
  "Advanced reporting",
  "Priority support",
  "Customization options",
  "Integration support",
  "Advanced security",
  "Training and resources",
  "Access control",
  "Custom workflows"
]

const annualPlan = [
  "Add unlimited projects",
  "Access to live chat",
  "Add unlimited team members",
  "Advanced reporting",
  "Priority support",
  "Everything which monthly plan has"
]

const freePlan = [
  "Add only 3 projects",
  "Basic task management",
  "Project collaboration",
  "Basic Reporting",
  "Email notifications",
  "Basic access control"
]

const Subscription = () => {

  const { subscription } = useSelector(store => store)

  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard 
        data={{
          planName: "Free",
          features: freePlan,
          planType: "FREE", 
          price: "0", 
          buttonName: subscription.userSubscription?.planType == "FREE" ? "Current Plan" : "Get started"
        }} />
        <SubscriptionCard 
        data={{
          planName: "Monthly Paid plan",
          features: paidPlan,
          planType: "MONTHLY", 
          price: "799", 
          buttonName: subscription.userSubscription?.planType == "MONTHLY" ? "Current Plan" : "Get started"
        }}
        />
        <SubscriptionCard 
        data={{
          planName: "Annual Paid plan",
          features: annualPlan,
          planType: "ANNUALLY", 
          price: "6711", 
          buttonName: subscription.userSubscription?.planType == "ANNUALLY" ? "Current Plan" : "Get started"
        }}
        />
      </div>
    </div>
  )
}

export default Subscription