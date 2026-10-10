import { supabase } from "../config/supabaseClient.js";

export const MemberModel = {
  async getAll() {
    const { data, error } = await supabase.from("members").select("*");
    if (error) throw error;
    return data;
  },
  async create(payload) {
    const { data, error } = await supabase.from("members").insert([payload]).select().single();
    if (error) throw error;
    return data;
  }
};