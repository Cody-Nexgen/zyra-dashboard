// zyra_dashboard_ui.jsx
// A clean, professional Zyra Dashboard homepage using Next.js + Tailwind CSS

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white p-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Zyra Dashboard</h1>
        <Button variant="ghost" className="text-zinc-400 hover:text-white">
          <Settings className="mr-2 h-5 w-5" /> Settings
        </Button>
      </header>

      <Separator className="mb-6 bg-zinc-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Welcome Module */}
        <Card className="bg-zinc-800 border border-zinc-700 hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Welcome Module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400 mb-4">
              Automatically greet new members with a personalized welcome message and optional image.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-300">Enabled</span>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* AI Chat Module Placeholder */}
        <Card className="bg-zinc-800 border border-zinc-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🤖 AI Chat (Coming Soon)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400 mb-4">
              Let your server chat with a custom AI personality powered by Groq.
            </p>
            <Button disabled variant="secondary">
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        {/* More Modules... */}
        {/* Add more cards here for each module */}
      </div>
    </div>
  );
}
