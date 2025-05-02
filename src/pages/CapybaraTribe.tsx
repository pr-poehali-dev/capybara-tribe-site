import CapybaraTribeHero from "@/components/CapybaraTribeHero";
import CapybaraTribeInfo from "@/components/CapybaraTribeInfo";
import CapybaraTribeMembers from "@/components/CapybaraTribeMembers";
import CapybaraTribeFooter from "@/components/CapybaraTribeFooter";

export default function CapybaraTribe() {
  return (
    <div className="min-h-screen bg-amber-50">
      <CapybaraTribeHero />
      <CapybaraTribeInfo />
      <CapybaraTribeMembers />
      <CapybaraTribeFooter />
    </div>
  );
}
