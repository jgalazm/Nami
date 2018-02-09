import numpy as np
import matplotlib.pyplot as plt

z = np.loadtxt('z_01_000000.dat')
z = np.reshape(z,(361,361))
plt.pcolormesh(z)
plt.contour(z,[0.0])
plt.show()