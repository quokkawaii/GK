"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 제품 목록에서 탭 단위로 유지할 선택 상태와 변경 함수다.
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
