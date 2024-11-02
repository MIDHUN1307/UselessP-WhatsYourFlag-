import tkinter as tk
from tkinter import ttk, messagebox

class DateAssessmentApp:
    def _init_(self, root):
        self.root = root
        self.root.title("Date Behavior Assessment")
        self.root.geometry("800x600")
        
        self.current_question = 0
        self.total_score = 0
        self.questions = [
            # All 20 questions remain the same as in your original code
            ("How does your date treat service staff?", [
                ("Always polite and respectful", 5),
                ("Generally nice but can be impatient", 3),
                ("Depends on their mood", 1),
                ("Often rude or dismissive", 0)
            ]),
            ("How does your date handle disagreements?", [
            ("Discusses calmly and seeks compromise", 5),
            ("Listens but may get defensive", 3),
            ("Often becomes argumentative", 1),
            ("Gets angry or gives silent treatment", 0)
        ]),
        ("How does your date manage their finances?", [
            ("Budgets well and saves regularly", 5),
            ("Generally responsible with occasional splurges", 3),
            ("Lives paycheck to paycheck", 1),
            ("Often in debt or asks to borrow money", 0)
        ]),
        ("How does your date talk about their ex-partners?", [
            ("Respectfully and rarely", 5),
            ("Neutrally when relevant", 3),
            ("Frequently brings them up", 1),
            ("Always speaks negatively about them", 0)
        ]),
        ("How does your date respond to your successes?", [
            ("Genuinely celebrates and supports you", 5),
            ("Shows happiness but might change subject", 3),
            ("Seems indifferent", 1),
            ("Becomes competitive or dismissive", 0)
        ]),
        ("How does your date handle their responsibilities?", [
            ("Consistently reliable and organized", 5),
            ("Usually manages well with occasional lapses", 3),
            ("Often procrastinates or forgets", 1),
            ("Regularly neglects responsibilities", 0)
        ]),
        ("How does your date respect your boundaries?", [
            ("Always respects and remembers them", 5),
            ("Usually respects but needs reminders", 3),
            ("Often pushes or questions them", 1),
            ("Regularly ignores or dismisses them", 0)
        ]),
        ("How does your date maintain relationships with friends/family?", [
            ("Has strong, healthy relationships", 5),
            ("Has a few close relationships", 3),
            ("Mostly superficial relationships", 1),
            ("Isolated or conflictual relationships", 0)
        ]),
        ("How does your date handle stress?", [
            ("Uses healthy coping mechanisms", 5),
            ("Sometimes gets overwhelmed but manages", 3),
            ("Often becomes irritable or withdrawn", 1),
            ("Takes it out on others or self-destructive", 0)
        ]),
        ("How does your date approach your interests?", [
            ("Shows genuine interest and engagement", 5),
            ("Listens politely but doesn't engage much", 3),
            ("Shows minimal interest", 1),
            ("Dismisses or criticizes them", 0)
        ]),
        ("How does your date communicate about their feelings?", [
            ("Open and honest about emotions", 5),
            ("Shares feelings when prompted", 3),
            ("Rarely discusses emotions", 1),
            ("Dismissive or explosive about emotions", 0)
        ]),
        ("How does your date handle personal growth?", [
            ("Actively seeks self-improvement", 5),
            ("Open to growth when suggested", 3),
            ("Resistant to change", 1),
            ("Refuses to acknowledge areas for improvement", 0)
        ]),
        ("How does your date approach shared decision-making?", [
            ("Values your input and seeks consensus", 5),
            ("Considers your opinion but may overrule", 3),
            ("Makes decisions independently", 1),
            ("Imposes decisions without discussion", 0)
        ]),
        ("How does your date handle apologies?", [
            ("Sincerely apologizes and changes behavior", 5),
            ("Apologizes but may repeat mistake", 3),
            ("Rarely admits fault", 1),
            ("Never apologizes or blames others", 0)
        ]),
        ("How does your date approach intimacy and affection?", [
            ("Respectful and attentive to your needs", 5),
            ("Generally considerate but sometimes misses cues", 3),
            ("Focused mainly on their own needs", 1),
            ("Pushy or disregards your comfort", 0)
        ]),
        ("How does your date handle their health?", [
            ("Proactively maintains physical and mental health", 5),
            ("Generally takes care of themselves", 3),
            ("Neglects health until issues arise", 1),
            ("Engages in unhealthy or risky behaviors", 0)
        ]),
        ("How does your date approach shared expenses?", [
            ("Fair and communicative about finances", 5),
            ("Generally fair but occasional disagreements", 3),
            ("Expects you to cover more than your share", 1),
            ("Manipulative or secretive about money", 0)
        ]),
        ("How does your date handle your relationship with others?", [
            ("Supportive of your other relationships", 5),
            ("Generally okay but occasionally jealous", 3),
            ("Often jealous or possessive", 1),
            ("Tries to isolate you from others", 0)
        ]),
        ("How does your date approach future planning?", [
            ("Enthusiastic about shared future plans", 5),
            ("Open to discussing the future", 3),
            ("Avoids talking about the future", 1),
            ("Dismissive or negative about future plans", 0)
        ]),
        ("How does your date handle differences in opinion?", [
            ("Respects and values different perspectives", 5),
            ("Tolerates differences but may try to convince", 3),
            ("Becomes frustrated with different views", 1),
            ("Belittles or mocks differing opinions", 0)
        ])
    ]
            # ... (all other questions)
        
        
        # Create main frame
        self.main_frame = ttk.Frame(root, padding="20")
        self.main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Question label
        self.question_label = ttk.Label(
            self.main_frame, 
            text="", 
            wraplength=700,
            font=('Arial', 12, 'bold')
        )
        self.question_label.grid(row=0, column=0, pady=20)
        
        # Buttons frame
        self.buttons_frame = ttk.Frame(self.main_frame)
        self.buttons_frame.grid(row=1, column=0, pady=20)
        
        # Style configuration
        style = ttk.Style()
        style.configure('Answer.TButton', padding=10)
        
        self.show_question()
        
    def show_question(self):
        if self.current_question < len(self.questions):
            # Clear previous buttons
            for widget in self.buttons_frame.winfo_children():
                widget.destroy()
                
            question, options = self.questions[self.current_question]
            self.question_label.config(text=f"Question {self.current_question + 1}/20:\n{question}")
            
            # Create buttons for each option
            for i, (option_text, points) in enumerate(options):
                btn = ttk.Button(
                    self.buttons_frame,
                    text=option_text,
                    style='Answer.TButton',
                    command=lambda p=points: self.record_answer(p)
                )
                btn.grid(row=i, column=0, pady=5, padx=20, sticky='ew')
        else:
            self.show_results()
    
    def record_answer(self, points):
        self.total_score += points
        self.current_question += 1
        self.show_question()
    
    def show_results(self):
        # Clear the main frame
        for widget in self.main_frame.winfo_children():
            widget.destroy()
            
        max_score = len(self.questions) * 5
        percentage = (self.total_score / max_score) * 100
        
        # Determine result text
        if percentage >= 80:
            result = "🟢 Strong Green Flag: This person shows very healthy relationship behaviors!"
        elif percentage >= 60:
            result = "🟡 Mild Green Flag: Generally positive traits, but some areas could use attention."
        elif percentage >= 40:
            result = "🟠 Caution: Several concerning behaviors present. Proceed with awareness."
        else:
            result = "🔴 Red Flag: Significant concerning behaviors. Carefully consider this relationship."
        
        # Display results
        ttk.Label(
            self.main_frame,
            text="Assessment Complete!",
            font=('Arial', 16, 'bold')
        ).grid(row=0, column=0, pady=20)
        
        ttk.Label(
            self.main_frame,
            text=f"Score: {self.total_score}/{max_score} ({percentage:.1f}%)",
            font=('Arial', 12)
        ).grid(row=1, column=0, pady=10)
        
        ttk.Label(
            self.main_frame,
            text=result,
            font=('Arial', 12),
            wraplength=600
        ).grid(row=2, column=0, pady=20)
        
        if percentage < 60:
            concern_text = """Areas of Concern:
            - Consider discussing concerning behaviors with your date
            - Trust your instincts about behaviors that make you uncomfortable
            - Consider seeking advice from trusted friends or a relationship counselor"""
            
            ttk.Label(
                self.main_frame,
                text=concern_text,
                font=('Arial', 11),
                wraplength=600
            ).grid(row=3, column=0, pady=20)

def main():
    root = tk.Tk()
    app = DateAssessmentApp(root)
    root.mainloop()

if _name_ == "_main_":
    main()
