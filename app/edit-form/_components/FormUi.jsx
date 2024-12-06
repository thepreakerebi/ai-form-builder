import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function FormUi({ formData }) {
  // Provide default values to avoid undefined issues
  const { formName = "Form", formSubheading = "", formFields = [] } = formData || {};

  return (
    <section className="border p-5">
      <h2 className="font-bold text-center text-2xl">{formName}</h2>
      <h2 className="text-md text-gray-500 text-center">{formSubheading}</h2>

      {formFields.length > 0 ? (
        <form className="flex mt-5 flex-col space-y-5">
          {formFields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <Label htmlFor={field.fieldName} className="font-medium mb-2">
                {field.fieldLabel}
              </Label>

              {field.fieldType === "textarea" && (
                <Textarea
                  id={field.fieldName}
                  name={field.fieldName}
                  placeholder={field.placeholder}
                  required={field.isRequired}
                  className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}

              {field.fieldType === "select" && (
                <Select name={field.fieldName} required={field.isRequired}>
                  <SelectTrigger>
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((option, idx) => (
                      <SelectItem key={idx} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {field.fieldType === "radio" && (
                <RadioGroup name={field.fieldName} className="space-y-2">
                  {field.options?.map((option, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <RadioGroupItem id={`${field.fieldName}-${idx}`} value={option.value} />
                      <Label htmlFor={`${field.fieldName}-${idx}`}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {field.fieldType === "checkbox" && (
                <div className="flex items-center space-x-2">
                  <Checkbox id={field.fieldName} name={field.fieldName} required={field.isRequired} />
                  <Label htmlFor={field.fieldName}>{field.fieldLabel}</Label>
                </div>
              )}

              {["text", "email", "tel", "number", "password", "date", "file"].includes(field.fieldType) && (
                <Input
                  type={field.fieldType}
                  id={field.fieldName}
                  placeholder={field.placeholder}
                  name={field.fieldName}
                  required={field.isRequired}
                />
              )}
            </div>
          ))}
        </form>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </section>
  );
}
