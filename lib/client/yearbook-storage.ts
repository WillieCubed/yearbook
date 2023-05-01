"use client";

import type { YearbookInfo } from "../yearbook";

const KEY_ADMIN_SELECTED_YEARBOOK = "admin.selected_edition";

/**
 * A custom hook to quickly fetch the currently selected yerabook on the client.
 */
export function useLocalYearbookData() {
  function saveSelection(yearbook: YearbookInfo) {
    // TODO: Error handling
    window.localStorage.setItem(
      KEY_ADMIN_SELECTED_YEARBOOK,
      JSON.stringify(yearbook)
    );
  }
  function loadYearbook(): YearbookInfo | null {
    const yearbookJson = window.localStorage.getItem(
      KEY_ADMIN_SELECTED_YEARBOOK
    );
    if (yearbookJson) {
      // Check if yearbook exists
      return JSON.parse(yearbookJson);
    }
    return null;
  }
  return {
    saveSelection,
    loadYearbook,
  };
}
