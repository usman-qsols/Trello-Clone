import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { forwardRef, useRef, ElementRef, KeyboardEventHandler } from "react";

interface CardFormProps {
  listId: string;
  enableEditing: () => void;
  disableEditing: () => void;
  isEditing: boolean;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, enableEditing, disableEditing, isEditing }, ref) => {
    return (
      <div className="pt-2 px-2">
        <Button
          className="h-auto px-2py-1.5 w-full justify-center text-muted-forground text-sm"
          onClick={enableEditing}
          size="sm"
          variant="ghost"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add a card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
