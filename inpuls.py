# -*- coding: utf-8 -*-

from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput

class MainApp(App):

	def build(self):
		layout= BoxLayout(orientation = 'vertical')
		self.txt = TextInput(text='', multiline=False)
		layout.add_widget(self.txt)
		self.lbl=Label(text='')
		layout.add_widget(self.lbl)
		self.btn=Button (text ='Добавить импульсивности!')
		self.btn.bind(on_press = self.pres)
		layout.add_widget(self.btn)
		return layout
		
	def pres(self, btn):
		self.lbl.text = self.txt.text + '! Сука, блять!!!'

if __name__ == '__main__':
	root = MainApp()
	root.run()