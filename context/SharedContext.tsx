import { MemoirItem, MemoirWithOffset } from "@/constants/types";
import { createContext, FC, useContext, useState } from "react";

interface SharedContextType {
  selectedMemoirItem: MemoirItem | null;
  setSelectedMemoirItem: React.Dispatch<
    React.SetStateAction<MemoirItem | null>
  >;

  isSelectionEnabled: boolean;
  setIsSelectionEnabled: React.Dispatch<React.SetStateAction<boolean>>;

  deleteMemoir: boolean;
  setDeleteMemoir: React.Dispatch<React.SetStateAction<boolean>>;

  selectedMemoir: MemoirWithOffset[] | null;
  setSelectedMemoir: React.Dispatch<
    React.SetStateAction<MemoirWithOffset[] | null>
  >;

  toggleMemoirSelection: (memoir: MemoirWithOffset) => void;
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
  const [deleteMemoir, setDeleteMemoir] = useState(false);
  const [selectedMemoir, setSelectedMemoir] = useState<
    MemoirWithOffset[] | null
  >(null);

  const toggleMemoirSelection = (memoir: MemoirWithOffset) => {
    const current = selectedMemoir ?? []; // fallback to empty array if null
    const exists = current.findIndex((item) => item.id === memoir.id);

    if (exists !== -1) {
      // Deselect if already selected
      setSelectedMemoir(current.filter((item) => item.id !== memoir.id));
    } else {
      // Select new item
      setSelectedMemoir([...current, memoir]);
    }
    console.log(selectedMemoir);
  };

  return (
    <SharedStateContext.Provider
      value={{
        selectedMemoirItem,
        setSelectedMemoirItem,
        isSelectionEnabled,
        setIsSelectionEnabled,
        deleteMemoir,
        setDeleteMemoir,
        selectedMemoir,
        setSelectedMemoir,
        toggleMemoirSelection,
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
