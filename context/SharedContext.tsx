import { MemoirItem } from "@/app/(deleteAnimation)/Components/AllMemoirs";
import { createContext, FC, useContext, useState } from "react";

interface SharedContextType {
  selectedMemoirItem: MemoirItem | null;
  setSelectedMemoirItem: (item: MemoirItem) => void;
  isSelectionEnabled: boolean;
  setIsSelectionEnabled: (item: boolean) => void;
}

const SharedStateContext = createContext<SharedContextType | undefined>(
  undefined
);

export const SharedStateProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedMemoirItem, setSelectedMemoirItem] =
    useState<MemoirItem | null>(null);

  const [isSelectionEnabled, setIsSelectionEnabled] = useState(false);

  return (
    <SharedStateContext.Provider
      value={{
        selectedMemoirItem,
        setSelectedMemoirItem,
        isSelectionEnabled,
        setIsSelectionEnabled,
      }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);

  if (context === undefined) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }

  return context;
};
