import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-sl-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-sl-obsidian/80 relative overflow-hidden border-sl-iron-600/30 rounded-2xl">
          <div className="p-8 lg:p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-sl-pearl-100 to-sl-fog-300">
                Ready to Transform Your Business?
              </h1>
              
              <p className="text-lg text-sl-fog-300 leading-relaxed">
                Let's discuss how our AI solutions can deliver measurable results for your business in just 30 days.
              </p>

              <div className="pt-8">
                <button 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-sl-auric-700/10 border border-sl-auric-700/30 rounded-lg backdrop-blur-sm hover:bg-sl-auric-700/20 transition-colors cursor-pointer text-lg"
                  onClick={() => {
                    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bBsRd3WZyMmpXQEhUx3sRZfPYssFvYKMCZizHxcXvjZqaUXqZbKXGDgeWiPYwu7e0OULB7mnA?gv=true', '_blank');
                  }}
                >
                  <span className="w-2 h-2 bg-sl-auric-700 rounded-full animate-pulse"></span>
                  <span className="text-sl-auric-700 font-medium">Schedule Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;