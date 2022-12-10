import { supabase } from "./supabase-client";

/**
 * One instance of points being awarded.
 */
export type PointAwardRecord = {
  /**
   * The UID of the person who earned the points for their house.
   */
  awardee: string;

  /**
   * The house that receives the points of the awardee.
   */
  recipientHouse: string;

  /**
   * Can be negative.
   */
  points: number;

  /**
   * When the points were awarded, not necessarily earned.
   */
  timestamp: Date;

  /**
   * A short description of how these points were earned.
   */
  reason: string;
};

const TABLE_NAME_POINT_RECORDS = "PointRecords";

async function getPoints() {
  const { data, error } = await supabase.from(TABLE_NAME_POINT_RECORDS).select("*");
  console.log(data);
  return;
}
