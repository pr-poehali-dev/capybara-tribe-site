import CapybaraTribeHero from "@/components/CapybaraTribeHero";
import CapybaraTribeInfo from "@/components/CapybaraTribeInfo";
import CapybaraTribeMembers from "@/components/CapybaraTribeMembers";
import CapybaraTribeTraditions from "@/components/CapybaraTribeTraditions";
import CapybaraTribeGallery from "@/components/CapybaraTribeGallery";
import CapybaraTribeApprentices from "@/components/CapybaraTribeApprentices";
import CapybaraTribeFooter from "@/components/CapybaraTribeFooter";

export default function CapybaraTribe() {
  return (
    <div className="min-h-screen bg-amber-50">
      <CapybaraTribeHero />
      <CapybaraTribeInfo />
      <CapybaraTribeTraditions />
      <CapybaraTribeMembers />
      <CapybaraTribeGallery />
      <CapybaraTribeApprentices />
      <CapybaraTribeFooter />
    </div>
  );
}
