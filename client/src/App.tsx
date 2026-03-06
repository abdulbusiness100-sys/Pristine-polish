import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import GalleryPage from "@/pages/gallery";

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gallery" component={GalleryPage} />
        </Switch>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
