"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import FormSection from "./FormSection";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormSubmit from "./FormSubmit";
import { supabase } from "@/app/lib/supabaseClient";

// Types for form data
interface FormData {
  nombres_apellidos: string;
  email: string;
  celular: string;
  edad: string;
  nivel_ingles: string;
  programa_interes: string;
  otro_especificar: string;
}

interface FormErrors {
  [key: string]: string;
}

// Program options for the dropdown
const programOptions = [
  { value: "Work and Travel", label: "Work and Travel" },
  { value: "Au Pair", label: "Au Pair" },
  { value: "Asesoría en visas", label: "Asesoría en visas" },
  { value: "Camp Counselor", label: "Camp Counselor" },
  { value: "Intern and Trainee", label: "Intern and Trainee" },
  { value: "Idiomas", label: "Idiomas" },
  { value: "Migrar a Canadá", label: "Migrar a Canadá" },
  { value: "Otro", label: "Otro" },
];

export default function FormularioPage() {
  const [formData, setFormData] = useState<FormData>({
    nombres_apellidos: "",
    email: "",
    celular: "",
    edad: "",
    nivel_ingles: "",
    programa_interes: "",
    otro_especificar: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields
    if (!formData.nombres_apellidos.trim()) {
      newErrors.nombres_apellidos = "Nombres y apellidos son requeridos";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email no válido";
    }

    if (!formData.edad.trim()) {
      newErrors.edad = "Edad es requerida";
    } else {
      const age = parseInt(formData.edad);
      if (isNaN(age) || age < 15 || age > 99) {
        newErrors.edad = "Edad debe estar entre 15 y 99 años";
      }
    }

    if (!formData.nivel_ingles.trim()) {
      newErrors.nivel_ingles = "Nivel de inglés es requerido";
    } else {
      const level = parseInt(formData.nivel_ingles);
      if (isNaN(level) || level < 0 || level > 10) {
        newErrors.nivel_ingles = "Nivel debe estar entre 0 y 10";
      }
    }

    if (!formData.programa_interes) {
      newErrors.programa_interes = "Programa de interés es requerido";
    }

    // Conditional validation for "Otro"
    if (formData.programa_interes === "Otro" && !formData.otro_especificar.trim()) {
      newErrors.otro_especificar = "Por favor especifica el programa";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      // Prepare data for Supabase
      const submissionData = {
        nombres_apellidos: formData.nombres_apellidos.trim(),
        email: formData.email.trim().toLowerCase(),
        celular: formData.celular.trim() || null,
        edad: parseInt(formData.edad),
        nivel_ingles: parseInt(formData.nivel_ingles),
        programa_interes: formData.programa_interes,
        otro_especificar: formData.programa_interes === "Otro" ? formData.otro_especificar.trim() : null,
        created_at: new Date().toISOString(),
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from("ice_form_submissions")
        .insert([submissionData])
        .select();

      if (error) {
        throw error;
      }

      // Success
      console.log("Form submitted successfully:", data);
      setSubmitStatus("success");
      setSubmitMessage("¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.");
      
      // Reset form
      setFormData({
        nombres_apellidos: "",
        email: "",
        celular: "",
        edad: "",
        nivel_ingles: "",
        programa_interes: "",
        otro_especificar: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setSubmitMessage("Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const showOtroField = formData.programa_interes === "Otro";

  return (
    <IceLayoutWrapper>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200/20 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FormSection
            title="Comienza tu Aventura Internacional"
            subtitle="Completa el formulario y descubre las oportunidades que ICE Colombia tiene para ti. Nuestro equipo te contactará para brindarte asesoría personalizada."
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4 rounded-xl flex items-center space-x-3 ${
                      submitStatus === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-600" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 text-red-600" />
                    )}
                    <p className="font-medium">{submitMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Nombres y Apellidos"
                  name="nombres_apellidos"
                  type="text"
                  placeholder="Ej: María Fernanda García López"
                  value={formData.nombres_apellidos}
                  onChange={handleInputChange}
                  error={errors.nombres_apellidos}
                  required
                />

                <FormInput
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  placeholder="Ej: maria.garcia@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  required
                />

                <FormInput
                  label="Celular"
                  name="celular"
                  type="tel"
                  placeholder="Ej: +57 300 123 4567"
                  value={formData.celular}
                  onChange={handleInputChange}
                  error={errors.celular}
                />

                <FormInput
                  label="Edad"
                  name="edad"
                  type="number"
                  placeholder="Ej: 22"
                  min={15}
                  max={99}
                  value={formData.edad}
                  onChange={handleInputChange}
                  error={errors.edad}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Nivel de Inglés"
                  name="nivel_ingles"
                  type="number"
                  placeholder="Del 0 al 10"
                  min={0}
                  max={10}
                  value={formData.nivel_ingles}
                  onChange={handleInputChange}
                  error={errors.nivel_ingles}
                  required
                />

                <FormSelect
                  label="Programa de Interés"
                  name="programa_interes"
                  options={programOptions}
                  value={formData.programa_interes}
                  onChange={handleInputChange}
                  error={errors.programa_interes}
                  placeholder="Selecciona un programa"
                  required
                />
              </div>

              {/* Conditional "Otro" field */}
              <AnimatePresence>
                {showOtroField && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormInput
                      label="Especifica el programa"
                      name="otro_especificar"
                      type="text"
                      placeholder="Describe el programa que te interesa"
                      value={formData.otro_especificar}
                      onChange={handleInputChange}
                      error={errors.otro_especificar}
                      required
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-4">
                <FormSubmit
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  Enviar Solicitud
                </FormSubmit>
              </div>

              {/* Privacy Notice */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-sm text-gray-600 bg-gray-50 p-4 rounded-xl"
              >
                <p>
                  Al enviar este formulario, aceptas que ICE Colombia pueda contactarte 
                  con información sobre nuestros programas. Tus datos están seguros y 
                  no serán compartidos con terceros.
                </p>
              </motion.div>
            </form>
          </FormSection>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}