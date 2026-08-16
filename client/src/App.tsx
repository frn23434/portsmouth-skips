import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Cosham from "@/pages/cosham";
import Fratton from "@/pages/fratton";
import Hilsea from "@/pages/hilsea";
import Southsea from "@/pages/southsea";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/skip-hire-in-cosham" component={Cosham} />
        <Route path="/skip-hire-in-fratton" component={Fratton} />
        <Route path="/skip-hire-in-hilsea" component={Hilsea} />
        <Route path="/skip-hire-in-southsea" component={Southsea} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  );
}

export default App;
