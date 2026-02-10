import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service"),
  propertySize: z.string().min(1, "Please select a property size"),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const serviceTypes = [
  "Domestic Cleaning",
  "End of Tenancy",
  "Deep / Spring Clean",
  "Fortnightly Cleaning",
  "Event Cleaning",
  "Decluttering",
  "Reorganisation",
  "General Cleaning",
];

const propertySizes = [
  "Studio / 1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
  "Office / Commercial",
];

export function QuoteSection() {
  const { toast } = useToast();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      propertySize: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: QuoteFormValues) => {
      await apiRequest("POST", "/api/quotes", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you within 24 hours with a personalised quote.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="quote" className="py-20 sm:py-28 bg-background" data-testid="section-quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider" data-testid="text-quote-label">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Request a Free Quote
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Fill in the form and we'll get back to you within 24 hours with a personalised quote. All prices are negotiable and we'll always try to beat your current rate.
            </p>

            <div className="space-y-5">
              <a href="tel:07940551427" className="flex items-center gap-3 group" data-testid="link-phone">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <p className="text-sm font-medium text-foreground">07940 551 427</p>
                </div>
              </a>
              <a href="mailto:admin@pristine-polish.co.uk" className="flex items-center gap-3 group" data-testid="link-email">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email us</p>
                  <p className="text-sm font-medium text-foreground">admin@pristine-polish.co.uk</p>
                </div>
              </a>
              <div className="flex items-center gap-3" data-testid="text-location">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Newcastle upon Tyne / Gateshead</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-primary/5 rounded-md border border-primary/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">10% Off Your First Clean</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Get 10% off any initial deep clean or end of tenancy clean. Mention this offer when you get in touch.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="p-6 sm:p-8">
              {mutation.isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-success-title">
                    Quote Request Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => mutation.reset()} data-testid="button-send-another">
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" type="email" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="07XXX XXX XXX" type="tel" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-type">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="propertySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property Size</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-property-size">
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {propertySizes.map((size) => (
                                  <SelectItem key={size} value={size}>
                                    {size}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your space and any specific requirements..."
                              className="resize-none min-h-[100px]"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={mutation.isPending}
                      data-testid="button-submit-quote"
                    >
                      {mutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Quote Request
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
