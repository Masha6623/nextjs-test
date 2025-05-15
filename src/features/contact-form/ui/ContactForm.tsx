"use client";

import {
  TextField,
  TextFieldProps,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import styled from "styled-components";
import { type ContactFormData } from "../model/useContactForm";
import { alpha } from "@mui/material/styles";

const StyledTextField = styled(TextField)<TextFieldProps>`
  && {
    margin-bottom: 1.5rem;
    width: 100%;

    .MuiOutlinedInput-root {
      transition: all 0.3s ease-in-out;
      .MuiOutlinedInput-notchedOutline {
        transition: border-color 0.3s ease-in-out, border-width 0.3s ease-in-out;
        border-color: ${(props) => props.theme.palette.divider};
      }
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) =>
          alpha(props.theme.palette.common.white, 0.23)};
      }
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) => props.theme.palette.primary.main};
        border-width: 2px;
        box-shadow: 0 0 0 3px
          ${(props) => alpha(props.theme.palette.primary.main, 0.25)};
      }
    }
    .MuiInputLabel-root {
      transition: all 0.3s ease-in-out;
      &.Mui-focused {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`;

const FormWrapper = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows[2]};
`;

interface ContactFormProps {
  formData: ContactFormData;
  isLoading: boolean;
  error: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  isLoading,
  error,
  handleChange,
  handleSubmit,
}) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <StyledTextField
        required
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        disabled={isLoading}
      />
      <StyledTextField
        required
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        disabled={isLoading}
      />
      <StyledTextField
        required
        label="Message"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        variant="outlined"
        disabled={isLoading}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disabled={isLoading}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Send Message"
        )}
      </Button>
    </FormWrapper>
  );
};
