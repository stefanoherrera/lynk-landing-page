import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const SubmissionForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for your submission! We'll be in touch soon.");
    }, 1000);
  };

  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Submit Your Startup
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Fill out this form and we'll handle the rest
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Company name
              </label>
              <div className="mt-2.5">
                <Input required id="company" name="company" type="text" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-900">
                Website
              </label>
              <div className="mt-2.5">
                <Input required id="website" name="website" type="url" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2.5">
                <Textarea required id="description" name="description" rows={4} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-lg py-6"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmissionForm;