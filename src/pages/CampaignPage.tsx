import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Alert,
  Badge,
  Separator,
} from '@amuaapps/ui-library';

export function CampaignPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
    setName('');

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[400px] bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=400&fit=crop"
          alt="Children learning together"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <Badge className="mb-4" variant="secondary">
            Children's Education Initiative
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Every Child Deserves a Bright Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join us in providing quality education and resources to children in
            underserved communities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  Building a better tomorrow through education
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We believe every child, regardless of their circumstances,
                  deserves access to quality education. Our programs provide
                  school supplies, tutoring, and mentorship to children in need.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
                  alt="Children in classroom"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      5,000+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Children Helped
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Schools Supported
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">
                      Graduation Rate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What We Provide</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      School supplies and textbooks for every student
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      After-school tutoring and homework help
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Mentorship programs connecting students with role models
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Technology access and digital literacy training
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stay Connected</CardTitle>
                <CardDescription>
                  Get updates on our programs and success stories
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <Alert className="mb-4" variant="default">
                    <div className="font-medium">Thank you for joining us!</div>
                    <div className="text-sm">
                      We'll keep you updated on our mission to help children
                      succeed.
                    </div>
                  </Alert>
                )}

                <form
                  onSubmit={(e) => {
                    void handleSubmit(e);
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Our Mission'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By signing up, you'll receive updates about our programs and
                    impact. Unsubscribe anytime.
                  </p>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Success Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&h=300&fit=crop"
                  alt="Student success"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "This program changed my life. I never thought I could go to
                  college, but with their support and mentorship, I'm now
                  studying engineering at university."
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  — Maria, Program Graduate
                </p>
              </CardContent>
            </Card>

            <Separator />

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Want to learn more about our programs?
              </p>
              <Button variant="outline">Visit Our Website</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
