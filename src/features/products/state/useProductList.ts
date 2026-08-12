"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ProductListState = {
  selectedProductIds: string[];
  chooseProduct: (productId: string) => void;
  clearProducts: () => void;
};

// 제품 필터 선택값을 한 탭에서 기억하고 필터 화면과 결과 화면에 제공한다.
export const useProductList = create<ProductListState>()(
  persist(
    (set) => ({
      selectedProductIds: [],
      chooseProduct: (productId) =>
        set((state) => ({
          selectedProductIds: state.selectedProductIds.includes(productId)
            ? state.selectedProductIds.filter((id) => id !== productId)
            : [...state.selectedProductIds, productId],
        })),
      clearProducts: () => set({ selectedProductIds: [] }),
    }),
    {
      name: "gk-product-list",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ selectedProductIds: state.selectedProductIds }),
    },
  ),
);
