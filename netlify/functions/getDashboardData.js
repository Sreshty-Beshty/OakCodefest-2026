import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://frakealogxcmmcoayisl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYWtlYWxvZ3hjbW1jb2F5aXNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTIwMTM3MywiZXhwIjoyMDg0Nzc3MzczfQ.pF2G9pNXo9gXZNYG0-wHB_qp9o3uwd0fEvqbyxGhjjQ"
);

export const handler = async (event) => {
  try {
    const { team_id } = JSON.parse(event.body);

    if (!team_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing team_id" })
      };
    }

    // Fetch team
    const { data: team, error: teamError } = await supabase
      .from("teams")
      .select("*")
      .eq("team_id", team_id)
      .single();

    if (teamError) throw teamError;

    // Fetch feedback
    const { data: feedback, error: feedbackError } = await supabase
      .from("feedback")
      .select("*")
      .eq("team_id", team_id)
      .order("priority");

    if (feedbackError) throw feedbackError;

    return {
      statusCode: 200,
      body: JSON.stringify({ team, feedback })
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };
  }
};
